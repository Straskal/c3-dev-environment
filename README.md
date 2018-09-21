# c3-dev-environment
A development environment for Construct 3.
It is meant to be the hub of your addon development.\
Requires both Node js and npm to be installed on your machine.
https://nodejs.org/en/

## Provides the following commands
`npm run create`
Create a new addon with all boilerplate changes

`npm run export`
Generate a .c3addon file

`npm run dev-server`
Run a local cors enabled web server to host your addons for testing

## Getting started

#### First things first
1. Download or clone project
2. Open project and run `npm install` to get all required npm packages

## Creating an addon
Addon creation is made easy.
Your company name, addon id, description and more are automatically added to all of your new addon files.

1. Open terminal and run the `npm run create` command
2. Follow the instructions in the terminal
3. Your new addon will automatically be added to your project folder.

![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/behavior-creation.PNG "Filling out required information")
![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/renaming.PNG "IDs have been renamed")

## Testing an addon
Easily start up a web server to host your addon files.

1. Open terminal and run the `npm run dev-server` command
2. Your default browser will open to the file server
3. Copy your addons url to the addon.json

![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/addon.PNG "Server")

4. Paste the addon.json url into Construct 3 and test!

![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/c3addon.PNG "C3 testing")

## Exporting an addon
Easily generate .c3addon files

1. Open terminal and run the `npm run export` command
2. Follow instructions to choose an addon

![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/export.PNG "C3 testing")

3. .c3addon file is generated and added to your project

![alt text](https://github.com/Straskal/c3-dev-environment-images/blob/master/export-proj-view.PNG "C3 testing")
