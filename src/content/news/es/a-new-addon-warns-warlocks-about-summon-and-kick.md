---
title: "Un addon avisa a los Warlocks de los summon-kicks"
description: "The Summoners Union cuenta tus Ritual of Summoning y te deja marcar a un líder que te echa en los 20 minutos tras una invocación. Los demás usuarios reciben un aviso cuando ese jugador los invita. Funciona en WoW Forever."
date: 2026-11-27T20:00:00+01:00
category: forever
lang: es
manual: true
image: ../../../assets/posts/2026-10-16-wow-forever-troll-warlock-casting.jpg
imageAlt: "Un Troll Warlock lanzando con fuego verde y morado en ambas manos, junto a un Imp, en una sala roja y morada con huesos y calaveras colgando"
source: "Icy Veins"
sourceUrl: "https://www.icy-veins.com/wow-forever/news/wow-forever-warlocks-are-fighting-back-against-players-who-exploit-them/"
tags: ["forever", "classes", "warlock"]
featured: false
draft: false
---
Todo Warlock lo conoce. Diez minutos en la meeting stone, Soul Shards gastados en <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=698"><img class="wf-wh__icon" src="/wh/spell_shadow_twilight.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Ritual of Summoning</a>, y en cuanto llega el último jugador, te echan del grupo. The Summoners Union, un nuevo addon de OrganicCarrots, lleva una lista de los líderes que hacen eso y te avisa cuando vuelven a invitarte. Funciona en World of Warcraft: Forever.

## Cómo funciona

1. **Cuenta tus invocaciones.** Cada Ritual of Summoning que terminas en grupo cuenta. ¿Te echan de ese grupo, o se disuelve, en los 20 minutos tras tu última invocación? Entonces el addon pregunta si quieres marcar al líder, o al líder y a su hermandad. Irte por tu cuenta nunca cuenta, y nada se marca sin tu clic.
2. **Te avisa.** Aparece un aviso de banda cuando un jugador marcado te invita o entra en tu grupo, con su historial: por ejemplo marcado 6 veces por 4 usuarios. Puedes hacer que se rechacen las invitaciones de jugadores marcados. Viene desactivado.
3. **Marca a los jugadores.** Un jugador marcado recibe una línea roja en su tooltip. Solo la ves tú.
4. **Comparte la lista.** Las nuevas marcas viajan como mensajes de addon ocultos a otros usuarios de tu hermandad y tu grupo. Un canal oculto para todos los usuarios de tu reino es opcional: `/su share channel on`.

Otras clases también pueden marcar a un jugador, con `/su flag` o con clic derecho en un retrato o un marco de grupo. Cada aviso muestra la clase de quien lo hizo, para distinguir a un Warlock expulsado de alguien que marca a mano.

## Contra los avisos falsos

- Una marca solo se comparte si estuviste en grupo con ese jugador, o con un miembro de esa hermandad, en los últimos 7 días. Lo demás queda como nota privada.
- Quien hace más de 10 avisos nuevos en un día queda ignorado.
- Los avisos de otros solo te alertan cuando dos fuentes distintas marcan al mismo jugador. Se cambia con `/su set threshold`.
- `/su distrust <nombre>` ignora todo lo que un usuario marca o pasa.
- Los avisos de otros dejan de contar tras 180 días.

El addon nunca pone nombres en un canal público, nunca susurra a un jugador marcado y nunca echa ni denuncia a nadie. Nadie se entera de que lo marcaron.

## Comandos

| Comando | Qué hace |
|---|---|
| **/su** | Abre la lista |
| **/su options** | Abre las opciones |
| **/su flag** | Marca a un jugador, tu objetivo si no das nombre |
| **/su flagguild** | Marca a una hermandad |
| **/su check** | Busca a un jugador |
| **/su test** | Muestra la pregunta tras una expulsión, sin marcar a nadie |

El addon es gratis en [CurseForge](https://www.curseforge.com/wow/addons/summoners-union) y también funciona en Classic Era, Burning Crusade Classic Anniversary, Mists of Pandaria Classic y el WoW moderno. El código está abierto en GitHub. Más sobre la clase en nuestra [guía del Warlock](/es/classes/warlock/).
