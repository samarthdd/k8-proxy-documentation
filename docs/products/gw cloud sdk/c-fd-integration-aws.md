---
title: FileDrop Integration AWS
sidebar_label: FileDrop Integration AWS
---


## Deploying AMI: GW Cloud SDK compliant kubernetes with File Drop

1.- Navigate to AWS > AMIs

2.- Search for the AMI with specific ID (make sure you are in the correct region)

3.- Instance can be launch from AMIs or EC2 space
    - From AMIs workspace click on specific AMI > Choose `Launch` 
    - Set instance type to `t2.large` (2CPUs and 8GB RAM)
    - Skip configuring Instance details and adding the storage (that can be left default if not specified differently)
    - Add any tags if needed
    - Security Group: 
      - Create a new security group > Add Rule:
        - HTTP > Port 80 
        - HTTPS > Port 443 
        - SSH > Port 22
    - Click on `Review and Launch`
    - Select `Create or use existing key pair` [Note: Your key pair is important for SSH]
 
 4.- Give the instance ~10 minutes to initialize, then open your browser and access FileDrop UI on `http://<VM IP>`

 5.- Launch FileDrop

![image](https://user-images.githubusercontent.com/64204445/115719738-03dc6a80-a39a-11eb-93d0-39597d65e6ee.png)



## How to use FileDrop

- How to use file-drop [ Link ](https://k8-proxy.github.io/k8-proxy-documentation/docs/products/filedrop/fd-howto)

