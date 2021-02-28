---
layout: post
title: "Virtual Machine Manager's options and information"
date: 2021-02-28
tags: Virtualization Software Administration
---

**Warning:** This article has been published uncompleted intentionally. It is to be being updated until it is completed. Until completed, its content may be incorrect. **It is on your own responsibility making use of it before it is completed.**

---

This article is to be a simple overview of, and my comment to, all the options and information provided by the Virtual Machine Manager (virt-manager) utility.

I would like to put emphasis rather on comprehensiveness (all the options and information) than on the details of particular options and pieces of information. None of the descriptions of options and information should be treated as documentation.

The Virtual Machine Manager version described is 3.2.0. Both CLI and GUI options and information are included. For general information about the Virtual Machine Manager utility, see [[9]](#9).

## Disclaimer

**The options and information mentioned may not be available or work as described here in all environments. I did not test them all.** Always refer to the documentation of Virtual Machine Manager available for your environment prior to this article.

## CLI options

These options are available when running Virtual Machine Manager from the console.

(1) As per [[1]](#1), "standard GTK options like --g-fatal-warnings are accepted". I am not sure what these options are. Some details about some CLI options available for GTK+ applications can be found in [[2]](#2). For more information about the GTK toolkit itself, see [[10]](#10).

(2) `-h` or `--help` – displays a help message. [[1]](#1)

(3) `--version` – displays the version of the Virtual Machine Manager that was invoked with this option. [[1]](#1)

(4) `-c`, `--connect` – connects to the hypervisor using a specified URI. [[1]](#1) For more information about connecting to a hypervisor using URIs and libvirt, see [[3]](#3). For more information about hypervisors, see [[4]](#4). For more information about URIs, see [[11]](#11).

(5) `--debug` – as per [[1]](#1), it displays "debugging output" in the console. I am not sure what this output may consists of. This option is also mentioned in [[6]](#6).

(6) `--no-fork` – as per [[1]](#1), it makes Virtual Machine Manager not forked off into the background. I am not sure what it actually means. This option is also mentioned in [[5]](#5) and [[6]](#6).

(7) `--show-domain-creator` – as per [[1]](#1), it displays "the wizard for creating new virtual machines". I am not sure what the word "domain" refers to; for one possible explanation of this term, see [[8]](#8). For more information about virtual machines, see [[12]](#12).

(8) `--show-domain-editor NAME|ID|UUID` – as per [[1]](#1), it displays "the dialog for editing properties of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.

(9) `--show-domain-performance NAME|ID|UUID` – as per [[1]](#1), it displays "the dialog for monitoring performance of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.

(10) `--show-domain-console NAME|ID|UUID` – as per [[1]](#1), it displays "the virtual console of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.

(11) `--show-host-summary` – as per [[1]](#1), it displays "the host/connection details window".

## GUI options

These menus, toolbars, windows, options and pieces of information are available when running Virtual Machine Manager as a graphical utility.

### The main window of Virtual Machine Manager

- The main menu

    - The menu "File"

        (1) The option "Add connection..." – opens the window "Add Connection". This window most probably facilitates adding a connection to a hypervisor (?) (note that, for example, libvirt's documentation mentions in [[3]](#3) that a "connection" may refer to a "driver"). For options available within this window, see below.

        (2) The option "New Virtual Machine" – opens the window of the creator "Create a new virtual machine". For options available within this window, see below.

        (3) The option "Close" – closes the main Virtual Machine Manager window; it does not close particular virtual machines' windows.

        (4) The option "Quit" – quits Virtual Machine Manager; it closes all Virtual Machine Manager's windows, also particular virtual machines' ones (note: it **does not** stop virtual machines).

    - The menu "Edit"

        (5) The option "Connection Details" – TODO

        (6) The option "Virtual Machine Details" – TODO

        (7) The option "Delete" – TODO

        (8) The option "Preferences" – TODO

    - The menu "View"

        - The menu "Graph"

            (9) The option "Guest CPU Usage" – TODO

            (10) The option "Host CPU Usage" – TODO

            (11) The option "Memory Usage" – TODO

            (12) The option "Disk I/O" – TODO

            (13) The option "Network I/O" – TODO

    - The menu "Help"

        (14) The option "About" – TODO

- The toolbar

    (15) The button "Create a new virtual machine" – TODO

    (16) The button "Open" ("Show the virtual machine console and details") – TODO

    (17) The button "Power on the virtual machine" – TODO

    (18) The button "Pause the virtual machine" – TODO

    (19) The first button "Shut down the virtual machine" – TODO

    (20) The second button "Shut down the virtual machine" – TODO

    - The menu "Shut down the virtual machine"

        (21) The option "Reboot" – TODO

        (22) The option "Shut Down" – TODO

        (23) The option "Force Reset" – TODO

        (24) The option "Force Off" – TODO

        (25) The option "Save" – TODO

- The pane with the list of hypervisors and virtual machines

    (26) The column "Name" – TODO

    (27) The column "CPU usage" – TODO

    (28) The column "Host CPU usage" – TODO

    (29) The column "Memory usage" – TODO

    (30) The column "Disk I/O" – TODO

    (31) The column "Network I/O" – TODO

    - The context menu available right-clicking the bar with the name of a connection

        (32) The option "New" – TODO

        (33) The option "Connect" – TODO

        (34) The option "Disconnect" – TODO

        (35) The option "Delete" – TODO

        (36) The option "Details" – TODO

### The window "Add Connection" (the main window of Virtual Machine Manager > the main menu > "File" > "Add connection...")

(37) The option "Hypervisor" – allows to select the hypervisor to connect to (?). For options available within the drop-down menu of this option, see below.

(38) The option "Connect to remote host over SSH" – most probably allows to connect to a remote host over the SSH protocol. [[13]](#13) may be related. This option is available only when one of the following options is selected in the option 37: "QEMU/KVM", "Xen", "Libvirt-LXC". For options available within this option, see below. For more information about the SSH protocol, see [[14]](#14).

(39) The option "Autoconnect" – most probably allows to specify whether the connection should be established automatically when Virtual Machine Manager starts. Option 100 may be related.

(40) The information "Generated URI" – most probably displays the final URI address that will be used to connect.

(41) The button "Cancel" – closes the window "Add Connection" without connecting.

(42) The button "Connect" – closes the window "Add Connection" and connects.

(43) The warning "QEMU usermode session..." – it reads: "QEMU usermode session is not the virt-manager default. It is likely that any pre-existing QEMU/KVM guests will not be available. Networking options are very limited." I am not sure what it means. I am not sure whether it is related, but the word "usermode" occurs several times in [[15]](#15), and the word "user-mode" occurs in [[16]](#16). For more information about networking regarding QEMU use, see [[17]](#17). For more information about QEMU, see [[18]](#18). For more information about KVM, see [[19]](#19).

(44) The option "Custom URI" – allows to specify a custom URI for the connection.

- The drop-down menu "Hypervisor"

    (45) The option "QEMU/KVM" – allows to specify that the hypervisor to connect to is a "QEMU/KVM" hypervisor (?); I am not sure whether the character string "QEMU/KVM" should be treated as one "hypervisor" or not. Selecting this value in the drop-down menu "Hypervisor" generates the URI `qemu:///system`; for the difference between the URIs `qemu:///session` and the URI `qemu:///system`, see [[21]](#21).

    (46) The option "QEMU/KVM user session" – allows to specify what hypervisor to connect to (?); I am not sure whether the character string "QEMU/KVM user session" should be treated either as a separate hypervisor, or one equivalent with the character string "QEMU/KVM" in option 45, or differently. Selecting this value in the drop-down menu "Hypervisor" generates the URI `qemu:///session`; for the difference between the URIs `qemu:///session` and the URI `qemu:///system`, see [[21]](#21).

    (47) The option "Xen" – allows to specify that the hypervisor to connect to is a Xen hypervisor (?). Selecting this value in the drop-down menu "Hypervisor" generates the URI `xen:///`. For more information about the Xen hypervisor, see [[20]](#20).

    (48) The option "Libvirt-LXC" – allows to specify that the hypervisor to connect to is a "Libvirt-LXC" hypervisor (?); I am not sure whether the character string "Libvirt-LXC" should be treated as one "hypervisor" or not. Selecting this value in the drop-down menu "Hypervisor" generates the URI `lxc:///`. For more information about libvirt, see [[22]](#22). For more information about LXC, see [[23]](#23).

    (49) The option "Custom URI..." – allows to specify a custom URI for the connection.

- The options of the option "Connect to remote host over SSH"

    (50) The option "Username" – most probably allows to specify the username for connecting over the SSH protocol.

    (51) The option "Hostname" – most probably allows to specify the hostname for connecting over the SSH protocol.

### The creator "Create a new virtual machine" (the window "New Virtual Machine"; the main window of Virtual Machine Manager > the main menu > "File" > "New Virtual Machine")

(52) The button "Cancel" – TODO

(53) The button "Back" – TODO

(54) The button "Forward" – TODO

(55) The button "Finish" – TODO

- The pane "Step 1 of 5"

    (56) The information "Connection" – TODO

    (57) The option "Choose how would you like to install the operating system" – TODO

- The pane "Step 2 of 5"

    (58) The option "Choose ISO or CDROM install media" – TODO

    (59) The button "Browse..." – allows to browse for a location of the install media. Opens the window "Locate ISO media volume"; for options available within this window, see below.

    (60) The option "Choose the operating system you are installing" – TODO

    (61) The option "Automatically detect from the installation media / source" – TODO

- The pane "Step 3 of 5"

    (62) The option "Choose Memory and CPU settings" – TODO

    - The options in the option "Choose Memory and CPU settings"

        (63) The option "Memory" – TODO

        (64) The option "CPUs" – TODO

- The pane "Step 4 of 5"

    (65) The option "Enable storage for this virtual machine" – TODO

    - The options of the option "Enable storage for this virtual machine"

        (66) The option "Create a disk image for the virtual machine" – TODO

        (67) The option "Select or create custom storage" – TODO

        - The options of the option "Select or create custom storage"

            (68) The button "Manage..." – TODO

- The pane "Step 5 of 5"

    (69) The information "Name" – TODO

    (70) The information "OS" – TODO

    (71) The information "Install" – TODO

    (72) The information "Memory" – TODO

    (73) The information "CPUs" – TODO

    (74) The information "Storage" – TODO

    (75) The option "Customize configuration before install" – TODO

    (76) The option "Network selection" – TODO. For options within this option, see the option 384.

### The window "Locate ISO media volume" (the main window of Virtual Machine Manager > the main menu > "File" > "New Virtual Machine" > "Forward" > Browse...")

(77) The button "Browse local" – TODO

(78) The button "Cancel" – TODO

(79) The button "Choose Volume" – TODO

- The storage pool pane

    (80) The storage pool list – TODO

    (81) The button "Add Pool" – TODO

    (82) The button "Start Pool" – TODO

    (83) The button "Stop Pool" – TODO

    (84) The button "Delete Pool" – TODO

- The tab "Details"

    (85) The information "Size" – TODO

    (86) The information "Location" – TODO

    - The pane "Volumes"

        (87) The button "Create new volume" – TODO

        (88) The button "Refresh volume list" – TODO

        (89) The button "Delete volume" – TODO

        - The volume list

            (90) The column "Volumes" – TODO

            (91) The column "Size" – TODO

            (92) The column "Format" – TODO

- The tab "XML"

    (93) The warning "XML editing..." – TODO

    (94) The field with the XML document – TODO

### The window "Connection Details" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Connection Details")

- The main menu

    - The menu "File"

        (95) The option "View Manager" – TODO

        (96) The option "Close" – TODO

        (97) The option "Quit" – TODO

- The tab "Overview"

    - The section "Basic details"

        (98) The option "Name" – TODO

        (99) The information "Libvirt URI" – TODO

        (100) The option "Autoconnect" – allows to specify whether the connection should be established automatically when Virtual Machine Manager starts. Option 39 may be related.

    - The section "CPU usage"

        (101) The CPU usage graph – TODO

    - The section "Memory usage"

        (102) The memory usage graph – TODO

- The tab "Virtual Networks"

    - The pane with the list of networks

        (103) The list of networks – TODO

        (104) The button "Add Network" – TODO

        (105) The button "Start Network" – TODO

        (106) The button "Stop Network" – TODO

        (107) The button "Delete Network" – TODO

    - The tab "Details"

        (108) The information "Name" – TODO

        (109) The information "Device" – TODO

        (110) The information "State" – TODO

        (111) The information "Autostart" – TODO

        - The section "IPv4 configuration"

            (112) The information "Network" – TODO

            (113) The information "DHCP range" – TODO

            (114) The information "Forwarding" – TODO

    - The tab "XML"

        (115) The warning "XML editing" – TODO

        (116) The field with the XML document – TODO

- The tab "Storage"

    (See the description of the window "Locate ISO media volume".)

### The creator "Create virtual network" (the window "Create a new virtual network")

(117) The button "Cancel" – TODO

(118) The button "Finish" – TODO

- The tab "Details

    (119) The option "Name" – TODO

    (120) The option "Mode" – TODO

    (121) The option "Forward to" – TODO

    (122) The option "Device" – TODO

    (123) The option "Device list" – TODO

    (124) The option "IPv4 configuration" – TODO

    (125) The option "IPv6 configuration" – TODO

    (126) The option "DNS domain name" – TODO

    - The options of the option "Mode"

        (127) The option "NAT" – TODO

        (128) The option "Routed" – TODO

        (129) The option "Open" – TODO

        (130) The option "Isolated" – TODO

        (131) The option "SR-IOV pool" – TODO

    - The options of the option "Forward to"

        (132) The option "Any physical device" – TODO

        (133) The option "Physical device" – TODO

    - The options of the option "IPv4 configuration"

        (134) The option "Enable IPv4" – TODO

        - The options of the option "Enable IPv4"

            (135) The option "Network" – TODO

            (136) The option "Enable DHCPv4" – TODO

            - The options of the option "Enable DHCPv4"

                (137) The option "Start" – TODO

                (138) The option "End" – TODO

    - The options of the option "IPv6 configuration"

        (139) The option "Enable IPv6" – TODO

        - The options of the option "Enable IPv6"

            (140) The option "Network" – TODO

            (141) The option "Enable DHCPv6" – TODO

            - The options of the option "Enable DHCPv6"

                (142) The option "Start" – TODO

                (143) The option "End" – TODO

    - The options of the option "DNS domain name"

        (144) The option "Use network name" – TODO

        (145) The option "Custom" – TODO

- The tab "XML"

    (146) The warning "XML editing..." – TODO

    (147) The field with the XML document – TODO

### The virtual machine window (the main window of Virtual Machine Manager > the main menu > "Edit" > "Virtual Machine Details")

- The main menu

    - The menu "File"

        (148) The option "View Manager" – TODO

        (149) The option "Close" – TODO

        (150) The option "Quit" – TODO

    - The menu "Virtual Machine"

        (151) The option "Run" – TODO

        (152) The option "Pause" – TODO

        (153) The option "Clone..." – TODO

        (154) The option "Migrate..." – TODO

        (155) The option "Delete" – TODO

        (156) The option "Take Screenshot" – TODO

        (157) The option "Redirect USB device" – TODO

        - The menu "Shut Down"

            (See the description of the menu "Shut down the virtual machine" in the toolbar of the main window of the Virtual Machine Manager.)

    - The menu "View"

        (158) The option "Console" – TODO

        (159) The option "Details" – TODO

        (160) The option "Snapshots" – TODO

        (161) The option "Fullscreen" – TODO

        (162) The option "Resize to VM" – TODO

        (163) The option "Autoconnect" – TODO

        (164) The option "Toolbar" – TODO

        - The menu "Scale Display"

            (165) The option "Always" – TODO

            (166) The option "Only when Fullscreen" – TODO

            (167) The option "Never" – TODO

            (168) The option "Auto resize VM with window" – TODO

        - The menu "Consoles"

            (169) The option "Graphical Console Spice" – TODO

            (170) The option "Serial 1" – TODO

    - The menu "Send Key"

        (171) The option "Ctrl+Alt+Backspace" – TODO

        (172) The option "Ctrl+Alt+Delete" – TODO

        (173) The option "Ctrl+Alt+F1" – TODO

        (174) The option "Ctrl+Alt+F2" – TODO

        (175) The option "Ctrl+Alt+F3" – TODO

        (176) The option "Ctrl+Alt+F4" – TODO

        (177) The option "Ctrl+Alt+F5" – TODO

        (178) The option "Ctrl+Alt+F6" – TODO

        (179) The option "Ctrl+Alt+F7" – TODO

        (180) The option "Ctrl+Alt+F8" – TODO

        (181) The option "Ctrl+Alt+F9" – TODO

        (182) The option "Ctrl+Alt+F10" – TODO

        (183) The option "Ctrl+Alt+F11" – TODO

        (184) The option "Ctrl+Alt+F12" – TODO

        (185) The option "Print" – TODO

- The toolbar

    (186) The button "Show the graphical console" – TODO

    (187) The button "Show virtual hardware details" – TODO

    (188) The button "Power on the virtual machine" – TODO

    (189) The button "Pause the virtual machine" – TODO

    (190) The first button "Shut down the virtual machine" – TODO

    (191) The second button "Shut down the virtual machine" – TODO

    (192) The button "Manage VM snapshots" – TODO

- The graphical console pane

    TODO

- The virtual hardware details pane

    (193) The button "Remove" – TODO

    (194) The button "Cancel" – TODO

    (195) The button "Apply" – TODO

    - The pane with the hardware list

        (196) The position "Overview" – TODO

        (197) The position "OS information" – TODO

        (198) The position "Performance" – TODO

        (199) The position "CPUs" – TODO

        (200) The position "Memory" – TODO

        (201) The position "Boot Options" – TODO

        (202) The position "SATA CDROM `<number>`" – TODO

        (203) The position "NIC `<address>`" – TODO

        (204) The position "Tablet" – TODO

        (205) The position "Mouse" – TODO

        (206) The position "Keyboard" – TODO

        (207) The position "Display `<type>`" – TODO

        (208) The position "Sound `<model>`" – TODO

        (209) The position "Serial `<number>`" – TODO

        (210) The position "Channel `<?>`" – TODO

        (211) The position "Video `<model>`" – TODO

        (212) The position "Controller USB 0" – TODO

        (213) The position "Controller SATA 0" – TODO

        (214) The position "Controller PCIe 0" – TODO

        (215) The position "USB Redirector `<number>`" – TODO

        (216) The position "RNG `<device>`" – TODO

        (217) The button "Add Hardware" – TODO

        - The context menu available right-clicking a position on the list

            (218) The option "Add Hardware" – TODO

            (219) The option "Remove Hardware" – TODO

        - The options and information of the position "Overview"

            - The section "Basic Details"

                (220) The option "Name" – TODO

                (221) The information "UUID" – TODO

                (222) The information "Status" – TODO

                (223) The option "Title" – TODO

                (224) The option "Description" – TODO

            - The section "Hyperviso Details"

                (225) The information "Hypervisor" – TODO

                (226) The information "Architecture" – TODO

                (227) The information "Emulator" – TODO

                (228) The information "Chipset" – TODO

                (229) The information "Firmware" – TODO

        - The options and information of the position "OS information"

            (230) The option "Operating system" – TODO

        - The options and information of the position "Performance"

            (231) The graph "CPU usage" – TODO

            (232) The graph "Memory usage" – TODO

            (233) The graph "Disk I/O" – TODO

            (234) The graph "Network I/O" – TODO

        - The options and information of the position "CPUs"

            - The section "CPUs"

                (235) The information "Logical host CPUs" – TODO

                (236) The option "vCPU allocation" – TODO

            - The section "Configuration"

                (237) The option "Copy host CPU configuration" – TODO

                (238) The option "Model" – TODO

                (239) The option "Enable available CPU security flaw mitigations" – TODO

            - The section "Topology"

                (240) The option "Manually set CPU topology" – TODO

                - The options of the option "Manually set CPU topology"

                    (241) The option "Sockets" – TODO

                    (242) The option "Cores" – TODO

                    (243) The option "Threads" – TODO

        - The options and information of the position "Memory"

            - The section "Memory"

                (244) The information "Total host memory" – TODO

                (245) The option "Current allocation" – TODO

                (246) The option "Maximum allocation" – TODO

        - The options and information of the position "Boot Options"

            - The section "Autostart"

                (247) The option "Start virtual machine on host boot up" – TODO

            - The section "Boot device order"

                (248) The option "Enable boot menu" – TODO

                (249) The list of boot devices – TODO

                (250) The button with an up arrow – TODO

                (251) The button with a down arrow – TODO

            - The section "Direct kernel boot"

                (252) The option "Enable direct kernel boot" – TODO

                - The options of the option "Enable direct kernel boot"

                    (253) The option "Kernel path" – TODO

                    (254) The option "Initrd path" – TODO

                    (255) The option "Kernel args" – TODO

                    - The options of the option "Kernel path"

                        (256) The text field – TODO

                        (257) The button "Browse" – TODO

                    - The options of the option "Initrd path"

                        (258) The text field – TODO

                        (259) The button "Browse" – TODO

        - The options and information of the position "SATA CDROM `<number>`"

            - The section "Virtual Disk"

                (260) The option "Source path" – TODO

                (261) The information "Device type" – TODO

                (262) The information "Disk bus" – TODO

                (263) The information "Storage size" – TODO

                - The options of the option "Source path"

                    (264) The drop-down menu – TODO

                    (265) The button "Browse" – TODO

                - The section "Advanced options"

                    (266) The option "Readonly" – TODO

                    (267) The option "Shareable" – TODO

                    (268) The option "Serial" – TODO

                    (269) The option "Cache mode" – (see the option 354.)

                    (270) The option "Discard mode" – (see the option 355.)

                    (271) The option "Detect zeroes" – (see the option 356.)

        - The options and information of the position "NIC `<address>`"

            - The section "Virtual Network Interface"

                (272) The option "Network source" – TODO

                (273) The option "Device model" – TODO. For options of this option, see the option 383.

                (274) The information "MAC address" – TODO. See also the option 382.

                (275) The information "IP address" – TODO

                (276) The option "Link state" – TODO

                - The options of the option "Network source"

                    (277) The option "Virtual network 'default' : NAT" – TODO

                    (278) The option "Bridge device..." – TODO

                    (279) The option "Macvtap device..." – TODO

                    - The options of the option "Bridge device"

                        (280) The option "Device name" – TODO

                    - The options and information of the option "Macvtap device"

                        (281) The option "Device name" – TODO

                        (282) The warning "In most configurations..." – TODO

                - The options of the information "IP address"

                    (283) The button with a loopy arrow – TODO

                - The options of the option "Link state"

                    (284) The option "active" – TODO

        - The options and information of the position "Tablet"

            - The section "Virtual Input Device"

                (285) The information "Type" – TODO

                (286) The information "Mode" – TODO

        - The options and information of the position "Mouse"

            - The section "Virtual Input Device"

                (287) The information "Type" – TODO

                (288) The information "Mode" – TODO

        - The options and information of the position "Keyboard"

            - The section "Virtual Input Device"

                (289) The information "Type" – TODO

        - The options and information of the position "Display `<type>`"

            - The section "`<type>` Server"

                (290) The option "Type" – TODO. For options of this option, see the option 400.

                (291) The option "Listen type" – TODO. For options of this option, see the option 401.

                (292) The option "Address" – TODO. For options of this option, see the option 402.

                (293) The option "Port" – TODO. For options of this option, see the option 403.

                (294) The option "Password" – TODO. For options of this option, see the option 404.

                (295) The option "OpenGL" – TODO. For options of this option, see the option 405.

        - The options of the position "Sound `<model>`"

            - The section "Sound Device"

                (296) The option "Model" – TODO. For options of this option, see the option 423.

        - The options and information of the position "Serial `<number>`"

            - The section "Serial Device `<number>` (Primary Console)"

                (297) The information "Device type" – TODO

        - The options and information of the position "Channel `<?>`"

            - The section "Channel Device"

                (298) The information "Device type" – TODO

                (299) The information "Target type" – TODO

                (300) The information "Target name" – TODO

        - The options and information of the position "Video `<model>`"

            - The section "Video"

                (301) The option "Model" – TODO. For options of this option, see the option 457.

                (302) The option "3D acceleration" – TODO

        - The options and information of the position "Controller USB 0"

            - The section "Controller"

                (303) The information "Type" – TODO

                (304) The option "Model" – (see the option 374 (?).)

        - The options and information of the position "Controller SATA 0"

            - The section "Controller"

                (305) The information "Type" – TODO

                (306) The information "Devices" – TODO

        - The options and information of the position "Controller PCIe 0"

            - The section "Controller"

                (307) The information "Type" – TODO

        - The options and information of the position "Controller VirtIO Serial 0"

            - The section "Controller"

                (308) The information "Type" – TODO

        - The options and information of the position "USB Redirector `<number>`"

            (309) The information "Type" – TODO

        - The options and information of the position "RNG `<device>`"

            - The section "Random Number Generator"

                (310) The information "Type" – TODO

                (311) The information "Host Device" – TODO

    - The tab "Details

        TODO

    - The tab "XML"

        TODO

### The window "Add New Virtual Hardware" (the virtual hardware details pane)

(312) The button "Cancel" – TODO

(313) The button "Finish" – TODO

- The hardware list

    (314) The position "Storage" – TODO

    (315) The position "Controller" – TODO

    (316) The position "Network" – TODO

    (317) The position "Input" – TODO

    (318) The position "Graphics" – TODO

    (319) The position "Sound" – TODO

    (320) The position "Serial" – TODO

    (321) The position "Parallel" – TODO

    (322) The position "Console" – TODO

    (323) The position "Channel" – TODO

    (324) The position "USB Host Device" – TODO

    (325) The position "PCI Host Device" – TODO

    (326) The position "Video" – TODO

    (327) The position "Watchdog" – TODO

    (328) The position "Filesystem" – TODO

    (329) The position "Smartcard" – TODO

    (330) The position "USB Redirection" – TODO

    (331) The position "TPM" – TODO

    (332) The position "RNG" – TODO

    (333) The position "Panic Notifier" – TODO

    (334) The position "VirtIO VSOCK" – TODO

    - The options and information of the position "Storage"

        (335) The option "Create a disk image for the virtual machine" – TODO

        (336) The option "Select or create a custom storage" – TODO

        (337) The option "Device type" – TODO

        (338) The option "Bus type" – TODO

        - The options and information of the option "Create a disk image for the virtual machine"

            (339) The "GiB" field – TODO

            (340) The information about storage available – TODO

        - The options of the option "Select or create a custom storage"

            (341) The button "Manage..." – TODO

            (342) The text field – TODO

        - The options of the option "Device type"

            (343) The option "Disk device" – TODO

            (344) The option "CDROM device" – TODO

            (345) The option "Floppy device" – TODO

            (346) The option "LUN Passthrough" – TODO

        - The options of the option "Bus type"

            (347) The option "SATA" – TODO

            (348) The option "SCSI" – TODO

            (349) The option "USB" – TODO

            (350) The option "VirtIO" – TODO

        - The section "Advanced options"

            (351) The option "Readonly" – TODO

            (352) The option "Shareable" – TODO

            (353) The option "Serial" – TODO

            (354) The option "Cache mode" – TODO. See also the option 269.

            (355) The option "Discard mode" – TODO. See also the option 270.

            (356) The option "Detect zeroes" – TODO. See also the option 271.

            - The options of the option "Cache mode"

                (357) The option "Hypervisor default" – TODO

                (358) The option "none" – TODO

                (359) The option "writethrough" – TODO

                (360) The option "writeback" – TODO

                (361) The option "directsync" – TODO

                (362) The option "unsafe" – TODO

            - The options of the option "Discard mode"

                (363) The option "Hypervisor default" – TODO

                (364) The option "ignore" – TODO

                (365) The option "unmap" – TODO

            - The options of the option "Detect zeroes"

                (366) The option "Hypervisor default" – TODO

                (367) The option "off" – TODO

                (368) The option "on" – TODO

                (369) The option "unmap" – TODO

    - The options and information of the position "Controller"

        (370) The option "Type" – TODO

        (371) The option "Model" — TODO

        - The options of the option "Type"

            (372) The option "CCID" – TODO

            (373) The option "SCSI" – TODO

            (374) The option "USB" – TODO. See also the option 304 (?).

            (375) The option "VirtIO Serial" – TODO

        - The options of the option "Model"

            (376) The option "Hypervisor default" – TODO

            (377) The option "VirtIO SCSI" – TODO

            (378) The option "Hypervisor default" – TODO

            (379) The option "USB 2" – TODO

            (380) The option "USB 3" – TODO

    - The options and information of the position "Network"

        (381) The option "Network resource" – TODO

        (382) The option "MAC address" – TODO. See also the option 274.

        (383) The option "Device model" – TODO. See also the option 273.

        - The options of the option "Network resource"

            (384) The option "Virtual network 'default': NAT" – TODO

            (385) The option "Bridge device..." – TODO

            (386) The option "Macvtap device..." – TODO

            - The options of the option "Bridge device"

                (387) The option "Device name" – TODO

            - The information of the option "Macvtap device..."

                (388) The warning "In most configurations..." – TODO

        - The options of the option "MAC address"

            (389) The checkbox – TODO

            (390) The text field – TODO

        - The options of the option "Device model"

            (391) The option "e1000e" – TODO

            (392) The option "Hypervisor default" – TODO

            (393) The option "virtio" – TODO

    - The options and information of the position "Input"

        (394) The option "Type" – TODO

        - The options of the option "Type"

            (395) The option "EvTouch USB Graphics Tablet" – TODO

            (396) The option "USB Keyboard" – TODO

            (397) The option "USb Mouse" – TODO

            (398) The option "VirtIO Keyboard" – TODO

            (399) The option "VirtIO Tablet" – TODO

    - The options and information of the position "Graphics"

        (400) The option "Type" – TODO. See also the option 290.

        (401) The option "Listen type" – TODO. See also the option 291.

        (402) The option "Address" – TODO. See also the option 292.

        (403) The option "Port" – TODO. See also the option 293.

        (404) The option "Password" – TODO. See also the option 294.

        (405) The option "OpenGL" – TODO. See also the option 295.

        - The options of the option "Type"

            (406) The option "Spice server" – TODO

            (407) The option "VNC server" – TODO

        - The options of the option "Listen type"

            (408) The option "Address" – TODO

            (409) The option "None" – TODO

        - The options of the option "Address"

            (410) The option "Hypervisor default" – TODO

            (411) The option "Localhost only" – TODO

            (412) The option "All interfaces" – TODO

        - The options of the option "Port"

            (413) The option "Auto" – TODO

            (414) The text field – TODO

        - The options of the option "Password"

            (415) The checkbox – TODO

            (416) The text field – TODO

            (417) The option "Show password" – TODO

        - The options and information of the option "OpenGL"

            (418) The drop-down menu – TODO

            (419) The warning "OpenGL only works with 'virtio'..." – TODO

            (420) The warning "OpenGL only works with 'Listen type'..." – TODO

            - The options of the drop-down menu of the option "OpenGL"

                (421) The option "Auto" – TODO

                (422) Options with ? – TODO

    - The options and information of the position "Sound"

        (423) The option "Model" – TODO. See also the option 296.

        - The options of the option "Model"

            (424) The option "HDA (ICH6)" – TODO

            (425) The option "HDA (ICH9)" – TODO

            (426) The option "AC97" – TODO

    - The options and information of the position "Serial"

        (427) The option "Device type" – TODO

        (428) The option "Path" – TODO

        - The options of the option "Device type"

            (429) The option "Output to a file (file)" – TODO

            (430) The option "Pseudo TTY (pty)" – TODO

            (431) The option "UNIX socket (unix)" – TODO

    - The options and information of the position "Parallel"

        (432) The option "Device type" – TODO

        (433) The option "Path" – TODO

        - The options of the option "Device type"

            (434) The option "Output to a file (file)" – TODO

            (435) The option "Pseudo TTY (pty)" – TODO

            (436) The option "UNIX socket (unix)" – TODO

    - The options and information of the position "Console"

        (437) The option "Device type" – TODO

        (438) The option "Type" – TODO

        - The options of the option "Device type"

            (439) The option "Pseudo TTY (pty)" – TODO

        - The options of the option "Type"

            (440) The option "VirtIO" – TODO

    - The options and information of the position "Channel"

        (441) The option "Name" – TODO

        (442) The option "Device type" – TODO

        (443) The option "Path" – TODO

        (444) The option "Channel" – TODO

        (445) The option "Auto socket" – TODO

        - The options of the option "Name"

            (446) The option "com.redhat.spice.0" – TODO

            (447) The option "org.libguestfs.channel.0" – TODO

            (448) The option "org.qemu.guest_agent.0" – TODO

            (449) The option "org.spice-space.webdav.0" – TODO

        - The options of the option "Device type"

            (450) The option "Output to a file (file)" – TODO

            (451) The option "Pseudo TTY (pty) – TODO

            (452) The option "Spice agent (spicevmc)" – TODO

            (453) The option "Spice port (spiceport)" – TODO

            (454) The option "UNIX socket (unix)" – TODO

    - The options and information of the position "USB Host Device"

        (455) The option "Host device" – TODO

    - The options and information of the position "PCI Host Device"

        (456) The option "Host device" – TODO

    - The options and information of the position "Video"

        (457) The option "Model" – TODO. See also the option 301.

        - The options of the option "Model"

            (458) The option "Bochs" – TODO

            (459) The option "QXL" – TODO

            (460) The option "Ramfb" – TODO

            (461) The option "VGA" – TODO

            (462) The option "Virtio" – TODO

    - The options and information of the position "Watchdog"

        (463) The option "Model" – TODO

        (464) The option "Action" – TODO

        - The options of the option "Model"

            (465) The option "DIAG288" – TODO

            (466) The option "I6300ESB" – TODO

            (467) The option "IB700" – TODO

        - The options of the option "Action"

            (468) The option "Dump guest memory core" – TODO

            (469) The option "Forcefully power off the guest" – TODO

            (470) The option "Forcefully reset the guest" – TODO

            (471) The option "Gracefully shutdown the guest" – TODO

            (472) The option "No action" – TODO

            (473) The option "Pause the guest" – TODO

    - The options and information of the position "Filesystem"

        (474) The option "Type" – TODO

        (475) The option "Mode" – TODO

        (476) The option "Source path" – TODO

        (477) The option "Target path" – TODO

        (478) The option "Export filesystem as readonly mount" – TODO

        - The options of the option "Type"

            (479) The option "mount" – TODO

        - The options of the option "Mode"

            (480) The option "mapped" – TODO

            (481) The option "squash" – TODO

            (482) The option "Hypervisor default" – TODO

        - The options of the option "Source path"

            (483) The text field – TODO

            (484) The button "Browse..." – TODO

    - The options and information of the position "Smartcard"

        (485) The option "Mode" – TODO

        - The options of the option "Mode"

            (486) "Host" – TODO

            (487) "Passthrough" – TODO

    - The options and information of the position "USB Redirection"

        (488) The option "Type" – TODO

        - The options of the option "Type"

            (489) The option "Spice channel" – TODO

    - The options and information of the position "TPM"

        (490) The option "Model" – TODO

        (491) The option "Backend" – TODO

        (492) The option "Version" – TODO

        (493) The option "Device Path" – TODO

        - The options of the option "Model"

            (494) The option "CRB" – TODO

            (495) The option "TIS" – TODO

        - The options of the option "Backend"

            (496) The option "Emulated device" – TODO

            (497) The option "Passthrough device" – TODO

        - The options of the option "Version"

            (498) The option "1.2" – TODO

            (499) The option "2.0" – TODO

    - The options and information of the position "RNG"

        (500) The option "Host Device" – TODO

    - The options and information of the position "Panic Notifier"

        (501) The option "Model" – TODO

        - The options of the option "Model"

            (502) The option "Hyper-V" – TODO

            (503) The option "ISA" – TODO

    - The options and information of the position "VirtIO VSOCK"

        (504) The option "Guest CID" – TODO

        - The options of the option "Guest CID"

            (505) The option "Auto" – TODO

            (506) The text field – TODO

### The window "Clone Virtual Machine" (the virtual machine window > the main menu > "Virtual Machine" > "Clone...")

(507) The information "Original VM" – TODO

(508) The option "Name" – TODO

(509) The option "Storage" – TODO

(510) The warning "Cloning does not alter..." – TODO

(511) The button "Cancel" – TODO

(512) The button "Clone" – TODO

- The options of the option "Storage"

    (513) The button "Details..." – TODO

    - The list of storages (?)

        (514) The column "Clone" – TODO

        (515) The column "Storage" – TODO

### The window "Change storage path" (the window "Clone Virtual Machine" > "Details...")

(516) The information "Path" – TODO

(517) The information "Target" – TODO

(518) The information "Size" – TODO

(519) The option "Create a new disk (clone) for the virtual machine" – TODO

- The options of the option "Create a new disk (clone) for the virtual machine"

    (520) The option "New Path" – TODO

    (521) The button "Browse..." – TODO

### The window "Migrate the virtual machine" (the virtual machine window > the main menu > "Virtual Machine" > "Migrate...")

(522) The button "Cancel" – TODO

(523) The button "Migrate" – TODO

- The tab "Details"

    (524) The information "Migrating VM" – TODO

    (525) The information "Original host" – TODO

    (526) The option "New host" – TODO

    - The options of the option "New host"

        (527) The option "No usable connection available." – TODO

        (528) The option "QEMU/KVM (Same connection)" – TODO

- The tab "XML"

    (529) The warning "XML editing..." – TODO

    (530) The field with the XML document – TODO

### The window "Delete Virtual Machine" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Delete")

(531) The information "Delete `<virtual machine name>`" – TODO

(532) The option "Delete associated storage files" – TODO

(533) The button "Cancel" – TODO

(534) The button "Delete" – TODO

- The options of the option "Delete associated storage files"

    - The pane with the list of storage files associated with the virtual machine

        (535) The first column (with no name) – TODO

        (536) The column "Storage Path" – TODO

        (537) The column "Target" – TODO

### The window "Preferences" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Preferences")

(538) The button "Close" – TODO

- The tab "General"

    - The section "General"

        (539) The option "Enable system tray icon" – TODO

        (540) The option "Enable XML editing" – TODO

        (541) The option "Enable libguestfs VM introspection" – TODO

- The tab "Polling"

    - The section "Stats Options"

        (542) The option "Update status every ... seconds" – TODO

        (543) The option "Poll CPU usage" – TODO

        (544) The option "Poll Disk I/O" – TODO

        (545) The option "Poll Network I/O" – TODO

        (546) The option "Poll memory stats" – TODO

- The tab "New VM"

    - The section "New VM Defaults"

        (547) The option "Graphics type" – TODO

        (548) The option "Storage format" – TODO

        (549) The option "CPU default" – TODO

        - The options of the option "Grapics type"

            (550) The option "System default (spice)" – TODO

            (551) The option "VNC" – TODO

            (552) The option "Spice" – TODO

        - The options of the option "Storage format"

            (553) The option "System default (qcow2)" – TODO

            (554) The option "Raw" – TODO

            (555) The option "QCOW2" – TODO

        - The options of the option "CPU default" – TODO

            (556) The option "Application default" – TODO

            (557) The option "Hypervisor default" – TODO

            (558) The option "Nearest host CPU model" – TODO

            (559) The option "host-model" – TODO

            (560) The option "host-passthrough" – TODO

- The tab "Console"

    - The section "Graphical Consoles"

        (561) The option "Graphical console scaling" – TODO

        (562) The option "Resize guest with window" – TODO

        (563) The option "Grab keys" – TODO

        (564) The option "SPICE USB Redirection" – TODO

        (565) The option "Console autoconnect" – TODO

        - The options of the option "Graphical console scaling"

            (566) The option "Never" – TODO

            (567) The option "Fullscreen only" – TODO

            (568) The option "Always" – TODO

        - The options of the option "Resize guest with window"

            (569) The option "System default (Off)" – TODO

            (570) The option "Off" – TODO

            (571) The option "On" – TODO

        - The options of the option "Grab keys"

            (572) The button "Change..." – TODO

        - The options of the option "SPICE USB Redirection"

            (573) The option "Manual redirect only" – TODO

            (574) The option "Auto redirect on USB attach" – TODO

- The tab "Feedback"

    - The section "Confirmations"

        (575) The option "Force Poweroff" – TODO

        (576) The option "Poweroff/Reboot/Save" – TODO

        (577) The option "Pause" – TODO

        (578) The option "Device removal" – TODO

        (579) The option "Unapplied changes" – TODO

        (580) The option "Deleting storage" – TODO

### The window "Configure grab key ..." (the window "Preferences" > "Console" > Grab keys > "Change...")

(581) The button "Cancel" – TODO

(582) The button "OK" – TODO

### The window "About Virtual Machine Manager..." (the main window of Virtual Machine Manager > the main menu > "Help" > "About")

(583) The button "Credits" – TODO

- The pane with general information

    TODO

- The pane with credits

    TODO

## Sources

<a id="1">[1]</a> https://man.archlinux.org/man/virt-manager.1

<a id="2">[2]</a> https://developer.gnome.org/gtk2/stable/gtk-running.html

<a id="3">[3]</a> https://libvirt.org/uri.html

<a id="4">[4]</a> https://en.wikipedia.org/wiki/Hypervisor

<a id="5">[5]</a> https://fedoraproject.org/wiki/How_to_debug_Virtualization_problems

<a id="6">[6]</a> https://wiki.debian.org/libvirt/Debugging

<a id="7">[7]</a> https://en.wikipedia.org/wiki/Virtual_Machine_Manager

<a id="8">[8]</a> https://docs.oracle.com/cd/E26996_01/E18549/html/VMUSG1194.html

<a id="9">[9]</a> https://en.wikipedia.org/wiki/Virtual_Machine_Manager

<a id="10">[10]</a> https://en.wikipedia.org/wiki/GTK

<a id="11">[11]</a> https://en.wikipedia.org/wiki/Uniform_Resource_Identifier

<a id="12">[12]</a> https://en.wikipedia.org/wiki/Virtual_machine

<a id="13">[13]</a> https://wiki.libvirt.org/page/SSHSetup

<a id="14">[14]</a> https://en.wikipedia.org/wiki/SSH_(Secure_Shell)

<a id="15">[15]</a> https://wiki.archlinux.org/index.php/QEMU

<a id="16">[16]</a> https://qemu-project.gitlab.io/qemu/user/index.html

<a id="17">[17]</a> https://wiki.qemu.org/Documentation/Networking

<a id="18">[18]</a> https://en.wikipedia.org/wiki/QEMU

<a id="19">[19]</a> https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine

<a id="20">[20]</a> https://en.wikipedia.org/wiki/Xen

<a id="21">[21]</a> https://blog.wikichoon.com/2016/01/qemusystem-vs-qemusession.html

<a id="22">[22]</a> https://en.wikipedia.org/wiki/Libvirt

<a id="23">[23]</a> https://en.wikipedia.org/wiki/LXC
