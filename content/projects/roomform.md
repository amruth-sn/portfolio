+++
title = "roomform.ai"
date = "2025-04-18"
layout = "project"
tags = [ "featured", "new", "development", "python", "typescript", "aws", "django", "docker", "next.js", "postgresql"]
project_link = "https://www.roomform.ai"
href = "roomform.ai"
readingTime = "20"
+++

## overview

our (collegiate) magnum opus. designed this with three friends as a part of our senior design project, but it turned into something much bigger.

## problem

when i moved into my apartment, i was lucky enough to have core furniture already installed by the guy who lived here before me (i just paid him for it). but when i wanted to buy something new, like a lamp or a new couch for the living room, etc., i faced an issue which is pretty common among home decorators: 

how do i know exactly if what i see in the store will fit in with the rest of my house? i can pedantically spend time measuring everything, but at the end of the day if i spend $400 on a couch that fits fine but looks terrible with the rest of my furniture, i won't be happy. i'll be lucky enough to get a refund, let alone having to carry the couch all the way back to the store.

the same applies for all furniture. when moving into an apartment, people want something easy to view their current furniture and anything new they want to buy. why not make it easy to interact with furniture models in the simplest way possible?

## competitor landscape
of course interior design tools and 3D tools exist. if they didn't, this project would be making billions. however, the learning curves are too steep, which is why interior designers exist (and are paid well) in the first place. it follows, then, that there's a reason why being able to hire an interior designer is a privilege meant for the ultra-rich. why can't average people be able to express their creativity too?

by maintaining a completely in-browser application (with a free tier), we have revolutionized the definition of being creative. gone are the days of having to pick up a textbook and attend university classes to learn <a href="https://www.blender.org" target="_blank">blender</a> just to get a measly sense for 3D modeling. anyone can do it now. and the ui is so simple a dog could do it too.

there is no freemium (let alone free) software that offers the ability to do most, if not all of the following:
- search for furniture using natural language and view thumbnails and descriptions
- render furniture models in a browser-based application for ease-of-access
- use advanced object controls like rescaling, moving across xyz plane, rotation, undo/redo, drag-and-drop
- capture the screen as a .png file or save the room as a .glb file
- generate custom floor plans from a 2D sketch with different drawing tools (straight line, bezel curve, freehand, etc.)
- change the height or texture of any wall on a whim
- view geometrically intelligent bounding boxes for 3D furniture models **and** 3D walls
- so much more...

and last, but definitely not least:
- generate a 3D model of furniture based on **ONE** picture taken of said furniture. no moving/framing/picturesque necessary, we'll use our ai models to intelligently segment and generate the model for you. you can, once again, save it as a .glb.

## stack
- next.js (ts). smooth, enterprise-grade, intuitive.
- three.js (ts). self-explanatory for 3D rendering using js, but.
- django. had a lot of deliberation between this and node. we opted for django because of its database orm, its concrete OOB auth system, our own familiarity with python, and python's straightforward-ness.
- postgresql on supabase. intuitive, easy to integrate with django's orm, and really easy for mvps. 
- aws. old reliable: cloudfront for content delivery. s3 for asset storage. ecs with fargate for backend container deployment. ec2 with gpu inference for our primary microservice as well as application load balancing.
- pineconeDB for vector embeddings. we also used the sentence-transformers keyBERT for embedding and tagging, and used openai's GPT4 to generate captions of our thumbnails of 3D models. 
- pytorch for model inference.


## challenges.
a lot. in fact, there are still bugs, and i'd love it if you could find some and point them out to us.

one of my favorite bug fixes/features i added was dumbfoundingly simple. and yet, if our project took off, this would save us exorbitant amounts of wasted money.

i implemented the backend for our search engine and kind of forgot about it, and one of my teammates came along and implemented the frontend, along with all of the mappings for thumbnails, descriptions, etc.

this implementation was amazing, but, per usual, nobody really paid attention to our django logs in the docker container during local deployment. it was only after i had deployed the cluster to ECS when i realized, we were making **an api call for every character being searched**.

for example: if i typed in "chair", we would make a separate request for "c", a separate request for "ch", etc., as i typed the word in, and displayed all search results for each. the underlying querying implementation was efficient enough (small-scale) so it wasn't really noticeable unless you really paid attention.

the "<a href="https://en.wikipedia.org/wiki/Ostrich_algorithm#:~:text=In%20computer%20science%2C%20the%20ostrich,pretend%20there%20is%20no%20problem%22." target="_blank">ostrich algorithm</a>" solution to this would just be to search when users hit the "enter" button or a distinctive "search" button, but this isn't cool.

i used my "computer engineering" skills for once and remembered our FPGA classes sophomore year, when we were introduced to the concept of debouncing button presses in order to allow signals to correctly propagate. using react's ``useRef`` and ``setTimeout``, i implemented a simple debouncer that would wait ``timeOutSetting`` ms until it made the api call, where ``timeOutSetting`` is a parameter that can be tweaked. if a new character gets typed before the timer expires, the timer resets. this also accounts for fast typers!

## future plans
a lot, once again.

scalability-wise, we have a ton of ideas. aws sqs/rabbitMQ for microservice queuing, multithreading for 3D rendering, more database tables/columns for more data to store, more furniture models, more detailed descriptions/tags/embeddings, more robust search engine (elasticsearch), etc., and most importantly, more **features**!

## people
a big shoutout to jack edelist, brennan mahoney, and zane mroue. 

another big thanks to the BU ECE department for granting us our first "pre-seed round", a whopping $750. jokes aside, this money carried us a long way, and we wouldn't have been able to deploy anything in time for our presentations without it.

.
.
.
.

reminder to myself: write more, add pictures of finalized mvp!