---
title: "Tom Ellis explica qué falló la primera noche de beta"
description: "El Senior Game Producer repasa una a una las desconexiones, el loot lento y los reinicios del 17 de septiembre, y qué cambió el equipo en cada caso."
date: 2026-09-19
category: forever
lang: es
manual: true
image: ../../../assets/posts/blizzard-forever-cinematic-dwarf.jpg
imageAlt: "Un hunter con capa de piel junto a un oso sobre un valle verde, de la cinemática oficial de World of Warcraft: Forever"
source: "Wowhead"
sourceUrl: "https://www.wowhead.com/forever/news/behind-the-scenes-of-the-wow-forever-beta-issues-tom-ellis-explains-on-x-382993"
tags: ["forever", "beta"]
featured: false
draft: false
---
La beta de World of Warcraft: Forever abrió el 17 de septiembre con desconexiones, colas largas y retraso en cada loot. El Senior Game Producer Tom Ellis publicó en X un mensaje largo sobre lo que salió mal, resumido por Wowhead. Es una mirada poco habitual a la maquinaria que hay detrás de una beta.

## El entorno es un montaje de pruebas

Ellis empieza por el marco. La beta no corre sobre un montaje de producción sino sobre el de beta y PTR, bastante menos potente. Una beta no suele atraer cifras grandes, así que ese hardware nunca se construyó para esto.

## Las desconexiones

Los jugadores pasaban la cola de acceso y luego salían despedidos. Esa cola en sí es normal: Battle.net limita el ritmo de los accesos para protegerse.

Las desconexiones fueron lo que más costó explicar, cerca de media hora según Ellis. Todos los servicios parecían aburridos, con procesador y memoria apenas usados, tanto en el lado del juego como en el de Battle.net. La causa resultó ser un sistema de medición que protege los servicios de Battle.net bajo mucha carga. La beta usa un único reino regional con dos conexiones, y ese montaje pequeño empujando muchísimos accesos descuadró el cálculo de ese sistema. Pasar esas dos conexiones a ocho abrió las compuertas.

Ellis añade que el equipo quiere más registro y avisos para cuando ese sistema actúa, porque nadie lo había visto saltar sin un problema de procesador evidente al lado.

## El loot lento

Después, lootear, aceptar misiones y todo lo que toca la base de datos tardaba. La base de datos del entorno PTR respondía despacio.

Los ingenieros de base de datos lanzaron a mano un analyze sobre todas las tablas y dejaron tareas para seguir haciéndolo. El motivo: algunas tablas son nuevas y las existentes recibían una cantidad enorme de inserciones, con patrones de consulta que nadie había visto, así que las estadísticas envejecían rápido. La velocidad volvió al instante.

## Los reinicios

Unas horas más tarde, los world pools que mueven la simulación del juego iban calientes de procesador y casi sin memoria. Las primeras máquinas virtuales cayeron ante el asesino de memoria y amenazaban con llevarse el hipervisor.

La causa: los mapas vacíos no se cerraban bien, así que procesador y memoria seguían llenándose. El arreglo pasó rápido por QA pero necesitaba reinicios para aplicarse, y por eso salió todo el mundo. El equipo aprovechó para añadir worlds extra y un segundo servicio regional.

A partir de ahí la beta fue fina, escribe Ellis, y los equipos de Classic siguieron atentos a cualquier cosa que bloqueara.
