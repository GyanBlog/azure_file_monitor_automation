# Azure Monitor on Azure Functions

For more details and help, please check
https://www.gyanblog.com/gyan/azure-arm-template-how-create-function-blob-trigger-sendgrid-deployment/

Its a file monitor where we want to monitor a storage container, and would want to get an alert for any file change event.

## Components
The project is having two components:

- Azure Template
  Placed in `azure_arm_template`. 

- Function Code
  Its node.js project which needs to be deployed to Azure.

Read README.md file for above mentioned two folders for instructions.
