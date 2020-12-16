(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return A}));var a=n(2),i=n(6),l=(n(0),n(124)),c={title:"Sharepoint OVA in AWS",sidebar_label:"Sharepoint OVA in AWS"},s={unversionedId:"websites/sharepoint/self-hosted/sp-ova-aws",id:"websites/sharepoint/self-hosted/sp-ova-aws",isDocsHomePage:!1,title:"Sharepoint OVA in AWS",description:"Version: Sharepoint 2019",source:"@site/docs/websites/sharepoint/self-hosted/sp-ova-aws.md",slug:"/websites/sharepoint/self-hosted/sp-ova-aws",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/sp-ova-aws",version:"current",sidebar_label:"Sharepoint OVA in AWS",sidebar:"docs",previous:{title:"Sharepoint Self-Hosted Overview",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/overview"},next:{title:"Sharepoint Self-Hosted Plugin",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/sp-plugin"}},o=[{value:"Version: Sharepoint 2019",id:"version-sharepoint-2019",children:[]},{value:"Topology: Single Server Farm",id:"topology-single-server-farm",children:[]},{value:"Target: OVA in AWS",id:"target-ova-in-aws",children:[]},{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Glasswall OVA image Deployment in AWS",id:"glasswall-ova-image-deployment-in-aws",children:[{value:"Upload OVA File",id:"upload-ova-file",children:[]},{value:"Import AMIs",id:"import-amis",children:[]}]}],r={rightToc:o};function A(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},r,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"version-sharepoint-2019"},"Version: Sharepoint 2019"),Object(l.b)("h2",{id:"topology-single-server-farm"},"Topology: Single Server Farm"),Object(l.b)("h2",{id:"target-ova-in-aws"},"Target: OVA in AWS"),Object(l.b)("h1",{id:"steps"},"Steps"),Object(l.b)("h2",{id:"pre-requisites"},"Pre-Requisites"),Object(l.b)("p",null,"Sharepoint 2019 OVA\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./sp-vhd-to-ova"}),"Follow these steps")),Object(l.b)("h2",{id:"glasswall-ova-image-deployment-in-aws"},"Glasswall OVA image Deployment in AWS"),Object(l.b)("h3",{id:"upload-ova-file"},"Upload OVA File"),Object(l.b)("p",null,"Once VHD is converted into OVA, it's time to upload it into AWS storage. To upload OVA into AWS, followed below steps."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log In into AWS Portal, Search for 'S3' and open it.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(280).default})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Once 'Amazon S3' is open, created a bucket. Where we will be uploading our OVA file.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(281).default})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Created a 'Bucket' by specificing the name of it.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(282).default})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Once Bucket is created, Open Bucket and clicked on 'Upload'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(283).default})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"On 'Upload",Object(l.b)("strong",{parentName:"li"}," _', Selected 'Add Files")," _'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(284).default})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Browsed the specific OVA file located in your local machine and clicked on 'Open** _'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(285).default})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Once the file is ready to upload click on 'Upload'.** _")),Object(l.b)("h3",{id:"import-amis"},"Import AMIs"),Object(l.b)("p",null,"After uploading the OVA file, now it's time to import it for the Virtual Instant. To Import the OVA into Virtual Instant, we need to install AWS CLI (Follow instruction at ","[ANNEX-2 Installation of AWS CLI]","(#",Object(l.b)("em",{parentName:"p"},"Annex-2"),"(Installation_of_1) to Install AWS CLI). Once CLI is installed Configure it and import below Policies."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create a file named trust-policy.json on your computer. Add the following policy to the file")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n    'Version': '2012-10-17',\n    'Statement': \n    [\n        {\n            'Effect': 'Allow',\n            'Principal': { 'Service': 'vmie.amazonaws.com' },\n            'Action': 'sts:AssumeRole',\n            'Condition': {\n                'StringEquals':{\n                    'sts:Externalid': 'vmimport'\n                }\n            }\n        }\n    ]\n}\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Use the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/reference/iam/create-role.html"}),"create-role")," command to create a role named vmimport and grant VM Import/Export access to it. Ensure that you specify the full path to the location of the trust-policy.json file that you created in the previous step, and that you include the file:// prefix as shown the following example:")),Object(l.b)("p",null,"aws iam create-role --role-name vmimport --assume-role-policy-document 'file://f:\\vhd01\\trust-policy.json'"),Object(l.b)("p",null,Object(l.b)("img",{src:n(286).default})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Create a file named role-policy.json with the following policy, where disk-image-file-bucket is the bucket for disk images and export-bucket is the bucket for exported images")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n    Version':'2012-10-17',\n    'Statement':[\n            {\n            'Effect':'Allow',\n            'Action':[\n                's3:GetBucketLocation',\n                's3:GetObject',\n                's3:ListBucket'\n            ],\n\n            'Resource':[\n            'arn:aws:s3:::spserverova',\n            'arn:aws:s3:::spserverova/\\*'\n            ]\n        },\n        {\n        'Effect':'Allow',\n        'Action':[\n            'ec2:ModifySnapshotAttribute',\n            'ec2:CopySnapshot',\n            'ec2:RegisterImage',\n            'ec2:Describe\\*'\n        ],\n        'Resource':'\\*'\n        }\n    ]\n}\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Use the following ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/cli/latest/reference/iam/put-role-policy.html"}),"put'-role-policy")," command to attach the policy to the role created above. Ensure that you specify the full path to the location of the role-policy.json file.")),Object(l.b)("p",null,"aws iam put-role-policy --role-name vmimport --policy-name vmimport --policy-document 'file://f:\\vhd01\\role-policy.json'"),Object(l.b)("p",null,Object(l.b)("img",{src:n(287).default})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Once the policy has been imported, Created a container.json file as of below text.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"[\n    {\n        'Description': 'SP Server OVA',\n        'Format': 'ova',\n        'UserBucket': {\n            'S3Bucket': 'spserverova',\n            'S3Key': 'sp-svr-vm.ova'\n        }\n    }\n]\n")),Object(l.b)("p",null,Object(l.b)("img",{src:n(288).default})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"After creating 'container.json' user below cmdlet to import image.")),Object(l.b)("p",null,"aws ec2 import-image --description 'SP Server OVA' --disk-containers 'file://f:\\vhd01\\container.json'"),Object(l.b)("p",null,Object(l.b)("img",{src:n(289).default})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"You can check the status of the of importing image using below cmdlet")),Object(l.b)("p",null,"aws ec2 describe-import-image-tasks --import-task-ids import-ami-01d535d9bfdc0044e"),Object(l.b)("p",null,Object(l.b)("img",{src:n(290).default})),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},"Check until you do have status as of below, it should show status as completed.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(291).default})),Object(l.b)("ol",{start:9},Object(l.b)("li",{parentName:"ol"},"Once the status is completed, you will be able to see imported instance under 'AMIs'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(292).default})),Object(l.b)("h1",{id:"launch-instance"},"Launch Instance"),Object(l.b)("p",null,"Once the image is available in 'AMIs', we can start with Launching Instance. Follow below steps to Launch Instance."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"On the 'AMIs' , select the machine and clicked on 'Launch'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(293).default})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Selected the Instance specs as of in Azure and clicked on 'Review and Launch'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(294).default})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Validated the Instance configuration and clicked on 'Launch'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(295).default})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"On the key pair type selected 'Proceed without a key pair' _to get authenticated with domain credentials on the machine. And selected on'Launch Instances'.**")),Object(l.b)("p",null,Object(l.b)("img",{src:n(296).default})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"It will take while to launch you instance, to view the status of instance click on 'View Instances'.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(297).default})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Once the 'Instance state' is 'Running', click on 'Action' and connect Instance.")),Object(l.b)("p",null,Object(l.b)("img",{src:n(298).default})))}A.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=i.a.createContext({}),A=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=A(e.components);return i.a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,r=o(e,["components","mdxType","originalType","parentName"]),b=A(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||p[u]||l;return n?i.a.createElement(d,s(s({ref:t},r),{},{components:n})):i.a.createElement(d,s({ref:t},r))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var r=2;r<l;r++)c[r]=n[r];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},280:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image010-eb2763b83bf147374b176a0feaecc4c6.png"},281:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image011-b98c0ad66b01495b84fcc3daa24c2127.png"},282:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image012-9a89bb8707af36882a2d87bf3431cc9d.png"},283:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image013-4b58dba55d11bb1cd2fb9fa6709205fe.png"},284:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image014-1860180abf1d2424334cb9018e3a985a.png"},285:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image015-c3fb36f0347160cc4cb21c4012f1e87b.png"},286:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image016-18190e66e70c10f51a455ffc024cd6e6.png"},287:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image018-30ed39a2486cd6566a5c6aad315637c5.png"},289:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image019-a6114dc5eec1b7012c811b122d3551d9.png"},290:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image020-afd52b17b945da05195490d560b9beee.png"},291:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image021-d3d3d2b94a50fdd6193187d649b75896.png"},292:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image022-5671586b6e2223ea31be998df05f32b2.png"},293:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image023-6863ef0f34d11408a7e450444b7c5156.png"},294:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image024-0d17430710592c76f09f7cad754c5723.png"},295:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image025-893db899806c762a41b1829c699cfbcf.png"},296:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image026-16a65fee6310d66f2a1a0556b3c9fcae.png"},297:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image027-85d30c947e63c2f2319d5e7d1a31e48c.png"},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image028-f48e78679c7c5cb0529467b0ad059e4d.png"}}]);