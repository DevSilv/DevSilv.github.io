---
layout: post
title: "My backup shell script"
date: 2018-10-14
tags: linux shell programming bash
---

In this article I will show how I have prepared my backup shell script. I made it in the [Bash language](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), on the [Fedora operating system](https://en.wikipedia.org/wiki/Fedora_(operating_system)).

This article is more or less educational; it is not intended to show my full script, just some concepts that I use. I will try to show myself and others what I have learned about shell (in particular, about Bash). There will also be a bit of Linux knowledge.

## Three disclaimers before we start

**This article is neither intended to be a manual or a guide, nor to contain any tips or advices.** In case of any doubts, prior to this article one should refer to standards, manuals and official guidelines of particular websites, services, utilities, programs or systems.

**This article is not intended to be comprehensive on any subject**, especially neither on backups, Bash, shell scripting, Fedora nor Linux. I might have forget about some important things or aspects of things, or just missed them when reading various documentations. Additionally, there might be cases that I did not forget about a thing being important **objectively**, but not decided to describe it because I have not found it important **subjectively**.

Lastly, **please be aware that I am not an expert (yet) in Bash, Linux, backups, system administration nor data management.** I might have made typos, mistakes and errors describing the subject (although I tried not to make any).

## Warning about executing code, running applications and opening websites

**You (the reader) are always the only one responsible for the code that you execute, the applications that you run, the websites that you open and the files that you download – also in case of this article.**

If you do not know exactly what a piece of code does, do not execute it.

If you do not know exactly what an application does, do not run it.

If you do not trust a website or a server, do not click on a link to it, and do not download any files from it.

If you think that you _rather know_ what a code or an application does, or _rather trust_ a website – check it once again.

## Introduction

I will try to introduce backups and how I decided to do them in a questions and answers (Q&A) form.

### 1. OK, backups, backups, but why backup something at all?

[Backups are a key thing](https://www.tldp.org/LDP/sag/html/backups.html) in using computer – regardless whether one uses it for playing, administering or scientific research. If there are users that creates or manages any data, and the data are important to them or anyone else – backups should be done.

### 2. so, I agree that backups are important. But, what to backup? All the data?

One should backup the data that they consider important for them. If they think that all the data are important – then it should be all the data.

But, sometimes it is hard to say, which data are important. In this case, one should choose to backup all the data.

But, sometimes backuping all the data are impossible because, for example, it would take too much time or money. Also, one could not have a space to store multiple copies of all the data (even compressed). In this case, one has to decide, what data will be backuped.

To ease the decision, they may split the data by the criterion of **when** the content has changed from the chosen backup (be it full or not). Then, they will backup only the data that has changed (or has been created). Examples of such a backup are incremental and differential backups (they are separate methods – see this [EaseUS article](https://www.easeus.com/backup-utility/differential-backup-vs-incremental-backup.html) and this [R1Soft article](https://www.r1soft.com/blog/the-four-methods-of-server-backup), both on backup methods).

In the case of the script which conceptions I want to describe, I have chosen to backup only these data that are created or changed by myself (mainly residing in my [`/home` directory](http://www.linfo.org/home_directory.html)). I chose not to backup the data that are created or changed by the operating system. I chose to do full backups because I do not have many data.

### 3. Let us suppose that I already chose a backup method. How regularly should I backup? Once a day, a week, a month?

How regularly one should backup their data, may depend on several factors:
1. how much disk space they have available for backups (on a local device, a network/remote device etc.);
2. in case they chose to store backups e.g. in the paid cloud, how much money they have to get additional disk space;
3. whether they decided to remove, modify or do not touch older backups in case of lack of space;
4. other factors.

I hate complex solutions (although still tend to make them). Writing the script and this article, I have tried to simplify things as much as I could. Since this is just a simple shell script, I chose not to use any external, online service, just to use traditional storage media. Since I have enough space on them for at least two backups, I chose to store all the previous backups. If the storage media will get full, I will simply remove the oldest backup. Included that I know both myself and my needs for feeling secure, I chose to do a backup once a day.

## The script

I will try to describe my script starting with the simplest conceptions and ending with the most complex ones.

There are three main ways of performing backups (and the computer operations at all): using the script, using the terminal and using the GUI. Sometimes it is better to use the GUI, specifically I consider it far more intuitive than the terminal. But, the utilities' names are not always equivalent in both methods; also, I am accustomed to the terminal. Therefore, I will describe any operations other than those in the script as performed in the terminal.

Finally, yet before we start, let us make a couple of assumptions:
- As fedora – that is, [Linux](https://en.wikipedia.org/wiki/Linux) – is a [multi-user operating system](https://en.wikipedia.org/wiki/Multi-user_software), let the current user name be `u`.
- Since all the data that we want to backup are accessed on Fedora, we will describe them in terms of files and directories within a certain [_filesystem_](https://en.wikipedia.org/wiki/File_system). More specifically, Fedora uses the [Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard). Therefore, we will also refer to the [_path_](https://en.wikipedia.org/wiki/Path_(computing)) of each file and directory. for details, see for example the [Fedora Project Wiki's article about FHS](https://fedoraproject.org/wiki/PackagingDrafts/Filesystem_Hierarchy_Standard_Version_3.0_(2015)) and the [Red Hat documentation on FHS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-filesystem#s1-filesystem-fhs).
- Let the device on which the backups will reside have the same filesystem as the operating system. This device may also be the same hard drive on which the operating system resides. we will do that just to avoid problems with moving data between different filesystems. To clarify, I use the [ext4 filesystem](https://en.wikipedia.org/wiki/Ext4).
- Let the [_label_](https://en.wikipedia.org/wiki/Volume_(computing)#Volume_label) of the [_volume_](https://en.wikipedia.org/wiki/Volume_(computing)) of the device be `d`.
- Let the [_mount point_](http://www.linfo.org/mount_point.html) for the device have the path `/mnt/d`. I chose the `/mnt` directory because, in Linux systems, this directory is intended to temporary mount a storage device's filesystem. For details, see this [LINFO explanation of the `/mnt` directory](http://www.linfo.org/mnt.html).
- Let the primary [_command prompt_](https://en.wikipedia.org/wiki/Command-line_interface#Command_prompt) for the current user be `[u]$`. Generally, one can set an arbitrary string as the primary command prompt in Fedora (most probably, not arbitrary at all; for details, see the note about characters, filenames and encodings in Bash in the "Further considerations" section below). For details on why I have chosen such a string, see the note about command prompt in the "Further considerations" section below.
- Let the names of files in this article contain only the following characters: letters, digits and hyphens (or "dashes" – see the the "Further considerations" section for the difference). For details, see the note about characters, filenames and encodings in Bash in the "Further considerations" section below.
- Let the script have the name `backup-script`. For details on possible changes to this name, see the "Further considerations" section below.

Let us go straight to the code now.

1. For now, we know that:
    - we want to do a full backup, and
    - it should be done once a day, and lastly
    - we want to store all the previous backups – and if there is no space left on the device, we decide to remove some older backups.

2. The simplest approach to do a full backup will be doing it by hand, file by file, using for example the [GNU cp utility](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) (provided with Fedora by default):
    ```
    [u]$ cp /path/to/file-1/file-1 /mnt/d/backup-2018-Oct-13/path/to/file-1
    [u]$ cp /path/to/file-2/file-2 /mnt/d/backup-2018-Oct-13/path/to/file-2
    [u]$ cp ...
    ```

    This implies that we have to do three things. Firstly, we have to write all commands for all directories manually. Secondly, we have to create a new directory for the new backup before backuping, like that (using for example the [GNU mkdir utility](https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html), provided with Fedora by default):
    ```
    [u]$ mkdir /mnt/d/backup-2018-Oct-13
    ```

    Thirdly, if we do not want to store all the files in one directory, inside the new directory we should make the same directory structure as in our operating system:
    ```
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to/file-1
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to/file-2
    [u]$ ...
    ```

3. The above approach requires that the user has either few enough files or much enough patience. Probably, it would be hard even with the help of the [_Bash completion feature_](https://www.tldp.org/LDP/abs/html/tabexpansion.html) (for details, see [man 1 bash](http://man7.org/linux/man-pages/man1/bash.1.html), search for the section titled "Completing").

    But, why do we have to specify all the files manually each time we would like to copy them? Maybe it would be a good way to make a list of all files to backup and somehow feed the copy command with it.
    
    Unfortunately, the cp utility does not support specifying a list of files. Therefore, we have to use another utility (or write our own script – but I will not cover this possibility in this article). There are many possible alternatives; we could use for example the [Info-ZIP zip utility](http://infozip.sourceforge.net/Zip.html) (by default provided in Fedora). Please do not be scared by its last release date (for the time of writing this article, it is 2008).
    
    **UPDATE 2018 nov 30:** If possible, one should use a utility with the most recent version. But for the needs of the article, I will stick to that utility.
    
    zip supports specifying list of files, and it has two more advantages. Firstly, we need not to create a directory for each backup. Instead, zip will just create for us a regular `.zip` file (simply put). That is why we will have one file for one backup. The second advantage is even better – zip will automatically create all the needed subdirectories (that is, the whole directory structure).
    
    So, now we will not need to create any directories, assuming that we want to store the `.zip` files in the device's root directory. Assuming also that we store the list of files in a file under the path `/path/to/file-list`, the backup process could now look like this:
    ```
    [u]$ zip backup-2018-Oct-13.zip -@ < /path/to/file-list
    ```

    There is one restriction: the `-@` option makes zip read from [_stdin_](http://man7.org/linux/man-pages/man3/stdin.3.html). But, we store the list of files in a file, not provide it through stdin. Therefore, we have to [_redirect_](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirections) the file to stdin (`< /path/to/file-list`) (for details, see [LDP info about redirections](https://www.tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17894)).
    
    With the zip utility, the list of files has to look like this:
    ```
    [u]$ cat /path/to/file-list
    /path/to/file-1/file-1
    /path/to/file-2/file-2
    ...
    [u]$
    ```
    
    Simply put, the zip utility will copy the files under these paths one by one, from top to bottom, to the specified `.zip` file.

4. By default, zip will copy only files within the specified directory, not considering any subdirectories. We want to copy the whole directory structure (the so-called directory tree), so we would want to additionally specify the `-r` option, that will cause zip to copy all the subdirectories and files within them recursively. Now, the command to make a backup will look like this:
    ```
    [u]$ zip backup-2018-Oct-13.zip -r -@ < /path/to/file-list
    ```

5. In some cases, instead of redirection, it is more useful to [_pipe_](http://www.linfo.org/pipes.html) the output of another command (that has somehow processed our file). For an example of such a case, let us assume that we want to store comments in our `file-list` file. We would like to remember why we have decided to backup particular files. Let us assume that we stick to the convention from shell scripts of indicating comments by using the `#` character ("hashtag" or "sharp"). In general, we could use any sequence of characters that we want, but still, we want to simplify things. To simplify a bit more, we will use `#` only at the start of a line – to indicate that the whole line is commented out.

    With comments, the `file-list` file could look like this:
    ```
    [u]$ cat /path/to/file-list
    # comment 1
    /path/to/file-1/file-1
    # comment 2
    /path/to/file-2/file-2
    ...
    [u]$
    ```

    Without any modification of the backup command, storing comments is impossible (zip would try to copy comments as if they were files). Since zip requires the list of files that it is fed to contain only paths, we have to find a way to get rid of the comments **before** we fed zip with the list.
    
    A helpful utility now would be the [GNU grep utility](https://www.gnu.org/software/grep/) (provided by default with Fedora). Not going into details, grep will search specified file or files for lines containing a specified pattern and produces the specified output. In our case, the file will be our `file-list` file and the output will be the content of this file without lines starting with `#`. The pattern will be: "a hash character at the beginning of the line". But, because grep does not understand English phrases as patterns, we would like to write it in another form. The form that grep understands are [regular expressions](https://www.gnu.org/software/grep/manual/html_node/Regular-Expressions.html#Regular-Expressions).
    
    The GNU grep utility recognizes three regular expression types. We will use the basic regular expression type (BRE). Our phrase will look like this: `^#`. The [`^` symbol](https://en.wikipedia.org/wiki/Caret) (_caret_, _circumflex_ or just _hat_) means in this context "the beginning of a line". The `#` symbol means in this context itself. But, if we specify the pattern as such, grep will (as it does by default) **show us** the lines with this pattern. To invert this behavior, that is to **ignore** these lines, we need to specify the `-v` option.
    
    So, our backup command will now look like this:
    ```
    [u]$ grep -v "^#" /path/to/file-list | zip backup-2018-Oct-13.zip -r -@
    ```
    (The `""` (double quotes) are not needed, but I had to use them in this article, because without them my editor, Visual Studio Code, does not properly highlight the rest of the command).

6. We made a pretty one-line command to backup all our data! But, the need for writing this command manually every day (or even searching somehow for it through the [shell history](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Facilities.html)) would still require that:
    - the user has enough patience, and
    - the user remembers about it every day, and lastly
    - either the device is all the time connected to the computer (that is, its filesystem is mounted in the operating system), or the user connects it each time before running the script.

    We want to avoid these requirements. Because of that, we would like to **automate** execution of our command. This way, the first and second requirements will be gone and backups shall be done every day automatically. For simplicity, let us do not remove the third requirement – let us assume for now that the device is connected all the time (I will mention this in the "further considerations" section below).
    
    Generally, commands **actually can** be run "just like that", without a _script_. But, since I have assumed that this will not be the case in our case, we shall move them into a script. In our case it will be a [_shell script_](https://en.wikipedia.org/wiki/Shell_script) (for details on other computer script types, see the [Wikipedia's article about scripting language](https://en.wikipedia.org/wiki/Scripting_language)).

    But, before we write our command in a script, it will be a good thing to discuss automating it. In Fedora, we have couple of ways to automatically run our scripts. The easiest two for me are the [_cron_ and _anacron_ utilities](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/). The general difference between them is that cron gives more flexibility, whereas anacron is simpler to start with.
    
7. Now, let us move our command into a script. We have to create a text file and paste/write the command inside. We can do this using, for example, the [_vim editor_](https://en.wikipedia.org/wiki/Vim_(text_editor)); I often use it now, therefore I have chosen it.
        
    There are also plenty of [other text editors](https://www.tecmint.com/best-open-source-linux-text-editors/) available for Fedora and other Linux distributions (command-line or GUI), for example GNOME's [gedit](https://wiki.gnome.org/Apps/Gedit), GNU's [Emacs](https://www.gnu.org/software/emacs/) or GNU's [nano](https://www.nano-editor.org/).
    
    So, let us create a text file, write our command inside it and save the file. But, as a plain text file could be an idea of a shell script for us, for Bash it is just a plain text file, not a script. Depending on the way of executing it and various operating system settings, the file may or may not be recognized as a shell script by the operating system. To be sure that it will be recognize by Fedora as a Bash script, according to the [Bash documentation on scripts](https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html#Shell-Scripts), in the first line of it we put a special character sequence `#!`, which is called the [_shebang_](https://en.wikipedia.org/wiki/Shebang_(Unix)), with the [absolute](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) path of the bash interpreter following it. In my case, this line looks like this:
    ```
    #!/bin/bash
    ```

    This implies that Bash is installed in my operating system in the `/bin` directory (it is the default directory for Bash executables in Fedora). sSo, the whole content of our script should now contain two lines and look like this:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-2018-Oct-13.zip -r -@
    ```
    
    Generally, I do not remember whether I have seen any advices on skipping this line, and I remember a couple of advices on putting it. By the way, on the internet one may come across examples where there is space between the shebang and the path to the bash interpreter (like that: `#! /bin/bash`). I do not know of any documentation describing the space as a bad thing. In my case, I have just chosen not to use it. Other advices: the aforementioned [Bash documentation](https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html#Shell-Scripts) uses space in one example, and the aforementioned [Wikipedia's article](https://en.wikipedia.org/wiki/Shebang_(Unix)#Syntax) says that it is optional.

8. As our script shall be executed daily, and we store the actual date in the name of the backup file, this will force us to change the script everyday. This contradicts with the automation that we want to achieve, and again, requires that we have both memory and patience. But, as we still want in the name of the backup file to have a reminder of the date that the backup was created on, we should use some command or utility to tell the script to write the current date for us.

    At this point, the most useful utility will be for us the [GNU _date_ utility](https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html#date-invocation). The default behavior of date (that is, when run with no option) is to display the current time. We can see how it works in my system:
    ```
    [u]$ date
    Mon Oct 15 00:17:56 CEST 2018
    [u]$ 
    ```

    As stated in the aforementioned [date documentation](https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html#date-invocation), the time format depends on a couple of [environment variables](https://en.wikipedia.org/wiki/Environment_variable) that are responsible for the current [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)). We can customize it as we want by feeding the date command with the `+` character followed by a string that specifies the format. Available options are specified in [man 1 date](http://man7.org/linux/man-pages/man1/date.1.html). Let us suppose that the following format fits our needs:
    ```
    [u]$ date +%Y-%M-%d
    2018-11-15
    [u]$ 
    ```

    I do not know whether it is or is not necessary to surround the string after the `+` character by either single or double quotes. The aforementioned [man 1 date](http://man7.org/linux/man-pages/man1/date.1.html) manual does not use the word "quote", but there are used single quotes in the examples. The only case that requires proper quoting that I do know of is when a `date` command is **nested** in some other string. In that case, using inappropriate quotes (single instead of double, or in reverse, or maybe even no quotes at all) may lead to incorrect interpretation of the whole script – so one should be careful.

    If we would write/paste the `date` command directly in the file name, in the same place as the date string was, Bash will not recognize that it is a `date` command – instead, it will treat this as a part of our `zip` command. It lets the `zip` command execute, and zip will return an error. For details: this is because, according to the [man 1 zip](https://linux.die.net/man/1/zip), it will search for a file named `+%Y-%b-%d.zip`. And, while most probably we do not have a file with such a name in the [current directory](http://www.linfo.org/current_directory.html), it just fails. We can see this erroneous command in my system:
    ```
    [u]$ zip backup-date +%Y-%b-%d.zip -r -@ < testfile
	    zip warning: name not matched: +%Y-%b-%d.zip

    zip error: Nothing to do! (try: zip -r -@ backup-date . -i +%Y-%b-%d.zip)
    [u]$ 
    ```

    The part `try: (...)` is beyond the scope of this article, so I will not describe it. For details, see the aforementioned [man 1 zip](https://linux.die.net/man/1/zip), or search the [StackExchange website](https://stackexchange.com/) for details).
    
    As we need the command _output_, we should execute the command. The easiest way is to do this in the same place as the date before. There are couple of ways to execute the command "in place" and get its output. In this case, the most relevant is probably the _command substitution Bash feature_ (see [man 1 bash](http://man7.org/linux/man-pages/man1/bash.1.html), search for the section titled "Command Substitution"). Not going into details, when Bash sees it, it executes the specified command in a subshell and return the result.
    
    Bash command substitution comes in two possible notations: the older with backquotes: `` `command` ``, and the newer with the dollar sign and parentheses: `$(command)`. For example:
    ```
    [u]$ echo "today is $(date)"
    today is Fri Oct 19 02:20:28 CEST 2018
    [u]$ echo "today is `date`"
    today is Fri Oct 19 02:20:30 CEST 2018
    [u]$ 
    ```

    According for example to these [reasons why it is preferred to use parentheses over backticks in a shell](https://mywiki.wooledge.org/BashFAQ/082), we will use the syntax with parentheses.
    
    So, we will use it in our script in the following way:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    ```

9. As we are sure that our script will be understood by Fedora and it is fully automated (in terms of code), let us move to make it be running daily by one of the aforementioned utilities – cron or anacron.

    As I wrote, the general difference between them is that cron is more flexible and anacron is simpler. Going into details: we have not said about that thing before because it seems obvious – our script should run everyday. While anacron guarantees this behaviour, as stated in the [Fedora documentation on anacron](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/#s1-autotasks-cron-anacron), it **is not** the case with cron.
    
    Not going into details, cron executes a script at a specified minute every hour, or at a specified hour every day etc. If we set it to execute the script at a specified hour every day, say 14:30, and if the operating system **would not** be running at this exact time, the script **will not** be executed on that day. It will be executed only the next day at this time (again, if only the operating system will be running the next day at this time).
    
    This would force us to remember the time that the script should be executed. This would be useless, since we want to automate backuping.
    
    On the other hand, in the case of anacron, if the operating system is not running at the time that the script is to be executed, the script **is set to be executed once the operating system will have started again**. For example, if the system would be shut down at 14:00 and turn at 15:00, while the script should be executed at 14:30, it will be executed directly after the boot at 15:00 (in fact, a few minutes after 15:00, depending on how fast the system boots). This is the reason why we will be using anacron instead of cron. For details, see the aforementioned [Fedora documentation on cron and anacron](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/#s1-autotasks-cron-anacron), or [man 8 anacron](http://man7.org/linux/man-pages/man8/anacron.8.html).

    I am aware of two ways of setting anacron executing a script on Fedora. Firstly, we could write an entry in the [`anacrontab` configuration file](http://man7.org/linux/man-pages/man5/anacrontab.5.html). Secondly, we could put a file in one (or more) of the following directories: `/etc/cron.daily`, `/etc/cron.weekly` and `/etc/cron.monthly`. Since the second way is simpler in my opinion and provide the functionality that we expect – that is, the possibility to run script daily – we will use it.

    Not going into details, anacron – at least its version provided with Fedora – works in the following way: it performs all the instructions (commands with the dates on which they have to be executed) that are written in its configuration file ([`/etc/anacrontab`](http://man7.org/linux/man-pages/man5/anacrontab.5.html)) – line by line.
    
    By default, there are three paths put already there to be run in the file: `/etc/cron.daily` every day, `/etc/cron.weekly` every week, and `/etc/cron.monthly` every month (there are specified the exact dates in the file; for details, see the aforementioned [man 5 anacrontab](http://man7.org/linux/man-pages/man5/anacrontab.5.html).) For details on this and the other two directories, see for example the [Ubuntu documentation on cron](https://help.ubuntu.com/community/CronHowto), search for section titled "Further Considerations".
    
    So, firstly, we have to save our script as a file and put (or copy) it into the `/etc/cron.daily` directory. Secondly, the _run-parts_ utility used (by default) in the `anacrontab` file requires the script to be _executable_ (that is, in this case, to have proper execute [permissions](http://www.linfo.org/permissions.html)). (By the way, this requirement is not always the case when dealing with scripts in Linux, but in this case the anacron default configuration requires it.) If this requirement would not be met, our script would not be executed. It is documented in [man 4 run-parts](https://linux.die.net/man/4/crontabs). In that manual, the run-parts utility (a bit unintuitively for me) is historically named `crontabs` (one should not mistake this name with the name `crontab`, without the "s" letter at the end, which is the [_cron_ utility configuration file](http://man7.org/linux/man-pages/man5/crontab.5.html)).
    
    Not going into details, run-parts runs all the scripts with the appropriate execute permissions in the specified directory. In the case of Fedora, I did not find any documentation about any restrictions that run-parts would put on the files, especially on their names, except that they have to be executable – but one should remember that it is not always the case. However, one should be aware that there may be other requirements in Fedora which I did not find – for example related to spaces in the names of the files. For details, see the "further considerations" section below and the aforementioned [man 4 run-parts](https://linux.die.net/man/4/crontabs).
    
    **UPDATE 2018 nov 30 – Warning:** This 9th point is talking (among other things) about Linux _permissions_. Linux permissions are very important, and always requires special attention. If you are not familiar with them, read all the mentions about permissions in this article with double attention. Moreover, think twice before you will do anything in your system.

    Our script will be run as the _root_ user, so we should pay extra attention whether the commands that we are writing in the script have both proper and intended syntax.

    Last but not least, how to set the execute permissions for our file? Most simply, it can be done using the [GNU _chmod_ utility](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html#chmod-invocation).
    
    Not going into details, in Linux, the permissions of a given file are divided into three groups: 1) permissions for a specified user (the owner of the file), 2) permissions for a specified group and 3) permissions for all other users. All of these groups may have set three possible permissions: A) the read permission, B) the write permission and C) the execute permission. Permissions meaning differ in the sense of a file and in the sense of a directory. For details, see the aforementioned [LINFO guide on permissions](http://www.linfo.org/permissions.html).

    As I have noticed, most Linux programs and utilities require only the owner of the file (including directories) to be able to execute it. This is the case with the chmod utility, so we will set only the execute permission for the owner.
    
    chmod uses the `u` letter to signify the permissions for the owner (most probably it stands for `user`), the `g` letter to signify the permissions for the group and the `o` letter to signify the permissions for other users. Speaking of possible permissions in groups, chmod uses the `r` letter to signify the read permission, the `w` letter to signify the write permission and the `x` letter to signify the execute permission.
    
    Not going into details of the syntax, in our case the first argument will be the aforementioned `u` letter followed by a plus (which means that the permission has to be set), followed by the `x` letter. The second argument to chmod will be the name of our script. So, we do it like this:
    ```
    [u]$ chmod u+x backup-script
    [u]$ 
    ```
    
    If the script would have this permission already set, nothing should change, as far as I have tested it. If one want to know for sure what is happening in that case, they may examine the [chmod source code](https://git.savannah.gnu.org/cgit/coreutils.git/tree/src/chmod.c).

10. Although we have written our backup command in the script, put the script in the proper directory and set the proper permissions, we may not be sure that our backup will be run everyday. It depends on whether anacron itself will be running within the time range specified in the `anacrontab` file.
    
    By default, in that file anacron sets the time to execute scripts daily as: 5 minutes plus random amount of minutes within the range [0-45] (most probably including the boundaries 0 and 45) past a randomly generated hour within the range the 3 and 22 hours (most probably including the boundaries 3 and 22). That means that our script may not be executed if the operating system will be running only between for example 23:00 and 02:30 and we do not change the `anacrontab` file.

    To avoid this problem, the only thing that I can think of is to set the time range in the `anacrontab` file according to the time range that one is sure that anacron will be running in each day that the data changes. However, since modifying the `anacrontab` file is outside the scope of this article, I will not describe it. In case of my script, **I just presumed that anacron will be running all the time that my system is running**. For details on how to change the `anacrontab` file, see for example the aforementioned [man 5 anacrontab](http://man7.org/linux/man-pages/man5/anacrontab.5.html).

11. As we know exactly in what cases our script will not be executed, it seems that all what is left to do is to handle a situation when there is no space left on our device to store backups.

    The simplest solution is that our script, before it starts, realizes that there is not enough free space to create additional backup file. Then, it removes one, oldest backup file, and does a new backup normally.
    
    But, here comes a problem. The size of the data that we want to backup may be constantly growing and shrinking. So, there may happen a situation when the size of the oldest backup file will be **smaller** than the size of the newest data to backup. Hence, even after removing one oldest file, there might be **not enough** free space to create a new file.
    
    (By the way, since we do a full backup, I personally consider it more likely that most of the time, the size of a backup file will be **larger** than the size of the backup file directly preceding it. It may be smaller occasionally, for example, if we remove a big, unnecessary amount of data at once.)

    I can imagine two possible ways of solving this problem.
    
    Firstly, we can check (that is, calculate) what is the size of the data to be backuped this time. Once this is done, we can start to removing file by file, checking after each removal whether the size of the free space is now big enough to create a new file. If this condition is fulfilled, we can then do a backup normally.
    
    (However, as with every removal, we have to be very careful. It may happen that all the previous backup files will be removed. If so, let us imagine that something is both interrupting the backup process and damaging our hard drive – for example power failure. In such a situation, we find ourselves without any backups and any actual data (at least until we try to recover it from the hard drive).)

    Secondly, instead of removing one or multiple files only in case we need more free space, we can do a removal **each time** we make a backup. In this case we will need to remove only one file each time. This will cause that all the time we will have a constant number of backup files. Since this approach better fits my needs, I have chosen it and I will describe it here. (The need for checking free space will not disappear though, but since I have estimated that it is not necessary in my case, I will not discuss such a calculation in this article.)

    Although, in case that we are removing files each time (assuming that we already have at least one file to remove), we would have only one backup file (the newest). If we would like to have two backup files on the device, we have to start removing after the second time that the script make a backup;. If we would like to have three backup files on the device, we have to start removing after the third time etc.
    
    Since we do not want to bother whether yesterday was either the first or the second time that the script is backuping, we will use a bit more sophisticated approach. We will make the script check before each removal whether there is already created a chosen number of backup files **plus one**. If it is, then we simply remove the last file. It may seem unnecessary if our script have already been working several days, but, not going into details, I personally think than it is better to be too general than to be too specific.

12. The simplest approach to remove a file would be to use the [GNU _rm_ utility](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html). This utility requires one argument, that is, the path (or just name) of the file to be removed. In case that we provide only name, the path to it will be assumed as the path to the current directory. rm has in fact several options to ease certain removal cases, but we will not need any of them.

    **Warning: the rm utility by default removes/destroys/deletes all the files that it is provided. There is no trash. There might be no way to recover the files. Therefore, one should be very careful when using it in any way.**
    
    To create an example file (with `touch`), check that it exists (with `ls`), remove it with `rm` and check again that is does not exist, one can do the following:
    ```
    [u]$ touch test
    [u]$ ls test
    test
    [u]$ rm test
    [u]$ ls test
    ls: cannot access 'test': No such file or directory
    [u]$ 
    ```

13. As we are sure how to remove a file, we cannot yet implement it in our script. Before invoking `rm`, we have to find the name of the file to remove. We have two possible ways:
    - Since the names of our files differ daily (each name contains the date that the file was created on) and dates can be compared by the day number, we can calculate what date should contain the name of the file that we want to remove.
    - We can make our script get all the actual existing backup files, sort it in the descendent order and get the first name from the list (that is, the last file, because remember, the order is descendant).
    
    We will use the second option, since it more straightforward in my opinion.

14. Here, I should make a note about what we should understand by "sorting". I am not sure if this is the case in every case, but it seems common in utilities displaying files available in various linux distributions to make use of the environment variables that defines the **locale** to define the sort order.
    
    For example, since in Fedora there exists the `LC_COLLATE` variable, the [GNU sort utility](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html) uses this variable by default to sort strings (therefore file names). For details on standard ways of defining locales in Linux distributions, see this [Wikipedia's article about POSIX](https://en.wikipedia.org/wiki/POSIX) and [POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/) itself (version from 2017).
    
    We will make use of the default sort order that GNU ls is ordering by in Fedora. This order is "alphabetical" (according to the ls documentation), but it is unclear, at least to me, what environment variables does ls use. Since this is outside the scope of this article, I will not elaborate on that. For details on how ls works generally, see the [GNU ls documentation](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html#FOOT4), and for the exact answer on how GNU ls works, one can examine the [ls source code](http://git.savannah.gnu.org/cgit/coreutils.git/tree/src/ls.c) (this link leads to the online version on the GNU website, but there are [other possibilities of viewing it](https://www.gnu.org/software/coreutils/coreutils.html)).
    
    To be exact, I will just mention that my current locale, stored in Fedora in the `LANG` variable, is `en_US.UTF-8`. (It is system-wide; in fact, I do not know whether there is a concept of a "user locale" in Linux distributions – however, logically, there should be. I will not elaborate on this, since I do not currently have enough knowledge.) 
    
    By the way, one can simply check their current settings in their Fedora installation using the localectl utility (that is, the `localectl` command in the terminal). For example, in my case:
    ```
    [u]$ localectl
    System Locale: LANG=en_US.UTF-8
        VC Keymap: us
       X11 Layout: us,pl
      X11 Variant: ,
    [u]$ 
    ```

15. Since we now see that the "sort part" is redundant (if we still want to do it manually, we can use for example the aforementioned [GNU sort utility](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html)), let us get all the actual backup files into a list.

    "list" is a term that is not well-defined in Bash documentation. In fact, I could not find any official definition of the "list" term in Bash. In this article, I will just try to use it in those contexts where its meaning will be obvious. For more details on this term, see the "further considerations" section below.

    We have already display a list of files in a directory using ls. But, in a situation like this it is not a good choice (at least with GNU ls; I do not know other versions of ls). For this is an important issue, let us elaborate on that.

    We will use an example: let us suppose that we create two files, each with **spaces** in its name. It does not matter how many of spaces are there, but there should not be any at the beginning and at the end of the name (because that would be slightly different case).
    
    To make the example more real-world, we will make use of the Bash [_filename expansion_](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html#Filename-Expansion) feature (also known as "globbing"). Simply put, any of the characters: `*` ("asterisk" or "star"), `?` and `[` may specify a [pattern](https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html#Pattern-Matching) in Bash. If any of them will appear in a string that Bash expects to be a file name, Bash will interpret it as a pattern and replace the whole string with a list of files that have names matching this pattern.
    
    Let us create the files:
    ```
    [u]$ touch 'test file 1' 'test file 2'
    [u]$ 
    ```
    
    Let us see how this files are displayed by ls by default, specifying full names (that is, without using a pattern):
    ```
    [u]$ ls 'test file 1' 'test file 2'
    'test file 1'  'test file 2'
    [u]$ 
    ```

    Nothing special so far, ls works as expected. But, it is good to distinguish that we **show this file to the user** – that is, we utilize the fact some characters may be indistinguishable in the program that they are displayed to the user. What if we would like to [_iterate_](https://en.wikipedia.org/wiki/Iteration#Computing) over the result list? One, who knows already Bash a little, may think that the [_for loop_ command](https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html) will see the results as we do. Let us see:
    ```
    [u]$ for name in $(ls 'test file' 'test file 2') ; do echo $name ; done
    test
    file
    1
    test
    file
    2
    [u]$ 
    ```

    Let us specify a pattern instead of full names:
    ```
    [u]$ for name in $(ls test*) ; do echo $name ; done
    test
    file
    1
    test
    file
    2
    [u]$ 
    ```

    As those two results are the same, we see that the pattern works as expected. It finds all of the words starting with the `test` string. However, we see that neither of those are the expected result. Though the way that we write it would indicate that there should be **one file name per line**, it displays **one word per line** – where the "word" term is related to the [Bash definition of a word](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) (at least from how I understand the Bash's documentation).

    I will not elaborate on this because I do not have enough knowledge to be certain of myself. Most probably, the reason for this behavior is that Bash split **a list of words** by **a space**, and that is, in this case, a separator for **both** bash and ls. To be sure and for details, see for example the aforementioned [Bash definitions](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) (search for "word" and "metacharacter"), this [Super User thread](https://superuser.com/questions/31464/looping-through-ls-results-in-bash-shell-script), and this [article on Greg's Wiki](http://mywiki.wooledge.org/ParsingLs).

    To solve this problem, we have at least two possibilities:
    
    Firstly, we can use just the filename expansion feature, without any additional utility like ls:
    ```
    [u]$ for name in test* ; do echo $name ; done
    test file 1
    test file 2
    [u]$ 
    ```

    Now, the results are as expected.

    Secondly, we can use Bash's [arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html):
    ```
    [u]$ array=(test*) ; for name in "${array[@]}" ; do echo $name ; done
    test file 1
    test file 2
    [u]$ 
    ```

    The results are the same, that is, as expected. In fact, I have used here a [variable](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters) (named `array`) and an array itself. I am describing variables in the point below, and I will describe arrays below in this point.

    Shortly speaking, in bash, there exists a concept named "arrays". Arrays are sort of a data type in the Bash language. However, I could not find any strict definition of them. In bash documentation, they are just referred to as "arrays". "An array" is in fact a "list" (or a "sequence") of elements. But, unlike the "list" case, the elements are stored. (Since I do not have enough knowledge on storing an array in Bash, I will not elaborate on this.)

    Lastly, which of the above possibilities are better? There is no strict answer. David Wheeler in his [article about filenames and pathnames](https://dwheeler.com/essays/filenames-in-shell.html) gives many examples of which one of the above for loops will work and which will not work in what case, and lists other possibilities. I will not elaborate on this, since I cannot be certain of myself in this field. And since this is a backup script, it should be reliable; therefore, we will use the second option, that is, arrays.
    
16. Next, to be exact: when it comes to a value in Bash, we do not have to _store_ it somewhere. But, since in our case it will simplify the results, we will store it.
    
    In Bash, the only way to store a value is a variable. We have to define a Bash variable and _assign_ our list to it.

    When it comes to naming this variable, we should know a little thing: there in fact exists in Bash a distinction between a _variable_ and a _parameter_. According to the [Bash's documentation on parameters](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters), a _variable_ is a kind of _parameter_. There are [definitions of a _word_ and a _name_](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) that make the distinction between them. But for now, we only need to know that a variable stores a value, and its name may consist only of letters, numbers, underscores and has to begin with a letter or the underscore.

    Variables in Bash are case-sensitive, what results from practice, but I could not find any documentation that confirms it. After all, there is for example this [TLDP guide on Bash variables](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html) that confirms it (see section "3.2.2. Creating variables").
    
    Also, I could not find any documentation that makes a strict distinction between variables capitalized and not capitalized (or with mixed case). There are conventions that emphasizes some aspects of naming variables with all characters capitalized and with neither capitalized – for example, see this [thread on Stack Overflow about naming Bash variables](https://stackoverflow.com/questions/673055/correct-bash-and-shell-script-variable-capitalization). The conventions emphasize one important aspect of naming Bash variables: neither variable should have the same name (including case of its letters) as another variable, defined already. Since actually there are [variables already defined by Bash](https://www.gnu.org/software/bash/manual/html_node/Shell-Variables.html#Shell-Variables), and all of them have all the letters capitalized, we will stick to the convention of having all our variables named in lower case.
    
17. Included everything said so far, let us name our variable `backup_files_list`. We create our variable and assign a value to it using the `=` operator. By the way, one should make [a distinction between two meanings of the `=` operator](https://www.tldp.org/LDP/abs/html/varassignment.html): depending on the context, it may mean either an _assignment_ or a _comparison_. If it is a comparison, [there are required spaces around it](http://www.tldp.org/LDP/abs/html/comparison-ops.html#EQUALSIGNREF).

    There **may be no whitespaces before and after the equality sign** (unlike a few other well known programming languages, for example C, Java, Javascript and Scilab). If there were any, most probably the whole assignment would be interpreted by Bash in an unintended way (for details, see for example this general [thread on StackExchange about spaces in shell assignments](https://unix.stackexchange.com/questions/131766/why-does-my-shell-script-choke-on-whitespace-or-other-special-characters)).

    Let us write the assignment in console first to see how it works; we will add it to our script later. Including that we have earlier decided to use arrays, we could write the following:
    ```
    [u]$ backup_files_list=(backup*)
    [u]$ 
    ```

    From testing, I can say (this is not clear in the Bash documentation) that the filename expansion will occur now. I do not want to elaborate on this, since I am not certain of myself. In any case, we can just display the value of our array – that is, all its elements:
    ```
    [u]$ echo ${backup_files_list[@]}
    test file 1 test file 2
    [u]$ 
    ```

    As [Bash documentation on arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html) says, the expression `${backup_files_list[@]}` expands each element of our variable to a separate word.

    Lastly, we could write the assignment in our script:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    backup_files_list=(backup*)
    ```

18. We will now use our variable in the [`if` command](https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs). Not going into details, `if` checks the status that a given list of commands (a "condition") returns, and performs the commands from another list if the status equals to `0`. `if` has more expanded syntax than that, but we will use only what I have just described. One should be aware that the term "list" used here (most probably, shortly for "list of commands") has a different meaning than normally. This meaning is well-defined in Bash documentation and, simply put, it means a sequence of pipelines. For details, see [Bash documentation on lists of commands](https://www.gnu.org/software/bash/manual/html_node/Lists.html#Lists).

    We will make use of the double-bracket syntax (`[[` and `]]`), which provides a way to check if a condition is fulfilled. It is good to remember that not all Bash expansions are performed between these double square brackets. (For details, see the aforementioned [Bash documentation on conditional constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html).)

    There are many [_conditional expressions_](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html) available in Bash, but we will use just one: the binary arithmetic operator `-gt` ("greater than"). Simply put, it checks whether the first argument is greater than the second. Both arguments have to be integers. If the condition is fulfilled, the operator returns `0` (that is, "true"; for the explanation why `0` means "true" and `1` means "false" in Bash, see for example this [Stack Overflow answer](https://stackoverflow.com/a/2933855/4752834)).

    So, we have to check whether the number of file names that our array `backup_files_list` holds are greater or equal to a given number of files that we want to leave. If it is, then our script shall remove the file with name held in the first element of our array (that is, the earliest one).

    Let us most or less arbitrarily assume that the number of files that we want to leave is `5`. Now, we write the `if` command in the following way:
    ```
    if [[ ${#backup_files_list[@]} -gt 5 ]] ; then
        rm ${backup_files_list[0]}
    fi
    ```

    Let us not concentrate on the `;` (semicolon) and `then` that are part of the syntax of `if`. For details, see the aforementioned [`if` command documentation](https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs). Getting the number of array items is in Bash most simply obtained by the `#` symbol put before the array name, but after the left curly brace. For details, see the aforementioned [array syntax](https://www.gnu.org/software/bash/manual/html_node/Arrays.html).

    Lastly, we write the `if` command in our script like that:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    backup_files_list=(backup*)
    if [[ ${#backup_files_list[@]} -gt 5 ]] ; then
        rm ${backup_files_list[0]}
    fi
    ```

    **Warning: do not confuse the `@` symbol ("at") with the `0` number (zero).** Especially, with my display and font they look very similar. `@` symbol is used to refer to all the elements of a Bash's array. The `0` number is used to refer to the first element of an array. If we accidentally use the `@` symbol in the above code in place of the `0` number – that is, if we write `rm ${backup_files_list[@]}` – **we would remove all of our backup files.** They would not go to the trash bin, although in some cases they might be recovered. For details, see for example this [StackExchange thread](https://unix.stackexchange.com/questions/10883/where-do-files-go-when-the-rm-command-is-issued). For some deeper tips on how rm works, see for example this [StackExchange thread](https://stackoverflow.com/questions/21517600/how-does-rm-work-what-does-rm-do). And for some tips on how to **safely** use the rm utility, one can see for example this [StackExchange answer about bad and good habits with rm](https://apple.stackexchange.com/a/17637/307477) (even though it is held on a website with questions about the [Apple company](https://www.apple.com/) software).

19. It seems that the main part of our script is done. Additionally, one may think of:
    - Explicitly defining when and how to [_exit_](https://www.tldp.org/LDP/abs/html/exit-status.html) the script (for details, see this [ubuntuforums[TODO] thread](https://ubuntuforums.org/showthread.php?t=1436547), this [askubuntu[TODO] thread](https://askubuntu.com/questions/85250/is-it-preferred-to-avoid-use-of-exit-in-bash-scripts-as-much-as-possible), and this [StackExchange thread](https://unix.stackexchange.com/questions/308207/exit-code-at-the-end-of-a-bash-script) about exiting a shell script).
    - Adding comments in the script. Comments usually have the function of indicating the reasons why a piece of code looks the way it looks. They might be very important in case one would some day forget what a particular piece of code does, and wanted to remember. In bash, if a word begins with the `#` symbol (hashtag, number sign, sharp), everything to the right of this symbol (included this symbol) is treated as a comment, and is not interpreted by Bash in any way. For details, see [Bash documentation on comments](https://www.gnu.org/software/bash/manual/html_node/Comments.html). For tips on bad and good comment styles, see for example this [StackExchange thread](https://softwareengineering.stackexchange.com/questions/119600/beginners-guide-to-writing-comments) and this [medium-freecodecamp[TODO] article](https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83).
    
## Further considerations

### A note about command prompt

I have chosen the string `[u]$` as the main command prompt in Bash for the following reasons:
1. I do not remember it for sure, but possibly the square brackets are defined by default in Fedora, and I considered them fitting enough for the purpose of this article.
2. The user name inside is defined by me, for clarity of the examples.
3. The dollar symbol is defined by default in Fedora, and I considered it fitting enough for the purpose of this article. For more details on why I did not change this symbol, see this [explanation of prompt on StackExchange](https://unix.stackexchange.com/a/291734) and this [explanation of prompt on superuser[TODO]](https://superuser.com/questions/57575/what-is-the-origin-of-the-unix-dollar-prompt/57613#57613).

### A note about the "list" term

For some of us, the term "list" that I have used in this article – and that is used several times in the Bash documentation – may be confusing. I could not find any documentation that defines it in any way. What is more, in Bash documentation it seems to indicate different meanings.

Wherever I am using this term in this article, I am assuming that it is self-explanatory. Sorry if it is not. For details, one may see [my own question on Stack Overflow on a "list" in Bash](https://stackoverflow.com/questions/52901012/what-is-a-list-in-bash).

### A note about Bash arrays problems

Arrays generally are very useful (for example when dealing with the [script parameters](https://www.lifewire.com/pass-arguments-to-bash-script-2200571)), but here I would to mention one thing about their syntax that I think may be confusing. If we would like to iterate on arrays elements, we could do something like that:
```
[u]$ array=(1 2 3) ; for elem in ${array[@]} ; do echo $elem ; done
1
2
3
[u]$ 
```

Nothing special so far. But if we want to store elements with spaces in an array, things get a little bit complicated:
```
[u]$ array=('1 2' '3 4') ; for elem in ${array[@]} ; do echo $elem ; done
1
2
3
4
[u]$ 
```

As we can see, bash split the elements of the array by space, which is put as one of the default separator in the `IFS` variable. This behavior was suggested to me by this [Stack Overflow answer](https://stackoverflow.com/a/9089186/4752834). It will behave the same (at least from what I observed), if we apply the second syntax to get all the array elements:
```
[u]$ array=('1 2' '3 4') ; for elem in ${array[*]} ; do echo $elem ; done
1
2
3
4
[u]$ 
```

To display it correctly, one straight way – described in [Bash documentation on arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html) – is to **quote** the reference to the array:
```
[u]$ array=('1 2' '3 4') ; for elem in "${array[@]}" ; do echo $elem ; done
1 2
3 4
[u]$ 
```

And, **one should remember** that the `${array[*]}` syntax works differently than that. Let us see this syntax with quoting:
```
[u]$ array=('1 2' '3 4') ; for elem in "${array[*]}" ; do echo $elem ; done
1 2 3 4
[u]$ 
```

Bash made a long word from all of the elements of the array. Let me quote the Bash manual:
> Any element of an array may be referenced using ${name[subscript]}. The braces are required to avoid conflicts with the shell's filename expansion operators. If the subscript is '`@`' or '`*`', the word expands to all members of the array name. These subscripts differ only when the word appears within double quotes. If the word is double-quoted, ${name[`*`]} expands to a single word with the value of each array member separated by the first character of the IFS variable, and ${name[`@`]} expands each element of name to a separate word.

Another way to handle this problem is for example to remove the space from IFS – that is, to set it to the same value, but without space:
```
IFS='\t\n'
```

We removed the space from the `IFS` variable. We could now use the syntax without quoting as above, and it would work as intended. In fact, I have noticed that changing the value of `IFS` is in general not so rare way of handle spaces in filenames in Bash. For details on handling spaces in filenames, see below in this section the note about characters, filenames and encodings in Bash. And, for details how to get the current value of `IFS`, see for example this [askubuntu[TODO] answer](https://askubuntu.com/a/852099/884523).

### A note about naming shell scripts

As far as I am currently aware, there are two conventions of naming shell scripts: the first with the `sh` extension (for example, `my-script.sh`), and the second without it (for example, `my-script`). On the internet, there are discussions about that – see for example this [StackExchange thread](https://unix.stackexchange.com/questions/182882/use-sh-or-bash-extension-for-bash-scripts) and this [Stack Overflow thread](https://stackoverflow.com/questions/27813563/what-is-the-bash-file-extension).

There are also recommendations, like this [Google guidelines on shell scripts extension](https://google.github.io/styleguide/shell.xml?showone=File_Extensions#File_Extensions). According to this guideline, I have decided not to use `sh` extension in the name of the script described in this article.

By the way, I do not know whether there exists a Linux distribution or a [desktop environment](https://en.wikipedia.org/wiki/Desktop_environment) that differentiates shell scripts based on their extension.

### A note about the terms "script" and "file"

In the context of this article, by "a script" I want to mean "a type of file", but "a file" is not "a type of script" for me. Therefore, these two terms are not interchangeable for me. In the article, there could be places where I have written "script", but it would be more appropriate to write "file". Also, there could be places where i have written "file", but it would be more appropriate to write "script". Sorry if you find such places.

### A note about the run-parts utility

Run-parts runs files inside a directory. On the internet, one may come across different requirements for the files to be run by it. As I have noticed, they differ among various versions of anacron in different Linux distributions. For example, in Ubuntu 18.04 LTS there are [documented restrictions in the run-parts manual](http://manpages.ubuntu.com/manpages/bionic/man8/run-parts.8.html) on the names of the files to be executed.

In the case of Fedora, the only requirement that I have found is that the files have to be executable. Surprisingly, what I have checked in my configuration, they need not to be executable by the owner – which is, as I have noticed, common in case of executables in linux – only _either_ by the owner, the owner group or others; that is, just one execute permission of three is enough. To be sure, in my configuration and using anacron with its default configuration, I have tried and successfully executed a file with an intentionally complicated name `1test_f-d.ABC`.

### A note about portability of code in this article and POSIX

**All code in this article is not intended to be portable** (especially not in the case of filenames – see below). It is written to be working only in GNU bash version 4.4.23(1)-release (i686-redhat-linux-gnu) installed on Fedora Workstation 27 32-bit, using Linux kernel version 4.17.19-100.fc27.i686+PAE, and having encoding set to UTF-8 with Unicode. It may work the same or similarly on a different configuration, but it should not be treated as a rule.

Speaking about standards, Bash implements POSIX with a couple of exceptions. For details, see the documentation of [Bash POSIX mode](https://www.gnu.org/software/bash/manual/html_node/Bash-POSIX-Mode.html).

Speaking about portability problems, for details on what problems may occur if one would like to put some common characters in filenames (particularly space), one could see this extensive [David Wheeler article about filename problems](https://dwheeler.com/essays/fixing-unix-linux-filenames.html).

For tips on how to test whether a script is portable (or POSIX-compliant) enough according to one's needs, see for example this [Stack Overflow thread about POSIX and portability](https://unix.stackexchange.com/questions/48786/how-can-i-test-for-posix-compliance-of-shell-scripts). For further details, see [POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/).

### A note about characters, filenames and encodings in Bash

I will describe mostly Bash here, since the topic is wide and i have not enough knowledge (yet).

When it comes to Linux and scripts, it seems on the internet to be a common problem to properly handle paths and filenames. Not every character is read in the same way by various utilities, including shells.

There are discussed a few characters that may cause major problems, see for example the aforementioned [David Wheeler article](https://dwheeler.com/essays/fixing-unix-linux-filenames.html). Among others, these are: hyphen, preceded with space (sometimes called "dash" – see below) and three whitespaces: space, tab and newline. Speaking about Bash, they are ambiguous even within Bash itself – that is, ambiguous for the user, not for Bash. For details, see for example this [Stack Overflow thread](https://stackoverflow.com/questions/29378566/i-just-assigned-a-variable-but-echo-variable-shows-something-else).

Probably (it could be a secondary topic in this article), it is also good to remember that there are used different encodings among operating systems (not only Linux). I have not come across many issues with it writing this article, but that is possibly because I use only latin characters. Just to be exact, I use UTF-8 with Unicode (this was set as the default settings in GNOME terminal, which I use, and also UTF-8 is the default setting in the locale in Fedora). By the way, it is good to remember the [difference between Unicode and UTF-8](https://stackoverflow.com/questions/643694/what-is-the-difference-between-utf-8-and-unicode) (see also this [Stack Overflow thread](https://stackoverflow.com/questions/3951722/whats-the-difference-between-unicode-and-utf-8)), which is still hard for me.

As I have mentioned, for the purpose of this article I have chosen to use only letters, digits and hyphens (not preceded by space). Doing this, I want to minimize the possibility that I, or the readers, accidentally omit an important aspect of using the aforementioned problematic characters with various utilities and Bash features.

Lastly, on the internet one may come across two different terms: [_hyphen_](https://en.wikipedia.org/wiki/Hyphen) and [_dash_](https://en.wikipedia.org/wiki/Dash). I have noticed (this is my private observation) that it is common to use the _dash_ term in the context of scripting and shells. It is good to mention that sometimes there is made a difference between them. Sometimes, there are also differentiated two dash types: [en-dash](https://en.wikipedia.org/wiki/En_dash) and [em-dash](https://en.wikipedia.org/wiki/Em_dash). For example, [Unicode differentiates these three characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters). See also this article on [differences between dashes and hyphen](https://cgi.duke.edu/web/sciwriting/index.php?action=dash_vs_hyphen). I decided to use the "hyphen" term in this article, to be compliant with Unicode.

### What is to improve

(**UPDATE 2018 dec 01:** I have removed content of this section because I have decided it was confusing what I was going to say.)

### What I have not described

Some of you have probably noticed that I do not describe several things. For example, what are the storage media that I use, whether they are internal or external, whether they are remote devices or whether the device is connected all the time. Since these things are not a part of this article's subject, I decided not to cover them.

### Further details

For any details that I did not describe, and one would like to understand or read about, see the following:
- the [GNU Bash documentation](https://www.gnu.org/software/bash/manual/);
- the [GNOME terminal documentation](https://help.gnome.org/users/gnome-terminal/stable/) (which i was using testing all the code in this article);
- the [Fedora documentation](https://docs.fedoraproject.org/en-US/docs/);
- the [Linux kernel documentation](https://www.kernel.org/doc/html/latest/).

### Did I read all of the content from all of the websites linked in this article?

Yes and no. Yes, in the sense of browsing all of them. No, in the sense of reading all the content within all of them from the start to the end. Especially, in the case of Wikipedia's articles I have looked in most cases only at their titles and first paragraphs. Due to that, occasionally there might be links that do not correspond entirely to the context or to the point that they are intended to correspond to. Sorry if you experienced such a situation.

### A note about syntax highlighting and Markdown in this article

One may notice that in the listings that are put in this article there is no syntax highlighting. For the time that this article was published, its version available online uses default [syntax highlighting provided by GitHub](https://help.github.com/articles/creating-and-highlighting-code-blocks/). It is part of the [GitHub Flavored Markdown](https://help.github.com/articles/about-writing-and-formatting-on-github/). For the time that this article is published, GitHub uses the [Linguist library](https://github.com/github/linguist) to perform detection of the language that a listing is written in.

Since the code highlighting performed by the editor that I was using writing this article – Visual Studio Code – seemed to be inconsistent in the case of shell code, and I could not find what library detecting language in code blocks in Markdown files uses this editor, I could not predict whether the results will be inconsistent as well in the case of GitHub (that is, after publishing this article).

I think that no highlighting is better than inconsistent highlighting. Therefore, I decided not to use syntax highlighting at all. For details, see the [Visual Studio Code documentation on Markdown](https://code.visualstudio.com/docs/languages/markdown) and the [Visual Studio Code source code](https://github.com/Microsoft/vscode).

## What I know and acknowledgements

I do not usually remember everything that is written in this article, in particular I do not remember the syntax of every command. Therefore, writing this article I must being used various documentations, manuals, forums, articles and other materials available online. Sometimes, I was just rewriting in my own words what was already written. Doing that, I have learned a lot of new and useful things, including English phrases.

It is a great job of programmers, creators, contributors, bloggers, maintainers and many other people from all over the world. They spend their time on putting their knowledge and thoughts into the internet, or on making content available, or – on making sure that websites and systems are secure, or – on making sure that the electricity, water and food are provided on time.

I wish that I could thank every particular person (or any kind of organization or institution) that helped me writing this article, or at least those who have done it by publishing content on their website. Unfortunately, I have realized too late that I should keep links to all the websites that I have visited. But, most probably even that would not be enough – usually, not all the people involved in the process of making the content available to a reader like me are mentioned anywhere publicly.

In that case, I just want to thank you all.

## Will this article be updated?

This article is not intended to be updated, since it has to present the **current** level of my knowledge. But, I may update it if I would have something to add or change and I will remember about it.