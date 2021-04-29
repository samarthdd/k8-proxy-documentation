---
title: Automated Deployment
sidebar_label: Automated deployment CF
---


# Automated deployment - GW Cloud SDK with compliant kubernetes (worker and service cluster)

## Deployment instructions using AMI

Worker and service cluster AMIs are automatically created by running **CK8icap-GW_CloudSDK** workflow in GitHub Actions using Packer.
Amazon CloudFormation launch Template is provided  in the repository to facilitate configuration of the deployment.

### Launching by selecting a region below

1.- To launch instances click on one of the Buttons below and follow the steps below:


| Region           | Stack                                                                                                                                                                                                                                                                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ireland          | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) |
| London          | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=eu-west-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) |
| Frankfurt          | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) |
| Paris          | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=eu-west-3#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) |
| Ohio  | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) | 
| N. Virginia  | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) | 
| N. California  | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) | 
| Oregon  | [<img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png">](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json) | 



2.- When prompted with the image below, click Next

  ![Screenshot from 2021-03-25 17-13-06](https://user-images.githubusercontent.com/7603614/112506566-2fb20380-8d8e-11eb-9476-909cc8a751ed.png)

3.- Enter `Stack name` (less than 20 characters)

  ![Screenshot from 2021-03-25 17-13-45](https://user-images.githubusercontent.com/7603614/112506657-45bfc400-8d8e-11eb-91a9-59e3c0b558ef.png)

 4.- Set **Credentials**:

  * `Service Cluster Key Name` and `Workload Cluster Key Name` to the names of key pairs (previously uploaded to AWS) that will be allowed to SSH into VMs

    ![Screenshot from 2021-03-25 17-14-04](https://user-images.githubusercontent.com/7603614/112506741-55d7a380-8d8e-11eb-8627-8427d194eeed.png)

  * `Logging Password`  Fluentd password

  * `Monitoring Password` to plain text of InfluxDB WC writer password

    The **Logging Password** & **Monitoring Password** are the elasticsearch.fluentdPassword & influxDB.wcWriterPassword Values respectively that are generated during the github action run which produced the used service cluster AMI. 
    
  5.- **Service Cluster** specification mainly AMI ID and Instance size, make sure the AMI is the one generated in the same github action run where you get the logging and monitory passwords above.

![image](https://user-images.githubusercontent.com/70196799/116566431-0cd3bb80-a907-11eb-8952-5c768a886e2b.png)

  6.- **Workload Cluster** specification mainly AMI ID, Instance size and number of instances.

![image](https://user-images.githubusercontent.com/70196799/116566498-1ceb9b00-a907-11eb-8394-5ac9ab94eaec.png)


  7.- When the stack creation is complete, in the **Outputs** tab you can find:
  * `Load Balancer DNS Name` which stand in-front of the workload cluster instances and accept requests on port `8080`
  * `Service Cluster IP`  that exposes Grafana on port `3000` and Kibana on port `5601`

  ![Screenshot from 2021-03-25 18-05-43](https://user-images.githubusercontent.com/7603614/112513618-ced9f980-8d94-11eb-9559-61cee07e7a93.png)


## Validate Deployment

Follow these instructions to validate deployment: https://k8-proxy.github.io/k8-proxy-documentation/docs/products/gw%20cloud%20sdk/c-fd-integration-aws#validate-deployment and access FileDrop and the monitoring capabilities from the service cluster. 

