(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(99)),c={title:"Automated Deployment",sidebar_label:"Automated deployment CF"},l={unversionedId:"products/gw cloud sdk/deployment",id:"products/gw cloud sdk/deployment",isDocsHomePage:!1,title:"Automated Deployment",description:"Automated deployment - GW Cloud SDK with compliant kubernetes (worker and service cluster)",source:"@site/docs/products/gw cloud sdk/deployment.md",slug:"/products/gw cloud sdk/deployment",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/deployment",version:"current",sidebar_label:"Automated deployment CF",sidebar:"docs",previous:{title:"GW Desktop Integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/d-desktop-integration"},next:{title:"Python/PHP Code Sample",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/python-sample"}},i=[{value:"Deployment instructions using AMI",id:"deployment-instructions-using-ami",children:[{value:"Launching by selecting a region below",id:"launching-by-selecting-a-region-below",children:[]}]},{value:"Validate Deployment",id:"validate-deployment",children:[]}],s={rightToc:i};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"automated-deployment---gw-cloud-sdk-with-compliant-kubernetes-worker-and-service-cluster"},"Automated deployment - GW Cloud SDK with compliant kubernetes (worker and service cluster)"),Object(r.b)("h2",{id:"deployment-instructions-using-ami"},"Deployment instructions using AMI"),Object(r.b)("p",null,"Worker and service cluster AMIs are automatically created by running ",Object(r.b)("strong",{parentName:"p"},"CK8icap-GW_CloudSDK")," workflow in GitHub Actions using Packer.\nAmazon CloudFormation launch Template is provided  in the repository to facilitate configuration of the deployment."),Object(r.b)("h3",{id:"launching-by-selecting-a-region-below"},"Launching by selecting a region below"),Object(r.b)("p",null,"1.- To launch instances click on one of the Buttons below and follow the steps below:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region"),Object(r.b)("th",{parentName:"tr",align:null},"Stack"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Ireland"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"London"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=eu-west-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Frankfurt"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Paris"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=eu-west-3#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Ohio"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"N. Virginia"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"N. California"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Oregon"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=IcapLoadBalancerStack&templateURL=https://icap-cloudformation-template.s3-eu-west-1.amazonaws.com/Compliant_Kubernetes_ICAP_Service_with_Service_Cluster_Proxy_REST_API.json"},Object(r.b)("img",{src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png"})))))),Object(r.b)("p",null,"2.- When prompted with the image below, click Next"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116567174-aef3a380-a907-11eb-9354-69c3d3630eb2.png",alt:"image"})),Object(r.b)("p",null,"3.- Enter ",Object(r.b)("inlineCode",{parentName:"p"},"Stack name")," (less than 20 characters)"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116567268-c0d54680-a907-11eb-8b1e-8fe6c3665bfc.png",alt:"image"})),Object(r.b)("p",null," 4.- Set ",Object(r.b)("strong",{parentName:"p"},"Credentials"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Service Cluster Key Name")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Workload Cluster Key Name")," to the names of key pairs (previously uploaded to AWS) that will be allowed to SSH into VMs")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116567312-ce8acc00-a907-11eb-8642-b1943a81c8d2.png",alt:"image"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Logging Password"),"  Fluentd password")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Monitoring Password")," to plain text of InfluxDB WC writer password"),Object(r.b)("p",{parentName:"li"},"  The ",Object(r.b)("strong",{parentName:"p"},"Logging Password")," & ",Object(r.b)("strong",{parentName:"p"},"Monitoring Password")," are the elasticsearch.fluentdPassword & influxDB.wcWriterPassword Values respectively that are generated during the github action run which produced the used service cluster AMI. "),Object(r.b)("p",{parentName:"li"},"5.- ",Object(r.b)("strong",{parentName:"p"},"Service Cluster")," specification mainly AMI ID and Instance size, make sure the AMI is the one generated in the same github action run where you get the logging and monitory passwords above."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116566431-0cd3bb80-a907-11eb-8952-5c768a886e2b.png",alt:"image"})),Object(r.b)("p",null,"  6.- ",Object(r.b)("strong",{parentName:"p"},"Workload Cluster")," specification mainly AMI ID, Instance size and number of instances."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116566498-1ceb9b00-a907-11eb-8394-5ac9ab94eaec.png",alt:"image"})),Object(r.b)("p",null,"  7.- When the stack creation is complete, in the ",Object(r.b)("strong",{parentName:"p"},"Outputs")," tab you can find:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Load Balancer DNS Name")," which stand in-front of the workload cluster instances and accept requests on port ",Object(r.b)("inlineCode",{parentName:"li"},"8080")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Service Cluster IP"),"  that exposes Grafana on port ",Object(r.b)("inlineCode",{parentName:"li"},"3000")," and Kibana on port ",Object(r.b)("inlineCode",{parentName:"li"},"5601"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70196799/116567382-dba7bb00-a907-11eb-9479-b36230e14ddb.png",alt:"image"})),Object(r.b)("h2",{id:"validate-deployment"},"Validate Deployment"),Object(r.b)("p",null,"Follow these instructions to validate deployment: ",Object(r.b)("a",{parentName:"p",href:"https://k8-proxy.github.io/k8-proxy-documentation/docs/products/gw%20cloud%20sdk/c-fd-integration-aws#validate-deployment"},"https://k8-proxy.github.io/k8-proxy-documentation/docs/products/gw%20cloud%20sdk/c-fd-integration-aws#validate-deployment")," and access FileDrop and the monitoring capabilities from the service cluster. "))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||r;return a?o.a.createElement(d,l(l({ref:t},s),{},{components:a})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<r;s++)c[s]=a[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);