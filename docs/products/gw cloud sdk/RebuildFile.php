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
