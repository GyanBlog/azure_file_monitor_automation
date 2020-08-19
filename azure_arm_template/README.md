# Azure ARM Template for Azure Monitor Function

For more details and help, please check
https://www.gyanblog.com/gyan/azure-arm-template-how-create-function-blob-trigger-sendgrid-deployment/


The objective of this template is to deploy resources for Azure file monitor. Its code is in `file_monitor` folder.
Its a json template for Azure. It will deploy required resources for an Azure function app. It deploys following:
- Server Farm
- Function App
- Function

## Expected Resources
There are some resources that are assumed to be existing.
- Storage Container
  For which monitoring is required.

## Parameters
There are few parameters and their default values are already defined in the `template.json` file.

### Function App Name
The default name in template is: `file-monitor-function-app`. If you want to override, the parameter name is: `sites_file_monitor_function_app_name`

### Storage Account Name
It is the name of storage container. Parameter name is: `storageAccountName`

### Storage Account Id
It is the resource id for storage account. The parameter name is: `storageAccountId`

## Credential
This function app require an API key for Sendgrid. Sendgrid is a 3rd party service that provides apis to send email.
Lookout for variable: `FILE_MONITOR_SENDGRID_APIKEY`, and put the required value.

## Final Things to be changed before deployment

- Replace `StorageContainerName` with the desired container name
- Replace `ResourceIdForStorageContainer` with desired resource id for container
- Replace `SENDGRID_API_KEY` with your Sendgrid api key

## Deployment
After changing the above mentioned parameters.
Run following command:

```
# First login to Azure via command line
az login

# Run deployment
az deployment group create --resource-group "<resource group name>" --template-file azure_arm_template/template.json
```

