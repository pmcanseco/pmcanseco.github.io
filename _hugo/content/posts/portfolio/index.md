---
title: "Portfolio"
date: 2020-02-08T18:01:46-06:00
draft: true
toc: true
images:
tags:
  - untagged
---

## Project ARES – Senior Design Project
For this project, I was responsible for the command and control subsystem of a robot intended to mine lunar soil for NASA’s Robotic Mining Competition 2016. I wrote a GUI in C# for Windows which translated buttons (or Playstation DualShock 4) inputs into commands that are sent over Wifi (TCP Socket) and received by a Raspberry Pi onboard the robot itself running Linux. The Raspberry Pi then communicates with an (also onboard) Arduino Mega 2560 over a Serial UART in order to trigger GPIO, control motors, and gather sensor data. I also helped a lot with the soldering and assembly of the electrical systems on the robot.

The project website is here: https://pa.blocanse.co/fit-ares-nasa-rmc-2016/

A good demo video of the project in action can be seen here: https://www.youtube.com/watch?v=u45HVqiCiWg .

The robot in the video was a prototype testbed, at the time of filming the final robot had not been completed yet. You can see the wheels spinning, as well as the actuators (the black bars right in front of the left wheel) expanding/contracting. On the upper left is the Windows GUI and to the right of that is a console showing the commands the robot is seeing.

ares-demo

 

## Tech Support Work Tracking System
This was a work tracking GUI I created in my spare time to help automate processes at my school Tech Support office. The result is a webapp where technicians can enter systems into a database and the status of each system, as well as what’s been done and what’s left can be seen at a glance. It also included a tablet-based checklist portions where a technician can collect signatures when picking up a faculty or staff member’s PC. I was the sole worker on this project but had a lot of help from my colleagues in identifying how to automate tech support and computer repair work. A gamification system was later introduced to the app in order to help boost productivity to great success. Larger screenshots can be found here: http://pa.blocanse.co/resume/tsc .


 Gamification system to help increase productivity.

 PC Pickup Checklist with signature collection

 Main page, at a glance status of PC’s being worked on at the shop.


 Comments on each individual PC can be left by technicians for easier work hand-off and communication.

 

## LifeAdmin – Home Automation / Control Panel App
This is a small hobby project. I basically opened up the remote control to my bedroom’s ceiling fan and linked it up to an internet-conneted Arduino. This allowed me to control it via a small widget on my PC desktop, but I also made an Android app to go with it. You can see how it works and a screenshot of the app below. The app can also lock, wake and sleep my PC for maximum laziness 😀

{{< youtube kQ9SYa1yPjw >}}


{{< figure src="lifeadmin.png" caption="Android App to remotely control PC and bedroom ceiling fan." position="center" style="display: flex; flex-direction: column; align-items: center; max-height: 10em;" captionStyle="max-width: 20em;" >}}
