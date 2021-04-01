(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(96)),o={title:"How to use ICAP Server",sidebar_label:"How to use ICAP Server"},c={unversionedId:"products/icap server/icap-howto",id:"products/icap server/icap-howto",isDocsHomePage:!1,title:"How to use ICAP Server",description:"Docker Setup",source:"@site/docs/products/icap server/icap-howto.md",slug:"/products/icap server/icap-howto",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-howto",version:"current",sidebar_label:"How to use ICAP Server",sidebar:"docs",previous:{title:"Deploying ICAP Server on ESXI & Virtualbox",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-esxi"},next:{title:"Management UI user guide",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-ui"}},l=[{value:"Docker Setup",id:"docker-setup",children:[]},{value:"ICAP management UI",id:"icap-management-ui",children:[{value:"Demo",id:"demo",children:[]},{value:"Setting Up ICAP UI DNS",id:"setting-up-icap-ui-dns",children:[]},{value:"Optional step, only if the DNS wants to be updated for the Management UI",id:"optional-step-only-if-the-dns-wants-to-be-updated-for-the-management-ui",children:[]},{value:"Using ICAP UI",id:"using-icap-ui",children:[]}]},{value:"ICAP Health check service",id:"icap-health-check-service",children:[]},{value:"Logs of ICAP services",id:"logs-of-icap-services",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"docker-setup"},"Docker Setup"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure you have docker installed (on local or server, anywhere you would like to run and process the files), by running ",Object(i.b)("inlineCode",{parentName:"li"},"docker --version")),Object(i.b)("li",{parentName:"ul"},"In your working directory, create 2 folders: ",Object(i.b)("inlineCode",{parentName:"li"},"input")," & ",Object(i.b)("inlineCode",{parentName:"li"},"output"),", where ",Object(i.b)("inlineCode",{parentName:"li"},"input")," has your (rebuild supported) testing files"),Object(i.b)("li",{parentName:"ul"},"From your cmd run:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker run -v <localfolderinput>:/opt -v <localfolderoutput>:/home glasswallsolutions/c-icap-client:manual-v1 -s 'gw_rebuild' -i <icap-endpoint> -f '/opt/<filename>' -o /home/<outputfilename> -v\n")),Object(i.b)("p",null,"where:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<localfolderinput> : local path to the folder containing the file to send e.g. c:/input\n<localfolderoutput> : local path to the folder where the rebuilt file will be written e.g. c:/output\n<icap-endpoint> : DNS or IP of the ICAP endpoint e.g. icap.exampleurl.com\n<filename> : the name of the file to rebuild residing in the input folder e.g. test.pdf\n<outputfilename> : the name of the rebuilt file to be written to the output folder e.g. rebuilt.pdf\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker run -v $(pwd)/input:/opt -v $(pwd)/output:/home glasswallsolutions/c-icap-client:manual-v1 -s 'gw_rebuild' -i 91.109.25.80 -f '/opt/sample.pdf' -o /home/out.pdf -v\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Note"),": Output files should be always named differently."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Note"),": In case you get ",Object(i.b)("inlineCode",{parentName:"li"},"403 forbidden")," while running above command, please give the system few more minutes (so the pods can stabilized) and try again. ")),Object(i.b)("h2",{id:"icap-management-ui"},"ICAP management UI"),Object(i.b)("h3",{id:"demo"},"Demo"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ywXF1RPurao&feature=youtu.be"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/ywXF1RPurao/hqdefault.jpg",alt:"Installation Video (OVA)"}))),Object(i.b)("h3",{id:"setting-up-icap-ui-dns"},"Setting Up ICAP UI DNS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To access ICAP server management UI, a DNS entry needs to be added. Update your local hosts file "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Linux/MAC: ",Object(i.b)("inlineCode",{parentName:"li"},"sudo nano /etc/hosts")," and add your ICAP Server IP next to ",Object(i.b)("inlineCode",{parentName:"li"},"management-ui.glasswall-icap.com"),", which is the default DNS.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"Example:\n54.194.56.16 management-ui.glasswall-icap.com\n"))),Object(i.b)("li",{parentName:"ul"},"WIN: open hosts file in C:\\Windows\\System32\\drivers\\etc and add the line as per example above"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From your browser navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"https://management-ui.glasswall-icap.com")))),Object(i.b)("h3",{id:"optional-step-only-if-the-dns-wants-to-be-updated-for-the-management-ui"},"Optional step, only if the DNS wants to be updated for the Management UI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SSH into your ICAP Server and run the following command:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'kubectl -n management-ui patch ing management-ui --type=json -p=\'[{"op": "replace", "path": "/spec/rules/0/host", "value":"_newhost.com_"}]\'\n')),Object(i.b)("p",null,"After the DNS ",Object(i.b)("inlineCode",{parentName:"p"},'"value"')," has been updated, follow the first 2 steps in setting up ICAP UI DNS."),Object(i.b)("h3",{id:"using-icap-ui"},"Using ICAP UI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'All the requests sent to the ICAP server can be found in "REQUEST HISTORY"'),Object(i.b)("li",{parentName:"ul"},'Content management flags can be viewed and updated under "POLICY". These flags can be used to configure if a particular content needs to be sanitized or disallowed based on each file type.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"For more details on how to use the ICAP management UI, refer to document: ICAP User Guide"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/108355024-edc3f980-71f2-11eb-926e-b3865749a43c.png",alt:"ICAP UI"})),Object(i.b)("h2",{id:"icap-health-check-service"},"ICAP Health check service"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each ICAP server comes with inbuilt health service which will evaluate health status of server. Information of health status can be accessed at ",Object(i.b)("inlineCode",{parentName:"li"},"http://ICAP_Server_IP:7000/status"),". This endpoint can be used by services such as load balancers to monitor health status and route traffic accordingly. ")),Object(i.b)("p",null,"Sample Healthcheck response:\nHealthy Server:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'HTTP Status Code: 200\nResponse Body: {"message":"Status OK","instanceId":"i-00e661ddf9010ab9f","publicIp":"54.154.66.6"}\n')),Object(i.b)("p",null,"Unhealthy Server:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'HTTP Status Code: 503\nResponse Body: {"message":"status Fail"}\n\n')),Object(i.b)("h2",{id:"logs-of-icap-services"},"Logs of ICAP services"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To check the running pods, ssh to the instance/vm and run below commands:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"> kubectl -n icap-adaptation get pods\n  NAME                                                    READY   STATUS      RESTARTS   AGE\n  svclb-icap-svc-host-zjnqz                               0/2     Pending     0          59m\n  adaptation-icap-adaptation-event-api-6fc4845b9f-jm2mf   1/1     Running     1          59m\n  policy-update-service-cccfb4bdf-j2mn2                   1/1     Running     1          59m\n  svclb-frontend-icap-lb-lwv5b                            2/2     Running     2          59m\n  rabbitmq-controller-52bkm                               1/1     Running     1          59m\n  icap-service-877f948d-4hbr8                             2/2     Running     0          59m\n  adaptation-service-b8676f949-8lftm                      1/1     Running     7          59m\n  archive-adaptation-service-54b4d9d9d-zblp7              1/1     Running     7          59m\n  event-submission-service-cbc687dfb-t8ftl                1/1     Running     7          59m\n  pod-janitor-1611852840-kcxkm                            0/1     Completed   0          55s\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To check the logs of a pod, for example ",Object(i.b)("inlineCode",{parentName:"p"},"icap-service-877f948d-4hbr8"),", run below command:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"kubectl -n icap-adaptation logs -f icap-service-877f948d-4hbr8 icap-service\n")))))}u.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);