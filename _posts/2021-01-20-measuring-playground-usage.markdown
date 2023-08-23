---
layout: post
title: "Measuring playground usage"
date: 2021-01-20 08:01:23 +0100
categories: Research
image: /images/20210120/header.jpg
---

How do you measure the usage of a playground? The traditional way would be observing it, either physically or with a
camera. But this is costly and poses some privacy problems. As a result, very little is known about playground usage by
children. Is there another way to answer this question?

As students we were contacted by a manufacturer of playground equipment. They told us that the choice of what equipment
gets used in a playground is based on the gut feelings of adults. They have no data on what kind of equipment is popular
by children. So they asked if we could develop a technical solution to measure this.

## Research questions

The questions they wanted answered where:

- Is it possible to measure the usage of individual playground installations.
- Can we determine what kind of equipment is more popular.
- Can we use this data to predict wear on the equipment.

During our research we determined that you can classify playground equipment in two groups:

1. Movable equipment, like swings.
2. Static equipment, like climbing racks.

## Suitable sensors

Measuring usage of movable equipment proved to be easy. With a accelerometer it is easy to detect when the installation
is used. Measuring the usage of static equipment was harder than expected.

After researching many sensors we came up with two solutions. As most playground equipment is made of steel with a
coating it can act as a giant capacitive touch sensor. During our limited testing we proved that this is a viable
option.

![Testing capacitance of large climbing frames](/images/20210120/testing-capacitance-of-large-climbingframes.jpg)

Another option was using a low power microwave doppler radar. Using shielding the measurement area can be calibrated to
only span a small area.

## Vandalism

A lot of other sensors where considered, but there was one constraint that made a lot of these impractical; vandalism.
From our research we found that there are different kinds of vandalism ranging from toddler curiosity to teenage rage.
The mere fact that a sensor or some kind of technology is visible invites damage or vandalism.

The best solution is therefore to hide all electronics. Thus all optically based sensors, like PIR sensors, are
unusable. Transparent surfaces covering these sensors will get scratched by sandy children fingers or broken by vandals.

## Hiding in plain sight

Some playground equipment is screwed together. But exposed screws invite unscrewing and can pose a hazard. Therefore
they are usually covered by hard plastic covers. We found out that these covers can be repurposed to hide sensors and
electronics.

![Prototype with cap](/images/20210120/prototype-with-cap.jpg)

These covers are permeable for the radio signals needed to communicate with the sensors and for the doppler radar. As
they are already present on the playground equipment they dont stand out and do not invite more vandalism than usual.

## Sensor package

Our final solution consisted of a ESP32 that is placed inside the frame of playground equipment. Powered by a battery
it will stay in deep sleep most of the time, conserving battery. Hidden behind a plastic cap that mimics the screw
caps already used on the equipment. For moving equipment we used an accelerometer that pulls the ESP32 out of
deepsleep when movement is detected. For static installations we used the built-in capacitive touch functionality of
the ESP32. It is possible to pull the ESP32 out of deepsleep using capacitive touch.

When usage of the playground is detected the microcontrollers send the collected data to a central node via BLE or
WiFi. This node, another ESP32, has a more robust powersupply, it can for instance be placed inside a street lantern.
The central node has a cellular connection and will send the data to the cloud for processing.

## Conclusion
With our experimental setup we proved that it was possible to measure the usage of playgrounds. Even equipment
without movement can be monitored. The next step would be to perform field tests to prove that a sensor package can
be created that also works in a permanent installation.
