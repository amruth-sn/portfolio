+++
title = "snowpilot"
date = "2024-12-18"
layout = "project"
tags = ["development", "python", "liquibase", "harness", "ci-cd", "snowflake"]
project_link = "https://www.roomform.ai"
href = "source code"
docs = "https://snowflake-docs.vercel.app/en/getting-started"
readingTime = "6"
+++

## overview

when i worked with state street corporation as a part of Boston University's cloud computing class (ENG EC 528), i built a system to automate resource deployments (orchestrating database migrations) from snowflake over the course 4 months. 

this project exposed me to the inner workings of ci/cd pipelines and cloud-native deployment, in addition to how database migrations truly work.

## stack

- we used python (and pytest) for the backend, because of its easy-to-learn orm structures and its cohesion with liquibase. 
- we used Harness to orchestrate ci/cd pathways and manage deployments.


## architecture

<!-- ![snowpilot architecture](/images/snowflake-architecture.png "snowpilot architecture") -->
{{< figure src="/images/snowflake-architecture.png" title="snowflake architecture" width="800px" >}}


this figure shows the overall architecture of our project, detailing the specific functions of liquibase and harness.

## future
this project was initially intended for the folks over at state street, but we were given the authorization to make an open-sourced cli version. we packaged this up over on github for anyone to use!