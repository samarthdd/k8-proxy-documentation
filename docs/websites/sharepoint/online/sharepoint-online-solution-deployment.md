---
title: Sharepoint Online Solution Deployment
sidebar_label: Sharepoint Online Solution Deployment
---

This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:

- **Glasswall - SharePoint Online - Solution**
- **Glasswall - SharePoint Server - Solution** - [link](./../server/sharepoint-server-solution-deployment.md)

## Glasswall - SharePoint Online - Solution Deployment

GW SPO solution consists of the following components:
- **GW SPO Extension**
- **GW FileHandler Web App**

Both components need to be deployed to your environments (M365 + Azure) as described below.

### GW SPO Extension Deployment 
Following are the steps to deploy GW SPO Extension:

#### Download Software
1. Go to **GW GitHub Releases** page: [https://github.com/k8-proxy/gp-sharepoint-plugins/releases](https://github.com/k8-proxy/gp-sharepoint-plugins/releases).
2. Download the latest release of **GW SPO Extension** - **GWO365FileHandlerExtension.zip**.
3. Unzip to a local folder. You will find a package "glasswall-hide-download-ext.sppkg" which needs to be deployed.

#### Create App Catalog Site
1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. **https://{tenant}-admin.sharepoint.com**.
2. In the left sidebar, select **More features**.
3. Locate the section **Apps** and select **Open**.
4. On the **Apps** page, select **App Catalog**.
5. Select **OK** to create a new app catalog site.
6. On the next page, enter the following details:
  1. **Title**: Enter **App Catalog**.
  2. **Web Site Address suffix**: Enter your preferred suffix for the app catalog; for example: **apps**.
  3. **Administrator**: Enter your **username**, and then select the **resolve button** to resolve the username.
  4. Select **OK** to create the app catalog site.
7. SharePoint creates the app catalog site, and you can see its progress in the SharePoint admin center.
8. Click [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant#create-app-catalog-site) for more info.

#### Deploy Package to App Catalog Site
1. Open your tenant's **app catalog site** (i.e. https://{tenant}.sharepoint.com/sites/apps).
2. Click on **Apps for SharePoint** on Left Navigation Menu.
3. Click on **Upload**. Browse and select **glasswall-hide-download-ext.sppkg** package downloaded at earlier step from your local drive.
4. Click on **Deploy** to deploy the solution tenant-wide.

#### Verify Solution
1. Navigate to SharePoint Online (O365) Site.
2. Open any Document Library.
3. Select any file (click on the checkbox) and then in the toolbar, you will not see the default 'Download' button anymore.

#### Repository
- GW SPO Extension: [https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext)  



### GW FileHandler Web App Deployment
Following are the steps to deploy GW FileHandler web app:

#### Download Software
1. Go to GW GitHub releases page: [https://github.com/k8-proxy/gp-sharepoint-plugins/releases](https://github.com/k8-proxy/gp-sharepoint-plugins/releases).
2. Download the latest release of GW FileHandler web app - GWO365FileHandlerWebApp.zip.
3. Unzip to a local folder. 

#### Create FileHandler Web App
1. Go to your Azure Portal.
2. Create a resource group. For r.g. rg-glasswallfilehandler-prod
3. Create a new web app with appropriate plan. Example name for web app can be: **app-glasswallfilehandler-prod**. Once the web app is created, make a note of the URI. For e.g. https://app-glasswallfilehandler-prod.azurewebsites.net

#### Register a new application

To register a new application with Azure Active Directory, log into your [**Azure Portal**](https://portal.azure.com).

After logging into the Azure Portal, the following steps will allow you to register your file handler application:

1. Navigate to the **Azure Active Directory** module.
2. Select **App registrations** and click **New application registration**.
   1. Type the name of your file handler application. For e.g. **GlasswallFileHandlerApp**
   2. Ensure **Application Type** is set to **Web app / API**
   3. Enter a sign-on URL for your application. This will be `https://app-glasswallfilehandler-prod.azurewebsites.net`.
   4. Click **Create** to create the app.
3. After the app has been created successfully, select the app from the list of applications. It should be at the bottom of the list.
4. Make a note of **Application ID** for the app you registered. 
5. Make a note of the **Object ID** for this application, since you will need this later to register the file handler manifest.
6. Configure the application settings for this sample:
   1. Select **Reply URLs** and ensure that `https://app-glasswallfilehandler-prod.azurewebsites.net/signin-oidc` is listed.
   2. Select **Required Permissions** and then **Add**.
   3. Select **Select an API** and then choose **Microsoft Graph** and click **Select**.
   4. Find the permission **Have full access to all files user can access** and check the box next to it, then click **Select**, and then **Done**.
   5. Select **Keys** and generate a new application key by entering a description for the key, selecting a duration, and then click **Save**. Make a note of the value displayed, since it will only be displayed once.

#### Register the file handler manifest

1. After registering your app with Azure Active Directory, you can upload the file handler manifest information into the application.

For detailed instructions on how to upload the file handler manifest, see [Registering file handlers](https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/register-manually).

The file handler manifest  is as below:
```
[
    {
        "id": "<Enter New GUID here>",
        "type": "FileHandler",
        "properties": [
            { "key": "version","value": "2"},
            { "key": "appIcon", "value": "{\"svg\":\"<Enter application icon here>\" }"},
            { "key": "actions", "value": "[{\"type\":\"custom\",\"url\":\"https://app-glasswallfilehandler-prod.azurewebsites.net/filehandler/download\",\"displayName\": \"Download (Glasswall)\",\"shortDisplayName\": \"Download (Glasswall)\", \"availableOn\":{\"file\":{\"extensions\":[\"*\"]}}}]"}
        ]
    }
]
```

#### Update FileHandler Application Settings
Following application settings of FileHandler web app configuration needs to be updated:
1. AzureAd:ClientId - Client Id of the App registered with Azure Active Directory 
2. AzureAd:ClientSecret - Client Secret created in App registered with Azure Active Directory 
3. AzureAd:Domain - Domain of your O365 subscription. For e.g. glasswall.onmicrosoft.com.
4. AzureAd:TenantId - Tenant id of your Azure Active Directory tenant.  
5. Glasswall:BaseUrl - Base url of your Glasswall rebuild api endpoint. For e.g. https://glasswall.execute-api.us-west-2.amazonaws.com/Prod/rebuild/api
6. Glasswall:ApiKey - Api Key to access the Glasswall rebuild api.

#### Deploy FileHandler Code
1. Navigate to local folder where FileHandler release was downloaded.
2. Deploy the code to your Azure Web App.

#### Verify Solution
1. Navigate to SharePoint Online (O365) Site.
2. Open any Document Library.
3. Select any file. 
4. Download the file.
5. The downloaded file will be rebuilt by Glasswall.


#### Supported Browsers
- Edge, Chrome, Firefox, Brave, Opera (Mac & Windows)
- Safari (Mac)

#### Repository
- File Handler : [https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5).