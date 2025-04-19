+++
title = "pthreads library"
date = "2023-11-18"
layout = "project"
tags = ["development", "c"]
project_link = "https://github.com/amruth-sn/pthread_library"
href = "source code"
+++

# overview

this repo is a custom threading library built in c, designed to mimic core pthread functionality from scratch. it reimplements  threading primitives like `pthread_create`, `pthread_join`, and `pthread_exit`, along with basic semaphore support. this project definitely helped me explore how user-level threading and synchronization can be manually orchestrated in a unix-like environment.

# architecture

the core of the system revolves around a thread control block (TCB) array that can manage up to 128 threads. each TCB stores metadata like thread id, execution status (`ready`, `running`, `blocked`, `exited`), a `jmp_buf` for context switching, and a pointer to its allocated stack. there is also a global variable tracks the currently running thread and a signal-based timer (`sigalrm`) triggers context switches every 50ms via a scheduler function.

# threading model

- **pthread_create**: initializes the TCB for a new thread, sets up its stack, and prepares its context to jump into the specified start routine. the first call also sets up the scheduler and signal handler.
- **pthread_exit**: marks the current thread as exited, frees its resources, and invokes the scheduler to switch to the next ready thread.
- **pthread_join**: allows one thread to wait for another to finish. if the target thread hasn't exited, the calling thread is blocked until it does.

# synchronization

basic semaphore functionality is implemented using a custom `sema` struct. semaphores maintain a count and a queue of blocked threads. `sem_wait` decrements the count or blocks the thread if the count is zero, while `sem_post` increments the count and unblocks waiting threads. `sem_init` and `sem_destroy` handle initialization and cleanup.

