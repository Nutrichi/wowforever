---
title: "Restoration Druid: la guía de sanación para WoW Forever"
metaTitle: "Restoration Druid en WoW Forever: build, talentos, macros y FAQ"
description: "El Restoration Druid en WoW Forever: qué cambia para el sanador, puntos fuertes y débiles, la build estándar 11/0/40, la Dual Specialization, macros útiles, marcos de unidad y las preguntas más frecuentes."
short: "Restoration Druid"
updated: 2026-11-22
lang: es
manual: true
faq:
  - q: "¿Cuál es la mejor build de talentos para un Restoration Druid en WoW Forever?"
    a: "La mayoría de los Restoration Druids juegan 11 puntos en Balance, 0 en Feral Combat y 40 en Restoration, con Improved Regrowth y Wild Growth. Los puntos en Balance sirven sobre todo para Nature's Splendor."
  - q: "¿Swiftmend sigue consumiendo el HoT?"
    a: "No. En WoW Forever, Swiftmend ya no consume el Rejuvenation o el Regrowth que usa. Eso sí, necesita tu propio Rejuvenation o Regrowth sobre el objetivo: Wild Growth o el HoT de otro Druid no cuenta."
  - q: "¿Merece la pena Healing Touch?"
    a: "Sí, pero menos que en Classic. La penalización de los rangos bajos y un Regrowth más fuerte lo hacen menos central, y Tranquil Spirit ya no es un talento fuerte."
  - q: "¿Qué raza es la mejor para un Restoration Druid?"
    a: "High Order Skyborne en la Alianza, por un 2 % de celeridad y Read Leyline para el maná, o Night Elf por Elune's Light antes de un daño fuerte. En la Horda, Windshaper Skyborne, por un 2 % de celeridad y Skysight."
  - q: "¿Qué profesiones encajan con un Restoration Druid?"
    a: "Al subir de nivel, Skinning con Leatherworking, o dos profesiones de recolección. En el nivel 60, Engineering parece fuerte para la banda, y Enchanting da acceso a reliquias que se ligan al recogerlas."
  - q: "¿Puede un Restoration Druid disipar Magia o Enfermedad?"
    a: "No. El Druid no tiene disipación de Magia ni de Enfermedad, uno de los puntos débiles de la especialización."
  - q: "¿Cuál es la prioridad de stats y la lista BiS?"
    a: "Poder de sanación una vez que tienes suficiente Intelecto y Aguante, luego Espíritu o maná cada 5 segundos cuando te quedas sin maná, y probabilidad de crítico al final. La lista BiS pre-raid está en nuestra página de BiS."
  - q: "¿Tiene plaza en la banda un Restoration Druid?"
    a: "Todas las bandas quieren sanadores, y el Restoration Druid tiene un kit fuerte y amplio. La especialización aporta menos a una banda que las otras dos de Druid, pero es una opción fuerte contra muchos tipos de daño."
  - q: "¿Debe un Restoration Druid hacer daño?"
    a: "En los momentos tranquilos, sí. El Wrath más fuerte, el Omen of Clarity gratuito y Judgement of Wisdom hacen que merezca la pena intercalar hechizos de daño baratos."
sources:
  - name: "Wowhead, enchants and consumables"
    url: "https://www.wowhead.com/forever/guide/classes/druid/restoration/enchants-consumables-pve-healer"
  - name: "Mobalytics"
    url: "https://mobalytics.gg/wow-forever/classes/restoration-druid-guide-progress"
---
El Restoration Druid de WoW Forever sigue siendo un sanador que se adelanta al daño, con HoTs sobre muchos jugadores a la vez. Nuevas herramientas le permiten también reaccionar: Wild Growth, un Swiftmend que deja el HoT y un Omen of Clarity gratuito. Esta guía cubre los cambios, la build estándar, las macros y las preguntas más frecuentes.

| | |
|---|---|
| Rol | Sanador, sobre todo fuerte en sanación de banda |
| Build estándar | 11 Balance, 0 Feral Combat, 40 Restoration |
| Talentos clave | Improved Regrowth, Wild Growth |
| Puntos fuertes | Sanación de banda, movilidad, utilidad |
| Puntos débiles | Sin disipación de Magia ni de Enfermedad, sin escudos |
| Stats y BiS | [Lista BiS pre-raid](/es/bis/forever/preraid/druid-restoration/) |

## Qué cambia para el sanador

- **Omen of Clarity es básico** y ahora puede activarse con hechizos, unas dos veces por minuto. El proc hace gratis el siguiente hechizo, así que rinde más en una sanación cara.
- **Wild Growth** es el nuevo talento final del árbol: una sanación fuerte sobre todo el grupo del objetivo. Desde el 11 de noviembre ya no se lanza en movimiento, pero saca el doble de tu poder con hechizos, [más en nuestra noticia](/es/news/wild-growth-can-no-longer-be-cast-while-moving/).
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=18562"><img class="wf-wh__icon" src="/wh/inv_relics_idolofrejuvenation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Swiftmend</a> ya no consume** el HoT que usa. Solo funciona sobre un objetivo con tu propio Rejuvenation o Regrowth: Wild Growth o el HoT de otro Druid no cuenta.
- **Los HoTs pueden ser críticos.** La probabilidad de crítico extra de Improved Regrowth probablemente también cuenta para la parte HoT de <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=8936"><img class="wf-wh__icon" src="/wh/spell_nature_resistnature.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Regrowth</a>. Sale de los datos del juego y no se podía probar en la beta.
- **Los HoTs de varios Druids se acumulan** sobre un mismo objetivo. Un error todavía lo impide en algunos casos.
- **<a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=770"><img class="wf-wh__icon" src="/wh/spell_nature_faeriefire.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Faerie Fire</a>** ya no acumula su reducción de armadura con <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=704"><img class="wf-wh__icon" src="/wh/spell_shadow_unholystrength.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Curse of Recklessness</a> de los Warlocks.
- **Los costes de maná** han cambiado, y Regrowth cura mucho más que antes.
- **Feral Swiftness y <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=339"><img class="wf-wh__icon" src="/wh/spell_nature_stranglevines.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Entangling Roots</a>** ahora funcionan en interiores.
- **Cambiar de forma** molesta menos. Varios objetos, habilidades y acciones funcionan ya en forma, y muchas acciones que antes fallaban te sacan ahora de la forma automáticamente.

## Puntos fuertes y débiles

| Fuertes | Débiles |
|---|---|
| Sanación de banda muy fuerte | Compite por plazas de banda con las otras especializaciones de Druid |
| Sanación explosiva fuerte sobre un objetivo | Sin reducción de daño externa ni escudos |
| Una amplia gama de utilidad | El maná exige una gestión activa |
| Mucha sanación total | La sanación de banda tarda en arrancar |
| La mejor movilidad de todos los sanadores | Sin disipación de Magia ni de Enfermedad |
| Debuffs de banda | |

## Builds para nivel 60

Tres builds, cada una con los 51 puntos de talento del nivel 60: una para bandas y mazmorras, una para subir de nivel y una para PvP. Cada build se abre en nuestra calculadora de talentos.

### Build de banda y mazmorra, 11/0/40

11 puntos en Balance y 40 en Restoration, para mazmorras y bandas. [Abre la build en la calculadora de talentos](/es/talents/druid/?t=05302001--5553005123113051).

| Talent | Puntos |
|---|---|
| **Genesis** | 5/5 |
| **Moonglow** | 3/3 |
| **Nature's Majesty** | 2/2 |
| **Nature's Splendor** | 1/1 |
| **Nature's Focus** | 5/5 |
| **Heart of the Wild** | 5/5 |
| **Naturalist** | 5/5 |
| **Reflection** | 3/3 |
| **Gift of Nature** | 5/5 |
| **Bloom** | 1/1 |
| **Tranquil Spirit** | 2/5 |
| **Improved Rejuvenation** | 3/3 |
| **Swiftmend** | 1/1 |
| **Nature's Swiftness** | 1/1 |
| **Living Spirit** | 3/3 |
| **Improved Regrowth** | 5/5 |
| **Wild Growth** | 1/1 |

Con 21 puntos en Balance por Improved Wrath, Moonglow e Insect Swarm, esta build de banda hace más daño en los momentos tranquilos (21/0/30). [Ábrela en la calculadora de talentos](/es/talents/druid/?t=5530203110001--055300510311105).

Para mazmorras, una build con Feral Combat te deja pasar a felino u oso cuando la sanación está tranquila, o si cae el tanque (0/32/19). [Ábrela en la calculadora de talentos](/es/talents/druid/?t=-55000032023012125001-05530011031).

Los 11 puntos en Balance llegan a Nature's Splendor, con Genesis para tus HoTs y Nature's Majesty para el crítico. En Restoration los puntos van a sanación y maná en lugar de a Cat Form. Pon más puntos en Tranquil Spirit si Healing Touch y Tranquility se comen gran parte de tu maná; Improved Tranquility es una alternativa para un tiempo de reutilización más corto y menos amenaza. Mueve puntos en vez de añadirlos, y conserva Wild Growth y Living Spirit, el talento anterior.

### Build para subir de nivel, 9/32/10

La build para subir de nivel toma primero los talentos que ayudan a matar en solitario. [Ábrela en la calculadora de talentos](/es/talents/druid/?t=050022-55200002123012125001-055). La [build de nivel del Druid](/es/leveling/druid/) da el talento de cada nivel. ¿Sanas sobre todo mazmorras mientras subes de nivel? Entonces funciona una ruta de sanador: 0/0/21 a nivel 30, con Heart of the Wild, Naturalist, Bloom a 20, Gift of Nature, Swiftmend a 25, Reflection y Nature's Swiftness a 30. Hacer misiones solo es más rápido como Feral.

### Build de PvP, 16/11/24

La build de PvP cambia daño por control y supervivencia. [Abre la build de PvP en la calculadora de talentos](/es/talents/druid/?t=500222311-052021001-555330010011).

## Sanar a nivel 60

**Rangos de hechizos.** A nivel 60 usas Healing Touch rango 10, Rejuvenation rango 10, Regrowth rango 9 y Wild Growth rango 3. Guarda Healing Touch rango 8 para una sanación menor y Rejuvenation rango 9 para daño ligero. Rejuvenation rango 1 es barato con daño ligero y sigue activando Bloom al terminar, pero usa un rango más alto si el objetivo lo necesita.

**Wild Growth** tarda 3 segundos en lanzarse, 2,5 segundos con Naturalist 5/5, y sana al grupo de tu objetivo durante 7 segundos, con los tics más fuertes al principio. Empieza el lanzamiento para que llegue con el daño, y elige el grupo que lo necesita: no busca por sí solo a los jugadores más heridos de la banda. Con Nature's Swiftness es instantáneo.

**Stats.** Primero suficiente Intelecto y Aguante, luego poder de sanación. Si te quedas sin maná, Espíritu o maná cada 5 segundos vale más que algo más de sanación; con Reflection y Living Spirit, el Espíritu también alimenta Bloom. El crítico viene después: los HoTs pueden hacer crítico en Forever, pero un crítico es un extra, no un plan. La [lista BiS pre-raid](/es/bis/forever/preraid/druid-restoration/) muestra a qué objetos apuntar.

**Ídolos.** Mystic Mushroom, una creación de Enchanting ligada al recogerla con habilidad 130, da un 5 % de Espíritu, bueno para el maná y Bloom. Idol of Synthesis de Pix Xizzix reduce el tiempo de reutilización de Swiftmend por cada HoT tuyo sobre el objetivo, útil en un tanque que mantienes cubierto. Cuando abran las bandas, Idol of Swiftness quitará 3 segundos al tiempo de reutilización de Swiftmend; necesita Malleable Essence of Nature de las bandas.

## Encantamientos y consumibles

El mejor encantamiento por hueco. Ponlos en el equipo que vayas a conservar un tiempo; mientras subes de nivel, las versiones más baratas del mismo encantamiento bastan.

| Hueco | Mejor opción |
|---|---|
| **Arma a dos manos** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1248636"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant 2H Weapon - Mighty Healing Power</a> |
| **Arma a una mano** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=22750"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Weapon - Healing Power</a> |
| **Mano izquierda** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1219579"><img class="wf-wh__icon" src="/wh/inv_enchant_formulasuperior_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Off-Hand - Wisdom</a> |
| **Cuello** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1249058"><img class="wf-wh__icon" src="/wh/inv_enchant_formulagood_01.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Enchant Necklace - Healing Power</a> |
| **Pecho** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Manos** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Piernas** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |
| **Pies** | <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=1254770"><img class="wf-wh__icon" src="/wh/temp.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Mystic Rugged Armor Kit</a> |

## Dual Specialization y otras builds

Con la Dual Specialization y Wild Growth como talento final fuerte, las antiguas builds híbridas de Restoration apenas se jugarán. Hay una excepción probable: una build que renuncia a algunos puntos fuertes en Feral Combat para llegar a Insect Swarm en Balance, a 16 puntos. Se espera que Insect Swarm siga siendo un debuff fuerte sobre los jefes.

El cambio en <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16880"><img class="wf-wh__icon" src="/wh/spell_nature_naturesblessing.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Grace</a> altera mucho el valor de ese talento, tanto para Restoration como para Balance. La mayoría de los puntos en Restoration son fijos: quitarlos cuesta más de lo que esos puntos aportan en otro sitio. Aun así, otras builds pueden funcionar en todo el contenido, y una build adaptada a una necesidad concreta es una opción válida.

## Macros

Algunas condiciones de macro no funcionaban como deberían en la beta. El cliente moderno también hace mucho sin macros ni addons: el lanzamiento al pasar el ratón, el lanzamiento con clic y mover elementos de la interfaz están en las opciones del juego.

**Mouseover.** Lanza el hechizo sobre la unidad aliada viva bajo el ratón, si no sobre el objetivo aliado, si no sobre ti. Quita `nodead` si la usas para <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=20484"><img class="wf-wh__icon" src="/wh/spell_nature_reincarnation.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Rebirth</a> o Revive.

```
#showtooltip
/use [@mouseover,help,nodead][@target,help,nodead][@player] SpellName
```

**Sanación de emergencia.** Detiene lo que haces y lanza un Healing Touch instantáneo con <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=17116"><img class="wf-wh__icon" src="/wh/spell_nature_ravenform.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Nature's Swiftness</a>. Por un error de la beta, podía hacer falta pulsar más de una vez. Desde el 10 de noviembre, Nature's Swiftness también hace instantáneo Wild Growth, [más en nuestra noticia](/es/news/racial-vendor-mounts-become-bind-on-pickup/).

```
#showtooltip
/stopcasting
/stopattack
/cancelform [noform:0]
/use Nature's Swiftness
/use Healing Touch
```

**Un botón para la utilidad.** Rebirth sobre un aliado muerto en combate, Revive sobre un aliado muerto fuera de combate, e <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=29166"><img class="wf-wh__icon" src="/wh/spell_nature_lightning.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Innervate</a> sobre un aliado vivo.

```
#showtooltip
/cancelform [noform:0]
/use [@mouseover,help,dead,combat][help,dead,combat] Rebirth; [@mouseover,help,dead][help,dead] Revive; [@mouseover,help][] Innervate
```

**Hechizos en el suelo.** <a class="wf-wh wf-spell" href="https://www.wowhead.com/forever/spell=16914"><img class="wf-wh__icon" src="/wh/spell_nature_cyclone.jpg" alt="" width="18" height="18" loading="lazy" decoding="async">Hurricane</a> en el cursor, o un objeto como el Advanced Target Dummy a tus pies.

```
#showtooltip
/use [@cursor] Hurricane
```

```
#showtooltip
/use [@player] Advanced Target Dummy
```

**Formas.** Una macro puede hacer algo solo en una forma concreta, con `[form:N]`:

| Condición | Forma |
|---|---|
| **form:0** | Forma de lanzador |
| **form:1** | Bear Form |
| **form:2** | Aquatic Form |
| **form:3** | Cat Form |
| **form:4** | Travel Form |
| **form:5** | Moonkin Form |

## Marcos de unidad y el Cooldown Manager

Los marcos de unidad básicos se pueden ajustar menos de lo que esperan los jugadores de versiones anteriores del juego. Algunos addons añaden filtros para buffs y debuffs, algo muy útil para una clase que cura con HoTs. EllesmereUI es el addon de marcos de unidad más accesible y personalizable. Para los marcos de grupo y banda, Grid2 va bien: muestra primero la vida, el alcance y los perjuicios que puedes quitar, y luego tus propios HoTs.

El Cooldown Manager integrado sustituye a un grupo central de WeakAuras, y los addons pueden cambiar su aspecto. En la beta se desplegó poco a poco. Más en la [noticia sobre el Cooldown Manager](/es/news/cooldown-manager-arrives-in-forever-from-midnight/).
