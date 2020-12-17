(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(125)),l={title:"Sharepoint Cloud File Handler - .NET Framework",sidebar_label:"File Handler .NET Framework"},o={unversionedId:"websites/sharepoint/cloud/file-handler",id:"websites/sharepoint/cloud/file-handler",isDocsHomePage:!1,title:"Sharepoint Cloud File Handler - .NET Framework",description:"Introduction",source:"@site/docs/websites/sharepoint/cloud/file-handler.md",slug:"/websites/sharepoint/cloud/file-handler",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/cloud/file-handler",version:"current",sidebar_label:"File Handler .NET Framework",sidebar:"docs",previous:{title:"owasp Overview",permalink:"/k8-proxy-documentation/docs/websites/owasp/overview"},next:{title:"Export OVA from AWS",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/export-ova-aws"}},c=[{value:"Getting Started",id:"getting-started",children:[{value:"Register a new application",id:"register-a-new-application",children:[]},{value:"Register the file handler manifest",id:"register-the-file-handler-manifest",children:[]},{value:"Register an Azure Storage instance",id:"register-an-azure-storage-instance",children:[]},{value:"Glasswall Rebuild Api Key",id:"glasswall-rebuild-api-key",children:[]},{value:"Run the project and sign-in",id:"run-the-project-and-sign-in",children:[]},{value:"Navigate to OneDrive and use the Markdown file handler",id:"navigate-to-onedrive-and-use-the-markdown-file-handler",children:[]}]},{value:"Next Steps",id:"next-steps",children:[{value:"Download file with Glasswall Rebuild",id:"download-file-with-glasswall-rebuild",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Glasswall File Handler - .NET Framework Version"),Object(r.b)("p",null,"This project provides a sample implementation of a file handler 2.0 for Microsoft Office 365.\nThis sample illustrates a custom action, with the ",Object(r.b)("strong",{parentName:"p"},"Glasswall Download")," action added to all files. The file handler allows downloading a file by rebuilding the file using Glasswall Rebuild Api."),Object(r.b)("p",null,"[Repository]"," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/O365/DotNetFramework"}),"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/O365/DotNetFramework"),")"),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"To get started with the sample, you need to complete the following actions:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Register a new application with Azure Active Directory, generate an app password, and provide a redirect URI for the application."),Object(r.b)("li",{parentName:"ol"},"Register the file handler extensions as an add-in for your application in Azure Active Directory."),Object(r.b)("li",{parentName:"ol"},"Run the sample project and sign-in with your Office 365 account and accept the consent prompt so the file handler is registered for your account."),Object(r.b)("li",{parentName:"ol"},"Navigate to OneDrive for Business or a SharePoint document library and allow file handlers to load."),Object(r.b)("li",{parentName:"ol"},"Select any file. Then Click on the custom action button to download the selected file by rebuilding it using Glasswall rebuild api.")),Object(r.b)("h3",{id:"register-a-new-application"},"Register a new application"),Object(r.b)("p",null,"To register a new application with Azure Active Directory, log into the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://portal.azure.com"}),"Azure Portal"),"."),Object(r.b)("p",null,"After logging into the Azure Portal, the following steps will allow you to register your file handler application:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Azure Active Directory")," module."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"App registrations")," and click ",Object(r.b)("strong",{parentName:"li"},"New application registration"),".",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Type the name of your file handler application."),Object(r.b)("li",{parentName:"ol"},"Ensure ",Object(r.b)("strong",{parentName:"li"},"Application Type")," is set to ",Object(r.b)("strong",{parentName:"li"},"Web app / API")),Object(r.b)("li",{parentName:"ol"},"Enter a sign-on URL for your application, for this sample use ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:44362"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create")," to create the app."))),Object(r.b)("li",{parentName:"ol"},"After the app has been created successfully, select the app from the list of applications. It should be at the bottom of the list."),Object(r.b)("li",{parentName:"ol"},"Copy the ",Object(r.b)("strong",{parentName:"li"},"Application ID")," for the app you registered and paste it into the Web.config file on the line: ",Object(r.b)("inlineCode",{parentName:"li"},'<add key="ida:ClientId" value="application id here" />')),Object(r.b)("li",{parentName:"ol"},"Make a note of the ",Object(r.b)("strong",{parentName:"li"},"Object ID")," for this application, since you will need this later to register the file handler manifest."),Object(r.b)("li",{parentName:"ol"},"Configure the application settings for this sample:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Reply URLs")," and ensure that ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:44362")," is listed."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Required Permissions")," and then ",Object(r.b)("strong",{parentName:"li"},"Add"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Select an API")," and then choose ",Object(r.b)("strong",{parentName:"li"},"Microsoft Graph")," and click ",Object(r.b)("strong",{parentName:"li"},"Select"),"."),Object(r.b)("li",{parentName:"ol"},"Find the permission ",Object(r.b)("strong",{parentName:"li"},"Have full access to all files user can access")," and check the box next to it, then click ",Object(r.b)("strong",{parentName:"li"},"Select"),", and then ",Object(r.b)("strong",{parentName:"li"},"Done"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Keys")," and generate a new application key by entering a description for the key, selecting a duration, and then click ",Object(r.b)("strong",{parentName:"li"},"Save"),". Copy the value of the displayed key since it will only be displayed once.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Paste the value of the key you generated into the Web.config file in this project, inside the value for the line: ",Object(r.b)("inlineCode",{parentName:"li"},'<add key="ida:ClientSecret" value="put application key here" />'))))))),Object(r.b)("h3",{id:"register-the-file-handler-manifest"},"Register the file handler manifest"),Object(r.b)("p",null,"After registering your app with Azure Active Directory, you can upload the file handler manifest information into the application."),Object(r.b)("p",null,"For detailed instructions on how to upload the file handler manifest, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/register-manually"}),"Registering file handlers"),"."),Object(r.b)("p",null,"The file handler manifest for this sample  is available in the ",Object(r.b)("inlineCode",{parentName:"p"},"addin-schema.json")," file in this project."),Object(r.b)("h3",{id:"register-an-azure-storage-instance"},"Register an Azure Storage instance"),Object(r.b)("p",null,"The sample uses an Azure Storage table to cache user and token information.\nTo successfully run the sample, you must provide an Azure Storage connection string in Web.config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<add key="StorageConnectionString" value="[AzureStorageConnectionString]" />\n')),Object(r.b)("p",null,"To create a new storage instance and copy the connection string:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://portal.azure.com"}),"Azure Portal")," in your browser. You must have an Azure Subscription or trial subscription."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Storage Accounts")," and then click ",Object(r.b)("strong",{parentName:"li"},"Add"),"."),Object(r.b)("li",{parentName:"ol"},"Name the storage account, leaving the defaults as they are. You will also need to create a new resource group and provide a name."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create")," to provision the storage account."),Object(r.b)("li",{parentName:"ol"},"After the storage account has finished provisioning, select it from the list of storage accounts. Click on the ",Object(r.b)("strong",{parentName:"li"},"Access Keys")," tab, and copy the connection string for ",Object(r.b)("strong",{parentName:"li"},"key1"),"."),Object(r.b)("li",{parentName:"ol"},"Paste this connection string where ",Object(r.b)("inlineCode",{parentName:"li"},"[AzureStorageConnectionString]")," appears in Web.config.")),Object(r.b)("h3",{id:"glasswall-rebuild-api-key"},"Glasswall Rebuild Api Key"),Object(r.b)("p",null,"This sample connects to one of the Glasswall Rebuild Api. You will need an Api Key to rebuild the files. Reach out to Glasswall Engineering to know how to get the Api Key. To successfully run the sample, you must provide an Api Key in Web.config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<add key="GwRebuildApiKey" value="[ApiKey]"/>\n')),Object(r.b)("h3",{id:"run-the-project-and-sign-in"},"Run the project and sign-in"),Object(r.b)("p",null,"Once your project is registered and configured, you're ready to run it. Press F5 to launch the project in the debugger.\nThe file handler project will load in your default browser and be ready for you to sign in.\nSign in to the file handler project, and authorize the application to have access to the data in your OneDrive."),Object(r.b)("h3",{id:"navigate-to-onedrive-and-use-the-markdown-file-handler"},"Navigate to OneDrive and use the Markdown file handler"),Object(r.b)("p",null,'Once you have authorized the file handler to have access, the file handler will be available in OneDrive and SharePoint.\nAfter signing in to the app, click the "Try it in OneDrive" button to launch your OneDrive.\nDue to service caches, it may take a few minutes before your file handler shows up in OneDrive.\nYou may need to close your browser and open it again before the file handler will be activated.'),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("h3",{id:"download-file-with-glasswall-rebuild"},"Download file with Glasswall Rebuild"),Object(r.b)("p",null,"To use the custom action provided by the file handler, perform the following actions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to OneDrive/Sharepoint online."),Object(r.b)("li",{parentName:"ul"},"Select a file (click the check) and then in the toolbar, click ",Object(r.b)("inlineCode",{parentName:"li"},"...")," and then ",Object(r.b)("strong",{parentName:"li"},"Glasswall Download"),"."),Object(r.b)("li",{parentName:"ul"},"This will launch the file handler's custom action handler"),Object(r.b)("li",{parentName:"ul"},"The file handler code will:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Read the selected file's content from OneDrive/Sharepoint"),Object(r.b)("li",{parentName:"ul"},"Rebuild it with Glasswall Rebuild Api "),Object(r.b)("li",{parentName:"ul"},"Download the file onto your machine.")))))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(l,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);