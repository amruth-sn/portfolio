+++
title = "automated recruiter emails"
date = "2025-03-23"
layout = "project"
tags = ["development", "python", "fastapi", "javascript", "playwright"]
project_link = "https://github.com/amruth-sn/auto-email"
href = "source code"
readingTime = "10"
+++

## overview

a fastapi-powered backend that automates the entire cold-emailing process for job applications. it handles scraping job info to generating and sending emails. i connected it to a google sheets app script and it runs locally with an ngrok tunnel to interact with from the browser for the apps script.

you start by pasting a linkedin job link into the sheet and the system kicks off a playwright script that scrapes the company name, job title, and job description. after this a separate playwright worker searches bing for recruiter or hiring manager profiles at the company (e.g. “recruiters at {company_name} site:linkedin.com”), finds the most relevant result, and adds that link to the sheet.

from there, it pings apollo.io’s api to enrich the data with the recruiter’s name and work email. the system then prompts the user for confirmation and then it prompts groq’s hosted llama 3.2 model to write a personalized cold email using all of the job/recruiter info and a json version of my resume. you get a preview of the generated email and on confirmation the system sends it using the gmail api. 

## challenges
you might wonder why i picked certain design choices. this project is the epitome of laziness, so, for example, i couldn't be bothered to pass in a .pdf or .docx of my resume to groq each time (more tokens = more money!) so i json-ified it once which makes it way less expensive.

i also was kind of forced into using ngrok to expose my computer's local ports to a url because that was the simplest way i could get the apps script (cloud-native) to access a local endpoint. 

## success rate
to be completely honest i didn't use this as much as i should have before landing a full-time offer. in the current market it has its pros and cons but i only sent out 10-15 emails.
- correct recruiter information retrieval rate: ~75%?
- well-formatted email rate: 90%? (easy to tune/tweak after)

## future
tons of potential for this, especially in the direction of agents. i could definitely look into migrating to airtable/notion for something production-grade in the future. i spun this up pretty quickly but depending on interest i'd look into turning this into something bigger. for now it'll stay as is.


.
.
.
.

reminder to myself: add images later!