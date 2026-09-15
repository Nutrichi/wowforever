/*
 * Alle UI-teksten, per taal. Nooit een label hard in een template
 * (PROJECT_SPEC.md §8).
 *
 * Zes talen. Engels is de brontaal en de terugval: ontbreekt een sleutel in een
 * taal, dan komt de Engelse tekst. Alles met de hand geschreven, zonder
 * vertaalscript (SCHRIJFSTIJL.md §11).
 *
 * Namen uit het spel en de namen van de era's blijven in elke taal Engels
 * (SCHRIJFSTIJL.md §6). Geen gedachtestreepjes, in geen enkele taal.
 */

export const locales = ['en', 'nl', 'fr', 'es', 'it', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Wat er in de taalkiezer staat. Elke taal noemt zichzelf in eigen taal. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  de: 'Deutsch',
};

/** Wat er in het kleine vakje staat: twee letters. */
export const localeShort: Record<Locale, string> = {
  en: 'EN', nl: 'NL', fr: 'FR', es: 'ES', it: 'IT', de: 'DE',
};

/** Voor de datumopmaak en het lang-attribuut. */
export const localeTags: Record<Locale, string> = {
  en: 'en', nl: 'nl', fr: 'fr', es: 'es', it: 'it', de: 'de',
};

export const ui = {
  en: {
    'site.title': 'WoW Forever',
    'site.homeTitle': 'WoW Forever - News, BiS and Guides for WoW Forever and Classic',
    'site.description': 'An independent fansite for World of Warcraft: Forever and WoW Classic, with news, best-in-slot lists, class guides and tradeskills.',
    'site.disclaimer':
      'Not affiliated with or endorsed by Blizzard Entertainment.',

    'skip.content': 'Skip to content',

    'nav.label': 'Main navigation',
    'nav.news': 'News',
    'nav.bis': 'BiS',
    'nav.classes': 'Classes',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Reputations',
    'nav.clips': 'Clips',
    'nav.streams': 'Streams',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',

    'era.label': 'Expansion',

    'clips.title': 'Daily Clips',
    'clips.description': 'Popular short videos about WoW Classic and WoW Forever on YouTube from the last {h} hours, refreshed every hour.',
    'clips.topLabel': 'MOST VIEWED',
    'clips.views': '{n} views',
    'clips.watched': 'Watched',

    'streams.title': 'Streams',
    'streams.description': 'Live World of Warcraft streams on Twitch, refreshed several times a day.',
    'streams.topLabel': 'MOST WATCHED',
    'streams.languageLabel': 'Stream language',
    'streams.allLanguages': 'All languages',
    'streams.otherLanguage': 'Other',
    'streams.live': 'LIVE',
    'streams.watching': '{n} watching',
    'streams.started': 'Started {time}',
    'streams.offline': 'Offline at last fetch',

    'feed.listLabel': 'FETCHED LIST',
    'feed.featured': 'FEATURED',
    'feed.sponsored': 'SPONSORED',
    'feed.pickedNote': 'picked by Nutri',
    'feed.sponsoredNote': 'paid placement',
    'feed.noResults': 'Nothing matches.',

    'search.placeholder': 'Search',
    'search.label': 'Search posts by title',
    'search.none': 'No pages match.',
    'search.countOne': '1 page found',
    'search.countMany': '{n} pages found',

    'lang.label': 'Language',
    'theme.label': 'Theme',
    'theme.night': 'Night',
    'theme.day': 'Day',
    'theme.toggle': 'Switch between the night and day theme',

    'countdown.label': 'Forever in',
    'countdown.dayUnit': 'd ',
    'countdown.hourUnit': 'h',
    'countdown.daysOne': 'day',
    'countdown.daysMany': 'days',
    'countdown.hoursOne': 'hour',
    'countdown.hoursMany': 'hours',
    'countdown.aria': '{d} {du} and {h} {hu} until WoW Forever launches on 4 November 2026',

    'restedxp.wide': 'RESTEDXP · 10% OFF',
    'restedxp.short': '−10%',
    'restedxp.aria': 'RestedXP leveling guides, 10% off with the partner link',

    'footer.copyright': '© {y} wowforever.be',
    'footer.youtube': 'YouTube',
    'footer.twitch': 'Twitch',
    'footer.discord': 'Discord',
    'footer.restedxp': 'RestedXP',
    'footer.label': 'Site footer',

    'list.heading': 'ALL POSTS, NEWEST FIRST',
    'list.empty': 'No posts yet.',
    'featured.label': 'FEATURED',

    'filter.label': 'Filter posts by category',
    'filter.all': 'All',

    'list.loadMore': 'LOAD MORE',
    'list.submit': 'SUBMIT NEWS',
    'list.noResults': 'No posts match.',

    'pill.likes': '{n} likes',

    'crumb.label': 'Breadcrumb',
    'crumb.home': 'Home',

    'post.readingTime': '{n} min read',
    'post.source': 'Source:',
    'post.like': 'Like this post',
    'post.liked': 'You liked this post',

    'gallery.close': 'Close',
    'gallery.prev': 'Previous image',
    'gallery.next': 'Next image',

    'submit.title': 'Send in news',
    'submit.intro': 'Spotted something that is missing here? Tell us. Every tip is read, nothing is published automatically, and there is no reply unless something is unclear.',
    'submit.fieldTitle': 'What happened',
    'submit.fieldTitleHint': 'One line, the way you would write the headline.',
    'submit.fieldSource': 'Link to the source',
    'submit.fieldSourceHint': 'Optional, but it helps. Blizzard, a news site, a post.',
    'submit.fieldNote': 'Anything else',
    'submit.fieldNoteHint': 'Optional.',
    'submit.fieldName': 'Your name or nickname',
    'submit.fieldNameHint': 'Optional, and only so you can be thanked.',
    'submit.send': 'SEND',
    'submit.sending': 'SENDING',
    'submit.thanks': 'Thanks. Your tip has arrived.',
    'submit.thanksNote': 'It goes to one person, who reads everything. There is no reply unless something is unclear.',
    'submit.errorEmpty': 'Write down what happened first.',
    'submit.errorNetwork': 'Sending failed. Try again later.',
    'submit.errorStorage': 'This browser blocks local storage, so sending is not possible.',
    'submit.errorTooFast': 'That went too fast. Read it over and send again.',
    'newsletter.label': 'Email address',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.button': 'SUBSCRIBE TO THE NEWSLETTER',
    'newsletter.sending': 'SUBSCRIBING',
    'newsletter.thanks': 'Thanks. You are on the list.',
    'newsletter.errorEmail': 'That does not look like an email address.',
    'newsletter.errorNetwork': 'Subscribing failed. Try again later.',
    'newsletter.errorStorage': 'This browser blocks local storage, so subscribing is not possible.',
    'newsletter.errorTooFast': 'That went too fast. Try again in a moment.',

    'notFound.title': 'Page not found',
    'notFound.text': 'This address does not exist. It may have moved, or the link has a typo.',
    'notFound.home': 'BACK TO THE NEWS',
  },

  nl: {
    'site.homeTitle': 'WoW Forever - Nieuws, BiS en gidsen voor WoW Forever en Classic',
    'site.description': 'Een onafhankelijke fansite over World of Warcraft: Forever en WoW Classic, met nieuws, best-in-slotlijsten, classgidsen en tradeskills.',
    'site.disclaimer':
      'Geen band met en niet goedgekeurd door Blizzard Entertainment.',

    'skip.content': 'Naar de inhoud',

    'nav.label': 'Hoofdnavigatie',
    'nav.news': 'Nieuws',
    'nav.bis': 'BiS',
    'nav.classes': 'Classes',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Reputaties',
    'nav.clips': 'Clips',
    'nav.streams': 'Streams',
    'nav.open': 'Menu openen',
    'nav.close': 'Menu sluiten',

    'era.label': 'Uitbreiding',

    'clips.title': 'Dagelijkse clips',
    'clips.description': 'Populaire korte video’s over WoW Classic en WoW Forever op YouTube uit de laatste {h} uur, elk uur ververst.',
    'clips.topLabel': 'MEEST BEKEKEN',
    'clips.views': '{n} weergaven',
    'clips.watched': 'Bekeken',

    'streams.title': 'Streams',
    'streams.description': 'Live World of Warcraft-streams op Twitch, een paar keer per dag ververst.',
    'streams.topLabel': 'MEESTE KIJKERS',
    'streams.languageLabel': 'Taal van de stream',
    'streams.allLanguages': 'Alle talen',
    'streams.otherLanguage': 'Andere',
    'streams.live': 'LIVE',
    'streams.watching': '{n} kijkers',
    'streams.started': 'Gestart om {time}',
    'streams.offline': 'Offline bij de laatste ophaling',

    'feed.listLabel': 'OPGEHAALDE LIJST',
    'feed.featured': 'UITGELICHT',
    'feed.sponsored': 'GESPONSORD',
    'feed.pickedNote': 'gekozen door Nutri',
    'feed.sponsoredNote': 'betaalde plaatsing',
    'feed.noResults': 'Niets gevonden.',

    'search.placeholder': 'Zoeken',
    'search.label': 'Zoek posts op titel',
    'search.none': 'Geen pagina’s gevonden.',
    'search.countOne': '1 pagina gevonden',
    'search.countMany': '{n} pagina’s gevonden',

    'lang.label': 'Taal',
    'theme.label': 'Thema',
    'theme.night': 'Nacht',
    'theme.day': 'Dag',
    'theme.toggle': 'Wissel tussen het nacht- en dagthema',

    'countdown.label': 'Forever over',
    'countdown.dayUnit': 'd ',
    'countdown.hourUnit': 'u',
    'countdown.daysOne': 'dag',
    'countdown.daysMany': 'dagen',
    'countdown.hoursOne': 'uur',
    'countdown.hoursMany': 'uur',
    'countdown.aria': '{d} {du} en {h} {hu} tot de launch van WoW Forever op 4 november 2026',

    'restedxp.wide': 'RESTEDXP · 10% KORTING',
    'restedxp.short': '−10%',
    'restedxp.aria': 'Levelgidsen van RestedXP, 10% korting met de partnerlink',

    'footer.copyright': '© {y} wowforever.be',
    'footer.label': 'Voettekst',

    'list.heading': 'ALLE POSTS, NIEUWSTE EERST',
    'list.empty': 'Nog geen posts.',
    'featured.label': 'UITGELICHT',

    'filter.label': 'Filter posts op categorie',
    'filter.all': 'Alles',

    'list.loadMore': 'MEER LADEN',
    'list.submit': 'NIEUWS INSTUREN',
    'list.noResults': 'Geen posts gevonden.',

    'pill.likes': '{n} likes',

    'crumb.label': 'Kruimelpad',
    'crumb.home': 'Home',

    'post.readingTime': '{n} min lezen',
    'post.source': 'Bron:',
    'post.like': 'Deze post liken',
    'post.liked': 'Je vindt deze post leuk',

    'gallery.close': 'Sluiten',
    'gallery.prev': 'Vorig beeld',
    'gallery.next': 'Volgend beeld',

    'submit.title': 'Nieuws insturen',
    'submit.intro': 'Iets gezien dat hier ontbreekt? Laat het weten. Elke tip wordt gelezen, er wordt niets automatisch gepubliceerd, en er komt geen antwoord tenzij iets onduidelijk is.',
    'submit.fieldTitle': 'Wat er gebeurd is',
    'submit.fieldTitleHint': 'Eén regel, zoals je de kop zou schrijven.',
    'submit.fieldSource': 'Link naar de bron',
    'submit.fieldSourceHint': 'Mag leeg blijven, maar het helpt. Blizzard, een nieuwssite, een bericht.',
    'submit.fieldNote': 'Verder nog iets',
    'submit.fieldNoteHint': 'Mag leeg blijven.',
    'submit.fieldName': 'Je naam of nickname',
    'submit.fieldNameHint': 'Mag leeg blijven, en dient alleen om je te bedanken.',
    'submit.send': 'VERSTUREN',
    'submit.sending': 'BEZIG',
    'submit.thanks': 'Bedankt. Je tip is aangekomen.',
    'submit.thanksNote': 'Hij gaat naar één persoon, die alles leest. Er komt geen antwoord tenzij iets onduidelijk is.',
    'submit.errorEmpty': 'Schrijf eerst op wat er gebeurd is.',
    'submit.errorNetwork': 'Versturen is niet gelukt. Probeer het later opnieuw.',
    'submit.errorStorage': 'Deze browser blokkeert lokale opslag, dus versturen kan niet.',
    'submit.errorTooFast': 'Dat ging te snel. Lees het na en verstuur opnieuw.',
    'newsletter.label': 'E-mailadres',
    'newsletter.placeholder': 'jij@voorbeeld.be',
    'newsletter.button': 'INSCHRIJVEN OP DE NIEUWSBRIEF',
    'newsletter.sending': 'BEZIG',
    'newsletter.thanks': 'Bedankt. Je staat op de lijst.',
    'newsletter.errorEmail': 'Dat lijkt geen e-mailadres.',
    'newsletter.errorNetwork': 'Inschrijven lukte niet. Probeer het later opnieuw.',
    'newsletter.errorStorage': 'Deze browser blokkeert lokale opslag, dus inschrijven kan niet.',
    'newsletter.errorTooFast': 'Dat ging te snel. Probeer het zo meteen opnieuw.',

    'notFound.title': 'Pagina niet gevonden',
    'notFound.text': 'Dit adres bestaat niet. Misschien is de pagina verhuisd, of zit er een tikfout in de link.',
    'notFound.home': 'TERUG NAAR HET NIEUWS',
  },

  fr: {
    'site.homeTitle': 'WoW Forever - Actualités, BiS et guides pour WoW Forever et Classic',
    'site.description': 'Un site de fans indépendant sur World of Warcraft: Forever et WoW Classic, avec l’actualité, les listes best-in-slot, les guides de classe et les tradeskills.',
    'site.disclaimer':
      'Non affilié à Blizzard Entertainment ni approuvé par celui-ci.',

    'skip.content': 'Aller au contenu',

    'nav.label': 'Navigation principale',
    'nav.news': 'Actualités',
    'nav.bis': 'BiS',
    'nav.classes': 'Classes',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Réputations',
    'nav.clips': 'Clips',
    'nav.streams': 'Streams',
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',

    'era.label': 'Extension',

    'clips.title': 'Clips du jour',
    'clips.description': 'Les courtes vidéos populaires sur WoW Classic et WoW Forever publiées sur YouTube ces dernières {h} heures, actualisées toutes les heures.',
    'clips.topLabel': 'LES PLUS VUES',
    'clips.views': '{n} vues',
    'clips.watched': 'Vu',

    'streams.title': 'Streams',
    'streams.description': 'Streams World of Warcraft en direct sur Twitch, actualisés plusieurs fois par jour.',
    'streams.topLabel': 'LES PLUS REGARDÉS',
    'streams.languageLabel': 'Langue du stream',
    'streams.allLanguages': 'Toutes les langues',
    'streams.otherLanguage': 'Autre',
    'streams.live': 'EN DIRECT',
    'streams.watching': '{n} spectateurs',
    'streams.started': 'Commencé à {time}',
    'streams.offline': 'Hors ligne lors de la dernière récupération',

    'feed.listLabel': 'LISTE RÉCUPÉRÉE',
    'feed.featured': 'À LA UNE',
    'feed.sponsored': 'SPONSORISÉ',
    'feed.pickedNote': 'choisi par Nutri',
    'feed.sponsoredNote': 'placement payant',
    'feed.noResults': 'Aucun résultat.',

    'search.placeholder': 'Rechercher',
    'search.label': 'Rechercher un article par titre',
    'search.none': 'Aucune page trouvée.',
    'search.countOne': '1 page trouvée',
    'search.countMany': '{n} pages trouvées',

    'lang.label': 'Langue',
    'theme.label': 'Thème',
    'theme.night': 'Nuit',
    'theme.day': 'Jour',
    'theme.toggle': 'Basculer entre le thème nuit et jour',

    'countdown.label': 'Forever dans',
    'countdown.dayUnit': 'j ',
    'countdown.hourUnit': 'h',
    'countdown.daysOne': 'jour',
    'countdown.daysMany': 'jours',
    'countdown.hoursOne': 'heure',
    'countdown.hoursMany': 'heures',
    'countdown.aria': '{d} {du} et {h} {hu} avant la sortie de WoW Forever le 4 novembre 2026',

    'restedxp.wide': 'RESTEDXP · 10 % DE RÉDUCTION',
    'restedxp.short': '−10 %',
    'restedxp.aria': 'Guides de leveling RestedXP, 10 % de réduction avec le lien partenaire',

    'footer.copyright': '© {y} wowforever.be',
    'footer.label': 'Pied de page',

    'list.heading': 'TOUS LES ARTICLES, DU PLUS RÉCENT',
    'list.empty': 'Pas encore d’articles.',
    'featured.label': 'À LA UNE',

    'filter.label': 'Filtrer les articles par catégorie',
    'filter.all': 'Tout',

    'list.loadMore': 'VOIR PLUS',
    'list.submit': 'PROPOSER UNE ACTU',
    'list.noResults': 'Aucun article ne correspond.',

    'pill.likes': '{n} j’aime',

    'crumb.label': 'Fil d’Ariane',
    'crumb.home': 'Accueil',

    'post.readingTime': '{n} min de lecture',
    'post.source': 'Source :',
    'post.like': 'Aimer cet article',
    'post.liked': 'Vous aimez cet article',

    'gallery.close': 'Fermer',
    'gallery.prev': 'Image précédente',
    'gallery.next': 'Image suivante',

    'submit.title': 'Proposer une actu',
    'submit.intro': 'Vous avez vu quelque chose qui manque ici ? Dites-le. Chaque message est lu, rien n’est publié automatiquement, et il n’y a pas de réponse sauf si quelque chose n’est pas clair.',
    'submit.fieldTitle': 'Ce qui s’est passé',
    'submit.fieldTitleHint': 'Une ligne, comme vous écririez le titre.',
    'submit.fieldSource': 'Lien vers la source',
    'submit.fieldSourceHint': 'Facultatif, mais utile. Blizzard, un site d’actualité, un message.',
    'submit.fieldNote': 'Autre chose',
    'submit.fieldNoteHint': 'Facultatif.',
    'submit.fieldName': 'Votre nom ou pseudo',
    'submit.fieldNameHint': 'Facultatif, uniquement pour pouvoir vous remercier.',
    'submit.send': 'ENVOYER',
    'submit.sending': 'ENVOI',
    'submit.thanks': 'Merci. Votre message est bien arrivé.',
    'submit.thanksNote': 'Il va à une seule personne, qui lit tout. Il n’y a pas de réponse sauf si quelque chose n’est pas clair.',
    'submit.errorEmpty': 'Écrivez d’abord ce qui s’est passé.',
    'submit.errorNetwork': 'L’envoi a échoué. Réessayez plus tard.',
    'submit.errorStorage': 'Ce navigateur bloque le stockage local, l’envoi est donc impossible.',
    'submit.errorTooFast': 'C’était trop rapide. Relisez et renvoyez.',
    'newsletter.label': 'Adresse e-mail',
    'newsletter.placeholder': 'vous@exemple.fr',
    'newsletter.button': 'S’INSCRIRE À LA NEWSLETTER',
    'newsletter.sending': 'INSCRIPTION',
    'newsletter.thanks': 'Merci. Vous êtes sur la liste.',
    'newsletter.errorEmail': 'Cela ne ressemble pas à une adresse e-mail.',
    'newsletter.errorNetwork': 'L’inscription a échoué. Réessayez plus tard.',
    'newsletter.errorStorage': 'Ce navigateur bloque le stockage local, l’inscription est donc impossible.',
    'newsletter.errorTooFast': 'C’était trop rapide. Réessayez dans un instant.',

    'notFound.title': 'Page introuvable',
    'notFound.text': 'Cette adresse n’existe pas. La page a peut-être été déplacée, ou le lien contient une faute de frappe.',
    'notFound.home': 'RETOUR AUX ACTUALITÉS',
  },

  es: {
    'site.homeTitle': 'WoW Forever - Noticias, BiS y guías de WoW Forever y Classic',
    'site.description': 'Un sitio de fans independiente sobre World of Warcraft: Forever y WoW Classic, con noticias, listas best-in-slot, guías de clase y tradeskills.',
    'site.disclaimer':
      'Sin vínculo con Blizzard Entertainment ni aprobado por esta.',

    'skip.content': 'Ir al contenido',

    'nav.label': 'Navegación principal',
    'nav.news': 'Noticias',
    'nav.bis': 'BiS',
    'nav.classes': 'Clases',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Reputaciones',
    'nav.clips': 'Clips',
    'nav.streams': 'Streams',
    'nav.open': 'Abrir el menú',
    'nav.close': 'Cerrar el menú',

    'era.label': 'Expansión',

    'clips.title': 'Clips del día',
    'clips.description': 'Vídeos cortos populares sobre WoW Classic y WoW Forever en YouTube de las últimas {h} horas, actualizados cada hora.',
    'clips.topLabel': 'MÁS VISTOS',
    'clips.views': '{n} visualizaciones',
    'clips.watched': 'Visto',

    'streams.title': 'Streams',
    'streams.description': 'Streams de World of Warcraft en directo en Twitch, actualizados varias veces al día.',
    'streams.topLabel': 'MÁS ESPECTADORES',
    'streams.languageLabel': 'Idioma del stream',
    'streams.allLanguages': 'Todos los idiomas',
    'streams.otherLanguage': 'Otro',
    'streams.live': 'EN DIRECTO',
    'streams.watching': '{n} espectadores',
    'streams.started': 'Empezó a las {time}',
    'streams.offline': 'Desconectado en la última actualización',

    'feed.listLabel': 'LISTA OBTENIDA',
    'feed.featured': 'DESTACADO',
    'feed.sponsored': 'PATROCINADO',
    'feed.pickedNote': 'elegido por Nutri',
    'feed.sponsoredNote': 'colocación pagada',
    'feed.noResults': 'No hay resultados.',

    'search.placeholder': 'Buscar',
    'search.label': 'Buscar entradas por título',
    'search.none': 'No se encontraron páginas.',
    'search.countOne': '1 página encontrada',
    'search.countMany': '{n} páginas encontradas',

    'lang.label': 'Idioma',
    'theme.label': 'Tema',
    'theme.night': 'Noche',
    'theme.day': 'Día',
    'theme.toggle': 'Cambiar entre el tema noche y día',

    'countdown.label': 'Forever en',
    'countdown.dayUnit': 'd ',
    'countdown.hourUnit': 'h',
    'countdown.daysOne': 'día',
    'countdown.daysMany': 'días',
    'countdown.hoursOne': 'hora',
    'countdown.hoursMany': 'horas',
    'countdown.aria': '{d} {du} y {h} {hu} hasta el lanzamiento de WoW Forever el 4 de noviembre de 2026',

    'restedxp.wide': 'RESTEDXP · 10 % DE DESCUENTO',
    'restedxp.short': '−10 %',
    'restedxp.aria': 'Guías de subida de nivel de RestedXP, 10 % de descuento con el enlace de socio',

    'footer.copyright': '© {y} wowforever.be',
    'footer.label': 'Pie de página',

    'list.heading': 'TODAS LAS ENTRADAS, MÁS RECIENTES PRIMERO',
    'list.empty': 'Todavía no hay entradas.',
    'featured.label': 'DESTACADO',

    'filter.label': 'Filtrar entradas por categoría',
    'filter.all': 'Todo',

    'list.loadMore': 'VER MÁS',
    'list.submit': 'ENVIAR NOTICIA',
    'list.noResults': 'No hay entradas que coincidan.',

    'pill.likes': '{n} me gusta',

    'crumb.label': 'Ruta de navegación',
    'crumb.home': 'Inicio',

    'post.readingTime': '{n} min de lectura',
    'post.source': 'Fuente:',
    'post.like': 'Dar me gusta a esta entrada',
    'post.liked': 'Te gusta esta entrada',

    'gallery.close': 'Cerrar',
    'gallery.prev': 'Imagen anterior',
    'gallery.next': 'Imagen siguiente',

    'submit.title': 'Enviar una noticia',
    'submit.intro': '¿Has visto algo que falta aquí? Cuéntalo. Todo aviso se lee, nada se publica automáticamente, y no hay respuesta salvo que algo no quede claro.',
    'submit.fieldTitle': 'Qué ha pasado',
    'submit.fieldTitleHint': 'Una línea, como escribirías el titular.',
    'submit.fieldSource': 'Enlace a la fuente',
    'submit.fieldSourceHint': 'Opcional, pero ayuda. Blizzard, un sitio de noticias, una publicación.',
    'submit.fieldNote': 'Algo más',
    'submit.fieldNoteHint': 'Opcional.',
    'submit.fieldName': 'Tu nombre o apodo',
    'submit.fieldNameHint': 'Opcional, y solo para poder darte las gracias.',
    'submit.send': 'ENVIAR',
    'submit.sending': 'ENVIANDO',
    'submit.thanks': 'Gracias. Tu aviso ha llegado.',
    'submit.thanksNote': 'Va a una sola persona, que lo lee todo. No hay respuesta salvo que algo no quede claro.',
    'submit.errorEmpty': 'Escribe primero qué ha pasado.',
    'submit.errorNetwork': 'El envío ha fallado. Inténtalo más tarde.',
    'submit.errorStorage': 'Este navegador bloquea el almacenamiento local, así que no se puede enviar.',
    'submit.errorTooFast': 'Ha ido demasiado rápido. Reléelo y envíalo de nuevo.',
    'newsletter.label': 'Correo electrónico',
    'newsletter.placeholder': 'tu@ejemplo.com',
    'newsletter.button': 'SUSCRIBIRSE AL BOLETÍN',
    'newsletter.sending': 'SUSCRIBIENDO',
    'newsletter.thanks': 'Gracias. Ya estás en la lista.',
    'newsletter.errorEmail': 'Eso no parece un correo electrónico.',
    'newsletter.errorNetwork': 'No se pudo suscribir. Inténtalo más tarde.',
    'newsletter.errorStorage': 'Este navegador bloquea el almacenamiento local, así que no es posible suscribirse.',
    'newsletter.errorTooFast': 'Ha ido demasiado rápido. Inténtalo de nuevo en un momento.',

    'notFound.title': 'Página no encontrada',
    'notFound.text': 'Esta dirección no existe. Puede que la página se haya movido o que el enlace tenga una errata.',
    'notFound.home': 'VOLVER A LAS NOTICIAS',
  },

  it: {
    'site.homeTitle': 'WoW Forever - Notizie, BiS e guide per WoW Forever e Classic',
    'site.description': 'Un sito di fan indipendente su World of Warcraft: Forever e WoW Classic, con notizie, liste best-in-slot, guide delle classi e tradeskill.',
    'site.disclaimer':
      'Non affiliato né approvato da Blizzard Entertainment.',

    'skip.content': 'Vai al contenuto',

    'nav.label': 'Navigazione principale',
    'nav.news': 'Notizie',
    'nav.bis': 'BiS',
    'nav.classes': 'Classi',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Reputazioni',
    'nav.clips': 'Clip',
    'nav.streams': 'Stream',
    'nav.open': 'Apri il menu',
    'nav.close': 'Chiudi il menu',

    'era.label': 'Espansione',

    'clips.title': 'Clip del giorno',
    'clips.description': 'Brevi video popolari su WoW Classic e WoW Forever pubblicati su YouTube nelle ultime {h} ore, aggiornati ogni ora.',
    'clips.topLabel': 'I PIÙ VISTI',
    'clips.views': '{n} visualizzazioni',
    'clips.watched': 'Visto',

    'streams.title': 'Stream',
    'streams.description': 'Stream di World of Warcraft in diretta su Twitch, aggiornati più volte al giorno.',
    'streams.topLabel': 'I PIÙ SEGUITI',
    'streams.languageLabel': 'Lingua dello stream',
    'streams.allLanguages': 'Tutte le lingue',
    'streams.otherLanguage': 'Altro',
    'streams.live': 'IN DIRETTA',
    'streams.watching': '{n} spettatori',
    'streams.started': 'Iniziata alle {time}',
    'streams.offline': 'Offline all’ultimo aggiornamento',

    'feed.listLabel': 'LISTA RECUPERATA',
    'feed.featured': 'IN EVIDENZA',
    'feed.sponsored': 'SPONSORIZZATO',
    'feed.pickedNote': 'scelto da Nutri',
    'feed.sponsoredNote': 'posizionamento a pagamento',
    'feed.noResults': 'Nessun risultato.',

    'search.placeholder': 'Cerca',
    'search.label': 'Cerca gli articoli per titolo',
    'search.none': 'Nessuna pagina trovata.',
    'search.countOne': '1 pagina trovata',
    'search.countMany': '{n} pagine trovate',

    'lang.label': 'Lingua',
    'theme.label': 'Tema',
    'theme.night': 'Notte',
    'theme.day': 'Giorno',
    'theme.toggle': 'Passa dal tema notte a quello giorno',

    'countdown.label': 'Forever tra',
    'countdown.dayUnit': 'g ',
    'countdown.hourUnit': 'h',
    'countdown.daysOne': 'giorno',
    'countdown.daysMany': 'giorni',
    'countdown.hoursOne': 'ora',
    'countdown.hoursMany': 'ore',
    'countdown.aria': '{d} {du} e {h} {hu} all’uscita di WoW Forever il 4 novembre 2026',

    'restedxp.wide': 'RESTEDXP · 10% DI SCONTO',
    'restedxp.short': '−10%',
    'restedxp.aria': 'Guide di leveling di RestedXP, 10% di sconto con il link partner',

    'footer.copyright': '© {y} wowforever.be',
    'footer.label': 'Piè di pagina',

    'list.heading': 'TUTTI GLI ARTICOLI, DAL PIÙ RECENTE',
    'list.empty': 'Ancora nessun articolo.',
    'featured.label': 'IN EVIDENZA',

    'filter.label': 'Filtra gli articoli per categoria',
    'filter.all': 'Tutto',

    'list.loadMore': 'MOSTRA ALTRO',
    'list.submit': 'PROPONI UNA NOTIZIA',
    'list.noResults': 'Nessun articolo corrisponde.',

    'pill.likes': '{n} mi piace',

    'crumb.label': 'Percorso di navigazione',
    'crumb.home': 'Home',

    'post.readingTime': '{n} min di lettura',
    'post.source': 'Fonte:',
    'post.like': 'Metti mi piace a questo articolo',
    'post.liked': 'Ti piace questo articolo',

    'gallery.close': 'Chiudi',
    'gallery.prev': 'Immagine precedente',
    'gallery.next': 'Immagine successiva',

    'submit.title': 'Proponi una notizia',
    'submit.intro': 'Hai visto qualcosa che qui manca? Faccelo sapere. Ogni segnalazione viene letta, niente viene pubblicato automaticamente, e non c’è risposta a meno che qualcosa non sia chiaro.',
    'submit.fieldTitle': 'Cosa è successo',
    'submit.fieldTitleHint': 'Una riga, come scriveresti il titolo.',
    'submit.fieldSource': 'Link alla fonte',
    'submit.fieldSourceHint': 'Facoltativo, ma aiuta. Blizzard, un sito di notizie, un post.',
    'submit.fieldNote': 'Altro',
    'submit.fieldNoteHint': 'Facoltativo.',
    'submit.fieldName': 'Il tuo nome o nickname',
    'submit.fieldNameHint': 'Facoltativo, serve solo per poterti ringraziare.',
    'submit.send': 'INVIA',
    'submit.sending': 'INVIO',
    'submit.thanks': 'Grazie. La tua segnalazione è arrivata.',
    'submit.thanksNote': 'Va a una sola persona, che legge tutto. Non c’è risposta a meno che qualcosa non sia chiaro.',
    'submit.errorEmpty': 'Scrivi prima cosa è successo.',
    'submit.errorNetwork': 'L’invio non è riuscito. Riprova più tardi.',
    'submit.errorStorage': 'Questo browser blocca la memoria locale, quindi non si può inviare.',
    'submit.errorTooFast': 'È andata troppo veloce. Rileggi e invia di nuovo.',
    'newsletter.label': 'Indirizzo email',
    'newsletter.placeholder': 'tu@esempio.it',
    'newsletter.button': 'ISCRIVITI ALLA NEWSLETTER',
    'newsletter.sending': 'ISCRIZIONE',
    'newsletter.thanks': 'Grazie. Sei nella lista.',
    'newsletter.errorEmail': 'Non sembra un indirizzo email.',
    'newsletter.errorNetwork': 'Iscrizione non riuscita. Riprova più tardi.',
    'newsletter.errorStorage': 'Questo browser blocca l’archiviazione locale, quindi non è possibile iscriversi.',
    'newsletter.errorTooFast': 'È andata troppo veloce. Riprova tra un attimo.',

    'notFound.title': 'Pagina non trovata',
    'notFound.text': 'Questo indirizzo non esiste. La pagina potrebbe essere stata spostata, oppure il link contiene un errore di battitura.',
    'notFound.home': 'TORNA ALLE NOTIZIE',
  },

  de: {
    'site.homeTitle': 'WoW Forever - News, BiS und Guides für WoW Forever und Classic',
    'site.description': 'Eine unabhängige Fanseite zu World of Warcraft: Forever und WoW Classic, mit News, Best-in-Slot-Listen, Klassenguides und Tradeskills.',
    'site.disclaimer':
      'Nicht mit Blizzard Entertainment verbunden oder von ihm unterstützt.',

    'skip.content': 'Zum Inhalt springen',

    'nav.label': 'Hauptnavigation',
    'nav.news': 'News',
    'nav.bis': 'BiS',
    'nav.classes': 'Klassen',
    'nav.tradeskills': 'Tradeskills',
    'nav.reputations': 'Ruf',
    'nav.clips': 'Clips',
    'nav.streams': 'Streams',
    'nav.open': 'Menü öffnen',
    'nav.close': 'Menü schließen',

    'era.label': 'Erweiterung',

    'clips.title': 'Clips des Tages',
    'clips.description': 'Beliebte kurze Videos zu WoW Classic und WoW Forever auf YouTube aus den letzten {h} Stunden, stündlich aktualisiert.',
    'clips.topLabel': 'MEISTGESEHEN',
    'clips.views': '{n} Aufrufe',
    'clips.watched': 'Gesehen',

    'streams.title': 'Streams',
    'streams.description': 'Live-Streams zu World of Warcraft auf Twitch, mehrmals am Tag aktualisiert.',
    'streams.topLabel': 'MEISTE ZUSCHAUER',
    'streams.languageLabel': 'Sprache des Streams',
    'streams.allLanguages': 'Alle Sprachen',
    'streams.otherLanguage': 'Andere',
    'streams.live': 'LIVE',
    'streams.watching': '{n} Zuschauer',
    'streams.started': 'Gestartet um {time}',
    'streams.offline': 'Offline beim letzten Abruf',

    'feed.listLabel': 'ABGERUFENE LISTE',
    'feed.featured': 'HERVORGEHOBEN',
    'feed.sponsored': 'GESPONSERT',
    'feed.pickedNote': 'ausgewählt von Nutri',
    'feed.sponsoredNote': 'bezahlte Platzierung',
    'feed.noResults': 'Keine Treffer.',

    'search.placeholder': 'Suchen',
    'search.label': 'Beiträge nach Titel suchen',
    'search.none': 'Keine Seiten gefunden.',
    'search.countOne': '1 Seite gefunden',
    'search.countMany': '{n} Seiten gefunden',

    'lang.label': 'Sprache',
    'theme.label': 'Thema',
    'theme.night': 'Nacht',
    'theme.day': 'Tag',
    'theme.toggle': 'Zwischen Nacht- und Tagthema wechseln',

    'countdown.label': 'Forever in',
    'countdown.dayUnit': 'T ',
    'countdown.hourUnit': 'Std',
    'countdown.daysOne': 'Tag',
    'countdown.daysMany': 'Tage',
    'countdown.hoursOne': 'Stunde',
    'countdown.hoursMany': 'Stunden',
    'countdown.aria': '{d} {du} und {h} {hu} bis zum Launch von WoW Forever am 4. November 2026',

    'restedxp.wide': 'RESTEDXP · 10 % RABATT',
    'restedxp.short': '−10 %',
    'restedxp.aria': 'Leveling-Guides von RestedXP, 10 % Rabatt mit dem Partnerlink',

    'footer.copyright': '© {y} wowforever.be',
    'footer.label': 'Fußzeile',

    'list.heading': 'ALLE BEITRÄGE, NEUESTE ZUERST',
    'list.empty': 'Noch keine Beiträge.',
    'featured.label': 'HERVORGEHOBEN',

    'filter.label': 'Beiträge nach Kategorie filtern',
    'filter.all': 'Alle',

    'list.loadMore': 'MEHR LADEN',
    'list.submit': 'NEWS EINSENDEN',
    'list.noResults': 'Keine Beiträge gefunden.',

    'pill.likes': '{n} Likes',

    'crumb.label': 'Brotkrumennavigation',
    'crumb.home': 'Start',

    'post.readingTime': '{n} Min. Lesezeit',
    'post.source': 'Quelle:',
    'post.like': 'Diesen Beitrag liken',
    'post.liked': 'Du magst diesen Beitrag',

    'gallery.close': 'Schließen',
    'gallery.prev': 'Vorheriges Bild',
    'gallery.next': 'Nächstes Bild',

    'submit.title': 'News einsenden',
    'submit.intro': 'Etwas gesehen, das hier fehlt? Sag Bescheid. Jeder Hinweis wird gelesen, nichts wird automatisch veröffentlicht, und es gibt keine Antwort, außer wenn etwas unklar ist.',
    'submit.fieldTitle': 'Was passiert ist',
    'submit.fieldTitleHint': 'Eine Zeile, so wie du die Überschrift schreiben würdest.',
    'submit.fieldSource': 'Link zur Quelle',
    'submit.fieldSourceHint': 'Optional, hilft aber. Blizzard, eine Nachrichtenseite, ein Beitrag.',
    'submit.fieldNote': 'Sonst noch etwas',
    'submit.fieldNoteHint': 'Optional.',
    'submit.fieldName': 'Dein Name oder Nickname',
    'submit.fieldNameHint': 'Optional, und nur damit man dir danken kann.',
    'submit.send': 'SENDEN',
    'submit.sending': 'SENDET',
    'submit.thanks': 'Danke. Dein Hinweis ist angekommen.',
    'submit.thanksNote': 'Er geht an eine Person, die alles liest. Es gibt keine Antwort, außer wenn etwas unklar ist.',
    'submit.errorEmpty': 'Schreib zuerst auf, was passiert ist.',
    'submit.errorNetwork': 'Das Senden hat nicht geklappt. Versuch es später noch einmal.',
    'submit.errorStorage': 'Dieser Browser blockiert lokalen Speicher, deshalb ist Senden nicht möglich.',
    'submit.errorTooFast': 'Das ging zu schnell. Lies es noch einmal und sende erneut.',
    'newsletter.label': 'E-Mail-Adresse',
    'newsletter.placeholder': 'du@beispiel.de',
    'newsletter.button': 'NEWSLETTER ABONNIEREN',
    'newsletter.sending': 'WIRD GESENDET',
    'newsletter.thanks': 'Danke. Du stehst auf der Liste.',
    'newsletter.errorEmail': 'Das sieht nicht nach einer E-Mail-Adresse aus.',
    'newsletter.errorNetwork': 'Anmelden hat nicht geklappt. Versuch es später noch einmal.',
    'newsletter.errorStorage': 'Dieser Browser blockiert lokalen Speicher, daher ist die Anmeldung nicht möglich.',
    'newsletter.errorTooFast': 'Das ging zu schnell. Versuch es gleich noch einmal.',

    'notFound.title': 'Seite nicht gefunden',
    'notFound.text': 'Diese Adresse gibt es nicht. Vielleicht ist die Seite umgezogen, oder der Link enthält einen Tippfehler.',
    'notFound.home': 'ZURÜCK ZU DEN NEWS',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
