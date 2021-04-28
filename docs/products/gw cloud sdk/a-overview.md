---
title: Overview
sidebar_label: Overview
---

# Introduction

## Overview
GW Cloud SDK is a Kubernetes service that can be added to ICAP infrastructure to provide access to Glasswall Solutions file rebuild service through RESTful APIs.

## Architecture Overview
- Implemented as a K8s service
- Easy to deploy within ICAP Service cluster
- Interacts with Adaptation Service with RabbitMQ
- Accessible on :8080

## Architecture Diagram

![image](https://user-images.githubusercontent.com/60857664/115525291-3e0d1580-a28f-11eb-8258-32da3b5d0ace.png)

- The C# service receives files for a rebuild on the REST API endpoints.
- After preliminary processing (at least must verify the file has been received), the request is passed to the `Adaption Service` with `Adaption request` RabbitMQ message.
- The file to be rebuilt is uploaded to the `Original Store`.
- Once the processing is completed, C# service gets informed with a RabbitMQ `Adaption outcome` message.
- C# service get the rebuilt file from the `Rebuild Store` and passes it to the user.

## Dataflow Diagram

![image](https://user-images.githubusercontent.com/60857664/115525847-c4295c00-a28f-11eb-9754-6cd5b945f138.png)

## Glasswall Cloud SDK with Compliant Kubernetes

![image](https://user-images.githubusercontent.com/60857664/115548813-2f7f2800-a2a8-11eb-8ba3-e7569db39fe0.png)



# Demos

## File Drop integrated with GW Cloud SDK

[![Installation Video (OVA)](https://img.youtube.com/vi/_ZnCP1GY2-w/hqdefault.jpg)](https://www.youtube.com/watch?v=_ZnCP1GY2-w)

## GW Cloud SDK on compliant Kubernetes

[![Installation Video (OVA)](https://img.youtube.com/vi/_0VVsgnVSnA/hqdefault.jpg)](https://www.youtube.com/watch?v=_0VVsgnVSnA)
