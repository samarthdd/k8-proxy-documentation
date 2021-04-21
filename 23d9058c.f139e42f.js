(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(95)),i={title:"FileDrop with Glasswall Cloud SDK",sidebar_label:"FileDrop with Glasswall Cloud SDK"},l={unversionedId:"products/gw cloud sdk/c-fd-integration",id:"products/gw cloud sdk/c-fd-integration",isDocsHomePage:!1,title:"FileDrop with Glasswall Cloud SDK",description:"image",source:"@site/docs/products/gw cloud sdk/c-fd-integration.md",slug:"/products/gw cloud sdk/c-fd-integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/c-fd-integration",version:"current",sidebar_label:"FileDrop with Glasswall Cloud SDK",sidebar:"docs",previous:{title:"GW Cloud SDK Endpoints",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/b-endpoints"},next:{title:"GW Desktop Integration",permalink:"/k8-proxy-documentation/docs/products/gw cloud sdk/d-desktp-integration"}},p=[{value:"Integration of Glasswall Cloud SDK with FileDrop",id:"integration-of-glasswall-cloud-sdk-with-filedrop",children:[]}],c={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115526387-4154d100-a290-11eb-8876-357a22900a0d.png",alt:"image"})),Object(a.b)("h2",{id:"integration-of-glasswall-cloud-sdk-with-filedrop"},"Integration of Glasswall Cloud SDK with FileDrop"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Clone Repo"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"git clone https://github.com/k8-proxy/k8-rebuild-file-drop\ncd k8-rebuild-file-drop/app\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Edit Dockerfile "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"vim Dockerfile\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Update endpoints with c# api endpoints in below three lines"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"ARG REACT_APP_ANALYSE_API_ENDPOINT='http://<ip>:<port>'\nARG REACT_APP_FILETYPEDETECTION_API_ENDPOINT='http://<ip>:<port>'\nARG REACT_APP_REBUILD_API_ENDPOINT='http://<ip>:<port>'\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run : ",Object(a.b)("inlineCode",{parentName:"p"},"docker build -t k8-rebuild-file-drop ."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run: ",Object(a.b)("inlineCode",{parentName:"p"},"docker run -it --rm -p 80:80 k8-rebuild-file-drop"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open the ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost")," in your Browser")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You will be able to see File Drop, React App web interface"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/60857664/115526603-7f51f500-a290-11eb-8ff7-6d9d7cc8c3e7.png",alt:"image"})))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to use file-drop ",Object(a.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/glasswall-servers-eval/wiki/How-to-use-File-Drop"}," Link "))),Object(a.b)("p",null,"Note : To Deploy in AWS, an AMI needs to be created with above setup."))}u.isMDXComponent=!0},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);