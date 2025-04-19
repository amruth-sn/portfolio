+++
title = "automated git commits"
date = "2024-11-03"
layout = "project"
tags = ["development", "bash"]
project_link = "https://github.com/amruth-sn/automate-git-commits"
href = "source code"
+++

## overview

a tool for devs who want to streamline their git workflow. it uses the groq api to auto-generate commit messages based on your staged changes by tracking your ``git diff``.​

## how it works
the prepare-commit-msg hook taps into your git process and crafts a commit message using an llm. you can apply this hook across multiple repos using the update_hooks.sh script. just set your GROQ_API_KEY as an environment variable.

this setup is great for keeping your commit history clean and consistent. it’s open source under the mit license, so feel free to tweak it to fit your needs.​

## instructions
check source code.

## process
this took a few hours to source all of the bash scripts together. integrating groq wasn't hard but my prompt engineering skills suck so it's pretty naive at the moment.