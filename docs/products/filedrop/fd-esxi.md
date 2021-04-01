---
title: Deploying File Drop on ESXi
sidebar_label: Deploying File Drop on ESXi
---

### Installation Video
[![Installation Video (OVA)](https://img.youtube.com/vi/C3pA3402LIg/hqdefault.jpg)](https://www.youtube.com/watch?v=C3pA3402LIg&feature=youtu.be)

### Deploying File Drop OVA on ESXI

- Download File Drop OVA
- Login to VMware ESXi
- From left bar navigate to **Virtual machines**
- From top bar on the right choose **Create / Register VM**
- Choose **Deploy a virtual machine from OVF or OVA file**
- Type VM name
- Click on section **Click to select files or drag/drop** and select the downloaded OVA file
- Select desired storage and *optionally* tweak VM configuration
- Before importing, uncheck the box for `Power on automatically`
- Click on Actions > Edit Settings > Increase the following (4GB RAM, 2 Cores, 20 GB disk)
- Wait for the import to finish
- Once VM is imported, click on the VM name

  ![image](https://user-images.githubusercontent.com/70108899/107787725-c632e400-6d4f-11eb-9391-70a7a99e2135.png)

- Click on **Console** in top left corner and select "Open browser console"
- Login to VM using provided credentials
- Change network configuration by running network wizard:

  ```
  /usr/local/bin/wizard
  ```

- Add IP, Gateway and DNS addresses
   - Note: Use `bottom arrow` to navigate through these 3 fields and `tab` to move to Submit button
   - Note: To set up your OVA **without internet access**, for `DNS`, enter the same IP as your VM IP. 

  ![Configure VM Network](https://user-images.githubusercontent.com/70108899/106206708-d29c3600-61c0-11eb-8887-39718e446e7b.png) 

- **Important note**: After the IP change wizard will return to the same window, navigate back to CMD by pressing `Cancel` 
- If needed you can use wizard to change password by selecting **Change password**
- Verify that correct IP address is set by running `ip -4 a` and verifying IP for `eth0`

- Give the VM ~10 minutes to initialize, then open your browser and access FileDrop UI on `http://<VM IP>`

### Troubleshooting
[![Installation Video (OVA)](https://img.youtube.com/vi/fcIQHcWQEWE/hqdefault.jpg)](https://www.youtube.com/watch?v=fcIQHcWQEWE&feature=youtu.be)
- If the UI does not load, run `kubectl get pod -A` to check the status of pods
- If their status is not `ready`, in home directory run `./flush_iptables.sh`
- Then run `sudo systemctl restart k3s`
- Give it ~5-10 minutes, and then navigate to `http://<VM IP>`

## Deploying File Drop OVA to VirtualBox
- Download File Drop OVA
- Open VirtualBox and Import downloaded OVA with minimum of (4GB RAM, 1 Cores, and 20 GB disk)
  - to increase disk size, `Ctrl+D`> Pick your K8-Rebuild VM > Properties
  - if size hasn't been updated on the VM, run:
     ```
     sudo growpart /dev/sda1
     sudo resize2fs /dev/sda1
     ```
