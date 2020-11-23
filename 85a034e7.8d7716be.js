(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{112:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return o}));var n=a(0),b=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var j=b.a.createContext({}),i=function(t){var e=b.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=i(t.components);return b.a.createElement(j.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},g=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=i(a),g=n,o=p["".concat(r,".").concat(g)]||p[g]||m[g]||l;return a?b.a.createElement(o,c(c({ref:e},j),{},{components:a})):b.a.createElement(o,c({ref:e},j))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=g;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var j=2;j<l;j++)r[j]=a[j];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},89:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return i}));var n=a(2),b=a(6),l=(a(0),a(112)),r={title:"Production Websites",sidebar_label:"Production"},c={unversionedId:"dashboards/websites/production",id:"dashboards/websites/production",isDocsHomePage:!1,title:"Production Websites",description:"| Website  | Outcome URL | IP | Flavor | Ports opened | Status | Repo | OS | Infrastructure | Provisioning | Container engine | Doc | Team |",source:"@site/docs/dashboards/websites/production.md",slug:"/dashboards/websites/production",permalink:"/k8-proxy-documentation/docs/dashboards/websites/production",version:"current",sidebar_label:"Production",sidebar:"someSidebar",next:{title:"Development Websites",permalink:"/k8-proxy-documentation/docs/dashboards/websites/development"}},O=[{value:"Live websites with local DNS changes",id:"live-websites-with-local-dns-changes",children:[]},{value:"SOW based ICAP servers:",id:"sow-based-icap-servers",children:[]},{value:"DNS mappings:",id:"dns-mappings",children:[]},{value:"Other notes:",id:"other-notes",children:[]}],j={rightToc:O};function i(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Website"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Outcome URL"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"IP"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flavor"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ports opened"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Repo"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Infrastructure"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Provisioning"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Container engine"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Doc"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Team"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GW Engineering"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://engineering.glasswallsolutions.com.glasswall-icap.com"}),"https://engineering.glasswallsolutions.com.glasswall-icap.com")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"54.170.84.172"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B: Docker v0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"443"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-engineering-website"}),"GW engineering")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GW Website"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://glasswallsolutions.com.glasswall-icap.com"}),"https://glasswallsolutions.com.glasswall-icap.com")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"54.78.209.23"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A: K8s v0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"443"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-glasswallsolutions-website"}),"Glasswall Solutions")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataport.emma.msrb.org"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://dataport.emma.msrb.org.glasswall-icap.com/Home/Index"}),"https://dataport.emma.msrb.org.glasswall-icap.com/Home/Index")," and ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://emma.msrb.org.glasswall-icap.com/"}),"https://emma.msrb.org.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.120.30.57"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E: SOW v0.2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"443"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-emma-dataport-website"}),"Emma port")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UK Zones"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://uk.zones.com.glasswall-icap.com"}),"https://uk.zones.com.glasswall-icap.com")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"54.78.104.24"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B: Docker v0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"443"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-uk-zones-com"}),"UK zones")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"owasp.org"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://owasp.org.glasswall-icap.com/"}),"https://owasp.org.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"34.247.160.95"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SOW v0.2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"443"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-owasp-website"}),"OWASP")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sharepoint server 2019"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.nekoffice.com.glasswall-icap.com/sites/gwtest/SitePages/Home.aspx"}),"https://www.nekoffice.com.glasswall-icap.com/sites/gwtest/SitePages/Home.aspx"),"\xa0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"54.169.155.88"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A: K8s v0.1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-sharepoint/issues"}),"Xamarines sharepoint")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fortinet.com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.fortinet.com.glasswall-icap.com/"}),"https://www.fortinet.com.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18.156.64.216"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-fortinet-website"}),"Fortinet")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"miniIO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://min.io.glasswall-icap.com/"}),"https://min.io.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"52.56.78.112"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-v02-miniio"}),"MiniIO")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Atlasian"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://os-summit.atlassian.net.glasswall-icap.com/browse/TASK-145"}),"https://os-summit.atlassian.net.glasswall-icap.com/browse/TASK-145")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.139.5.226"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-jira-website"}),"JIRA")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bsigroup.com/en-GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.bsigroup.com.glasswall-icap.com/"}),"https://www.bsigroup.com.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"34.222.23.193"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-bsigroup-website"}),"bsigroup")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mastercard"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.mastercard.co.uk.glasswall-icap.com/en-gb.html"}),"https://www.mastercard.co.uk.glasswall-icap.com/en-gb.html")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18.216.36.55"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-mastercard-website"}),"mastercard")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adarma"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.adarma.com.glasswall-icap.com/"}),"http://www.adarma.com.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"54.244.172.39"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-adarma-website"}),"adarma")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"microsoft.com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.microsoft.com.glasswall-icap.com/"}),"https://www.microsoft.com.glasswall-icap.com/")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18.157.111.73"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ICAP deployed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-microsoft-website"}),"Microsoft")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h3",{id:"live-websites-with-local-dns-changes"},"Live websites with local DNS changes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Website"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Outcome URL"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"IP"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flavor"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Ports opened"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Repo"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Infrastructure"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Provisioning"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Container engine"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Doc"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Team"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Internal sharepoint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"saaspoc1.sharepoint.com"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3.249.61.168"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"gp-b-docker-v01-sharepoint"}),"Internal sharepoint")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Atlasian"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"os-summit.atlassian.net"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.56.152.40"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-jira-website"}),"JIRA")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Atlasian"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"glasswall.atlassian.net"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.56.152.40"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-jira-website"}),"JIRA")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Atlasian"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"api.media.atlassian.net"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.56.152.40"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Live in testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/k8-proxy/gp-jira-website"}),"JIRA")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h3",{id:"sow-based-icap-servers"},"SOW based ICAP servers:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"icap-client.northeurope.cloudapp.azure.com (its running in AKS on large nodes)"),Object(l.b)("li",{parentName:"ul"},"icap01.glasswall-icap.com\t54.155.107.189"),Object(l.b)("li",{parentName:"ul"},"icap02.glasswall-icap.com\t34.240.204.39"),Object(l.b)("li",{parentName:"ul"},"3.129.78.231"),Object(l.b)("li",{parentName:"ul"},"3.139.106.69"),Object(l.b)("li",{parentName:"ul"},"Load balancer icap.glasswall-icap.com - 54.77.168.168"),Object(l.b)("li",{parentName:"ul"},"Load balancer 3.139.22.215"),Object(l.b)("li",{parentName:"ul"},"Both running on port 1344")),Object(l.b)("h3",{id:"dns-mappings"},"DNS mappings:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com.glasswall-icap.com : 54.170.84.172"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.glasswallsolutions.com.glasswall-icap.com"}),"www.glasswallsolutions.com.glasswall-icap.com")," : 54.78.209.23"),Object(l.b)("li",{parentName:"ul"},"*.gov.uk.glasswall-icap.com , assets.publishing.service.gov.uk.glasswall-icap.com , ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.gov.uk.glasswall-icap.com"}),"www.gov.uk.glasswall-icap.com")," : 51.11.8.179"),Object(l.b)("li",{parentName:"ul"},"For owasp: cse.google.com.glasswall-icap.com - 34.247.160.95 and google.com.glasswall-icap.com - 34.247.160.95")),Object(l.b)("h3",{id:"other-notes"},"Other notes:"),Object(l.b)("p",null,"*Flavour A for Proxy & ICAP from Flavour E SOW v0.3 (October 28th)"))}i.isMDXComponent=!0}}]);