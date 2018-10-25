---
layout: post
title: "my backup shell script"
date: 2018-10-14
tags: linux shell programming bash
---

in this article i will show how i have prepared my backup shell script. i made it in the [bash language](https://en.wikipedia.org/wiki/Bash_(Unix_shell)), on the [fedora operating system](https://en.wikipedia.org/wiki/Fedora_(operating_system)).

this article is more or less educational; it is not intended to show my full script, just some concepts that i use. i will try to show myself and others what i have learned about shell (in particular, about bash). there will also be a bit of linux knowledge.

## three disclaimers before we start

**this article is neither intended to be a manual or a guide, nor to contain any tips or advices.** in case of any doubts, prior to this article one should refer to standards, manuals and official guidelines of particular websites, services, utilities, programs or systems.

**this article is not intended to be comprehensive on any subject**, especially neither on backups, bash, shell scripting, fedora nor linux. i might have forget about some important things or aspects of things, or just missed them when reading various documentations. additionally, there might be cases that i did not forget about a thing being important **objectively**, but not decided to describe it because i have not found it important **subjectively**.

lastly, **please be aware that i am not an expert (yet) in bash, linux, backups, system administration nor data management.** i might have made typos, mistakes and errors describing the subject (although i tried not to make any).

## introduction

i will try to introduce backups and how i decided to do them in a questions and answers (Q&A) form.

### 1. OK, backups, backups, but why backup something at all?

[backups are a key thing](https://www.tldp.org/LDP/sag/html/backups.html) in using computer – regardless whether one uses it for playing, administering or scientific research. if there are users that creates or manages any data, and the data are important to them or anyone else – backups should be done.

### 2. so, i agree that backups are important. but what to backup? all the data?

one should backup the data that they consider important for them. if they think that all the data are important – then it should be all the data.

but sometimes it is hard to say, which data are important. in this case, one should choose to backup all the data.

but sometimes backuping all the data are impossible because, for example, it would take too much time, money. also, one could not have a space to store multiple copies of all the data (even compressed). in this case, one has to decide, what data will be backuped.

to ease the decision, they may split the data by the criterion of when the content has changed from the chosen backup (be it full or not). then, they will backup only the data that has changed (or has been created). examples of such a backup are incremental and differential backups (they are separate methods – see this [easeus article](https://www.easeus.com/backup-utility/differential-backup-vs-incremental-backup.html) and this [r1soft article](https://www.r1soft.com/blog/the-four-methods-of-server-backup), both on backup methods).

in the case of the script that i want to describe, i have chosen to backup only these data that are created or changed by myself (mainly residing in my [`/home` folder](http://www.linfo.org/home_directory.html)). i chose not to backup the data that are created or changed by the operating system. i chose to do full backups because i do not have many data.

### 3. let us suppose that i already chose a backup method. how regularly should i do it? once a day, a week, a month?

how regularly one should backup their data, may depend on several factors:
1. how much disk space they have available for backups (on a local device, a network/remote device etc.);
2. in case they chose to store backups for example in the paid cloud, how much money they have to get additional disk space;
3. whether they decided to remove, modify or do not touch older backups in case of lack of space;
4. other factors.

i hate complex solutions, but still tend to make them. writing the script and this article, i have tried to simplify things as much as i could. since this is just a simple shell script, i chose not to use any external, online service, just to use traditional storage media. since i have enough space on them for at least two backups, i chose to store all the previous backups. if the storage media will get full, i will simply remove the oldest backup. included that i know both myself and my needs for feeling secure, i chose to do a backup once a day.

## the script

i will try to describe my script starting with the simplest conceptions and ending with the whole script.

there are three main ways of performing backups (and the computer operations at all): using the script, using the terminal and using the GUI. sometimes it is better to use the GUI, specifically i consider it far more intuitive than the terminal. but, the utilities' names are not always equivalent in both methods; also, i am accustomed to the terminal. therefore, i will describe any operations other than those in the script as performed in the terminal.

finally, yet before we start, let us make a couple of assumptions:
- as fedora – that is, [linux](https://en.wikipedia.org/wiki/Linux) – is a [multi-user operating system](https://en.wikipedia.org/wiki/Multi-user_software), let the current user name be `u`.
- since all the data that we want to backup are accessed on fedora, we will describe them in terms of files and directories within a certain [_filesystem_](https://en.wikipedia.org/wiki/File_system). more specifically, fedora uses the [filesystem hierarchy standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard). therefore, we will also refer to the [_path_](https://en.wikipedia.org/wiki/Path_(computing)) of each file and directory. for details, see for example [fedoraproject wiki about FHS](https://fedoraproject.org/wiki/PackagingDrafts/Filesystem_Hierarchy_Standard_Version_3.0_(2015)) and [redhat documentation on FHS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-filesystem#s1-filesystem-fhs).
- let the device on which the backups will reside have the same filesystem as the operating system. this device may also be the same hard drive on which the operating system resides. we will do that just to avoid problems with moving data between different filesystems. to clarify, i use the [ext4 filesystem](https://en.wikipedia.org/wiki/Ext4).
- let the [_label_](https://en.wikipedia.org/wiki/Volume_(computing)#Volume_label) of the [_volume_](https://en.wikipedia.org/wiki/Volume_(computing)) of the device be `d`.
- let the [_mount point_](http://www.linfo.org/mount_point.html) for the device have the path `/mnt/d`. i chose the `/mnt` directory because, in linux systems, this directory is intended to temporary mount a storage device's filesystem. for more details, see this [linfo explanation of the `/mnt` directory](http://www.linfo.org/mnt.html).
- let the primary [_command prompt_](https://en.wikipedia.org/wiki/Command-line_interface#Command_prompt) for the current user be `[u]$`. generally, one can set an arbitrary string as the primary command prompt in fedora (most probably, not arbitrary at all; for details, see the note about characters, filenames and encodings in bash in the "further considerations" section below). for details on why i have chosen such a string, see the note about command prompt in the "further considerations" section below.
- let the names of files in this article contain only the following characters: letters, digits and hyphens (or "dashes" – see the the  "further considerations" section for the difference). for details, see the note about characters, filenames and encodings in bash in the "further considerations" section below.
- let the script have the name `backup-script`. for details on possible changes to this name, see the "further considerations" section below.

1. for now, we know that:
    - we want to do a full backup, and
    - it should be done once a day, and lastly
    - we want to store all the previous backups – and if there is no space left on the device, we decide to remove some older backups.

2. the simplest approach to do a full backup will be doing it by hand, file by file, using for example [GNU cp utility](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) (provided with fedora by default):
    ```
    [u]$ cp /path/to/file-1/file-1 /mnt/d/backup-2018-Oct-13/path/to/file-1
    [u]$ cp /path/to/file-2/file-2 /mnt/d/backup-2018-Oct-13/path/to/file-2
    [u]$ cp ...
    ```

    this implies that we have to do three things. Firstly, we have to write all commands for all directories manually. Secondly, we have to create a new directory for the new backup before backuping, like that (using for example the [GNU mkdir utility](https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html), provided with fedora by default):
    ```
    [u]$ mkdir /mnt/d/backup-2018-Oct-13
    ```

    thirdly, if we do not want to store all the files in one directory, inside the new directory we should make the same directory structure as in our operating system:
    ```
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to/file-1
    [u]$ mkdir /mnt/d/backup-2018-Oct-13/path/to/file-2
    [u]$ ...
    ```

3. the above approach requires that the user has either few enough files or much enough patience. probably, it would be hard even with the help of the [_bash completion feature_](https://www.tldp.org/LDP/abs/html/tabexpansion.html) (for details, see [man 1 bash](http://man7.org/linux/man-pages/man1/bash.1.html), search for the section titled "Completing").

    but why do we have to specify all the files manually each time we would like to copy them? maybe it would be a good way to make a list of all files to backup and somehow feed the copy command with it.
    
    unfortunately, the cp utility does not support specifying a list of files. therefore, we have to use another utility (or write our own script – but i will not cover this possibility in this article). there are many possible alternatives; we could use for example the [Info-ZIP zip utility](http://infozip.sourceforge.net/Zip.html) (by default provided in fedora). please do not be scared by its last release date (for the time of writing this article, it is 2008).
    
    zip supports specifying list of files, and it has two more advantages: firstly, we need not to create a directory for each backup. instead, zip will just create for us a regular `.zip` file (simply put). that is why we will have one file for one backup. the second advantage is even better – zip will automatically create all the subdirectories (that is, the whole directory structure).
    
    so, now we will not need to create any directories, assuming that we want to store the `.zip` files in the device's root directory. assuming that we store the list of files in a file under the path `/path/to/file-list`, the backup process could now look like this:
    ```
    [u]$ zip backup-2018-Oct-13.zip -@ < /path/to/file-list
    ```

    there is one restriction: the `-@` option makes zip read from [_stdin_](http://man7.org/linux/man-pages/man3/stdin.3.html). but we store the list of files in a file, not provide it through stdin. therefore, we have to [_redirect_](https://www.gnu.org/software/bash/manual/html_node/Redirections.html#Redirections) the file to stdin (`< /path/to/file-list`) (for details, see [tldp.org info about redirections](https://www.tldp.org/LDP/abs/html/io-redirection.html#FTN.AEN17894)).
    
    with the zip utility, the list of files has to look like this:
    ```
    [u]$ cat /path/to/file-list
    /path/to/file-1/file-1
    /path/to/file-2/file-2
    ...
    [u]$
    ```
    
    simply put, the zip utility will copy the files under these paths one by one, from top to bottom, to the specified `.zip` file.

4. by default, zip will copy only files within the specified directory, not considering any subdirectories. we want to copy the whole directory structure (the so-called directory tree), so we would want to additionally specify the `-r` option, that will cause zip to copy all the subdirectories and files within them recursively. now, the command to make a backup will look like this:
    ```
    [u]$ zip backup-2018-Oct-13.zip -r -@ < /path/to/file-list
    ```

5. in some cases, instead of redirection, it is more useful to [_pipe_](http://www.linfo.org/pipes.html) the output of another command (that has somehow processed our file). for an example of such a case, let us assume that we want to store comments in our `file-list` file. we would like to remember why we have decided to backup particular files. let us assume that we stick to the convention from shell scripts of indicating comments by using the `#` character ("hashtag" or "sharp"). in general, we could use any sequence of characters that we want, but still, we want to simplify things. to simplify a bit more, we will use `#` only at the start of a line – to indicate that the whole line is commented out.

    with comments, the `file-list` file could look like this:
    ```
    [u]$ cat /path/to/file-list
    # comment 1
    /path/to/file-1/file-1
    # comment 2
    /path/to/file-2/file-2
    ...
    [u]$
    ```

    without any modification of the backup command, storing comments is impossible (zip would try to copy comments as if they were files). since zip requires the list of files that it is fed to contain only paths, we have to find a way to get rid of the comments before we fed zip with the list.
    
    a helpful utility now would be the [GNU grep utility](https://www.gnu.org/software/grep/) (provided by default with fedora). not going into details, grep will search specified file or files for lines containing a specified pattern and produces the specified output. in our case, the file will be our `file-list` file and the output will be the content of this file without lines starting with `#`. the pattern will be "a hash character at the beginning of the line". but because grep does not understand english phrases as patterns, we would like to write it in another form. the form that grep understands is a [regular expression](https://www.gnu.org/software/grep/manual/html_node/Regular-Expressions.html#Regular-Expressions).
    
    the GNU grep utility recognizes three regular expression types. we will use the basic regular expression type (BRE). our phrase will look like this: `^#`. [the `^` symbol](https://en.wikipedia.org/wiki/Caret) (_caret_, _circumflex_ or just _hat_) means in this context "the beginning of a line". the `#` symbol means in this context itself. but if we specify the pattern as such, grep will (as it does by default) **show us** the lines with this pattern. to invert this behavior, that is to **ignore** these lines, we need to specify the `-v` option.
    
    so, our backup command will now look like this:
    ```
    [u]$ grep -v "^#" /path/to/file-list | zip backup-2018-Oct-13.zip -r -@
    ```
    (the `""` (double quotes) are not needed, but i had to use them in this article, because without them my editor, visual studio code, does not properly highlight the rest of the command).

6. we made a pretty one-line command to backup all our data! but the need for writing this command manually every day (or even searching somehow for it through the [shell history](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Facilities.html) and pressing enter) would still require that:
    - the user has enough patience, and
    - the user remembers about it every day, and lastly
    - either the device is all the time connected to the computer (that is, its filesystem is mounted in the operating system), or the user connects it each time before running the script.

    we want to avoid these requirements. because of that, we would like to **automate** execution of our command. this way, the first and second requirements will be gone and  backups shall be done every day automatically. for simplicity, let us do not remove the third requirement – let us assume for now that the device is connected all the time (i will mention about it on this in the "further considerations" section below).
    
    generally, commands **actually can** be run "just like that". but, since i have assumed that this will not be the case in our case, we shall move them into a _script_. in our case it will be a [_shell script_](https://en.wikipedia.org/wiki/Shell_script) (for details on other computer script types, see the [wikipedia's article about scripting language](https://en.wikipedia.org/wiki/Scripting_language)).

    but before we write our command in a script, it will be a good thing to discuss automating it. in fedora, we have couple of ways to automatically run our scripts. the easiest two for me are [_cron_ and _anacron_ utilities](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/). the general difference between them is that cron gives more flexibility, whereas anacron is simpler to start with.
    
7. now, let us move our command into a script. we have to create a text file and paste/write the command inside. we can do this using, for example, the [_vim editor_](https://en.wikipedia.org/wiki/Vim_(text_editor)); i often use it now, therefore i have chosen it.
        
    there are also plenty of [other text editors](https://www.tecmint.com/best-open-source-linux-text-editors/) available for fedora and other linux distributions (command-line or GUI), for example GNOME's [gedit](https://wiki.gnome.org/Apps/Gedit), GNU's [emacs](https://www.gnu.org/software/emacs/) or GNU's [nano](https://www.nano-editor.org/).
    
    so, let us create a text file, write our command inside and save it. but as a plain text file could be an idea of a shell script for us, for bash it is just a plain text file. depending on the way of executing it and various operating system settings, the file may or may not be recognized as a shell script by the operating system. to be sure that it will be recognize by fedora as a bash script, according to the [bash documentation on scripts](https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html#Shell-Scripts), in the first line of it we put a special character sequence `#!`, which is called the [_shebang_](https://en.wikipedia.org/wiki/Shebang_(Unix)), with the [absolute](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths) path of the bash interpreter following it. in my case, this line looks like this:
    ```
    #!/bin/bash
    ```

    this implies that bash is installed in my operating system in the `/bin` directory (it is the default directory for bash executables in fedora). so, the whole content of our script should now contain two lines and look like this:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-2018-Oct-13.zip -r -@
    ```
    
    generally, i do not remember whether i have seen any advices on skipping this line, and i remember a couple of advices on putting it. by the way, on the internet one may come across examples where there is a space between the shebang and the path to the bash interpreter (like that: `#! /bin/bash`). i do not know of any documentation describing the space as a bad thing. in my case, i have just chosen not to use it. other advices: the aforementioned [bash documentation](https://www.gnu.org/software/bash/manual/html_node/Shell-Scripts.html#Shell-Scripts) uses space in one example, and the aforementioned [wikipedia's article](https://en.wikipedia.org/wiki/Shebang_(Unix)#Syntax) says that it is optional.

8. as our script shall be executed daily and we store the actual date in the name of the backup file, this will force us to change the script everyday. this contradicts with the automation that we want to achieve, and again, requires that we have both memory and patience. but, as we still want in the name of the backup file to have a reminder of the date that the backup was created on, we should use some command or utility to tell the script to write the current date for us.

    at this point, the most useful utility will be for us the [GNU _date_ utility](https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html#date-invocation). the default behavior of date (that is, when run with no option) is to display the current time. we can see how it works in my system:
    ```
    [u]$ date
    Mon Oct 15 00:17:56 CEST 2018
    [u]$ 
    ```

    as stated in the aforementioned [date documentation](https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html#date-invocation), the time format depends on a couple of [environment variables](https://en.wikipedia.org/wiki/Environment_variable) that are responsible for the current [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)). we can customize it as we want by feeding date with the `+` character followed by a string that specifies the format. available options are specified in [man 1 date](http://man7.org/linux/man-pages/man1/date.1.html). let us suppose that the following format fits our needs:
    ```
    [u]$ date +%Y-%M-%d
    2018-11-15
    [u]$ 
    ```

    i do not know whether it is or is not necessary to surround the string after the `+` character by either single or double quotes. the aforementioned [man 1 date](http://man7.org/linux/man-pages/man1/date.1.html) manual does not use the word "quote", but there are used single quotes in the examples. the only case that requires proper quoting that i do know is when a `date` command is nested in some other string. in that case, using inappropriate quotes (single instead of double, or in reverse, or maybe even no quotes at all) may lead to incorrect interpretation of the whole script – so one should be careful.

    if we would write/paste the `date` command directly in the file name, in the same place as the date string was, bash will not recognize that it is a `date` command – instead, it will treat this as a part of our `zip` command. it lets the `zip` command execute, and zip will return an error. for details: this is because, according to the [man 1 zip](https://linux.die.net/man/1/zip), it will search for a file named `+%Y-%b-%d.zip`. and, while most probably we do not have a file with such a name in the [current directory](http://www.linfo.org/current_directory.html), it just fails. we can see this erroneous command in my system:
    ```
    [u]$ zip backup-date +%Y-%b-%d.zip -r -@ < testfile
	    zip warning: name not matched: +%Y-%b-%d.zip

    zip error: Nothing to do! (try: zip -r -@ backup-date . -i +%Y-%b-%d.zip)
    [u]$ 
    ```

    the part `try: (...)` is beyond the scope of this article, so i will not describe it. for details, see the aforementioned [man 1 zip](https://linux.die.net/man/1/zip), or search the [stackexchange site](https://stackexchange.com/) for details).
    
    as we need the command _output_, we should execute the command. the easiest way is to do this in the same place as the date before. there are couple of ways to execute the command "in place" and get its output. in this case, the most relevant is probably the _command substitution bash feature_ (see [man 1 bash](http://man7.org/linux/man-pages/man1/bash.1.html), search for the section titled "Command Substitution"). not going into details, when bash sees it, it executes the specified command in a subshell and return the result.
    
    bash command substitution comes in two possible notations: the older with backquotes: `` `command` ``, and the newer with the dollar sign and parentheses: `$(command)`. for example:
    ```
    [u]$ echo "today is $(date)"
    today is Fri Oct 19 02:20:28 CEST 2018
    [u]$ echo "today is `date`"
    today is Fri Oct 19 02:20:30 CEST 2018
    [u]$ 
    ```

    according for example to these [reasons why it is preferred to use parentheses over backticks in a shell](https://mywiki.wooledge.org/BashFAQ/082), we will use the syntax with parentheses.
    
    so, we will use it in our script in the following way:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    ```

9. as we are sure that our script will be understood by fedora and it is fully automated (in terms of code), let us move to make it be running daily by one the aforementioned utilities – cron or anacron.

    as i have said, the general difference between them is that cron is more flexible and anacron is simpler. going into details: we have not said about that thing before because it seems obvious – our script should run everyday. while anacron guarantees this behaviour, as stated in the [fedora documentation on anacron](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/#s1-autotasks-cron-anacron), it is not the case with cron.
    
    not going into details, cron executes a script at a specified minute every hour, or at a specified hour every day etc. if we set it to execute the script at a specified hour every day, say 14:30, and if the operating system would not be running at this exact time, the script will not be executed on that day. it will be executed only the next day at this time (again, if only the operating system will be running the next day at this time).
    
    this would force us to remember the time that the script should be executed. this would be useless, since we want to automate backuping.
    
    on the other hand, in the case of anacron, if the operating system is not running at the time that the script is to be executed, the script is set to be executed once the operating system will have started again. for example, if the system would be shut down at 14:00 and turn at 15:00, while the script should be executed at 14:30, it will be executed directly after the boot at 15:00 (in fact, a few minutes after 15:00, depending on how fast the system boots). this is the reason why we will be using anacron instead of cron. for details, see the aforementioned [fedora documentation on cron and anacron](https://docs.fedoraproject.org/en-US/fedora/f27/system-administrators-guide/monitoring-and-automation/Automating_System_Tasks/#s1-autotasks-cron-anacron), or [man 8 anacron](http://man7.org/linux/man-pages/man8/anacron.8.html).

    i am aware of two ways of setting anacron executing a script on fedora: firstly, we could write an entry in the [`anacrontab` configuration file](http://man7.org/linux/man-pages/man5/anacrontab.5.html); secondly, we could put a file in one (or more) of the following directories: `/etc/cron.daily`, `/etc/cron.weekly` and `/etc/cron.monthly`. since the second way is simpler in my opinion and provide the functionality that we expect – that is, the possibility to run script daily – we will use it.

    not going into details, anacron – at least its version provided with fedora – works in the following way: it performs all the instructions (commands with the dates on which they have to be executed) that are written in its configuration file ([`/etc/anacrontab`](http://man7.org/linux/man-pages/man5/anacrontab.5.html)) – line by line.
    
    by default, there are three paths put there to be run in the file: `/etc/cron.daily` every day, `/etc/cron.weekly` every week, and `/etc/cron.monthly` every month (there are specified the exact dates in the file; for details, see the aforementioned [man 5 anacrontab](http://man7.org/linux/man-pages/man5/anacrontab.5.html).)  for details on this and the other two directories, see for example [ubuntu documentation on cron](https://help.ubuntu.com/community/CronHowto), search for section titled "Further Considerations". <POSSIBLY_TOO_DETAILED_HERE> by the way, i have seen on the internet that it is not / was not a rule in the linux distributions that these directories exists, and even if so, that they are managed the same way as in fedora. </POSSIBLY_TOO_DETAILED_HERE>
    
    so firstly, we have to save our script as a file and put/copy it into the `/etc/cron.daily` directory. secondly, the _run-parts_ utility used (by default) in the `anacrontab` file requires the script to be _executable_ (that is in this case, to have proper execute [permissions](http://www.linfo.org/permissions.html)). (by the way, this requirement is not always the case when dealing with scripts in linux, but in this case the anacron default configuration requires it.) if this requirement would not be met, our script would not be executed. it is documented in [man 4 run-parts](https://linux.die.net/man/4/crontabs). in this manual, the run-parts utility (a bit unintuitively for me) is historically named `crontabs` (one should not mistake this name with the name `crontab`, without the "s" letter at the end, which is the [_cron_ utility configuration file](http://man7.org/linux/man-pages/man5/crontab.5.html)).
    
    not going into details, run-parts runs all scripts with the appropriate execute permissions in the specified directory. in the case of fedora, i did not find any documentation about any restrictions that run-parts would put on the files, especially on their names, except that they have to be executable – but one should remember that it is not always the case. however, one should be aware that there may be other requirements in fedora which i have not found – for example related to spaces in the names of the files. for details, see the "further considerations" section below and the aforementioned [man 4 run-parts](https://linux.die.net/man/4/crontabs).
    
    maybe it will also be good to emphasize that our script will be run as the _root_ user, so **we should pay extra attention whether the commands that we are writing in the script have both proper and intended syntax.**

    last but not least, how to set the execute permissions for our file? most simply, it can be done using the [GNU _chmod_ utility](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html#chmod-invocation).
    
    not going into details, in linux, the permissions of a given file are divided into three groups: 1) permissions for a specified user (the owner of the file), 2) permissions for a specified group and 3) permissions for all other users. all of these group may have set three possible permissions: A) read permission, B) write permission and C) execute permission. permissions differ in the sense of a file and in the sense of a directory. for details, see the aforementioned [LINFO guide on permissions](http://www.linfo.org/permissions.html).

    as i have noticed, most linux programs and utilities require only the owner of the file (including directories) to be able to execute it. this is the case with the chmod utility, so we will set only the execute permission for the owner.
    
    chmod uses the `u` letter to signify the permissions for the owner (most probably it stands for `user`), the `g` letter to signify the permissions for the group and the `o` letter to signify the permissions for other users. speaking of possible permissions in groups, chmod uses the `r` letter to signify the read permission, the `w` letter to signify the write permission and the `x` letter to signify the execute permission.
    
    not going into details of the syntax, in our case the first argument will be the aforementioned `u` letter followed by a plus (which means that the permission has to be set), followed by the `x` letter. the second argument to chmod will be the name of our script. so, we do it like this:
    ```
    [u]$ chmod u+x backup-script
    [u]$ 
    ```
    
    if the script would have this permission already set, nothing should change, as far as i have tested it. if one want to know for sure what is happening in that case, they may examine the [chmod source code](https://git.savannah.gnu.org/cgit/coreutils.git/tree/src/chmod.c).

10. although we have written our backup command in the script, put the script in the proper directory and set the proper permissions, we may not be sure that our backup will be run everyday. it depends on whether anacron itself will be running within the time range specified in the `anacrontab` file.
    
    by default, in that file anacron sets the time to execute scripts daily as: 5 minutes plus random amount of minutes within the range [0-45] (most probably including the boundaries 0 and 45) past a randomly generated hour within the range the 3 and 22 hours (most probably including the boundaries 3 and 22). that means that our script may not be executed if we do not change the `anacrontab` file and the operating system will be running only between for example 23:00 and 02:30.

    to avoid this problem, the only thing that i can think of is to set the time range in the `anacrontab` file according to the time range that one is sure that anacron will be running in each day that the data changes. however, since modifying the `anacrontab` file is outside the scope of this article, i will not describe it. in case of my script, i just presumed that anacron will be running all the time that my system is running. for details on how to change the `anacrontab` file, see for example the aforementioned [man 5 anacrontab](http://man7.org/linux/man-pages/man5/anacrontab.5.html).

11. as we know exactly in what cases our script will not be executed, it seems that all what is left to do is to handle a situation when there is no space left on our device to store backups.

    the simplest solution is that our script, before it starts, realizes that there is not enough free space to create additional backup file. then, it removes one, oldest backup file, and do a new backup normally.
    
    but here comes a problem. the size of the data that we backup may be constantly growing and shrinking. so, there may happen a situation when the size of the oldest backup file will be smaller than the size of the newest data to backup. hence, even after removing one oldest file, there might be not enough free space to create a new file.
    
    (by the way, since we do a full backups, i personally consider it more likely that most of the time, the size of a backup file will be larger than the size of the backup file directly preceding it; it may be smaller occasionally, for example, if we remove a big, unnecessary amount of data at once.)

    i can imagine two possible ways of solving this problem.
    
    firstly, we can check (that is, calculate) what is the size of the data to be backuped this time. once this is done, we can start to removing file by file, checking after each removal whether the size of the free space is now big enough to create a new file. if this condition is fulfilled, we can then do a backup normally.
    
    (however, as with every removing, we have to be very careful. it may happen that all the previous backup files will be removed. if so, let us imagine that something is both interrupting the backup process and damaging our hard drive – for example power failure. in such a situation, we find ourselves without any backups and any actual data (at least until we try to recover it from the hard drive).)

    secondly, instead of removing one or multiple files only in case we need more free space, we can do a removal **each time** we make a backup. in this case we will need to remove only one file each time. this will cause that all the time we will have a constant number of backup files. since this approach better fits my needs, i have chosen it and i will describe it here. the need for checking free space will not disappear though, but since i have estimated that it is not necessary in my case, i will not discuss such a calculation in this article.

    although, in case that we are removing files each time (assuming that we already have at least one file to remove), we would have only one backup file (the newest). if we would like to have two backup files on the device, we have to start removing after the second time that the script make a backup; if we would like to have three backup files on the device, we have to start removing after the third time etc.
    
    since we do not want to bother whether yesterday was either the first or the second time that the script is backuping, we will use a bit more sophisticated approach. we will make the script check before each removal whether there is already created a chosen number of backup files **plus one**. if it is, then we simply remove the last file. it may seem unnecessary if our script have already  been working several days, but, not going into details, i personally think than it is better to be too general than to be too specific.

12. the simplest approach to remove a file would be to use the [GNU _rm_ utility](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html). this utility requires one argument, that is, the path (or just name) of the file to be removed. in case that we provide only name, the path to it will be assumed as the path to the current directory. rm has in fact several options to ease certain removal cases, but we will not need any of them.

    **warning: the rm utility by default removes/destroys/deletes all the files that it is provided. there is no trash. there might be no way to recover the files. therefore, one should be very careful when using it in any way.**
    
    to create an example file (with `touch`), check that it exists (with `ls`), remove it with `rm` and check again that is does not exist, one can do the following:
    ```
    [u]$ touch test
    [u]$ ls test
    test
    [u]$ rm test
    [u]$ ls test
    ls: cannot access 'test': No such file or directory
    [u]$ 
    ```

13. as we are sure how to remove a file, we cannot yet implement it in our script. before invoking `rm`, we have to find the name of the file to remove. we have two possible ways:
    - since the names of our files differ daily (each name contains the date that the file was created on) and dates can be compared by the day number, we can calculate what date should contain the name of the file that we want to remove.
    - we can make our script get all the actual existing backup files, sort it in the descendent order and get the first name from the list (that is, the last file, because the order is descendant).
    
    we will use the second option, since it more straightforward in my opinion.

14. here, i should make a note about what we should understand by "sorting". i am not sure if this is the case in every case, but it seems common in utilities displaying files available in various linux distributions to make use of the environment variables that defines the locale to define the sort order.
    
    for example, since in fedora there exists the `LC_COLLATE` variable, the [GNU sort utility](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html) uses this variable by default to sort strings (therefore file names). for details on standard ways of defining locales in linux distributions, see this [wikipedia's article about POSIX](https://en.wikipedia.org/wiki/POSIX) and [POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/) itself (version from 2017).
    
    we will make use of the default sort order that GNU ls is ordering by in fedora. this order is "alphabetical" (according to the ls documentation), but it is unclear, at least to me, what environment variables does ls use. since this is outside the scope of this article, i will not elaborate on that. for details on how ls works generally, see the [GNU ls documentation](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html#FOOT4), and for the exact answer on how GNU ls works, one can examine the [ls source code](http://git.savannah.gnu.org/cgit/coreutils.git/tree/src/ls.c) (this link leads to the online version on the GNU website, but there are [other possibilities of viewing it](https://www.gnu.org/software/coreutils/coreutils.html)).
    
    to be exact, i will just mention that my current locale, stored in fedora in the `LANG` variable, is `en_US.UTF-8`. (it is system-wide; in fact, i do not know whether there is a concept of a "user locale" in linux distributions – however, logically, there should be. i will not elaborate on this, since i do not currently have enough knowledge.) 
    
    by the way, one can simply check his/her current settings in his/her fedora installation using the localectl utility (that is, the `localectl` command in the terminal). for example, in my case:
    ```
    [u]$ localectl
    System Locale: LANG=en_US.UTF-8
        VC Keymap: us
       X11 Layout: us,pl
      X11 Variant: ,
    [u]$ 
    ```

15. since we now see that the "sort part" is redundant (if we still want to do it manually, we can use for example the aforementioned [GNU sort utility](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html)), let us get all the actual backup files into a list.

    "list" is a term that is not well-defined in bash documentation. in fact, i could not find any official definition of the "list" term in bash. in this article, i will just try to use it in those contexts where its meaning will be obvious. for more details on this term, see the "further considerations" section below.

    we have already display a list of files in a directory using ls. but, in a situation like this it is not a good choice (at least with GNU ls; i do not know other versions of ls). for this is an important issue, let us elaborate on that.

    we will use an example; let us suppose that we create two files, each with **spaces** in its name. it does not matter how many of spaces is there, but there should not be any at the beginning and at the end of the name (because that would be slightly different case).
    
    to make the example more real-world, we will make use of the bash [_filename expansion_](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html#Filename-Expansion) feature (also known as "globbing"). simply put, any of the characters: `*` ("asterisk" or "star"), `?` and `[` may specify a [pattern](https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html#Pattern-Matching) in bash. if any of them will appear in a string that bash expects to be a file name, bash will interpret it as a pattern and replace the whole string with a list of files that have names matching this pattern.
    
    let us create the files:
    ```
    [u]$ touch 'test file 1' 'test file 2'
    [u]$ 
    ```
    
    let us see how this files are displayed by ls by default, specifying full names (that is, without using a pattern):
    ```
    [u]$ ls 'test file 1' 'test file 2'
    'test file 1'  'test file 2'
    [u]$ 
    ```

    nothing special so far, ls works as expected. but, it is good to distinguish that we **show this file to the user**. what if we would like to [_iterate_](https://en.wikipedia.org/wiki/Iteration#Computing) over the result list? one may think that the [_for loop command_](https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html) will see the results as we do. let us see:
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

    let us specify a pattern instead of full names:
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

    as those two results are the same, we see that the pattern works as expected. it finds all the words starting with the `test` string. however, we see that neither are the expected result. though the way that we write it would indicate that there should be **one file name per line**, it displays **one word per line** – where the "word" term is related to the [bash definition of a word](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) (at least from how i understand the bash's documentation).

    i will not elaborate on this because i do not have enough knowledge to be certain of myself. most probably, the reason for this behavior is that bash split _a list of words_ by _a space_, and that is, in this case, a separator for both bash and ls. to be sure and for details, see for example the aforementioned [bash definitions](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) (search for "word" and "metacharacter"), this [superuser thread](https://superuser.com/questions/31464/looping-through-ls-results-in-bash-shell-script), and this [article on greg's wiki](http://mywiki.wooledge.org/ParsingLs).

    to solve this problem with the for loop, we have at least two possibilities:
    
    firstly, we can use just the filename expansion feature, without any additional utility like ls:
    ```
    [u]$ for name in test* ; do echo $name ; done
    test file 1
    test file 2
    [u]$ 
    ```

    now, the results are as expected.

    secondly, we can use [arrays]():
    ```
    [u]$ array=(test*) ; for name in "${array[@]}" ; do echo $name ; done
    test file 1
    test file 2
    [u]$ 
    ```

    the results are the same, that is, as expected. in fact, i have used here a [variable](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters) (named `array`) and an [_array]_(https://www.gnu.org/software/bash/manual/html_node/Arrays.html) itself. i am describing variables in the point below, and i will describe arrays below in this point.

    shortly speaking, in bash, there exists a concept named arrays. arrays are sort of a data type in the bash language. however, i could not find any strict definition of them. in bash documentation, they are just referred to as "arrays". an array is in fact a "list" (or a "sequence") of elements. but unlike the "list" case, the elements are stored. (since i do not have enough knowledge on storing an array in bash, i will not elaborate on this.)

    lastly, which of the above possibilities are better? there is no strict answer. david wheeler in his [article about filenames and pathnames](https://dwheeler.com/essays/filenames-in-shell.html) gives many examples of which one of the above for loops will and which will not work in what case, and lists other possibilities. i will not elaborate on this, since i cannot be certain of myself in this field. since this is a backup script, it should be reliable; therefore, we will use the second option, that is, arrays.
    
16. next, to be exact: when it comes to a value in bash, we do not have to _store_ it somewhere. but, since in our case it will simplify the results, we will store it.
    
    in bash, the only way to store a value is a variable. we have to define bash variable and _assign_ our list to it.

    when it comes to naming this variable, we should know a little thing: there in fact exists in bash a distinction between _a variable_ and _a parameter_. according to the [bash's documentation on parameters](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html#Shell-Parameters), _a variable_ is a kind of _parameter_. there are [definitions of _a word_ and _a name_](https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions) that make the distinction between them. but for now, we only need to know that a variable stores a value and its name may consist only of letters, numbers, underscores and has to begin with a letter or the underscore.

    variables in bash are case-sensitive, what results from practice, but i could not find any documentation that confirms it. after all, there is for example this [TLDP guide on bash variables](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html) that confirms it (see section "3.2.2. Creating variables").
    
    also, i could not find any documentation that makes a strict distinction between variables capitalized and not capitalized (or with mixed case). there are conventions that emphasizes some aspects of naming variables with all characters capitalized and with neither capitalized – for example, see this [thread on stackoverflow about naming bash variables](https://stackoverflow.com/questions/673055/correct-bash-and-shell-script-variable-capitalization). the conventions emphasize one important aspect of naming bash variables: neither variable should have the same name (including case of its letters) as another variable, defined already. since actually there are [variables already defined by bash](https://www.gnu.org/software/bash/manual/html_node/Shell-Variables.html#Shell-Variables), and all of them are capitalized, we will stick to the convention of having all our variables named in lower case.
    
17. included everything said so far, let us name our variable `backup_files_list`. we create our variable and assign a value to it using the `=` operator. by the way, one should make [a distinction between two meanings of the `=` operator](https://www.tldp.org/LDP/abs/html/varassignment.html): depending on the context, it may mean either an assignment or a comparison. if it is a comparison, [there are required spaces around it](http://www.tldp.org/LDP/abs/html/comparison-ops.html#EQUALSIGNREF).

    unlike a few other well known programming languages (for example C, java, javascript and scilab), there **may be no whitespaces before and after the equality sign**. if there were any, most probably the whole assignment would be interpreted by bash in an unintended way (for details, see for example this general [thread on stackexchange about spaces in shell assignments](https://unix.stackexchange.com/questions/131766/why-does-my-shell-script-choke-on-whitespace-or-other-special-characters)).

    let us write the assignment in console first to see how it works; we will add it to our script later. including that we have earlier decided to use arrays, we could write the following:
    ```
    [u]$ backup_files_list=(backup*)
    [u]$ 
    ```

    from testing i can say (what is not clear in the bash documentation) that the filename expansion will occur now. i do not want to elaborate on this, since i am not certain of myself. in any case, we can just display the value of our array – that is, all its elements:
    ```
    [u]$ echo ${backup_files_list[@]}
    test file 1 test file 2
    [u]$ 
    ```

    as [bash documentation on arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html) says, the expression `${backup_files_list[@]}` expands each element of our variable to a separate word.

    lastly, we could write the assignment in our script:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    backup_files_list=(backup*)
    ```

18. we will now use our variable in the [`if` command](https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs). not going into details, `if` checks the status that a given list of commands (a "condition") returns, and performs the commands from another list if the status equals to `0`. `if` may have more expanded syntax than that, but we will use only what i have just described. one should be aware that the term "list" used here (most probably, shortly for "list of commands") has a different meaning than normally. this meaning is well-defined in bash documentation and, simply put, it means a sequence of pipelines. for details, see [bash documentation on lists of commands](https://www.gnu.org/software/bash/manual/html_node/Lists.html#Lists).

    we will make use of the double-bracket syntax (`[[` and `]]`), which provides a way to check if a condition is fulfilled. it is good to remember that not all bash expansions are performed between these double square brackets. (for details, see the aforementioned [bash documentation on conditional constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html).)

    there are many [_conditional expressions_](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html) available in bash, but we will use just one: the binary arithmetic operator `-gt` ("greater than"). simply put, it checks whether the first argument is greater than the second. both arguments have to be integers. if the condition is fulfilled, the operator returns `0` (that is, "true"; for the explanation why `0` means "true" and `1` means "false" in bash, see for example this [stackoverflow answer](https://stackoverflow.com/a/2933855/4752834)).

    so, we have to check whether the number of file names that our array `backup_files_list` holds are greater or equal to a given number of files that we want to leave. if it is, then our script shall remove the file with name held in the first element of our array (that is, the earliest one).

    let us most or less arbitrarily assume that the number of files that we want to leave is `5`. now, we write the `if` command in the following way:
    ```
    if [[ ${#backup_files_list[@]} -gt 5 ]] ; then
        rm ${backup_files_list[0]}
    fi
    ```

    let us not concentrate on the `;` (semicolon) and `then` that are part of the syntax of `if`. for details, see the aforementioned [`if` command documentation](https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs). getting the number of array items is in bash most simply obtained by the `#` symbol put before the array name, but after the left curly brace. for details, see the aforementioned [array syntax](https://www.gnu.org/software/bash/manual/html_node/Arrays.html).

    lastly, we write the `if` command in our script like that:
    ```
    #!/bin/bash
    grep -v "^#" /path/to/file-list | zip backup-$(date).zip -r -@
    backup_files_list=(backup*)
    if [[ ${#backup_files_list[@]} -gt 5 ]] ; then
        rm ${backup_files_list[0]}
    fi
    ```

    **warning: do not confuse the `@` symbol ("at", ) with the `0` number (zero).** especially with my display and font they look very similar. `@` symbol is used to refer to all the elements of an array. the `0` number is used to refer to the first element of an array. if we accidentally use the `@` symbol in the above code of place of the `0` number, that is, if we write `rm ${backup_files_list[@]}`, **we would remove all of our backup files.** they would not go to the trash bin, although in some cases they might be recovered. for details, see for example this [stackexchange thread](https://unix.stackexchange.com/questions/10883/where-do-files-go-when-the-rm-command-is-issued). for some deeper tips on how rm works, see for example this [stackexchange thread](https://stackoverflow.com/questions/21517600/how-does-rm-work-what-does-rm-do). and for some tips how to safely use the rm utility, one can see for example this [stackexchange answer about bad and good habits with rm](https://apple.stackexchange.com/a/17637/307477) (even though it is a link to a website with questions about the [apple company](https://www.apple.com/) software).

19. it seems that the main part of our script is done. additionally, one may think of:
    - explicitly defining when and how to [_exit_](https://www.tldp.org/LDP/abs/html/exit-status.html) the script (for details, see this [ubuntuforums thread](https://ubuntuforums.org/showthread.php?t=1436547), this [askubuntu thread](https://askubuntu.com/questions/85250/is-it-preferred-to-avoid-use-of-exit-in-bash-scripts-as-much-as-possible), and this [stackexchange thread](https://unix.stackexchange.com/questions/308207/exit-code-at-the-end-of-a-bash-script) about exiting a shell script).
    - adding comments in the script. comments usually have the function of indicating the reasons why a piece of code looks the way it looks. they might be very important in case one would some day forget what a particular piece of code does, and wanted to remember. in bash, if a word begins with the `#` symbol (hashtag, number sign, sharp), everything to the right of this symbol is treated as a comment, and is not interpreted by bash in any way. for details, see [bash documentation on comments](https://www.gnu.org/software/bash/manual/html_node/Comments.html). for details on bad and good comment styles, see for example this [stackexchange thread](https://softwareengineering.stackexchange.com/questions/119600/beginners-guide-to-writing-comments) and this [medium-freecodecamp article](https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83).
    
## further considerations

### a note about command prompt

i have chosen the string `[u]$` as the main command prompt in bash for the following reasons:
1. i do not remember it for sure, but possibly the square brackets are defined by default in fedora, and i consider them fitting enough for the purpose of this article;
2. the user name inside is defined by me, for clarity of the examples;
3. the dollar symbol is defined by default in fedora, and i consider it fitting enough for the purpose of this article; for more details why i did not change this symbol, see this [explanation of prompt on stackexchange](https://unix.stackexchange.com/a/291734) and this [explanation of prompt on superuser](https://superuser.com/questions/57575/what-is-the-origin-of-the-unix-dollar-prompt/57613#57613).

### a note about the "list" term

for some of us, the term "list" that i have used in this article – and that is used several times in the bash documentation – may be confusing in bash. i could not find any documentation that defines it in any way. what is more, in bash documentation it seems to indicate different meanings.

wherever i am using this term in this article, i am assuming that it is self-explanatory. sorry if i used it there, where is is not. for further explanation of this term, one may see [my own question on stackoverflow on a "list" in bash](https://stackoverflow.com/questions/52901012/what-is-a-list-in-bash).

### a note about bash arrays problems

arrays generally are very useful (for example when dealing with the [script parameters](https://www.lifewire.com/pass-arguments-to-bash-script-2200571)), but here i would to mention one thing about their syntax that i think may be confusing. if we would like to iterate on arrays elements, we could do something like that:
```
[u]$ array=(1 2 3) ; for elem in ${array[@]} ; do echo $elem ; done
1
2
3
[u]$ 
```

nothing special so far. but if we want to store elements with spaces in an array, things get a little bit complicated:
```
[u]$ array=('1 2' '3 4') ; for elem in ${array[@]} ; do echo $elem ; done
1
2
3
4
[u]$ 
```

as we can see, bash split the elements of the array by space, which is put as one of the default separator in the `IFS` variable. this behavior was suggested to me by this [stackoverflow answer](https://stackoverflow.com/a/9089186/4752834). it will behave the same (at least from what i can observe), if we apply the second syntax to get all the array elements:
```
[u]$ array=('1 2' '3 4') ; for elem in ${array[*]} ; do echo $elem ; done
1
2
3
4
[u]$ 
```

to display it correctly, one straight way, described in [bash documentation on arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html), is to quote the reference to the array:
```
[u]$ array=('1 2' '3 4') ; for elem in "${array[@]}" ; do echo $elem ; done
1 2
3 4
[u]$ 
```

and **one should remember** that the `${array[*]}` syntax works differently than that. let us see this syntax with quoting:
```
[u]$ array=('1 2' '3 4') ; for elem in "${array[*]}" ; do echo $elem ; done
1 2 3 4
[u]$ 
```

bash made a long word from all of the elements of the array. let me quote the bash manual:
> Any element of an array may be referenced using ${name[subscript]}. The braces are required to avoid conflicts with the shell's filename expansion operators. If the subscript is '`@`' or '`*`', the word expands to all members of the array name. These subscripts differ only when the word appears within double quotes. If the word is double-quoted, ${name[`*`]} expands to a single word with the value of each array member separated by the first character of the IFS variable, and ${name[`@`]} expands each element of name to a separate word.

another way to handle this problem is for example to remove the space from IFS, that is, to set it to the same value, but without space:
```
IFS='\t\n'
```

that is, we removed the space from the `IFS` variable. then, we could use the syntax without quoting as above, and it will work as intended. in fact, i have noticed that changing the value of `IFS` is in general not so rare way of handle spaces in filenames in bash. for details on handling spaces in filenames, see below in this section the note about characters, filenames and encodings in bash. and, for details how to get the current value of `IFS`, see for example this [stackoverflow answer](https://askubuntu.com/a/852099/884523).

### a note about naming shell scripts

as far as i am currently aware, there are two conventions of naming shell scripts: the first with the `sh` extension (for example, `my-script.sh`), and the second without it (for example, `my-script`). on the internet, there are discussions about that – see for example this [stackexchange thread](https://unix.stackexchange.com/questions/182882/use-sh-or-bash-extension-for-bash-scripts) and this [stackoverflow thread](https://stackoverflow.com/questions/27813563/what-is-the-bash-file-extension).

there are also recommendations, like this [google guidelines on shell scripts extension](https://google.github.io/styleguide/shell.xml?showone=File_Extensions#File_Extensions). according to this guideline, i have decided not to use `sh` extension in the name of the script in this article.

by the way, i do not know whether there exists a linux distribution or a [desktop environment](https://en.wikipedia.org/wiki/Desktop_environment) that differentiates shell scripts based on their extension (though logically there should exists.)

### a note about the terms "script" and "file"

in the context of this article, by "a script" i want to mean "a type of file", but "a file" is not "a type of script" for me. therefore, these two terms are not interchangeable for me. in the article, there could be places where i have written "script", but it would be more appropriate to write "file". also, there could be places where i have written "file", but it would be more appropriate to write "script". sorry if there are such places.

### a note about the run-parts utility

run-parts runs files inside a directory. on the internet, one may come across different requirements for the files to be run by it. as i have noticed, they differ among various versions of anacron in different linux distributions. for example, in ubuntu 18.04 LTS there are [documented restrictions in the run-parts manual](http://manpages.ubuntu.com/manpages/bionic/man8/run-parts.8.html) on the names of the files to be executed.

on fedora, the only requirement that i have found is that the files have to be executable. surprisingly, what i have checked in my configuration (see below in this section), they need not to be executable by the owner – which is, as i have noticed, common in case of executables in linux – only _either_ by the owner, the owner group or others; that is, just one execute permission of three is enough. to be sure, in my configuration (see this section below), using anacron with its default configuration, i have tried and successfully executed a file with an intentionally complicated name `1test_f-d.ABC`.

### a note about portability of code in this article and POSIX

**all code in this article is not intended to be portable** (especially not in the case of filenames – see below in this section). it is written to be working only in GNU bash version 4.4.23(1)-release (i686-redhat-linux-gnu) installed on fedora workstation 27 32-bit, using linux kernel version 4.17.19-100.fc27.i686+PAE, and having encoding set to UTF-8 with unicode. **however, one should be aware that it even may or may not work on the same configuration, based on what hardware one uses (for example, i use 32-bit linux with 64-bit processor, what probably is not a common case).** it may work the same or similarly on a different configuration, but it should not be treated as a rule.

speaking about standards, bash implements POSIX with a couple of exceptions. for details, see the documentation of [bash POSIX mode](https://www.gnu.org/software/bash/manual/html_node/Bash-POSIX-Mode.html).

speaking about portability problems, for details on what problems may occur if one would like to put some common characters in filenames (particularly space), one could see this extensive [david wheeler article about filename problems](https://dwheeler.com/essays/fixing-unix-linux-filenames.html).

for tips on how to test whether a script is portable (or POSIX-compliant) enough according to one's needs, see for example this [stackoverflow thread about POSIX and portability](https://unix.stackexchange.com/questions/48786/how-can-i-test-for-posix-compliance-of-shell-scripts). for further details, see [POSIX](http://pubs.opengroup.org/onlinepubs/9699919799/).

### a note about characters, filenames and encodings in bash

i will describe mostly bash here, since the topic is wide and i have not enough knowledge (yet).

when it comes to linux and scripts, it seems on the internet to be a common problem to properly handle paths and filenames – in the sense that not every character is read in the same way by various utilities, including shells.

there are discussed a few characters that may cause major problems, see for example the aforementioned [david wheeler article](https://dwheeler.com/essays/fixing-unix-linux-filenames.html). among others, these are: hyphen (preceded with space; sometimes called "dash" – see below) and three whitespaces: space, tab and newline. speaking about bash, they are ambiguous even within bash itself – that is, ambiguous for the user, not for the bash. for details, see for example this [stackexchange thread](https://stackoverflow.com/questions/29378566/i-just-assigned-a-variable-but-echo-variable-shows-something-else).

probably, it could be a secondary topic in this article, but it is also good to remember that there are used different encodings among operating systems (not only linux). i have not come across many issues with it writing this article, but that is possibly because i use only latin characters. just to be exact, i use UTF-8 with unicode (this was set as the default settings in GNOME terminal, which i use, and also UTF-8 is the default setting in the locale in fedora). by the way, it is good to remember the [difference between unicode and UTF-8](https://stackoverflow.com/questions/643694/what-is-the-difference-between-utf-8-and-unicode) (see also this [stackoverflow thread](https://stackoverflow.com/questions/3951722/whats-the-difference-between-unicode-and-utf-8)), which is still hard for me.

as i have mentioned, for the purpose of this article i have chosen to use only letters, digits and hyphens (not preceded by space). doing this, i want to minimize the possibility that i, or the readers, accidentally omit an important aspect of using the aforementioned problematic characters with various utilities and bash features.

lastly, on the internet one may come across two different terms: [_hyphen_](https://en.wikipedia.org/wiki/Hyphen) and [_dash_](https://en.wikipedia.org/wiki/Dash). i have noticed (this is my private observation) that it is common to use the _dash_ term in the context of scripting and shells. it is good to mention that sometimes there is made a difference between them. sometimes there are also differentiated two dash types: [en-dash](https://en.wikipedia.org/wiki/En_dash) and [em-dash](https://en.wikipedia.org/wiki/Em_dash). for example, [unicode differentiates these three characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters). see also this article on [differences between dashes and hyphen](https://cgi.duke.edu/web/sciwriting/index.php?action=dash_vs_hyphen). i decided to use the "hyphen" term in this article, to be compliant with unicode.

### what is to improve

as my script fits my needs, it may not fit anyone's. so, possibly one would like to improve it (or simplify) by applying another way of creating files – as a normal user, or just choosing to create them as root (deciding whether it should be stored in another directory, most probably with only root permissions). please be aware that modification in this area could increase or decrease security, depending on how thoroughly it will be studied.

### what i have not described

some of you have probably noticed that i do not describe several things. for example, what are the storage media that i use, whether they are internal or external, whether they are remote devices or whether the device is connected all the time. since these things are not a part of this article's subject, i decided not to cover them.

### further details

for any details that i did not describe and one would like to understand or read about, see the following:
- the [GNU bash documentation](https://www.gnu.org/software/bash/manual/);
- the [GNOME terminal documentation](https://help.gnome.org/users/gnome-terminal/stable/) (which i was using testing all the code in this article);
- the [fedora documentation](https://docs.fedoraproject.org/en-US/docs/);
- the [linux kernel documentation](https://www.kernel.org/doc/html/latest/).

### did i read all of the text on all of the links provided in this article?

yes and no. yes, in the sense of browsing all of them. no, in the sense of reading all the text within all of them from the start to the end. especially in the case of wikipedia's articles, i have looked in most cases only at their titles and first paragraphs. due to that, occasionally there might links that do not correspond entirely to the context or to the point that they are intended to correspond to. sorry if such situations occur.

### a note about syntax highlighting and markdown in this article

one may notice that in the listings that are put in this article there is no syntax highlighting. for the time that this article is published, its version available online uses default [syntax highlighting provided by github](https://help.github.com/articles/creating-and-highlighting-code-blocks/). it is part of the [github flavored markdown](https://help.github.com/articles/about-writing-and-formatting-on-github/). for the time that this article is published, github uses the [linguist library](https://github.com/github/linguist) to perform detection of the language that a listing is written in.

since the code highlighting performed by the editor that i was using while writing this article – visual studio code – seemed to be inconsistent in the case of shell code, and i could not find what library detecting language in code blocks in markdown files uses this editor, i could not predict whether the results will be inconsistent as well in the case of github (that is, after publishing this article).

i think that no highlighting is better than inconsistent highlighting. therefore, i decided not to use syntax highlighting at all in this article. for details, see the [visual studio code documentation on markdown](https://code.visualstudio.com/docs/languages/markdown) and the [visual studio code source code](https://github.com/Microsoft/vscode).

## what i know and acknowledgements

i do not usually remember everything that is written in this article, in particular i do not remember the syntax of every command. therefore, writing this article i must being used various documentations, manuals, forums, articles and other materials available online. sometimes, i was just rewriting in my own words what was already written. doing that, i have learned a lot of new and useful things, including english phrases.

it is a great job of the programmers, creators, contributors, bloggers, maintainers and many other people from all over the world. they spend their time on putting their knowledge and thoughts into the internet, or on making content available, or – on making sure that websites and systems are secure, or – on making sure that the electricity, water and food are provided on time.

i wish that i could thank every particular person (or any kind of organization or institution) that helped me writing this article, or at least those who have done it by publishing content on their website. unfortunately, i have realized too late that i should keep links to all the websites that i have visited. but, most probably even that would not be enough – usually, not all the people involved in the process of making the content available to a reader like me are mentioned on a website.

in that case, i just want to thank you all.

## will this article be updated?

this article is not intended to be updated, since it has to present the **current** level of my knowledge. but, i may update it if i would have something to add or change and i will remember about it.