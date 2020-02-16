---
title: "Easily Test Your Game Boy Emulator Implementation"
date: 2020-02-15T22:31:10-07:00
draft: false
tags:
  - gameboy
  - emulation
  - testing
---

{{< image src="https://camo.githubusercontent.com/625b07495d4343ca6a1d770a6f937a486ed9b26e/68747470733a2f2f692e696d6775722e636f6d2f367a62646142332e676966" alt="gameboy bootrom" position="center" >}}

**TL;DR I have compiled a file of expected values for every register at 
each CPU cycle for the first 12,000 or so CPU cycles in JSON format. You 
can download it [here](https://github.com/pmcanseco/java-gb/blob/master/src/test/resources/full-bios.txt) 
and use it to easily test your Game Boy emulator for correctness.**

```json
[
  { 
    "a": 0, "b": 0, "c": 0, "d": 0,
    "e": 0, "f": 160, "h": 127, "l": 255,
    "pc": 12, "sp": 65534
  },
  {
    "a": 0, "b": 0, "c": 0, "d": 0,
    "e": 0, "f": 160, "h": 255, "l": 38,
    "pc": 15, "sp": 65534
  },
  // and so on... roughly 12,000 times.
]
``` 

## What is this?
This is the output of a program that took a screenshot of the debug window
of [BGB](http://bgb.bircd.org/) showing the CPU register values at each 
CPU cycle throughout the bootrom (scrolling Nintendo logo) sequence like this:

{{< image src="bgb-cpu-debugger.jpg" alt="BGB CPU Debugger" position="center" >}}

Each screenshot was ran through an optical character recognition (OCR) 
library called [Tesseract](https://github.com/tesseract-ocr/) in order to
extract the register values as strings. The resulting values were then 
dumped to JSON like in the example above.

A developer working on a Game Boy emulator could then easily write a test
program that keeps a counter to keep track of elapsed cpu cycles and use
that counter as an index to pull the expected values of each CPU register
from the JSON file and see if the values match. It could be used initially
to increase the correctness of an emulator, and then as a regression test 
to ensure previously-working CPU instructions aren't broken.

## How do I use it?
1. Download the [JSON file from here](https://github.com/pmcanseco/java-gb/blob/master/src/test/resources/full-bios.txt)
1. Unmarshal it into an array in-memory (it's just a 500KB file, any modern 
PC should be able to hold it in-memory with no problem.)
1. Start your emulator, pause it after the very first cycle.
1. Grab your CPU register values (pseudocode): `int actualRegA = cpu.RegisterA`
1. Grab your expected register values (pseudocode): `int expectedRegA = ExpValues[elapsedCycles].a`
1. If they match, whatever instruction was just executed by your CPU was
implemented correctly (woohoo!) or you got astronomically lucky (awww!)
1. Step your emulator CPU, pause it again, go to step 4.

Bonus points if you do this in a continuous integration system which runs
against each source code change.

## Caveats
It's just the first 12,000 or so instructions. The Nintendo logo isn't even
visible by the time the CPU has executed 12,000 cycles. However, it's a
decent smoke test, and better than doing it manually 🙂

## Why?
Game Boy emulator development is difficult. Throughout the development of 
[java-gb](https://github.com/pmcanseco/java-gb) I was constantly struggling
with figuring out how to test for correctness. I had resorted to using
[BGB](http://bgb.bircd.org/)'s debugger, manually stepping the CPU and
seeing if the register values matched those of my implementation. It was a
painful and manual process.

It turns out that BGB has a _-headless_ command-line argument that it claims
runs with no window or I/O of any kind. I thought this would be useful for
automated testing, but I wasn't able to get it to work. 

I really wanted a simple, easy, and repeatable way to smoke/regression test 
my Game Boy emulator, so here we are.

---

Did you find this useful? Are there any errata that should be fixed? Let me know!
My contact information is on the homepage.

