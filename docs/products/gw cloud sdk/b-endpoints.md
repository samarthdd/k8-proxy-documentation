---
title: Endpoints
sidebar_label: Endpoints
---

## Glasswall File Rebuild Product API (Swagger)
https://k8-proxy.github.io/cs-k8s-api/#/

## Endpoints

| API Endpoint | Method | Description | 
|------|---------|---------    |
| /api/filetypedetection/base64    | POST |  Detect a file type and other information using the Base64 encoded representation|
| /api/rebuild/file    | POST |  Rebuilds a file using its binary data       |
| /api/rebuild/base64   | POST | Rebuilds a file using the Base64 encoded representation |
| /api/health | GET | This endpoint is to check the health of the system|
|/api/rebuild/zipfile|POST|Rebuilds a zip file using its binary data|
|/api/rebuild/protectedzipfile|POST|Rebuilds a protected zip file using its binary data and password|
|/api/analyse/base64|POST|Analyse a file using the Base64 encoded representation|
|/api/analyse/xmlreport|GET|Returns a xml report file using its FileId|
|/api/analyse/rebuildzip|GET|Returns a zip file with all available data using its FileId|

## Detailed API Endpoints Documentation - [ Link ](https://github.com/k8-proxy/cs-k8s-api/blob/refactor/ApiEndpointsDocumentation.md)
