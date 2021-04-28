---
title: FileDrop Integration AWS
sidebar_label: FileDrop Integration AWS
---

## Architecture
![image](https://user-images.githubusercontent.com/60857664/115548813-2f7f2800-a2a8-11eb-8ba3-e7569db39fe0.png)


## Deploying Workload cluster AMI: GW Cloud SDK compliant kubernetes with File Drop

1. Navigate to AWS > AMIs

2. Search for the AMI with specific ID (make sure you are in the correct region)

3. Instance can be launched from AMIs or EC2 space
- From AMIs workspace click on specific AMI > Choose `Launch` 
    - Set instance type to `t3.2xlarge` (8CPUs and 32GB RAM)
    - Skip configuring instance details and adding the storage (that can be left default if not specified differently)
    - Add any tags if needed
    - Security Group: 
      - Create a new security group > Add Rule:
        - HTTP > Port 80 
        - HTTPS > Port 443 
        - Custom TCP > Port 8080
        - SSH > Port 22
    - Click on `Review and Launch`
    - Select `Create or use existing key pair` [Note: Your key pair is important for SSH]
 
 4. Give the instance ~10 minutes to initialize, then open your browser and access FileDrop UI on `http://<VM IP>`

 5. Launch FileDrop

![image](https://user-images.githubusercontent.com/64204445/115719738-03dc6a80-a39a-11eb-93d0-39597d65e6ee.png)



## How to use FileDrop

- You can find information on how to use File Drop [ here ](https://k8-proxy.github.io/k8-proxy-documentation/docs/products/filedrop/fd-howto).


## Deploying Service cluster (Monitoring cluster)

1. Navigate to AWS > AMIs

2. Search for the AMI with specific ID (make sure you are in the correct region)

3. Instance can be launched from AMIs or EC2 space
- From AMIs workspace click on specific AMI > Choose `Launch` 
    - Set instance type to `t3.xlarge` (8CPUs and 32GB RAM)
    - Skip configuring instance details and adding the storage (that can be left default if not specified differently)
    - Security Group: 
      - Create a new security group > Add Rule:
        - HTTP > Port 80 
        - HTTPS > Port 443 
        - SSH > Port 22
        - Custom TCP > Port 3000
        - Custom TCP > Port 5601
    - Click on `Review and Launch`
    - Select `Create or use existing key pair` [Note: Your key pair is important for SSH]
    - Wait for instance to be initialized (~10 minutes) and use public IP to access File Drop web interface

### Instructions to integrate Service Cluster and Workload Cluster of Complaint K8 Cloud SDK
1. Login to Workload cluster (GW SDK with Filedrop integrated deployed above) using SSH and navigate to `/home/ubuntu` and switch to root by `sudo su`

2. Verify presence of below files by issuing command `ls`

>     /home/ubuntu/monitoring-username.txt
>     /home/ubuntu/monitoring-password.txt
>     /home/ubuntu/logging-username.txt
>     /home/ubuntu/logging-password.txt
>     /home/ubuntu/service-cluster.txt
>     /home/ubuntu/service-cluster-ip.txt
>     /home/ubuntu/cluster.txt
>     /home/ubuntu/wc-coredns-configmap.yml
>     /home/ubuntu/setupscCluster.sh


3. In case you are missing `wc-coredns-configmap.yml`, `setupscCluster.sh` run: 
   ```
   wget https://raw.githubusercontent.com/k8-proxy/vmware-scripts/cs-api-ck8/packer/wc-coredns-configmap.yml
   wget https://raw.githubusercontent.com/k8-proxy/vmware-scripts/cs-api-ck8/packer/setupscCluster.sh
   ```

4. In case you are missing the rest of the files, also create and edit them (using vi/vim) with values as shown below

5. Update each text file with corresponding values:

```
    monitoring-username.txt - wcWriter
    monitoring-password.txt - <Add monitoring password>
    logging-username.txt - fluentd
    logging-password.txt - <Add logging password>
    service-cluster.txt - ops.default.compliantkuberetes
    service-cluster-ip.txt - <service-cluster-ip>
    cluster.txt - <Unique Identifier of workload instance> E.g., GWSDKWC01
```

6. Change permission of `setupscCluster.sh` by below command:

    `chmod +x setupscCluster.sh`

7. Execute setupscCluster by below command:

    `./setupscCluster.sh`

8. Wait for all commands to complete. Once completed, login to Grafana and Kibana in service cluster

    http://<service-cluster-ip>:5601/  - Kibana
    http://<service-cluster-ip>:3000/  - Grafana

    Username: `admin`
    Password: `Will be shared as part of delivery

