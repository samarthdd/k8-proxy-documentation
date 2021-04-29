(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{174:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sharepoint-online-admin-1-75a8d368d2bd6210a128f4643795cc95.png"},175:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sharepoint-online-admin-2-dbbe4b15bf2c92215cd34093ddf38417.png"},176:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sharepoint-online-admin-3-c2d4bdde91f7cbc5b6855df202c69abc.png"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sharepoint-online-admin-4-fd768923212aefc330f276edb64aeb8e.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(2),o=n(6),a=(n(0),n(99)),r={title:"Sharepoint Online Solution Administration",sidebar_label:"Sharepoint Online Solution Administration"},l={unversionedId:"products/sharepoint plugin/online/sharepoint-online-solution-administration",id:"products/sharepoint plugin/online/sharepoint-online-solution-administration",isDocsHomePage:!1,title:"Sharepoint Online Solution Administration",description:"GW SPO Extension Administration",source:"@site/docs/products/sharepoint plugin/online/sharepoint-online-solution-administration.md",slug:"/products/sharepoint plugin/online/sharepoint-online-solution-administration",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/online/sharepoint-online-solution-administration",version:"current",sidebar_label:"Sharepoint Online Solution Administration",sidebar:"docs",previous:{title:"Management UI user guide",permalink:"/k8-proxy-documentation/docs/products/icap server/icap-ui"},next:{title:"Sharepoint Online Solution Deployment",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/online/sharepoint-online-solution-deployment"}},s=[{value:"GW SPO Extension Administration",id:"gw-spo-extension-administration",children:[{value:"Configure Hide Download Extension Solution",id:"configure-hide-download-extension-solution",children:[]},{value:"Steps to update Hide Download Extension Properties",id:"steps-to-update-hide-download-extension-properties",children:[]}]},{value:"FileHandler Administration",id:"filehandler-administration",children:[]},{value:"Resources",id:"resources",children:[]}],p={rightToc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"gw-spo-extension-administration"},"GW SPO Extension Administration"),Object(a.b)("h3",{id:"configure-hide-download-extension-solution"},"Configure Hide Download Extension Solution"),Object(a.b)("p",null,'SharePoint Online keeps tenant-wide extension details in a List called, "Tenant Wide Extensions" on App Catalog Site.\nFor Hide-Download-Extension, we keep following two properties which can be configured:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"1. CommandName: This is the comma separated values of all the possible values of attribute 'data-automationid' of HTML controls. We use it to track the download button on the page.\n2. ExecuteFrequency: The is numeric value which defines the frequency interval at which the extension checks for download buttons on page and hides it.\n")),Object(a.b)("h3",{id:"steps-to-update-hide-download-extension-properties"},"Steps to update Hide Download Extension Properties"),Object(a.b)("p",null,"The default values are already configured however if we would like to customize, we can update them as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Navigate to App Catalog Site on your tenant (i.e. https://{tenant}.sharepoint.com/sites/apps).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click on 'Site contents' in the Left Navigation.\n",Object(a.b)("img",{src:n(174).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click on 'Tenant Wide Extensions' List.\n",Object(a.b)("img",{src:n(175).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Edit the item with title, 'Hide Default Download'.\n",Object(a.b)("img",{src:n(176).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'You can make changes in the field called "Component Properties" to update extension properties.\n',Object(a.b)("img",{src:n(177).default}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Make sure you ONLY update highlighted values as follows and keep the JSON format as it is:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'{"commandName":"',Object(a.b)("b",null,Object(a.b)("i",null,"download,downloadCommand")),'","executeFrequency":',Object(a.b)("b",null,Object(a.b)("i",null,"300")),"}"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Please note that the changes to the list will be applied to the extension on your tenant in 2 to 24 hours."))),Object(a.b)("h2",{id:"filehandler-administration"},"FileHandler Administration"),Object(a.b)("p",null,"In order to update settings below:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"AzureAd:ClientId - Client Id of the App registered with Azure Active Directory "),Object(a.b)("li",{parentName:"ol"},"AzureAd:ClientSecret - Client Secret created in App registered with Azure Active Directory "),Object(a.b)("li",{parentName:"ol"},"AzureAd:Domain - Domain of your O365 subscription. For e.g. glasswall.onmicrosoft.com."),Object(a.b)("li",{parentName:"ol"},"AzureAd:TenantId - Tenant id of your Azure Active Directory tenant.  "),Object(a.b)("li",{parentName:"ol"},"Glasswall:BaseUrl - Base url of your Glasswall GW Cloud SDK endpoint. For e.g. ",Object(a.b)("a",{parentName:"li",href:"https://glasswall.execute-api.us-west-2.amazonaws.com/Prod/rebuild/api"},"https://glasswall.execute-api.us-west-2.amazonaws.com/Prod/rebuild/api")),Object(a.b)("li",{parentName:"ol"},"Glasswall:ApiKey - Api Key to access the Glasswall GW Cloud SDK.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Option 1: Edit the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/blob/main/Online/glasswall.o365.filehandler/Net5/src/FileHandler/src/Glasswall.O365.FileHandler.App/appsettings.json"},"appsettings.json file")," on your web app source code and redeply the app.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Option 2: Manually edit the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/blob/main/Online/glasswall.o365.filehandler/Net5/src/FileHandler/src/Glasswall.O365.FileHandler.App/appsettings.json"},"appsettings.json file")," on your deployed web app."),Object(a.b)("li",{parentName:"ul"},"Option 3: Use your cloud service configuration editor UI to update the relevant properties "),Object(a.b)("li",{parentName:"ul"},"Doc for ",Object(a.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/app-service/configure-common"},"azure"))),Object(a.b)("h2",{id:"resources"},"Resources"))}c.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);