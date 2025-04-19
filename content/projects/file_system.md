+++
title = "file system"
date = "2023-12-13"
layout = "project"
tags = ["development", "c"]
project_link = "https://github.com/amruth-sn/file-system"
href = "source code"
readingTime = "9"
+++

# overview

a c-based implementation of a simplified file system. it mimics a windows-style FAT (file allocation table) architecture and supports core file ops like creating, reading, writing, deleting, and managing file descriptors. the project simulates a virtual disk environment for testing too.

# implementation

several key components:

- **superblock**: holds metadata about the file system layout, including directory and FAT sizes, and the starting block of data.
- **directory**: a statically allocated array that can hold up to 64 files, each entry storing file metadata like name, size, existence flag, reference count, and starting block.
- **FAT**: an array of 8192 integers representing the file allocation table, where each entry points to the next block in a file or indicates the end of a file.
- **file descriptor table**: manages open files with entries containing an offset, a usage flag, and an index linking to the directory.
- **fs_buffer**: a fixed-size buffer (4096 bytes) used for file system operations.

# core functions

- `make_fs()`: initializes the virtual disk, sets up the superblock, FAT, and directory, and writes them to disk.
- `mount_fs()`: loads the file system from disk into memory, reading the superblock, FAT, and directory.
- `umount_fs()`: writes the in-memory structures back to disk and closes the virtual disk.
- `fs_create()`: creates a new file, ensuring the name is valid and not already in use, and allocates a starting block in the FAT.
- `fs_open()`: opens an existing file by finding an available file descriptor and updating the reference count.
- `fs_close()`: closes an open file descriptor and decrements the corresponding reference count.
- `fs_write()` / `fs_read()`: handles writing to and reading from files, managing offsets and traversing the FAT as needed.
- `fs_delete()`: removes a file by clearing its directory entry and freeing its blocks in the FAT.

# future
definitely room for adding concurrent access controls.



