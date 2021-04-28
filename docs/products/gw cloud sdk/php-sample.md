---
title: php Code Sample
sidebar_label: php Code Sample
---
# php

The following code snippets are examples of calling the Rebuild API using php. The requests library is used to execute calls to the API.

## api/rebuild/base64
​In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

The rebuilt file is returned as Base64, decoded by the client and written to disk.
```
<?php
$jwt_token = "YOUR_JWT_TOKEN";
$url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";
// local file
$Input_File = 'YOUR/INPUT/FILE.docx';
$output_file_path = "YOUR/OUTPUT/FILE.docx";
// convert base64 encoded bytes to string
$base64 = base64_encode(file_get_contents($Input_File));
$data = [
    'Base64' => $base64,
    'ContentManagementFlags' => [
        'WordContentManagement' => [
            'ReviewComments' => '0'
        ],
    ]
];
$json_data = json_encode($data);
// build post request with file  "Authorization: jwt_token,
$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Authorization: " . $jwt_token . "\r\n" .
            "Content-type: application/json\r\n" .
            "Accept: application/json\r\n" .
            "Connection: close\r\n" .
            "Content-length: " . strlen($json_data) . "\r\n",
        'content' => $json_data
    ],

]);
//Send a file to Glasswall's Rebuild API  endpoint, returns base64 encoded bytes
$response = file_get_contents($url, false, $context);
if ($response === false) {
    exit("Unable to get data at $url");
}
//decode base64 string to bytes
$base64_string_output = base64_decode($response);
//save file to local
if (file_put_contents($output_file_path, $base64_string_output)) {
    echo "File downloaded successfully";
} else {
    echo "File downloading failed.";
}
