---
title: "Un addon avvisa i Warlocks del summon-and-kick"
description: "The Summoners Union conta i tuoi Ritual of Summoning e ti fa segnalare un leader che ti caccia entro 20 minuti da un'evocazione. Gli altri utenti ricevono poi un avviso quando quel giocatore li invita. Funziona in WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: it
manual: true
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "Un Troll Warlock che lancia con fuoco verde e viola in entrambe le mani, accanto a un Imp, in una sala rossa e viola con ossa e teschi appesi"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Ogni Warlock lo conosce. Dieci minuti alla meeting stone, Soul Shards bruciati per <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a>, e appena arriva l’ultimo giocatore vieni cacciato dal gruppo. The Summoners Union, un nuovo addon di OrganicCarrots, tiene una lista dei leader che lo fanno e ti avvisa quando ti invitano di nuovo. Funziona in World of Warcraft: Forever.

## Come funziona

1. **Conta le tue evocazioni.** Ogni Ritual of Summoning che finisci in gruppo viene contato. Vieni cacciato da quel gruppo, o il gruppo si scioglie, entro 20 minuti dalla tua ultima evocazione? Allora l’addon chiede se vuoi segnalare il leader, o il leader e la sua gilda. Andartene da solo non conta mai, e nulla viene segnalato senza il tuo clic.
2. **Ti avvisa.** Compare un avviso da raid quando un giocatore segnalato ti invita o entra nel tuo gruppo, con il suo storico: per esempio segnalato 6 volte da 4 utenti. Puoi far rifiutare in automatico gli inviti dei giocatori segnalati. È disattivato di default.
3. **Segna i giocatori.** Un giocatore segnalato riceve una riga rossa nel tooltip. La vedi solo tu.
4. **Condivide la lista.** Le nuove segnalazioni partono come messaggi nascosti dell’addon verso gli altri utenti della tua gilda e del tuo gruppo. Un canale nascosto per tutti gli utenti del tuo reame è facoltativo: `/su share channel on`.

Anche le altre classi possono segnalare un giocatore, con `/su flag` o con un clic destro su un ritratto o un riquadro del gruppo. Ogni segnalazione mostra la classe di chi l’ha fatta, così distingui un Warlock cacciato da qualcuno che segnala a mano.

## Contro le segnalazioni false

- Una segnalazione viene condivisa solo se negli ultimi 7 giorni eri in gruppo con quel giocatore, o con un membro di quella gilda. Il resto rimane una nota privata.
- Chi fa più di 10 nuove segnalazioni in un giorno viene ignorato.
- Le segnalazioni degli altri ti avvisano solo quando due fonti diverse segnalano lo stesso giocatore. Si cambia con `/su set threshold`.
- `/su distrust <nome>` ignora tutto quello che un utente segnala o passa.
- Le segnalazioni degli altri smettono di contare dopo 180 giorni.

L’addon non scrive mai nomi in un canale pubblico, non sussurra mai a un giocatore segnalato e non caccia né segnala nessuno. Nessuno scopre di essere stato segnalato.

## Comandi

| Comando | Cosa fa |
|---|---|
| **/su** | Apre la lista |
| **/su options** | Apre le opzioni |
| **/su flag** | Segnala un giocatore, il tuo bersaglio se non dai un nome |
| **/su flagguild** | Segnala una gilda |
| **/su check** | Cerca un giocatore |
| **/su test** | Mostra la domanda dopo un kick, senza segnalare nessuno |

L’addon è gratuito su [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) e funziona anche in Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic e nel WoW moderno. Il codice è aperto su GitHub. Di più sulla classe nella nostra [guida al Warlock](/it/classes/warlock/).
