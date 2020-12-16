(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(124)),i={title:"gwfiledrop Overview",sidebar_label:"Overview"},c={unversionedId:"websites/gwfiledrop/overview",id:"websites/gwfiledrop/overview",isDocsHomePage:!1,title:"gwfiledrop Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/websites/gwfiledrop/overview.md",slug:"/websites/gwfiledrop/overview",permalink:"/k8-proxy-documentation/docs/websites/gwfiledrop/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Website Implementation and documentation checklist",permalink:"/k8-proxy-documentation/docs/kb/website-checklist"},next:{title:"adarma Overview",permalink:"/k8-proxy-documentation/docs/websites/adarma/overview"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"Install kubernetes",id:"install-kubernetes",children:[{value:"Rancher",id:"rancher",children:[]}]},{value:"Apps deployment",id:"apps-deployment",children:[{value:"Clone the https://github.com/k8-proxy/k8-reverse-proxy repository and checkout <code>develop</code> branch",id:"clone-the-httpsgithubcomk8-proxyk8-reverse-proxy-repository-and-checkout-develop-branch",children:[]},{value:"Build and push docker images for ngnix and squid service",id:"build-and-push-docker-images-for-ngnix-and-squid-service",children:[]},{value:"Deploy to Kubernetes",id:"deploy-to-kubernetes",children:[]},{value:"Verification",id:"verification",children:[]},{value:"DNS Changes",id:"dns-changes",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/k8-proxy-documentation/docs/dashboards/websites/development"}),"Development Websites Dashboard for details")),Object(a.b)("h1",{id:"reverse-proxy-for-filedrop-website"},"Reverse proxy for filedrop website"),Object(a.b)("p",null,"File-drop website Proxy Setup on Kubernetes (k8-v01)"),Object(a.b)("h2",{id:"how-it-works"},"How it works"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20454870/98290700-b10d2300-1fb2-11eb-91d4-8fab6e5570d9.png",alt:"Architecture diagram"}))),Object(a.b)("h2",{id:"install-kubernetes"},"Install kubernetes"),Object(a.b)("h3",{id:"rancher"},"Rancher"),Object(a.b)("p",null,"Create terraform script to bootstrap Kubernetes Rancher cluster."),Object(a.b)("p",null,"or else, Follow the steps given in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/k8-proxy/s-k8-proxy-rebuild/tree/master/stable-src#install-kubernetes"}),"https://github.com/k8-proxy/s-k8-proxy-rebuild/tree/master/stable-src#install-kubernetes")," to install Rancher and a kubernetes cluster. At the end of this step, you will be successfully able to connect to a kubernetes cluster."),Object(a.b)("h2",{id:"apps-deployment"},"Apps deployment"),Object(a.b)("h3",{id:"clone-the-httpsgithubcomk8-proxyk8-reverse-proxy-repository-and-checkout-develop-branch"},"Clone the ",Object(a.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/k8-proxy/k8-reverse-proxy"}),"https://github.com/k8-proxy/k8-reverse-proxy")," repository and checkout ",Object(a.b)("inlineCode",{parentName:"h3"},"develop")," branch"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/k8-proxy/k8-reverse-proxy.git --recursive\ncd stable-src\n")),Object(a.b)("h3",{id:"build-and-push-docker-images-for-ngnix-and-squid-service"},"Build and push docker images for ngnix and squid service"),Object(a.b)("p",null,"Below is example command to login to a docker registry(dockerhub)"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker login -u <username> -p <password>")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1\ndocker push <docker registry>/reverse-proxy-nginx:0.0.1\n\ndocker build squid -t <docker registry>/reverse-proxy-squid:0.0.1\ndocker push <docker registry>/reverse-proxy-squid:0.0.1\n\nwget -O c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so https://github.com/filetrust/Glasswall-Rebuild-SDK-Evaluation/releases/download/1.117/libglasswall.classic.so # Get latest evaluation build of GW Rebuild engine\ndocker build c-icap -t <docker registry>/reverse-proxy-c-icap:0.0.1\ndocker push <docker registry>/reverse-proxy-c-icap:0.0.1\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Install Kubectl")),Object(a.b)("p",null,"Ref: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"https://kubernetes.io/docs/tasks/tools/install-kubectl/")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Download kubectl version 1.19 (You can download latest also)\n",Object(a.b)("em",{parentName:"p"},"curl -LO ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://storage.googleapis.com/kubernetes-"}),"https://storage.googleapis.com/kubernetes-")," release/release/v1.19.0/bin/linux/amd64/kubectl"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Make the kubectl binary executable. ",Object(a.b)("inlineCode",{parentName:"p"},"chmod +x ./kubectl_"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Move binay to your PATH ",Object(a.b)("em",{parentName:"p"},"`sudo mv ./kubectl /usr/local/bin/kubectl"),"`")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Test kubectl ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl version \u2013client")))),Object(a.b)("h3",{id:"deploy-to-kubernetes"},"Deploy to Kubernetes"),Object(a.b)("p",null,"Update the below command with the image name and image tag used in above step."),Object(a.b)("p",null,'Image tag "0.0.1" in below command is just used as an example. Update below command with the same image tag used in above step(Build and push).'),Object(a.b)("p",null,"From ",Object(a.b)("inlineCode",{parentName:"p"},"stable-src")," directory of ",Object(a.b)("inlineCode",{parentName:"p"},"s-k8-proxy-rebuild")," repository run below commands to deploy the helm chart."),Object(a.b)("p",null,"Make sure the variable ",Object(a.b)("inlineCode",{parentName:"p"},"KUBECONFIG")," is pointing to the path of ",Object(a.b)("inlineCode",{parentName:"p"},"kubeconfig")," file from the current terminal."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"helm upgrade --install \\\n--set image.nginx.repository=<docker registry>/reverse-proxy-nginx \\\n--set image.nginx.tag=0.0.1 \\\n--set image.squid.repository=<docker registry>/reverse-proxy-squid \\\n--set image.squid.tag=0.0.1 \\\n--set image.icap.repository=<docker registry>/reverse-proxy-c-icap \\\n--set image.icap.tag=0.0.1 \\\nreverse-proxy chart/\n")),Object(a.b)("p",null,"Verify that all pods(nginx, squid, icap) are running by executing below command"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(a.b)("p",null,"Once all the pods are running, there are 2 options to connect to the proxied website."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Forward the traffic from local machine to nginx service.")),Object(a.b)("p",null,"If the below command gives permission error to bind the port 443, please run the command with ",Object(a.b)("inlineCode",{parentName:"p"},"root")," user."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl port-forward svc/reverse-proxy-reverse-proxy-nginx 443:443\n")),Object(a.b)("p",null,"You have to assign all proxied domains to the localhost address by adding them to hosts file ( ",Object(a.b)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\drivers\\etc\\hosts")," on Windows , ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/hosts")," on Linux )\nfor example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"127.0.0.1 glasswall-file-drop.com.glasswall-icap.com file-drop.co.uk.glasswall-icap.com\n")),Object(a.b)("h3",{id:"verification"},"Verification"),Object(a.b)("p",null,"Connect using nginx ingress.\nYou have to assign all proxied domains to the IP address of the machine where helm chart is deployed by adding them to hosts file ( ",Object(a.b)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\drivers\\etc\\hosts")," on Windows , ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/hosts")," on Linux )"),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"54.78.209.23 glasswall-file-drop.com.glasswall-icap.com\n")),Object(a.b)("p",null,"You can test the stack functionality by uploading and downloading ","[a rich PDF file]"),Object(a.b)("p",null,"You can also visit ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gov.uk.glasswall-icap.com/"}),"the proxied main page")," and make sure that the page loads correctly and no requests/links is pointing to the original ",Object(a.b)("inlineCode",{parentName:"p"},"*.gov.uk")," or other malformed domains."),Object(a.b)("h3",{id:"dns-changes"},"DNS Changes"),Object(a.b)("p",null,"Once local testing is successful then ask for DNS changes to be accessed by all.\nglasswall-file-drop.com.glasswall-icap.com ==> 3.133.161.191"))}b.isMDXComponent=!0}}]);