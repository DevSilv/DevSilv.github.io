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

The Virtual Machine Manager version described is 3.2.0. Both CLI and GUI options and information are included. For general information about the Virtual Machine Manager utility, see [9].

## Disclaimer

**The options and information mentioned may not be available or work as described here in all environments. I did not test them all.** Always refer to the documentation of Virtual Machine Manager available for your environment prior to this article.

## CLI options

These options are available when running Virtual Machine Manager from the console.

1. As per [1], "standard GTK options like --g-fatal-warnings are accepted". I am not sure what these options are. Some details about some CLI options available for GTK+ applications can be found in [2]. For more information about the GTK toolkit itself, see [10].
2. `-h` or `--help` – displays a help message. [1]
3. `--version` – displays the version of the Virtual Machine Manager that was invoked with this option. [1]
4. `-c`, `--connect` – connects to the hypervisor using a specified URI. [1] For more information about connecting to a hypervisor using URIs and libvirt, see [3]. For more information about hypervisors, see [4]. For more information about URIs, see [11].
5. `--debug` – as per [1], it displays "debugging output" in the console. I am not sure what this output may consists of. This option is also mentioned in [6].
6. `--no-fork` – as per [1], it makes Virtual Machine Manager not forked off into the background. I am not sure what it actually means. This option is also mentioned in [5] and [6].
7. `--show-domain-creator` – as per [1], it displays "the wizard for creating new virtual machines". I am not sure what the word "domain" refers to; for one possible explanation of this term, see [8]. For more information about virtual machines, see [12].
8. `--show-domain-editor NAME|ID|UUID` – as per [1], it displays "the dialog for editing properties of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.
9. `--show-domain-performance NAME|ID|UUID` – as per [1], it displays "the dialog for monitoring performance of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.
10. `--show-domain-console NAME|ID|UUID` – as per [1], it displays "the virtual console of the virtual machine with unique ID matching either the domain name, ID, or UUID". I am not sure what the word "domain" refers to.
11. `--show-host-summary` – as per [1], it displays "the host/connection details window".

## GUI options

These menus, toolbars, windows, options and pieces of information are available when running Virtual Machine Manager as a graphical utility.

### The main window of Virtual Machine Manager

    - The main menu

        - The menu "File"

            ?. The option "Add connection..." – opens the window "Add Connection". This window most probably facilitates adding a connection to a hypervisor (?) (note that, for example, libvirt's documentation mentions in [3] that a "connection" may refer to a "driver"). For options available within this window, see below.
            ?. The option "New Virtual Machine" – opens the window of the creator "Create a new virtual machine". For options available within this window, see below.
            ?. The option "Close" – closes the main Virtual Machine Manager window; it does not close particular virtual machines' windows.
            ?. The option "Quit" – quits Virtual Machine Manager; it closes all Virtual Machine Manager's windows, also particular virtual machines' ones (note: it **does not** stop virtual machines).

        - The menu "Edit"

            ?. The option "Connection Details" – TODO
            ?. The option "Virtual Machine Details" – TODO
            ?. The option "Delete" – TODO
            ?. The option "Preferences" – TODO

        - The menu "View"

            - The menu "Graph"

                ?. The option "Guest CPU Usage" – TODO
                ?. The option "Host CPU Usage" – TODO
                ?. The option "Memory Usage" – TODO
                ?. The option "Disk I/O" – TODO
                ?. The option "Network I/O" – TODO

        - The menu "Help"

            ?. The option "About" – TODO

    - The toolbar

        ?. The button "Create a new virtual machine" – TODO
        ?. The button "Open" ("Show the virtual machine console and details") – TODO
        ?. The button "Power on the virtual machine" – TODO
        ?. The button "Pause the virtual machine" – TODO
        ?. The first button "Shut down the virtual machine" – TODO
        ?. The second button "Shut down the virtual machine" – TODO

        - The menu "Shut down the virtual machine"

            ?. The option "Reboot" – TODO
            ?. The option "Shut Down" – TODO
            ?. The option "Force Reset" – TODO
            ?. The option "Force Off" – TODO
            ?. The option "Save" – TODO

    - The pane with the list of hypervisors and virtual machines

        ?. The column "Name" – TODO
        ?. The column "CPU usage" – TODO
        ?. The column "Host CPU usage" – TODO
        ?. The column "Memory usage" – TODO
        ?. The column "Disk I/O" – TODO
        ?. The column "Network I/O" – TODO

        - The context menu available right-clicking the bar with the name of a connection

            ?. The option "New" – TODO
            ?. The option "Connect" – TODO
            ?. The option "Disconnect" – TODO
            ?. The option "Delete" – TODO
            ?. The option "Details" – TODO

### The window "Add Connection" (the main window of Virtual Machine Manager > the main menu > "File" > "Add connection...")

    [c]. The option "Hypervisor" – allows to select the hypervisor to connect to (?). For options available within the drop-down menu of this option, see below.
    ?. The option "Connect to remote host over SSH" – most probably allows to connect to a remote host over the SSH protocol. [13] may be related. This option is available only when one of the following options is selected in the option [c]: "QEMU/KVM", "Xen", "Libvirt-LXC". For options available within this option, see below. For more information about the SSH protocol, see [14].
    [b]. The option "Autoconnect" – most probably allows to specify whether the connection should be established automatically when Virtual Machine Manager starts. Option [a] may be related.
    ?. The information "Generated URI" – most probably displays the final URI address that will be used to connect.
    ?. The button "Cancel" – closes the window "Add Connection" without connecting.
    ?. The button "Connect" – closes the window "Add Connection" and connects.
    ?. The warning "QEMU usermode session..." – it reads: "QEMU usermode session is not the virt-manager default. It is likely that any pre-existing QEMU/KVM guests will not be available. Networking options are very limited." I am not sure what it means. I am not sure whether it is related, but the word "usermode" occurs several times in [15], and the word "user-mode" occurs in [16]. For more information about networking regarding QEMU use, see [17]. For more information about QEMU, see [18]. For more information about KVM, see [19].
    ?. The option "Custom URI" – allows to specify a custom URI for the connection.

    - The drop-down menu "Hypervisor"

        [d]. The option "QEMU/KVM" – allows to specify that the hypervisor to connect to is a "QEMU/KVM" hypervisor (?); I am not sure whether the character string "QEMU/KVM" should be treated as one "hypervisor" or not. Selecting this value in the drop-down menu "Hypervisor" generates the URI `qemu:///system`; for the difference between the URIs `qemu:///session` and the URI `qemu:///system`, see [21].
        ?. The option "QEMU/KVM user session" – allows to specify what hypervisor to connect to (?); I am not sure whether the character string "QEMU/KVM user session" should be treated either as a separate hypervisor, or one equivalent with the character string "QEMU/KVM" in option [d], or differently. Selecting this value in the drop-down menu "Hypervisor" generates the URI `qemu:///session`; for the difference between the URIs `qemu:///session` and the URI `qemu:///system`, see [21].
        ?. The option "Xen" – allows to specify that the hypervisor to connect to is a Xen hypervisor (?). Selecting this value in the drop-down menu "Hypervisor" generates the URI `xen:///`. For more information about the Xen hypervisor, see [20].
        ?. The option "Libvirt-LXC" – allows to specify that the hypervisor to connect to is a "Libvirt-LXC" hypervisor (?); I am not sure whether the character string "Libvirt-LXC" should be treated as one "hypervisor" or not. Selecting this value in the drop-down menu "Hypervisor" generates the URI `lxc:///`. For more information about libvirt, see [22]. For more information about LXC, see [23].
        ?. The option "Custom URI..." – allows to specify a custom URI for the connection.

    - The options of the option "Connect to remote host over SSH"

        ?. The option "Username" – most probably allows to specify the username for connecting over the SSH protocol.
        ?. The option "Hostname" – most probably allows to specify the hostname for connecting over the SSH protocol.

### The creator "Create a new virtual machine" (the window "New Virtual Machine"; the main window of Virtual Machine Manager > the main menu > "File" > "New Virtual Machine")

    ?. The button "Cancel" – TODO
    ?. The button "Back" – TODO
    ?. The button "Forward" – TODO
    ?. The button "Finish" – TODO

    - The pane "Step 1 of 5"

        ?. The information "Connection" – TODO
        ?. The option "Choose how would you like to install the operating system" – TODO

    - The pane "Step 2 of 5"

        ?. The option "Choose ISO or CDROM install media" – TODO
        ?. The button "Browse..." – allows to browse for a location of the install media. Opens the window "Locate ISO media volume"; for options available within this window, see below.
        ?. The option "Choose the operating system you are installing" – TODO
        ?. The option "Automatically detect from the installation media / source" – TODO

    - The pane "Step 3 of 5"

        ?. The option "Choose Memory and CPU settings" – TODO

        - The options in the option "Choose Memory and CPU settings"

            ?. The option "Memory" – TODO
            ?. The option "CPUs" – TODO

    - The pane "Step 4 of 5"

        ?. The option "Enable storage for this virtual machine" – TODO

        - The options of the option "Enable storage for this virtual machine"

            ?. The option "Create a disk image for the virtual machine" – TODO
            ?. The option "Select or create custom storage" – TODO

            - The options of the option "Select or create custom storage"

                ?. The button "Manage..." – TODO

    - The pane "Step 5 of 5"

        ?. The information "Name" – TODO
        ?. The information "OS" – TODO
        ?. The information "Install" – TODO
        ?. The information "Memory" – TODO
        ?. The information "CPUs" – TODO
        ?. The information "Storage" – TODO
        ?. The option "Customize configuration before install" – TODO
        ?. The option "Network selection" – TODO. For options within this option, see the option [j].


### The window "Locate ISO media volume" (the main window of Virtual Machine Manager > the main menu > "File" > "New Virtual Machine" > "Forward" > Browse...")

    ?. The button "Browse local" – TODO
    ?. The button "Cancel" – TODO
    ?. The button "Choose Volume" – TODO

    - The storage pool pane

        ?. The storage pool list – TODO
        ?. The button "Add Pool" – TODO
        ?. The button "Start Pool" – TODO
        ?. The button "Stop Pool" – TODO
        ?. The button "Delete Pool" – TODO

    - The tab "Details"

        ?. The information "Size" – TODO
        ?. The information "Location" – TODO

        - The pane "Volumes"

            ?. The button "Create new volume" – TODO
            ?. The button "Refresh volume list" – TODO
            ?. The button "Delete volume" – TODO

            - The volume list

                ?. The column "Volumes" – TODO
                ?. The column "Size" – TODO
                ?. The column "Format" – TODO

    - The tab "XML"

        ?. The warning "XML editing..." – TODO
        ?. The field with the XML document – TODO

### The window "Connection Details" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Connection Details")

    - The main menu

        - The menu "File"

            ?. The option "View Manager" – TODO
            ?. The option "Close" – TODO
            ?. The option "Quit" – TODO

    - The tab "Overview"

        - The section "Basic details"

            ?. The option "Name" – TODO
            ?. The information "Libvirt URI" – TODO
            [a]. The option "Autoconnect" – allows to specify whether the connection should be established automatically when Virtual Machine Manager starts. Option [b] may be related.

        - The section "CPU usage"

            ?. The CPU usage graph – TODO

        - The section "Memory usage"

            ?. The memory usage graph – TODO

    - The tab "Virtual Networks"

        - The pane with the list of networks

            ?. The list of networks – TODO
            ?. The button "Add Network" – TODO
            ?. The button "Start Network" – TODO
            ?. The button "Stop Network" – TODO
            ?. The button "Delete Network" – TODO

        - The tab "Details"

            ?. The information "Name" – TODO
            ?. The information "Device" – TODO
            ?. The information "State" – TODO
            ?. The information "Autostart" – TODO

            - The section "IPv4 configuration"

                ?. The information "Network" – TODO
                ?. The information "DHCP range" – TODO
                ?. The information "Forwarding" – TODO

        - The tab "XML"

            ?. The warning "XML editing" – TODO
            ?. The field with the XML document – TODO

    - The tab "Storage"

        (See the description of the window "Locate ISO media volume".)

### The creator "Create virtual network" (the window "Create a new virtual network")

    ?. The button "Cancel" – TODO
    ?. The button "Finish" – TODO

    - The tab "Details

        ?. The option "Name" – TODO
        ?. The option "Mode" – TODO
        ?. The option "Forward to" – TODO
        ?. The option "Device" – TODO
        ?. The option "Device list" – TODO
        ?. The option "IPv4 configuration" – TODO
        ?. The option "IPv6 configuration" – TODO
        ?. The option "DNS domain name" – TODO

        - The options of the option "Mode"

            ?. The option "NAT" – TODO
            ?. The option "Routed" – TODO
            ?. The option "Open" – TODO
            ?. The option "Isolated" – TODO
            ?. The option "SR-IOV pool" – TODO

        - The options of the option "Forward to"

            ?. The option "Any physical device" – TODO
            ?. The option "Physical device" – TODO

        - The options of the option "IPv4 configuration"

            ?. The option "Enable IPv4" – TODO

            - The options of the option "Enable IPv4"

                ?. The option "Network" – TODO
                ?. The option "Enable DHCPv4" – TODO

                - The options of the option "Enable DHCPv4"

                    ?. The option "Start" – TODO
                    ?. The option "End" – TODO

        - The options of the option "IPv6 configuration"

            ?. The option "Enable IPv6" – TODO

            - The options of the option "Enable IPv6"

                ?. The option "Network" – TODO
                ?. The option "Enable DHCPv6" – TODO

                - The options of the option "Enable DHCPv6"

                    ?. The option "Start" – TODO
                    ?. The option "End" – TODO

        - The options of the option "DNS domain name"

            ?. The option "Use network name" – TODO
            ?. The option "Custom" – TODO

    - The tab "XML"

        ?. The warning "XML editing..." – TODO
        ?. The field with the XML document – TODO

### The virtual machine window (the main window of Virtual Machine Manager > the main menu > "Edit" > "Virtual Machine Details")

    - The main menu

        - The menu "File"

            ?. The option "View Manager" – TODO
            ?. The option "Close" – TODO
            ?. The option "Quit" – TODO

        - The menu "Virtual Machine"

            ?. The option "Run" – TODO
            ?. The option "Pause" – TODO
            ?. The option "Clone..." – TODO
            ?. The option "Migrate..." – TODO
            ?. The option "Delete" – TODO
            ?. The option "Take Screenshot" – TODO
            ?. The option "Redirect USB device" – TODO

            - The menu "Shut Down"

                (See the description of the menu "Shut down the virtual machine" in the toolbar of the main window of the Virtual Machine Manager.)

        - The menu "View"

            ?. The option "Console" – TODO
            ?. The option "Details" – TODO
            ?. The option "Snapshots" – TODO
            ?. The option "Fullscreen" – TODO
            ?. The option "Resize to VM" – TODO
            ?. The option "Autoconnect" – TODO
            ?. The option "Toolbar" – TODO

            - The menu "Scale Display"

                ?. The option "Always" – TODO
                ?. The option "Only when Fullscreen" – TODO
                ?. The option "Never" – TODO
                ?. The option "Auto resize VM with window" – TODO

            - The menu "Consoles"

                ?. The option "Graphical Console Spice" – TODO
                ?. The option "Serial 1" – TODO

        - The menu "Send Key"

            ?. The option "Ctrl+Alt+Backspace" – TODO
            ?. The option "Ctrl+Alt+Delete" – TODO
            ?. The option "Ctrl+Alt+F1" – TODO
            ?. The option "Ctrl+Alt+F2" – TODO
            ?. The option "Ctrl+Alt+F3" – TODO
            ?. The option "Ctrl+Alt+F4" – TODO
            ?. The option "Ctrl+Alt+F5" – TODO
            ?. The option "Ctrl+Alt+F6" – TODO
            ?. The option "Ctrl+Alt+F7" – TODO
            ?. The option "Ctrl+Alt+F8" – TODO
            ?. The option "Ctrl+Alt+F9" – TODO
            ?. The option "Ctrl+Alt+F10" – TODO
            ?. The option "Ctrl+Alt+F11" – TODO
            ?. The option "Ctrl+Alt+F12" – TODO
            ?. The option "Print" – TODO

    - The toolbar

        ?. The button "Show the graphical console" – TODO
        ?. The button "Show virtual hardware details" – TODO
        ?. The button "Power on the virtual machine" – TODO
        ?. The button "Pause the virtual machine" – TODO
        ?. The first button "Shut down the virtual machine" – TODO
        ?. The second button "Shut down the virtual machine" – TODO
        ?. The button "Manage VM snapshots" – TODO

    - The graphical console pane

        TODO

    - The virtual hardware details pane

        ?. The button "Remove" – TODO
        ?. The button "Cancel" – TODO
        ?. The button "Apply" – TODO

        - The pane with the hardware list

            ?. The position "Overview" – TODO
            ?. The position "OS information" – TODO
            ?. The position "Performance" – TODO
            ?. The position "CPUs" – TODO
            ?. The position "Memory" – TODO
            ?. The position "Boot Options" – TODO
            ?. The position "SATA CDROM `<number>`" – TODO
            ?. The position "NIC `<address>`" – TODO
            ?. The position "Tablet" – TODO
            ?. The position "Mouse" – TODO
            ?. The position "Keyboard" – TODO
            ?. The position "Display `<type>`" – TODO
            ?. The position "Sound `<model>`" – TODO
            ?. The position "Serial `<number>`" – TODO
            ?. The position "Channel `<?>`" – TODO
            ?. The position "Video `<model>`" – TODO
            ?. The position "Controller USB 0" – TODO
            ?. The position "Controller SATA 0" – TODO
            ?. The position "Controller PCIe 0" – TODO
            ?. The position "USB Redirector `<number>`" – TODO
            ?. The position "RNG `<device>`" – TODO
            ?. The button "Add Hardware" – TODO

            - The context menu available right-clicking a position on the list

                ?. The option "Add Hardware" – TODO
                ?. The option "Remove Hardware" – TODO

            - The options and information of the position "Overview"

                - The section "Basic Details"

                    ?. The option "Name" – TODO
                    ?. The information "UUID" – TODO
                    ?. The information "Status" – TODO
                    ?. The option "Title" – TODO
                    ?. The option "Description" – TODO

                - The section "Hyperviso Details"

                    ?. The information "Hypervisor" – TODO
                    ?. The information "Architecture" – TODO
                    ?. The information "Emulator" – TODO
                    ?. The information "Chipset" – TODO
                    ?. The information "Firmware" – TODO

            - The options and information of the position "OS information"

                ?. The option "Operating system" – TODO

            - The options and information of the position "Performance"

                ?. The graph "CPU usage" – TODO
                ?. The graph "Memory usage" – TODO
                ?. The graph "Disk I/O" – TODO
                ?. The graph "Network I/O" – TODO

            - The options and information of the position "CPUs"

                - The section "CPUs"

                    ?. The information "Logical host CPUs" – TODO
                    ?. The option "vCPU allocation" – TODO

                - The section "Configuration"

                    ?. The option "Copy host CPU configuration" – TODO
                    ?. The option "Model" – TODO
                    ?. The option "Enable available CPU security flaw mitigations" – TODO

                - The section "Topology"

                    ?. The option "Manually set CPU topology" – TODO

                    - The options of the option "Manually set CPU topology"

                        ?. The option "Sockets" – TODO
                        ?. The option "Cores" – TODO
                        ?. The option "Threads" – TODO

            - The options and information of the position "Memory"

                - The section "Memory"

                    ?. The information "Total host memory" – TODO
                    ?. The option "Current allocation" – TODO
                    ?. The option "Maximum allocation" – TODO

            - The options and information of the position "Boot Options"

                - The section "Autostart"

                    ?. The option "Start virtual machine on host boot up" – TODO

                - The section "Boot device order"

                    ?. The option "Enable boot menu" – TODO
                    ?. The list of boot devices – TODO
                    ?. The button with an up arrow – TODO
                    ?. The button with a down arrow – TODO

                - The section "Direct kernel boot"

                    ?. The option "Enable direct kernel boot" – TODO

                    - The options of the option "Enable direct kernel boot"

                        ?. The option "Kernel path" – TODO
                        ?. The option "Initrd path" – TODO
                        ?. The option "Kernel args" – TODO

                        - The options of the option "Kernel path"

                            ?. The text field – TODO
                            ?. The button "Browse" – TODO

                        - The options of the option "Initrd path"

                            ?. The text field – TODO
                            ?. The button "Browse" – TODO

            - The options and information of the position "SATA CDROM `<number>`"

                - The section "Virtual Disk"

                    ?. The option "Source path" – TODO
                    ?. The information "Device type" – TODO
                    ?. The information "Disk bus" – TODO
                    ?. The information "Storage size" – TODO

                    - The options of the option "Source path"

                        ?. The drop-down menu – TODO
                        ?. The button "Browse" – TODO

                    - The section "Advanced options"

                        ?. The option "Readonly" – TODO
                        ?. The option "Shareable" – TODO
                        ?. The option "Serial" – TODO
                        ?. The option "Cache mode" – (see the option [e].)
                        ?. The option "Discard mode" – (see the option [f].)
                        ?. The option "Detect zeroes" – (see the option [g].)

            - The options and information of the position "NIC `<address>`"

                - The section "Virtual Network Interface"

                    ?. The option "Network source" – TODO
                    [m]. The option "Device model" – TODO. For options of this option, see the option [n].
                    [l]. The information "MAC address" – TODO. See also the option [k].
                    ?. The information "IP address" – TODO
                    ?. The option "Link state" – TODO

                    - The options of the option "Network source"

                        ?. The option "Virtual network 'default' : NAT" – TODO
                        ?. The option "Bridge device..." – TODO
                        ?. The option "Macvtap device..." – TODO

                        - The options of the option "Bridge device"

                            ?. The option "Device name" – TODO

                        - The options and information of the option "Macvtap device"

                            ?. The option "Device name" – TODO
                            ?. The warning "In most configurations..." – TODO

                    - The options of the information "IP address"

                        ?. The button with a loopy arrow – TODO

                    - The options of the option "Link state"

                        ?. The option "active" – TODO

            - The options and information of the position "Tablet"

                - The section "Virtual Input Device"

                    ?. The information "Type" – TODO
                    ?. The information "Mode" – TODO

            - The options and information of the position "Mouse"

                - The section "Virtual Input Device"

                    ?. The information "Type" – TODO
                    ?. The information "Mode" – TODO

            - The options and information of the position "Keyboard"

                - The section "Virtual Input Device"

                    ?. The information "Type" – TODO

            - The options and information of the position "Display `<type>`"

                - The section "`<type>` Server"

                    [p]. The option "Type" – TODO. For options of this option, see the option [o].
                    [r]. The option "Listen type" – TODO. For options of this option, see the option [q].
                    [t]. The option "Address" – TODO. For options of this option, see the option [s].
                    [u]. The option "Port" – TODO. For options of this option, see the option [w].
                    [y]. The option "Password" – TODO. For options of this option, see the option [x].
                    [aa]. The option "OpenGL" – TODO. For options of this option, see the option [z].

            - The options of the position "Sound `<model>`"

                - The section "Sound Device"

                    [ac]. The option "Model" – TODO. For options of this option, see the option [ab].

            - The options and information of the position "Serial `<number>`"

                - The section "Serial Device `<number>` (Primary Console)"

                    ?. The information "Device type" – TODO

            - The options and information of the position "Channel `<?>`"

                - The section "Channel Device"

                    ?. The information "Device type" – TODO
                    ?. The information "Target type" – TODO
                    ?. The information "Target name" – TODO

            - The options and information of the position "Video `<model>`"

                - The section "Video"

                    [ae]. The option "Model" – TODO. For options of this option, see the option [ad].
                    ?. The option "3D acceleration" – TODO

            - The options and information of the position "Controller USB 0"

                - The section "Controller"

                    ?. The information "Type" – TODO
                    [i]. The option "Model" – (see the option [h] (?).)

            - The options and information of the position "Controller SATA 0"

                - The section "Controller"

                    ?. The information "Type" – TODO
                    ?. The information "Devices" – TODO

            - The options and information of the position "Controller PCIe 0"

                - The section "Controller"

                    ?. The information "Type" – TODO

            - The options and information of the position "Controller VirtIO Serial 0"

                - The section "Controller"

                    ?. The information "Type" – TODO

            - The options and information of the position "USB Redirector `<number>`"

                ?. The information "Type" – TODO

            - The options and information of the position "RNG `<device>`"

                - The section "Random Number Generator"

                    ?. The information "Type" – TODO
                    ?. The information "Host Device" – TODO

        - The tab "Details

            TODO

        - The tab "XML"

            TODO

### The window "Add New Virtual Hardware" (the virtual hardware details pane)

    ?. The button "Cancel" – TODO
    ?. The button "Finish" – TODO

    - The hardware list

        ?. The position "Storage" – TODO
        ?. The position "Controller" – TODO
        ?. The position "Network" – TODO
        ?. The position "Input" – TODO
        ?. The position "Graphics" – TODO
        ?. The position "Sound" – TODO
        ?. The position "Serial" – TODO
        ?. The position "Parallel" – TODO
        ?. The position "Console" – TODO
        ?. The position "Channel" – TODO
        ?. The position "USB Host Device" – TODO
        ?. The position "PCI Host Device" – TODO
        ?. The position "Video" – TODO
        ?. The position "Watchdog" – TODO
        ?. The position "Filesystem" – TODO
        ?. The position "Smartcard" – TODO
        ?. The position "USB Redirection" – TODO
        ?. The position "TPM" – TODO
        ?. The position "RNG" – TODO
        ?. The position "Panic Notifier" – TODO
        ?. The position "VirtIO VSOCK" – TODO

        - The options and information of the position "Storage"

            ?. The option "Create a disk image for the virtual machine" – TODO
            ?. The option "Select or create a custom storage" – TODO
            ?. The option "Device type" – TODO
            ?. The option "Bus type" – TODO

            - The options and information of the option "Create a disk image for the virtual machine"

                ?. The "GiB" field – TODO
                ?. The information about storage available – TODO

            - The options of the option "Select or create a custom storage"

                ?. The button "Manage..." – TODO
                ?. The text field – TODO

            - The options of the option "Device type"

                ?. The option "Disk device" – TODO
                ?. The option "CDROM device" – TODO
                ?. The option "Floppy device" – TODO
                ?. The option "LUN Passthrough" – TODO

            - The options of the option "Bus type"

                ?. The option "SATA" – TODO
                ?. The option "SCSI" – TODO
                ?. The option "USB" – TODO
                ?. The option "VirtIO" – TODO

            - The section "Advanced options"

                ?. The option "Readonly" – TODO
                ?. The option "Shareable" – TODO
                ?. The option "Serial" – TODO
                [e]. The option "Cache mode" – TODO
                [f]. The option "Discard mode" – TODO
                [g]. The option "Detect zeroes" – TODO

                - The options of the option "Cache mode"

                    ?. The option "Hypervisor default" – TODO
                    ?. The option "none" – TODO
                    ?. The option "writethrough" – TODO
                    ?. The option "writeback" – TODO
                    ?. The option "directsync" – TODO
                    ?. The option "unsafe" – TODO

                - The options of the option "Discard mode"

                    ?. The option "Hypervisor default" – TODO
                    ?. The option "ignore" – TODO
                    ?. The option "unmap" – TODO

                - The options of the option "Detect zeroes"

                    ?. The option "Hypervisor default" – TODO
                    ?. The option "off" – TODO
                    ?. The option "on" – TODO
                    ?. The option "unmap" – TODO

        - The options and information of the position "Controller"

            ?. The option "Type" – TODO
            ?. The option "Model" — TODO

            - The options of the option "Type"

                ?. The option "CCID" – TODO
                ?. The option "SCSI" – TODO
                [h]. The option "USB" – TODO. See also the option [i] (?).
                ?. The option "VirtIO Serial" – TODO

            - The options of the option "Model"

                ?. The option "Hypervisor default" – TODO
                ?. The option "VirtIO SCSI" – TODO
                ?. The option "Hypervisor default" – TODO
                ?. The option "USB 2" – TODO
                ?. The option "USB 3" – TODO

        - The options and information of the position "Network"

            ?. The option "Network resource" – TODO
            [k]. The option "MAC address" – TODO. See also the option [l].
            [n]. The option "Device model" – TODO. See also the option [m].

            - The options of the option "Network resource"

                [j]. The option "Virtual network 'default': NAT" – TODO
                ?. The option "Bridge device..." – TODO
                ?. The option "Macvtap device..." – TODO

                - The options of the option "Bridge device"

                    ?. The option "Device name" – TODO

                - The information of the option "Macvtap device..."

                    ?. The warning "In most configurations..." – TODO

            - The options of the option "MAC address"

                ?. The checkbox – TODO
                ?. The text field – TODO

            - The options of the option "Device model"

                ?. The option "e1000e" – TODO
                ?. The option "Hypervisor default" – TODO
                ?. The option "virtio" – TODO

        - The options and information of the position "Input"

            ?. The option "Type" – TODO

            - The options of the option "Type"

                ?. The option "EvTouch USB Graphics Tablet" – TODO
                ?. The option "USB Keyboard" – TODO
                ?. The option "USb Mouse" – TODO
                ?. The option "VirtIO Keyboard" – TODO
                ?. The option "VirtIO Tablet" – TODO

        - The options and information of the position "Graphics"

            [o]. The option "Type" – TODO. See also the option [p].
            [q]. The option "Listen type" – TODO. See also the option [r].
            [s]. The option "Address" – TODO. See also the option [t].
            [w]. The option "Port" – TODO. See also the option [u].
            [x]. The option "Password" – TODO. See also the option [y].
            [z]. The option "OpenGL" – TODO. See also the option [aa].

            - The options of the option "Type"

                ?. The option "Spice server" – TODO
                ?. The option "VNC server" – TODO

            - The options of the option "Listen type"

                ?. The option "Address" – TODO
                ?. The option "None" – TODO

            - The options of the option "Address"

                ?. The option "Hypervisor default" – TODO
                ?. The option "Localhost only" – TODO
                ?. The option "All interfaces" – TODO

            - The options of the option "Port"

                ?. The option "Auto" – TODO
                ?. The text field – TODO

            - The options of the option "Password"

                ?. The checkbox – TODO
                ?. The text field – TODO
                ?. The option "Show password" – TODO

            - The options and information of the option "OpenGL"

                ?. The drop-down menu – TODO
                ?. The warning "OpenGL only works with 'virtio'..." – TODO
                ?. The warning "OpenGL only works with 'Listen type'..." – TODO

                - The options of the drop-down menu of the option "OpenGL"

                    ?. The option "Auto" – TODO
                    ?. Options with ? – TODO

        - The options and information of the position "Sound"

            [ab]. The option "Model" – TODO. See also the option [ac].

            - The options of the option "Model"

                ?. The option "HDA (ICH6)" – TODO
                ?. The option "HDA (ICH9)" – TODO
                ?. The option "AC97" – TODO

        - The options and information of the position "Serial"

            ?. The option "Device type" – TODO
            ?. The option "Path" – TODO

            - The options of the option "Device type"

                ?. The option "Output to a file (file)" – TODO
                ?. The option "Pseudo TTY (pty)" – TODO
                ?. The option "UNIX socket (unix)" – TODO

        - The options and information of the position "Parallel"

            ?. The option "Device type" – TODO
            ?. The option "Path" – TODO

            - The options of the option "Device type"

                ?. The option "Output to a file (file)" – TODO
                ?. The option "Pseudo TTY (pty)" – TODO
                ?. The option "UNIX socket (unix)" – TODO

        - The options and information of the position "Console"

            ?. The option "Device type" – TODO
            ?. The option "Type" – TODO

            - The options of the option "Device type"

                ?. The option "Pseudo TTY (pty)" – TODO

            - The options of the option "Type"

                ?. The option "VirtIO" – TODO

        - The options and information of the position "Channel"

            ?. The option "Name" – TODO
            ?. The option "Device type" – TODO
            ?. The option "Path" – TODO
            ?. The option "Channel" – TODO
            ?. The option "Auto socket" – TODO

            - The options of the option "Name"

                ?. The option "com.redhat.spice.0" – TODO
                ?. The option "org.libguestfs.channel.0" – TODO
                ?. The option "org.qemu.guest_agent.0" – TODO
                ?. The option "org.spice-space.webdav.0" – TODO

            - The options of the option "Device type"

                ?. The option "Output to a file (file)" – TODO
                ?. The option "Pseudo TTY (pty) – TODO
                ?. The option "Spice agent (spicevmc)" – TODO
                ?. The option "Spice port (spiceport)" – TODO
                ?. The option "UNIX socket (unix)" – TODO

        - The options and information of the position "USB Host Device"

            ?. The option "Host device" – TODO

        - The options and information of the position "PCI Host Device"

            ?. The option "Host device" – TODO

        - The options and information of the position "Video"

            [ad]. The option "Model" – TODO. See also the option [ae].

            - The options of the option "Model"

                ?. The option "Bochs" – TODO
                ?. The option "QXL" – TODO
                ?. The option "Ramfb" – TODO
                ?. The option "VGA" – TODO
                ?. The option "Virtio" – TODO

        - The options and information of the position "Watchdog"

            ?. The option "Model" – TODO
            ?. The option "Action" – TODO

            - The options of the option "Model"

                ?. The option "DIAG288" – TODO
                ?. The option "I6300ESB" – TODO
                ?. The option "IB700" – TODO

            - The options of the option "Action"

                ?. The option "Dump guest memory core" – TODO
                ?. The option "Forcefully power off the guest" – TODO
                ?. The option "Forcefully reset the guest" – TODO
                ?. The option "Gracefully shutdown the guest" – TODO
                ?. The option "No action" – TODO
                ?. The option "Pause the guest" – TODO

        - The options and information of the position "Filesystem"

            ?. The option "Type" – TODO
            ?. The option "Mode" – TODO
            ?. The option "Source path" – TODO
            ?. The option "Target path" – TODO
            ?. The option "Export filesystem as readonly mount" – TODO

            - The options of the option "Type"

                ?. The option "mount" – TODO

            - The options of the option "Mode"

                ?. The option "mapped" – TODO
                ?. The option "squash" – TODO
                ?. The option "Hypervisor default" – TODO

            - The options of the option "Source path"

                ?. The text field – TODO
                ?. The button "Browse..." – TODO

        - The options and information of the position "Smartcard"

            ?. The option "Mode" – TODO

            - The options of the option "Mode"

                ?. "Host" – TODO
                ?. "Passthrough" – TODO

        - The options and information of the position "USB Redirection"

            ?. The option "Type" – TODO

            - The options of the option "Type"

                ?. The option "Spice channel" – TODO

        - The options and information of the position "TPM"

            ?. The option "Model" – TODO
            ?. The option "Backend" – TODO
            ?. The option "Version" – TODO
            ?. The option "Device Path" – TODO

            - The options of the option "Model"

                ?. The option "CRB" – TODO
                ?. The option "TIS" – TODO

            - The options of the option "Backend"

                ?. The option "Emulated device" – TODO
                ?. The option "Passthrough device" – TODO

            - The options of the option "Version"

                ?. The option "1.2" – TODO
                ?. The option "2.0" – TODO

        - The options and information of the position "RNG"

            ?. The option "Host Device" – TODO

        - The options and information of the position "Panic Notifier"

            ?. The option "Model" – TODO

            - The options of the option "Model"

                ?. The option "Hyper-V" – TODO
                ?. The option "ISA" – TODO

        - The options and information of the position "VirtIO VSOCK"

            ?. The option "Guest CID" – TODO

            - The options of the option "Guest CID"

                ?. The option "Auto" – TODO
                ?. The text field – TODO

### The window "Clone Virtual Machine" (the virtual machine window > the main menu > "Virtual Machine" > "Clone...")

    ?. The information "Original VM" – TODO
    ?. The option "Name" – TODO
    ?. The option "Storage" – TODO
    ?. The warning "Cloning does not alter..." – TODO
    ?. The button "Cancel" – TODO
    ?. The button "Clone" – TODO

    - The options of the option "Storage"

        ?. The button "Details..." – TODO

        - The list of storages (?)

            ?. The column "Clone" – TODO
            ?. The column "Storage" – TODO

### The window "Change storage path" (the window "Clone Virtual Machine" > "Details...")

    ?. The information "Path" – TODO
    ?. The information "Target" – TODO
    ?. The information "Size" – TODO
    ?. The option "Create a new disk (clone) for the virtual machine" – TODO

    - The options of the option "Create a new disk (clone) for the virtual machine"

        ?. The option "New Path" – TODO
        ?. The button "Browse..." – TODO

### The window "Migrate the virtual machine" (the virtual machine window > the main menu > "Virtual Machine" > "Migrate...")

    ?. The button "Cancel" – TODO
    ?. The button "Migrate" – TODO

    - The tab "Details"

        ?. The information "Migrating VM" – TODO
        ?. The information "Original host" – TODO
        ?. The option "New host" – TODO

        - The options of the option "New host"

            ?. The option "No usable connection available." – TODO
            ?. The option "QEMU/KVM (Same connection)" – TODO

    - The tab "XML"

        ?. The warning "XML editing..." – TODO
        ?. The field with the XML document – TODO

### The window "Delete Virtual Machine" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Delete")

    ?. The information "Delete <virtual machine name>" – TODO
    ?. The option "Delete associated storage files" – TODO
    ?. The button "Cancel" – TODO
    ?. The button "Delete" – TODO

    - The options of the option "Delete associated storage files"

        - The pane with the list of storage files associated with the virtual machine

            ?. The first column (with no name) – TODO
            ?. The column "Storage Path" – TODO
            ?. The column "Target" – TODO

### The window "Preferences" (the main window of Virtual Machine Manager > the main menu > "Edit" > "Preferences")

    ?. The button "Close" – TODO

    - The tab "General"

        - The section "General"

            ?. The option "Enable system tray icon" – TODO
            ?. The option "Enable XML editing" – TODO
            ?. The option "Enable libguestfs VM introspection" – TODO

    - The tab "Polling"

        - The section "Stats Options"

            ?. The option "Update status every ... seconds" – TODO
            ?. The option "Poll CPU usage" – TODO
            ?. The option "Poll Disk I/O" – TODO
            ?. The option "Poll Network I/O" – TODO
            ?. The option "Poll memory stats" – TODO

    - The tab "New VM"

        - The section "New VM Defaults"

            ?. The option "Graphics type" – TODO
            ?. The option "Storage format" – TODO
            ?. The option "CPU default" – TODO

            - The options of the option "Grapics type"

                ?. The option "System default (spice)" – TODO
                ?. The option "VNC" – TODO
                ?. The option "Spice" – TODO

            - The options of the option "Storage format"

                ?. The option "System default (qcow2)" – TODO
                ?. The option "Raw" – TODO
                ?. The option "QCOW2" – TODO

            - The options of the option "CPU default" – TODO

                ?. The option "Application default" – TODO
                ?. The option "Hypervisor default" – TODO
                ?. The option "Nearest host CPU model" – TODO
                ?. The option "host-model" – TODO
                ?. The option "host-passthrough" – TODO

    - The tab "Console"

        - The section "Graphical Consoles"

            ?. The option "Graphical console scaling" – TODO
            ?. The option "Resize guest with window" – TODO
            ?. The option "Grab keys" – TODO
            ?. The option "SPICE USB Redirection" – TODO
            ?. The option "Console autoconnect" – TODO

            - The options of the option "Graphical console scaling"

                ?. The option "Never" – TODO
                ?. The option "Fullscreen only" – TODO
                ?. The option "Always" – TODO

            - The options of the option "Resize guest with window"

                ?. The option "System default (Off)" – TODO
                ?. The option "Off" – TODO
                ?. The option "On" – TODO

            - The options of the option "Grab keys"

                ?. The button "Change..." – TODO

            - The options of the option "SPICE USB Redirection"

                ?. The option "Manual redirect only" – TODO
                ?. The option "Auto redirect on USB attach" – TODO

    - The tab "Feedback"

        - The section "Confirmations"

            ?. The option "Force Poweroff" – TODO
            ?. The option "Poweroff/Reboot/Save" – TODO
            ?. The option "Pause" – TODO
            ?. The option "Device removal" – TODO
            ?. The option "Unapplied changes" – TODO
            ?. The option "Deleting storage" – TODO

### The window "Configure grab key ..." (the window "Preferences" > "Console" > Grab keys > "Change...")

    ?. The button "Cancel" – TODO
    ?. The button "OK" – TODO

### The window "About Virtual Machine Manager..." (the main window of Virtual Machine Manager > the main menu > "Help" > "About")

    ?. The button "Credits" – TODO

    - The pane with general information

        TODO

    - The pane with credits

        TODO

## Sources

[1] https://man.archlinux.org/man/virt-manager.1
[2] https://developer.gnome.org/gtk2/stable/gtk-running.html
[3] https://libvirt.org/uri.html
[4] https://en.wikipedia.org/wiki/Hypervisor
[5] https://fedoraproject.org/wiki/How_to_debug_Virtualization_problems
[6] https://wiki.debian.org/libvirt/Debugging
[7] https://en.wikipedia.org/wiki/Virtual_Machine_Manager
[8] https://docs.oracle.com/cd/E26996_01/E18549/html/VMUSG1194.html
[9] https://en.wikipedia.org/wiki/Virtual_Machine_Manager
[10] https://en.wikipedia.org/wiki/GTK
[11] https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
[12] https://en.wikipedia.org/wiki/Virtual_machine
[13] https://wiki.libvirt.org/page/SSHSetup
[14] https://en.wikipedia.org/wiki/SSH_(Secure_Shell)
[15] https://wiki.archlinux.org/index.php/QEMU
[16] https://qemu-project.gitlab.io/qemu/user/index.html
[17] https://wiki.qemu.org/Documentation/Networking
[18] https://en.wikipedia.org/wiki/QEMU
[19] https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine
[20] https://en.wikipedia.org/wiki/Xen
[21] https://blog.wikichoon.com/2016/01/qemusystem-vs-qemusession.html
[22] https://en.wikipedia.org/wiki/Libvirt
[23] https://en.wikipedia.org/wiki/LXC
