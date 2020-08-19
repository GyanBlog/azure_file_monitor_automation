# File Monitor
For more details and help, please check
https://www.gyanblog.com/gyan/azure-arm-template-how-create-function-blob-trigger-sendgrid-deployment/


This repository has the code for Azure function which performs two things:

1. Setup a trigger on the desired storage container
   It acts as a trigger point of our function execution
2. Send Email
   On each such file change event, we send an email via Sendgrid

## Pre-requisite
It requires a Sendgrid api key. We need to register on Sendgrid website and gets a free account. We will get an api key.
Free account gives 100 emails per day.

## Code
Its a node.js project.
There are major two files here:

1. index.js
   It has the main code which receives the event and just sends an email.
   Need to change `SenderEmail` and `DestinationEmail`

2. function.js
This has the two bindings. One for storage container trigger, and other for Sendgrid.
Change `StorageContainerName` inside this code.

## Final Things to be changed before deployment

- index.js
  Replace `DestinationEmail`, and `SenderEmail`
- function.js
  Replace `StorageContainerName` with desired container name.

## Deployment
1. First we have to create a zip of this folder. 

```
cd file_monitor
zip -r monitor.zip *
```

Note: The zip file should be made of files inside folder: `file_monitor`.

2. Deployment on Azure

```
az functionapp deployment source config-zip -g "<resource group name>" -n "Function App Name" --src monitor.zip
```

