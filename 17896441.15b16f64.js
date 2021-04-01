(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{94:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(104),i=a(97),c=a(102),m=a(100);var o=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=a(101),d=a(106);var u=function(){var e=Object(i.a)().siteConfig.title,t=Object(s.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.a)(t).savePreferredVersionName,n=Object(s.useActiveVersion)(t),r=Object(s.useDocVersionSuggestions)(t),c=r.latestDocSuggestion,o=r.latestVersionSuggestion;if(!o)return l.a.createElement(l.a.Fragment,null);var u,g=null!=c?c:(u=o).docs.find((function(e){return e.id===u.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:g.path,onClick:function(){return a(o.name)}},"latest version"))," ","(",o.label,")."))};var g=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,m=document.getElementsByClassName(e);l<m.length&&!c;){var o=m[l],s=o.href,d=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),o.classList.add(t),i(o),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},v=a(59),E=a.n(v),p="table-of-contents__link";function f(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:p,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children}))}))):null}var b=function(e){var t=e.headings;return g(p,"table-of-contents__link--active",100),l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(f,{headings:t}))},h=a(98),N=a(60),_=a.n(N);t.default=function(e){var t,a=Object(i.a)().siteConfig,n=a.url,m=a.title,d=a.titleDelimiter,g=e.content,v=g.metadata,E=v.description,p=v.title,f=v.permalink,N=v.editUrl,w=v.lastUpdatedAt,O=v.lastUpdatedBy,y=g.frontMatter,k=y.image,j=y.keywords,C=y.hide_title,x=y.hide_table_of_contents,I=Object(s.useActivePlugin)({failfast:!0}).pluginId,L=Object(s.useVersions)(I),A=Object(s.useActiveVersion)(I),S=L.length>1,B=p?p+" "+d+" "+m:m,D=Object(c.a)(k,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,B),l.a.createElement("meta",{property:"og:title",content:B}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),j&&j.length&&l.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:D}),k&&l.a.createElement("meta",{property:"twitter:image",content:D}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),f&&l.a.createElement("meta",{property:"og:url",content:n+f}),f&&l.a.createElement("link",{rel:"canonical",href:n+f})),l.a.createElement("div",{className:Object(h.a)("container padding-vert--lg",_.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(h.a)("col",(t={},t[_.a.docItemCol]=!x,t))},l.a.createElement(u,null),l.a.createElement("div",{className:_.a.docItemContainer},l.a.createElement("article",null,S&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!C&&l.a.createElement("header",null,l.a.createElement("h1",{className:_.a.docTitle},p)),l.a.createElement("div",{className:"markdown"},l.a.createElement(g,null))),(N||w||O)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},N&&l.a.createElement("a",{href:N,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(w||O)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",w&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*w).toISOString(),className:_.a.docLastUpdatedAt},new Date(1e3*w).toLocaleDateString()),O&&" "),O&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,O)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:v})))),!x&&g.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(b,{headings:g.rightToc})))))}}}]);