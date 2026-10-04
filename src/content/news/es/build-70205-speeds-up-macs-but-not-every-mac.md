---
title: "La build 70205 acelera los Mac, pero no todos"
description: "Los chips Max y Pro funcionan mejor con la nueva build de la beta, los chips base peor. Un desarrollador de Blizzard encontró un ajuste de iluminación intercambiado, y el tinte verde o magenta es más raro, pero no ha desaparecido."
date: 2026-10-04T21:30:00+02:00
category: forever
lang: es
image: ../../../assets/posts/2026-09-13-wow-forever-key-art.jpg
imageAlt: "Arte oficial de World of Warcraft: Forever con un Tauren, un Orc, un Blood Elf y un Human sobre un valle"
source: "Blizzard Entertainment"
sourceUrl: "https://us.forums.blizzard.com/en/wow/t/2354050/492"
tags: ["forever", "beta"]
featured: false
draft: false
manual: true
---
La build 70205 de la beta de World of Warcraft: Forever es más rápida en Mac con chip Max o Pro. Los chips base como el del M4 Air van más lentos, según jugadores en los foros de Blizzard. Un desarrollador de Blizzard lo llama inesperado.

Los avisos vienen de un hilo sobre fallos gráficos en Mac que un jugador abrió el 18 de septiembre. Su primer mensaje, del dueño de un Mac Studio con M4 Max, recoge ya 26 fallos numerados y se actualiza con cada build. El hilo suma casi 500 respuestas, desde un M1 Pro hasta un M6.

## Más rápido en Max y Pro, más lento en los chips base

«La build de la semana que viene debería traer grandes mejoras de rendimiento», escribió Rommax, desarrollador de WoW, en el hilo el 2 de octubre. La build 70205 salió esa misma noche, antes de lo previsto.

Los chips Max y Pro mejoraron con ella, según el hilo. En un Mac Studio con M5 Max, la máquina en la que wowforever.be juega la beta, la 70205 también va claramente más fluida que la build anterior. Los chips base fueron en sentido contrario: un M4 Air, un M5 base y un M6 mini base perdieron muchos fotogramas. Rommax lo llama «sin duda inesperado» y dice que Blizzard lo revisará la semana que viene.

Los mensajes del archivo `gx.log` sobre `mtl_1_1` y una familia de GPU desconocida no son la causa, añade Rommax. Es un nombre antiguo para el único conjunto de shaders de Metal que tiene el juego.

## Un ajuste intercambiado cuesta fotogramas

Secondary Lighting funciona en High diga lo que diga el menú, descubrió un jugador. Rommax lo confirmó en el código el 3 de octubre:

> Oh, I see the bug in code. It's trying to use the raid secondary lighting setting for non-raid and visa-versa. The workaround would be to enable raid settings and make the raid settings the same as non-raid settings in the settings UI. Oops!

Hasta que llegue una corrección, el hilo aconseja poner Secondary Lighting en High tras cada inicio de sesión, aplicarlo y luego devolverlo a su valor. El fallo no se limita a los Mac: dos jugadores de Windows también lo tienen.

<figure class="wf-embed" data-wf-video="5VznZFoVXwU">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, Testing Client Update</span>
      <span class="wf-embed__meta">Reproduce el vídeo. invurse en YouTube, 4 minutos.</span>
    </span>
  </button>
</figure>

En este vídeo del 23 de septiembre, con una build anterior, Secondary Lighting en High da tirones fuertes en Stormwind y Fair va fluido.

## El tinte es más raro, pero sigue ahí

El tinte verde o magenta sobre el mundo aparece mucho menos en la 70205, pero cinco jugadores aún lo ven. Blizzard no logra reproducirlo, escribió Rommax: ni en un M1 Ultra, ni en un Mac Pro de 2019, ni en QA. Pide en cada aviso el lugar, la hora del servidor, la GPU y la versión de macOS.

Dos cierres durante la lluvia ya no ocurren en la 70205, y otro jugador ve corregido un fallo de sombras. El 4 de octubre se añadieron cuatro fallos nuevos, entre ellos lluvia que atraviesa un tejado y canales de Stormwind sin olas. Las sombras que desaparecen a una distancia fija de la cámara siguen ahí, confirmó esa tarde un jugador en Kharanos.

<figure class="wf-embed" data-wf-video="yFWqSdqlw_Q">
  <button type="button" class="wf-embed__play">
    <span class="wf-embed__icon" aria-hidden="true"></span>
    <span class="wf-embed__text">
      <span class="wf-embed__title">WoW Forever Beta, MacOS, September 24th Update</span>
      <span class="wf-embed__meta">Reproduce el vídeo. invurse en YouTube, 2 minutos.</span>
    </span>
  </button>
</figure>

Un cierre dentro del controlador de Metal solo se da en macOS 12 y 13, según Rommax. Actualizar a macOS 14 o posterior puede evitarlo.

## Los ajustes con menos fallos

El primer mensaje mantiene una lista de los ajustes que dan menos problemas en la 70205. Es un apaño, no una solución, y ningún ajuste frena el tinte.

| Ajuste | Valor |
|---|---|
| **Shadow Quality** | Good o superior |
| **Secondary Lighting** | High |
| **Compatibility Settings** | Los cuatro activados |
| **Render Scale** | 100% |
| **Todo lo demás** | 10, el máximo |

La build 69977 ya [corrigió un kernel panic y unas bandas en Mac](/es/news/a-new-beta-build-fixes-mac-and-controller-issues/) en septiembre. Qué correcciones traerá la próxima build para los chips base, Blizzard no lo dice.
