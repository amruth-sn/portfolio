+++
title = "shell"
date = "2023-10-02"
layout = "project"
tags = ["development", "c"]
project_link = "https://github.com/amruth-sn/simple-shell"
href = "source code"
readingTime = "7"
+++

# overview

a custom-built shell written in c. replicates the core functionality of a unix shell, supporting features like command execution, piping, file redirection, and background process management. helped me understand how shells work under the hood.

# features

- **command execution**: runs both built-in and external commands.
- **piping**: allows the output of one command to be used as the input for another.
- **file redirection**: supports input (`<`) and output (`>`) redirection.
- **background processes**: enables commands to run in the background using `&`.

# implementation

the shell uses system calls like `fork()`, `exec()`, and `wait()` to manage processes. it parses user input to identify commands, arguments, and special characters for piping or redirection. for piping, it sets up pipes between processes. for redirection, it manipulates file descriptors to read from or write to files. background processes are handled by forking without waiting for the child process to finish.

# usage

compile the code using a c compiler like `gcc`, then run the executable. you'll get a prompt where you can enter commands just like in a regular shell. try out commands with pipes, redirection, or background execution to see how it handles them.

# purpose

this project definitely helped deepen my understanding of process management, inter-process communication, and input/output handling overall. 

