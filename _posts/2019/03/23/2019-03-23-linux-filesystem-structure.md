In this article, I want to present a general overview on the directory structure in Linux.

The purpose of this article is to show only the overall structure of Linux directories, and the article will contain only description of top-level directories. If one would like to read more thorough description about various concepts described here, see [the "Sources" section at the end of this article](#sources).

## Three disclaimers before we start

**This article is intended only to show some basic concepts of the directory structure of the family of the operating systems that use the Linux kernel (referred here as "Linux").** It is not intended to be a manual or a guide. In case of any doubts, prior to this article one should refer to standards, normative documents or regulatory documents of any described concepts.

**This article is not intended to be comprehensive on any subject**, especially neither on Linux, operating systems nor their directory structures. I might have forget about some important things or aspects of things, or just missed them when reading various documentations. Additionally, there might be cases that I did not forget about a thing being important **objectively**, but not decided to describe it because I have not found it important **subjectively**.

Lastly, **please be aware that I am not an expert in Linux, operating systems nor operating system administration.** I might have made typos, mistakes and errors describing the subject (although I tried not to make any).

## Preface

- It is assumed that the article is generally written in the context of Linux. Some parts may be true also in the context of Unix or other operating system – but to be sure whether this is the case, prior to this article one should always refer to appropriate definitions and standards of particular terms, concepts, technologies etc.

- The term "kernel" used within this article means the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel).

- The term "Linux directory structure" used within this article means the structure of directories existing by default in most Linux distrubutions. Not every described directory must appear in every Linux distribution.

    Also, some may call the Linux directory structure a "Linux filesystem structure", and also the standard behind it is called "Filesystem Hierarchy Standard" (see below the section ["The origin of the directory structure on Linux"](#the-origin-of-the-directory-structure-on-linux)). For details, see for example [Wikipedia's article about filesystem](https://en.wikipedia.org/wiki/File_system) and [Wikipedia's article about directory structure](https://en.wikipedia.org/wiki/Directory_structure).

    I do not know which term is more appropriate. Within this article, I am using the term "directory structure".

- The terms "directory" and "folder" may be understood in two ways: (1) they are equivalent, or (2) they are not equivalent (that is, terms "directory structure" and "folder structure" may be understand as distinct ones). In this article, I am using mostly the "directory" term; the "folder" term is used only when the context demands speaking about a folder and not a directory. For details about distinction and definitions of these terms, see for example [Wikipedia's article about directory](https://en.wikipedia.org/wiki/Directory_(computing)) or [this StackExchange thread](https://stackoverflow.com/questions/5078676/what-is-the-difference-between-a-directory-and-a-folder).
- The directories described are not put in strictly alphabetical order, as it is usually done. Instead, I have tried to put similar directories next to each other (e.g. the `/sbin` directory next to the `/bin` directory).

## The origin of the directory structure on Linux

Directory structure on most Linux distributions is more or less compliant with the [Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) (often referred to as "FHS"). This standard was created in 1994; its first name was FSSTND (short for "filesystem standard"), so one may come across this pre-existing name in some standards or other documents. This standard is part of the [Linux Standard Base](https://en.wikipedia.org/wiki/Linux_Standard_Base) (sometimes referred to as "LSB"). Linux Standard Base is a project intended to increase compatibility between various operating systems.

At the time of writing this article, Filesystem Hierarchy Standard is maintained by the [Linux Foundation](https://en.wikipedia.org/wiki/Linux_Foundation), and its last version is 3.0 (released in 2015). In this article, I refer to this standard as "FHS", and wherever I mention "the current version of FHS", I am referring the 3.0 version.

For the information whether and how much a particular Linux distribution is compliant with FHS, refer to the documentation of the given distribution, or to Wikipedia.

**Note:** **This article is not intended to describe the whole and exact Filesystem Hierarchy Standard, but only a part of it with some modifications that exists in most Linux distributions. Therefore, this article also covers some directories that are not compliant with this standard.** Writing it, I have not been using only FHS's documentation, but also various articles available on the internet (I mention them directly in the text or in the ["Sources" section](#sources) at the end of this article). In the case when a directory is compliant with this standard, one can find more complex definitions and rules on the internet than described here. **When in doubts, refer to the [FHS documentation](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html).** Remember also that usually the Linux directory structure is itself far more complex than described here, in a way that some directories described here have complex set of subdirectories. For details, refer also to the [FHS documentation](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html).

## The rationale of the directory structure on Linux

To know the rationale that stands behind FHS (and probably generally behind creating directories in such a way), refer for example to:
- [FHS's preface](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch01.html);
- [the chapter 2 of FHS](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch02.html);
- [the background of FHS](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch07s02.html).

To know the rationale that stands behind particular conventions and directories of FHS, refer to its particular pages.

## The directory structure

- **Note:** the term "shall" used in this section is used mainly in cases when none of the sources that I have seen makes it clear whether something is required, optional or disallowed. Hence, it refers to one of two cases:
    1. If a directory is mentioned by FHS, the phrase "shall do something" means either "what the operating system implementing FHS is expected to do", or "what it usually does".
    2. If a directory is not mentioned by FHS, the phrase "shall do something" means "what the operating system implementing FHS usually does".

    This term does not refer to what particular applications have to do, or are disallowed to do. Moreover, particular applications might follow their own ways of placing their files, as FHS allows different places for those files.

    FHS, instead of this term, uses often (always?) the present tense of particular verbs – for example, a directory "contains" or "stores" files. It is not clear to me what it exactly means by that, therefore I have chosen not to follow this convention.

    For details on the usage of the term "shall", see the [Merriam-Webster page about shall](https://www.merriam-webster.com/dictionary/shall).

- **Note:** the sentence "This directory is not required nor optional as of the current version of FHS" used in this section means that FHS does not emphasize neither requiring nor allowing existance of this directory. **But since I have not read the whole FHS – that is, I have not read most of the parts about subdirectories – I cannot say whether the directory is mentioned anywhere in the standard.** It may be mentioned on particular pages, for example as a side note. Nonetheless, as FHS states, it is not forbidden to create some not mentioned directories (in the root hierarchy), but:
    > Distributions should not create new directories in the root hierarchy without extremely careful consideration of the consequences including for application portability.

    (It is not clear to me whether the term "root hierarchy" used in this quotation means "top-level directories", nor whether there might be created additional directories in the whole hierarchy – not only at the top level.)

### The `/` (root) directory

- This directory shall contain the entire directory structure. The kernel images have to be placed either here or in the `/boot` directory.
- For details, see [Wikipedia's article about the `/` directory](https://en.wikipedia.org/wiki/Root_directory) or [FHS's page on root filesystem](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03.html).

### The `/bin` directory

- The name may stand for "binary" or "binaries".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain essential system-wide executable binary files (e.g. basic shell commands, and all the commands that have to be present in the [single-user mode](https://en.wikipedia.org/wiki/Single_user_mode)). However, it is not clear to me whether it is required or optional for all the commands to be able to be run by every user.
- For details, see [FHS's page on the `/bin` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s04.html) or [LDP's article about the `/bin` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/bin.html).

### The `/sbin` directory

- The name may most probably stand for "system binary files" or "system binaries".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- Similarily to the `/bin` directory, this directory shall contain essential system-wide executable binary files. In opposite to the `/bin` directory, the commands provided by these files shall be used for system administration. Moreover, quoting FHS:
    > Deciding what things go into "sbin" directories is simple: if a normal (not a system administrator) user will ever run it directly, then it must be placed in one of the "bin" directories. Ordinary users should not have to place any of the sbin directories in their path.
- For details, see [FHS's page on the `/sbin` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s16.html) or [LDP's article about the `/sbin` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/sbin.html).

### The `/boot` directory

- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain [bootloader](https://en.wikipedia.org/wiki/Booting#BOOT-LOADER) files (= files used during boot-up process) except configuration ones not needed at boot time and the map installer (it is not clear to me what a map installer is). The kernel images have to be placed either here or in the `/` (root) directory. The bootloader configuration files not needed at boot time have to be placed in the `/etc` directory.
- For details, see [FHS's page on the `/boot` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s05.html) or [LDP's article about the `/boot` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/boot.html).

### The `/cdrom` directory

- This directory is not required nor optional as of the current version of FHS.
- I have not found any standardized definition of this directory. However, there exist some explanations on the internet, for example [this thread on Ask Ubuntu](https://askubuntu.com/questions/13706/why-does-cdrom-folder-exist-shouldnt-it-be-media-cdrom-or-mnt-cdrom).

### The `/dev` directory

- The name may stand for "device" or "devices".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain [device files](https://en.wikipedia.org/wiki/Device_file) (e.g. `/dev/hda`), including pseudo-device files (e.g. `/dev/null`; sometimes they are called "special files").
- For details, see [FHS's page on the `/dev` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s06.html) or [LDP's article about the `/dev` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/dev.html).

### The `/etc` directory

- The name has been standing for various things – for details, see [Wikipedia's article about FHS](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard).
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain both host-specific system-wide configuration files (e.g. configuration files of individual applications), as well as some startup and shutdown shell scripts used to start/stop individual applications. This directory cannot contain binary files. The bootloader configuration files not needed at boot time have to be placed in this directory.
- For details, see [FHS's page on the `/etc` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s07.html#ftn.idm236096797696) or [LDP's article about the `/etc` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/etc.html).

### The `/home` directory

- As of the current version of FHS, this directory, or symbolic link to a directory, must be present in the `/` directory if the corresponding subsystem is installed (though it is marked as "optional"; also, it is not clear to me what a corresponding subsystem is).
- This directory shall contain user-specific files (e.g. user's personal files and particular user's configuration files).
- For details, see [FHS's page on the `/home` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s08.html) or [LDP's article about the `/home` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/home.html).
- For details on the home directory across various operating systems, see [Wikipedia's article about home directory](https://en.wikipedia.org/wiki/Home_directory).

### The `/root` directory

- As of the current version of FHS, this directory, or symbolic link to a directory, must be present in the `/` directory if the corresponding subsystem is installed (though it is marked as "optional"; also, it is not clear to me what a corresponding subsystem is).
- This directory shall contain root-specific files, just like the `/home` directory contains user-specific files (i.e. regarding root as a user).
- For details, see [FHS's page on the `/root` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s14.html) or [LDP's article about the `/root` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/root.html).

### The `/lib` directory

- The name may stand for "library" or "libraries".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain shared libraries used by the binaries located in the `/bin` and `/sbin` directories. Quoting FHS:
    > Shared libraries that are only necessary for binaries in /usr (such as any X Window binaries) must not be in /lib. Only the shared libraries required to run binaries in /bin and /sbin may be here.
    
    If the corresponding subsystem is installed, it also has to contain [kernel modules](https://en.wikipedia.org/wiki/Loadable_kernel_module).
- For details, see [FHS's page on the `/lib` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s09.html) or [LDP's article about the `/lib` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/lib.html). For differences between shared and static libraries, see for example [this Stack Overflow thread](https://stackoverflow.com/questions/2649334/difference-between-static-and-shared-libraries).

### The `/lib<qual>` directory

- The part of the name before the `<qual>` postfix may stand for "library" or "libraries" (for the `<qual>` postfix, see below).
- As of the current version of FHS, this directory, or symbolic link to a directory, must be present in the `/` directory if the corresponding subsystem is installed (though it is marked as "optional"; also, it is not clear to me what a corresponding subsystem is).
- As FHS states, this directory is a variant of the `/lib` directory. It is allowed for these operating systems which supports more than one binary format of a file to place files of certain formats in separate directories. Commonly, the `<qual>` part of the name is equal either to "32" or "64" (if a system supports 32-bit and/or 64-bit binaries). The requirements are very similar to the `/lib` directory, with some exceptions.
- For details, see [FHS's page on the `/lib<qual>` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s10.html).

### The `/lost+found` directory

- This directory is not required nor optional as of the current version of FHS.
- This directory shall contain files that were recovered during the filesystem check, which is performed usually after it was corrupted / damaged.
- For details, see [LDP's article about the `/lost+found` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/lostfound.html) or [this StackExchange thread about the `/lost+found` directory](https://unix.stackexchange.com/questions/18154/what-is-the-purpose-of-the-lostfound-folder-in-linux-and-unix).

### The `/media` directory

- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain files that are mount points for filesystems on removable devices (in other words, [removable media](https://en.wikipedia.org/wiki/Removable_media), hence the name; see also Wikipedia's article about [data storage](https://en.wikipedia.org/wiki/Data_storage)). As long as removable devices being mounted here are being connected only temporarily, one may say that this directory also contains temporary files.
- For details, see [FHS's page on the `/media` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html).

### The `/mnt` directory

- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain temporarily mounted filesystems – when the administrator needs them. In opposite to the `/media` directory, they need not be on removable devices. For example, one may want to mount a partition with the Windows operating system being on the same hard drive as the Linux operating system to perform some recovery.
- For details, see [FHS's page on the `/mnt` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s12.html).

### The `/opt` directory

- The name stands for "optional".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- Quoting FHS:
    > /opt is reserved for the installation of add-on application software packages.
    
    But it is not clear to me what an add-on application software package is.
- For details, see [FHS's page on the `/opt` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s13.html) or [LDP's article about the `/opt` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/opt.html).

### The `/proc` directory

- The name may stand for "process" or "processes".
- This directory shall be a mount point for the [procfs (proc) virtual filesystem](https://en.wikipedia.org/wiki/Procfs). The `procfs` filesystem is a [virtual filesystem](https://en.wikipedia.org/wiki/Virtual_file_system) that makes available information about processes, kernel and various system runtime information.
- This directory is not required nor optional as of the current version of FHS. However, quoting FHS:
    > The proc filesystem is the de-facto standard Linux method for handling process and system information, rather than /dev/kmem and other similar methods. We strongly encourage this for the storage and retrieval of process information as well as other kernel and memory information.
- For details, see [FHS's section on the `/proc` filesystem](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch06.html#procKernelAndProcessInformationVir) or [LDP's article about the `/proc` directory](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/proc.html).

### The `/run` directory

- The name may stand for "run-time".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain information about the system since the last boot. It should not be writable for unprivileged users, although there may be subdirectories within it which may be writable for particular users. (However, it is not clear to me whether an unpriviliged user always means a non-root user, or whether it means also non-administrators.) All the files must be removed or truncated when booting.
- For details, see [FHS's page on the `/run` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s15.html).

### The `/selinux` directory

- The name originates from the name of the [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux) kernel module.
- This directory is not required nor optional as of the current version of FHS.
- This directory shall be a mount point for the SELinux virtual filesystem. In newer versions of some systems (which probably mean: not only Linux), this filesystem may also reside in the directory `/sys/fs/selinux`.
- For details about the SELinux filesystem, refer to [the official SELinux project page about the SELinux filesystem](http://selinuxproject.org/page/NB_LSM#SELinux_Filesystem).

### The `/srv` directory

- The name may stand for "service" or "services".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain files created and used by services provided by the operating system (considered as a server). For example, if the system is a WWW and FTP server, it may contain both the website files and the files served through the FTP protocol.
- For details, see [FHS's page on the `/srv` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s17.html).

### The `/sys` directory

- This directory shall be a mount point for the [sysfs virtual filesystem](https://en.wikipedia.org/wiki/Sysfs). The `sysfs` filesystem is a [virtual filesystem](https://en.wikipedia.org/wiki/Virtual_file_system) that makes available the following information:
    - similar to the `procfs` filesystem, it makes available information about processes and various system runtime information;
    - similar to the `/dev` directory, it makes available information about devices.
- This directory is not required nor optional as of the current version of FHS. However, quoting FHS:
    > The sys filesystem is the location where information about devices, drivers, and some kernel features is exposed. Its underlying structure is determined by the particular Linux kernel being used at the moment, and is otherwise unspecified.
- For details, see [FHS's section on the `/sys` filesystem](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch06.html#sysKernelAndSystemInformation).

### The `/tmp` directory

- The name stands for "temporary".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain temporary files for particular programs. Quoting FHS:
    > Programs must not assume that any files or directories in /tmp are preserved between invocations of the program. (...) Although data stored in /tmp may be deleted in a site-specific manner, it is recommended that files and directories located in /tmp be deleted whenever the system is booted.
- For details, see [FHS's page on the `/tmp` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s18.html).

### The `/usr` directory

- The name stands for "user"; in the context of Linux, it may form phrases like "user-related resources" or "User System Resources".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- This directory shall contain files of applications that the user has installed (not to confuse with the applications' files of a particular user, which they may not install themselves): binaries, libraries etc. The files here shall be read-only (not changed) and shareable.
- For details, see [FHS's page on the `/usr` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch04.html).

### The `/var` directory

- The name stands for "variable".
- This directory, or symbolic link to a directory, is required by the current version of FHS.
- In opposite to the `/usr` directory, this directory shall contain files that are expected to change (speaking differently, are expected to grow). (However, it is not clear to me whether they are disallowed to be read-only.) The directory may contain files both shareable and not shareable. For example, it may contain log files, lock files, spool files (e.g. print queues), mail files, and temporary files that are needed across reboots (for temporary files that need not be preserved across reboots, see ["The `/tmp` directory" section of this article](#the-/tmp-directory)).
- For details, see [FHS's page on the `/var` directory](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch05.html).

## Other ways of separating files

Besides the directory structure that is common in case of Linux, there exist other ways of separating files:
- For general view of possible directory structure and some part of Windows 10 folder structure, see for example [Wikipedia's article about directory structure](https://en.wikipedia.org/wiki/Directory_structure).
- For some Unix-specific directory structure (not strictly FHS), see for example [this subsection of Wikipedia's article about Unix filesystem](https://en.wikipedia.org/wiki/Unix_filesystem#Conventional_directory_layout).
- For Mac OS, see for example [this Apple's article about the macOS Sierra folders](https://support.apple.com/kb/PH25270?locale=en_US) or [this For Dummies's article about the OS X folders](https://www.dummies.com/computers/macs/mac-operating-systems/basics-of-the-os-x-folder-structure/).

## Sources

Below are specified only sources not specified above.

### Specific sources

- [Linux-specific information in the context of FHS](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch06.html#linux)
- [A LINFO's page on the single user mode](http://www.linfo.org/single_user_mode.html)
- [A Red Hat's documentation on SELinux](https://web.mit.edu/rhel-doc/5/RHEL-5-manual/Deployment_Guide-en-US/ch-selinux.html) (of the version 5 of the RHEL; accessible on the MIT server)
- [SELinux Project Wiki's article about Linux Security Module and SELinux](http://selinuxproject.org/page/NB_LSM#SELinux_Filesystem)
- [An Ask Ubuntu's thread about the `/cdrom` folder](https://askubuntu.com/questions/13706/why-does-cdrom-folder-exist-shouldnt-it-be-media-cdrom-or-mnt-cdrom)
- [A How-To Geek's article about the `/lost+found` folder](https://www.howtogeek.com/282374/what-is-the-lostfound-folder-on-linux-and-macos/)

### General sources

- [A Linux.com's article about the Linux filesystem](https://www.linux.com/blog/learn/intro-to-linux/2018/4/linux-filesystem-explained)
- [Wikipedia's article about Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)
- [LDP's page on the FSSTND (version 2.3 final), the former version of FHS](http://www.tldp.org/LDP/Linux-Filesystem-Hierarchy/html/index.html)
- [A How-To Geek's article about the Linux directory structure](https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/)
- [Debian Wiki's article about Filesystem Hierarchy Standard](https://wiki.debian.org/FilesystemHierarchyStandard)
- [Filesystem Hierarchy Standard (version 3.0)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)

### Other links

- [The Linux Foundation's Referenced Specifications](https://refspecs.linuxfoundation.org/)