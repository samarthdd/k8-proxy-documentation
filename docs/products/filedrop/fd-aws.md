---
title: Deploying File Drop on AWS
sidebar_label: Deploying File Drop on AWS
---

## Installation video 
- Installation Video (OVA)

[![Installation Video (OVA)](https://img.youtube.com/vi/yaBPLn9ISSg/hqdefault.jpg)](https://www.youtube.com/watch?v=yaBPLn9ISSg&feature=youtu.be)

- Installation Video (AMI)

[![Installation Video (AMI)](https://img.youtube.com/vi/XvU87KX_Cbc/hqdefault.jpg)](http://www.youtube.com/watch?v=XvU87KX_Cbc)


## Prerequisites 

- File Drop AMI ID 
- File Drop OVA S3 URL

## Setup AWS access

- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) on your local machine

    - AWS CLI installation [Linux](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html):
        ```
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo ./aws/install
        ```
    
    - AWS CLI installation [WIN](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html):
        ```
        - Download and install msi: https://awscli.amazonaws.com/AWSCLIV2.msi
        - To verify AWS CLI was installed succesufully open CMD and run: aws --version
        - Result should be like: aws-cli/2.1.1 Python/3.7.4 Windows/10 botocore/2.0.0
        ```
    - AWS CLI installation [MAC](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html):
        ```
        - Download latest macOS pkg file: https://awscli.amazonaws.com/AWSCLIV2.pkg
        - Double-click the downloaded file to launch the installer & follow instructions
        - To verify installation, open terminal and run
         - `which aws` output would be   `/usr/local/bin/aws` 
         - `aws --version` output would be `aws-cli/2.1.29 Python/3.7.4 Darwin/18.7.0 botocore/2.0.0`

        ```

- [Setup AWS Console access](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
    - From CMD run: `aws configure`. 
    - Enter the data for values as they pop up.
        ```
        example:
            AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
            AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
            Default region name [None]: eu-west-1
            Default output format [None]: json
        ```
- If your have MFA token enabled for authentication to AWS account you should [set up MFA token authenticate through AWS CLI](https://aws.amazon.com/premiumsupport/knowledge-center/authenticate-mfa-cli/)
    - Run: `aws sts get-session-token --serial-number arn-of-the-mfa-device --token-code code-from-token`
    - Replace arn-of-the-mfa-device with your username and AWS number and enter MFA code as code-from-token 
    - Then export keys
      ```
      export AWS_ACCESS_KEY_ID=<Value>
      export AWS_SECRET_ACCESS_KEY=<Value>
      export AWS_SESSION_TOKEN= <Value>
      ```
- In case of any permission issues, check if proper Service Role is created as instructed [here](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role) and that all needed permissions are set for user performing the steps. 

## Importing File Drop OVA

- Download FileDrop OVA from provided S3 URL
- Upload downloaded OVA file to Amazon S3
   - Sign in to the AWS Console and open the [Amazon S3 console](https://console.aws.amazon.com/s3/)
   - In the Buckets list, choose the name of the bucket that you want to upload OVA to or create new bucket
   - Choose `Upload`
   - On the Upload page, choose `Add files`
   - Choose OVA file to upload, and then choose Open
   - Once OVA is uploaded, copy OVA S3 URL
- Use AWS CLI to import the image based on provided OVA
- Create containers.json file as per example:

  ```
  [
    {
      "Description": "My Server OVA",
      "Format": "ova",
      "UserBucket": {
          "S3Bucket": "my-import-bucket", 
          "S3Key": "vms/my-server-vm.ova" 
      }
  }]
  ```
- From your AWS CLI run 

  ```
  aws ec2 import-image --description "My server VM" --disk-containers "file://C:\import\containers.json"
  ```

- Monitor image import by running: 

  ```
  aws ec2 describe-import-image-tasks --import-task-ids import-ami-ID
  ```
- This process can take few minutes, so run above command multiple times until you get, `"Status": "completed"` and use AMI ID you got to follow up the steps in next section


## Deploying File Drop AMI

- Navigate to AWS > AMIs
- Search for the AMI with specific ID (make sure you are in correct region)
- Instance can be launch from AMIs or EC2 space
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
    - Wait for instance to be initialized (~10 minutes) and use public IP to access File Drop web interface

## Remove Internet Access From FileDrop (Optional)

- EC2 > Navigate to your instance > Under your Instance Summary > Security
![security-tab](https://user-images.githubusercontent.com/60857664/108712705-d735df00-751f-11eb-9bdb-388cbf43a687.png)
- Security Details > Security Groups > Click on `sg-...` (your launch-wizard)
- Outbound rules tab > Edit outbound rules > Delete the outbound rule & save rules
![Screenshot from 2021-02-22 15-18-03](https://user-images.githubusercontent.com/60857664/108713672-36e0ba00-7521-11eb-93d1-e10246562216.png)


## Troubleshooting
- If the UI does not load, run `kubectl get pod -A` to check the status of pods
- If their status is not `ready`, in home directory run `./flush_iptables.sh`
- Then run `sudo systemctl restart k3s`
- Give it ~3 minutes, and then navigate to `http://<VM IP>`
