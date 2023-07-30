---
layout: post
title: "Syncing LED corsage"
date: 2023-02-10 11:19:53 +0200
categories: Project
image: /images/20230210/20230729_144952.jpg
---

Steal the show on the dance-floor with these LED corsages that sync their colors and animations. These wearable lights have several different modes, from slowly spinning to fast flashing, that can match the setting. And when your partner changes their settings, your light will change too. 

![Demonstration of the syned colors across devices](https://rubensmit.com/images/20230210/ezgif-4-a6c1458c64.gif)

The corsage consists of a ESP8266 with a small Neopixel ring and two buttons. The buttons can be used to change the color and animation mode of the corsage. These settings are transmitted via ESP-NOW to another corsage so their color and animation modes are synced. The PCB design is meant to be worn on a suit or dress.

A battery management chip and a lipo battery can be attached to the back to make it portable. With the USB-C port it can be charged in minutes. This amounts to about 25 grams, light enough to be held by magnets or a clip.

Currently supported animations are solid, slow flash, quick flash  strobe, heartbeat, spinner and rainbow wheel. The colors range from red, green, blue, magenta, cyan, yellow and rainbow loop.

Check out the [documentation](https://github.com/RubenSmit/corsage) on how you can make one yourself.
