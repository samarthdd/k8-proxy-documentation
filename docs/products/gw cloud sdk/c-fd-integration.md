---
title: FileDrop with Glasswall Cloud SDK
sidebar_label: FileDrop with Glasswall Cloud SDK
---

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

