+++
title = "plate calculator"
date = "2025-01-06"
layout = "project"
tags = ["development", "javascript", "fitness"]
project_link = "http://platecalculator.xyz"
href = "live (use chrome)"
readingTime = "7"
+++

## overview

got into lifting over winter break and i always thought something like this existed but didn't see anything so i just got to building. solves the (somewhat nonexistent) problem of using too many plates to lift the same weight.

for example, if you wanted to lift 135 lbs using a 45lb barbell, would you use two 25lb plates and four 10lb plates, or would you simply use two 45lb plates (one on each end)?

# input: 
- which weights are available (and how many... more below)
- a "total weight" to be lifted with a barbell
- barbell weight

# output:
is it possible to create a barbell with this weight? if not, say no. if yes, give the most optimal (w.r.t number of plates) way this weight could be configured. i.e., minimizing the number of plates overall.

## mode 1: infinite plates ∞
obviously infinite plates don't exist but if you're lifting at a large commercial gym with more than 8-10 of each plate type you could just use this mode. this is the "normal" functionality (i.e. wanting to figure out the "normal" optimal configuration for plate choices) 

## mode 2: finite plates
not everyone lifts at a large rec center so for the home gym folks with a specific quantity of plate types and sizes, they can enter in whichever weights they have (and how many) and go from there.

## intended use:
if you can't do (or don't feel like doing) math in the gym then this is for you!