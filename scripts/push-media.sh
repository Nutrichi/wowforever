#!/usr/bin/env bash
# Beelden naar de repo wowforever-media, die op media.wowforever.be staat
# (Nutri, 10 november 2026). Draait in de workflow na `npm run build`, dat met
# MEDIA_URL de beelden al in media-out heeft gezet (scripts/split-media.mjs).
#
# 1. Vergelijk media-out/manifest.txt met het manifest dat live staat.
# 2. Niets nieuw of gewijzigd: klaar, er wordt niets gepusht.
# 3. Anders: kloon de media-repo, kopieer alleen de nieuwe en gewijzigde
#    beelden erin (er wordt nooit iets gewist, oude posts blijven werken),
#    werk het manifest bij, commit als Nutrichi en push.
# 4. Wacht tot het nieuwe manifest live staat. Een Pages-deploy is in één keer,
#    dus dan staan ook de beelden er. Lukt dat niet binnen 20 minuten, dan
#    faalt deze stap en gaat de hoofdsite niet live: liever even de oude site
#    dan pagina's met kapotte beelden. De volgende run probeert het opnieuw.
#
# Nodig: secret MEDIA_DEPLOY_KEY (schrijfsleutel van wowforever-media).
set -euo pipefail

OUT=${MEDIA_OUT:-media-out}
MEDIA=${MEDIA_URL:-https://media.wowforever.be}
REPO=git@github.com:Nutrichi/wowforever-media.git
WORK=$(mktemp -d)

curl -fsS "$MEDIA/manifest.txt?run=${GITHUB_RUN_ID:-$RANDOM}" -o "$WORK/live.txt" || : > "$WORK/live.txt"
sort "$OUT/manifest.txt" > "$WORK/want.txt"
sort "$WORK/live.txt" > "$WORK/live.sorted"
comm -23 "$WORK/want.txt" "$WORK/live.sorted" > "$WORK/new.txt"

if [ ! -s "$WORK/new.txt" ]; then
  echo "push-media: alle $(wc -l < "$WORK/want.txt") beelden staan al live"
  exit 0
fi
echo "push-media: $(wc -l < "$WORK/new.txt") nieuwe of gewijzigde beelden"

mkdir -p ~/.ssh
# De sleutel netjes terugzetten, ook als hij bij het plakken (bv. op een
# iPhone) op één regel belandde, \r of spaties kreeg, of als Slimme interpunctie
# de streepjes in lange streepjes veranderde: alleen de base64 tussen kop en
# voet blijft over, opnieuw in regels van 70 tekens.
body=$(printf '%s' "$MEDIA_DEPLOY_KEY" | sed -e 's/BEGIN OPENSSH PRIVATE KEY//g' -e 's/END OPENSSH PRIVATE KEY//g' \
  | LC_ALL=C tr -cd 'A-Za-z0-9+/=')
{ echo '-----BEGIN OPENSSH PRIVATE KEY-----'; printf '%s' "$body" | fold -w 70; echo; echo '-----END OPENSSH PRIVATE KEY-----'; } > ~/.ssh/media_key
chmod 600 ~/.ssh/media_key
# Controle zonder iets geheims te tonen: lengte (hoort 344 te zijn) en de
# vingerafdruk van de publieke sleutel.
echo "push-media: sleutel ${#body} tekens, $(ssh-keygen -y -f ~/.ssh/media_key 2>/dev/null | ssh-keygen -lf - 2>/dev/null || echo 'onleesbaar')"
ssh-keyscan github.com >> ~/.ssh/known_hosts 2>/dev/null
export GIT_SSH_COMMAND="ssh -i $HOME/.ssh/media_key -o IdentitiesOnly=yes"

git clone --depth 1 "$REPO" "$WORK/repo"
cut -d' ' -f1 "$WORK/new.txt" | while read -r p; do
  mkdir -p "$WORK/repo/$(dirname "$p")"
  cp "$OUT/$p" "$WORK/repo/$p"
done

# Manifest: de oude regels, met de nieuwe erover (per pad wint de nieuwe sha).
cat "$WORK/repo/manifest.txt" "$WORK/new.txt" 2>/dev/null \
  | awk '{ sha[$1] = $2 } END { for (p in sha) print p, sha[p] }' | sort > "$WORK/merged.txt"
cp "$WORK/merged.txt" "$WORK/repo/manifest.txt"

cd "$WORK/repo"
git config user.name Nutrichi
git config user.email Nutrichi@users.noreply.github.com
git add -A
git commit -q -m "Beelden van ${GITHUB_SHA:-lokaal}"
git push -q origin HEAD:main
echo "push-media: gepusht, wachten tot media.wowforever.be ze toont"

last=$(tail -1 "$WORK/new.txt")
for i in $(seq 1 80); do
  # Eerst naar een bestand: `curl | grep -q` faalt onder pipefail zodra grep
  # vroeg stopt (curl krijgt dan SIGPIPE), ook als de regel er wel staat.
  curl -fsS "$MEDIA/manifest.txt?run=${GITHUB_RUN_ID:-x}-$i" -o "$WORK/check.txt" || : > "$WORK/check.txt"
  if grep -qxF "$last" "$WORK/check.txt"; then
    echo "push-media: live na $((i * 15)) s"
    exit 0
  fi
  sleep 15
done
echo "push-media: media.wowforever.be toont de nieuwe beelden na 20 minuten nog niet" >&2
exit 1
