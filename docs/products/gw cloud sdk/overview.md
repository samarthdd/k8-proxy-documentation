---
title: GW Cloud SDK
sidebar_label: GW Cloud SDK
---

# Introduction

## Overview
The project is about a Kubernetes service that can be added to ICAP infrastructure to provide access to Glasswall Solutions file rebuild service through RESTful APIs

## Architecture Overview
- Implemented as a K8s service
- Easy to deploy within ICAP Service cluster
- Interacts with Adaptation Service with RabbitMQ
- Accessible on :8080

## Architecture Diagram

![image](https://user-images.githubusercontent.com/60857664/115525291-3e0d1580-a28f-11eb-8258-32da3b5d0ace.png)

- The C# service receives files for a rebuild on the REST API endpoints.
- After preliminary processing (at least must verify the file has been received) the request is passed to the `Adaption Service` with `Adaption request` RabbitMQ message.
- The file to be rebuilt is uploaded to the `Original Store`.
- Once the processing is completed C# service gets informed with a RabbitMQ `Adaption outcome` message.
- C# service get the rebuilt file from the `Rebuild Store` and passes it to the user.

## Dataflow Diagram

![image](https://user-images.githubusercontent.com/60857664/115525847-c4295c00-a28f-11eb-9754-6cd5b945f138.png)

## Endpoints

| API Endpoint | Method | Description | 
|------|---------|---------    |
| /api/FileTypeDetection/base64    | POST |  /api/FileTypeDetection/base64 |
| /api/rebuild/file    | POST |  Rebuilds a file using its binary data       |
| /api/rebuild/base64   | POST | Rebuilds a file using the Base64 encoded representation |
| /api/rebuild/base64   | POST | Analyse a file using the Base64 encoded representation |

### Detailed API Endpoints Documentation - [ Link ](https://github.com/k8-proxy/cs-k8s-api/blob/refactor/ApiEndpointsDocumentation.md)

# FileDrop with Glasswall Cloud SDK

![image](https://user-images.githubusercontent.com/60857664/115526387-4154d100-a290-11eb-8876-357a22900a0d.png)


## Integration of Glasswall Cloud SDK with FileDrop
- Clone Repo

    ```
    git clone https://github.com/k8-proxy/k8-rebuild-file-drop
    cd k8-rebuild-file-drop/app
    ```
- Edit Dockerfile 
    ```
    vim Dockerfile
    ```
- Update endpoints with c# api endpoints in below three lines
    ```
    ARG REACT_APP_ANALYSE_API_ENDPOINT='http://<ip>:<port>'
    ARG REACT_APP_FILETYPEDETECTION_API_ENDPOINT='http://<ip>:<port>'
    ARG REACT_APP_REBUILD_API_ENDPOINT='http://<ip>:<port>'
    ```
- Run : `docker build -t k8-rebuild-file-drop .`
- Run: `docker run -it --rm -p 80:80 k8-rebuild-file-drop`
- Open the `http://localhost` in your Browser
- You will be able to see File Drop, React App web interface

    ![image](https://user-images.githubusercontent.com/60857664/115526603-7f51f500-a290-11eb-8ff7-6d9d7cc8c3e7.png)


- How to use file-drop [ Link ](https://github.com/k8-proxy/glasswall-servers-eval/wiki/How-to-use-File-Drop)


Note : To Deploy in AWS, an AMI needs to be created with above setup.

# GW Desktop Integration

## Integrate Glasswall Desktop App to GW SDK VM
In order to Integrate Glasswall Desktop App Make sure Both of the Machine are on the same network subnet.

Ignore Step 1 to Step 3 If you are already using `OfflineDesktop.ova`

**Step 1:** Download Glasswall Desktop App from [here](https://github.com/k8-proxy/glasswall-desktop/releases/download/v1.0.5/glasswall-desktop-1.0.5.AppImage)

**Step 2:** Make the downloaded package as an executable by running below command.

`chmod a+x glasswall-desktop-1.0.5.AppImage
`

**Step 3:** Run below command to launch the desktop application

`./glasswall-desktop-1.0.5.AppImage
`

**Step 4:** Configure GW-SDK-VM endpoint in Glasswall Desktop App Setting

![image](https://user-images.githubusercontent.com/60857664/115527413-52eaa880-a291-11eb-8932-a00afa904043.png)

**Example Value:**

```
REBUILD ENGINE URL = /api/rebuild/base64

REBUILD ANALYSIS URL = /api/Analyse/base64
```

Once you are done with the above setting you are using GW-SDK-VM now with Glasswall Desktop App to Process the files.

## GW Cloud SDK integration with GW Desktop video

[![Desktop Integration](https://img.youtube.com/vi/RIcSlZvcNC0/hqdefault.jpg)](https://www.youtube.com/watch?v=RIcSlZvcNC0)

# Deployment
TBD

# Glasswall File Rebuild Product API (Swagger)
https://k8-proxy.github.io/cs-k8s-api/#/

# Demos

## File Drop integrated with GW Cloud SDK

[![Installation Video (OVA)](https://img.youtube.com/vi/_ZnCP1GY2-w/hqdefault.jpg)](https://www.youtube.com/watch?v=_ZnCP1GY2-w)

## GW Cloud SDK on compliant Kubernetes

[![Installation Video (OVA)](https://img.youtube.com/vi/_0VVsgnVSnA/hqdefault.jpg)](https://www.youtube.com/watch?v=_0VVsgnVSnA)
