# AWS demo

## Getting set up
1. Use `git clone` to bring this website code down from Github.
1. Use `npm i` to install all dependencies.
1. Use `brew install awsebcli` to install the AWS Elastic Beanstalk CLI toolkit.

## Init a new AWS EB application 
1. `eb init` 
1. choose the default region
1. (You'll get an error about access. Let's fix that.)
  1. Generate access keys: your name > 'My Security Credentials' > Access Keys > Create New Access Key
  1. paste the id and key into the wizard
1. Auto-detect Node.js
1. CodeCommit? yes


## Create a new AWS EB application
1. `eb create` (defaults at the prompts and wait a few minutes for the service to restart)

## Configure
1. `eb config`
    1. change the node version to 7.6.0

## Deploy
1. `eb deploy`
