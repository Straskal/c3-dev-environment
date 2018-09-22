# c3-dev-environment
A development environment for Construct 3 *(c3 runtime only)*.

Requires Node js \
https://nodejs.org/en/

## Commands
`npm run create` creates a new addon with all boilerplate changes

`npm run export` generates a .c3addon file

`npm run test` runs a local cors enabled web server to host your addons for testing

## Setup
1. download or clone project
2. open project and run `npm install` to get all required node packages

## Creating an addon
Addon file generation takes care of all of the boilerplate changes for you. ie company name, addon name and addon description changes.

1. run the `npm run create` command
2. follow the instructions in the terminal
3. your new addon will automatically be added to your *./addons* folder.

## Exporting an addon
When you are ready to share your addon with the world, you can generate your *.c3addon* file with a command!

1. run the `npm run export` command
2. choose an addon
3. .c3addon file is generated and added to your *./exports* folder

## Testing an addon
Be sure to check out the Construct 3 docs on enabling dev mode and testing addons: \
https://www.construct.net/make-games/manuals/addon-sdk/guide/enabling-developer-mode \
https://www.construct.net/make-games/manuals/addon-sdk/guide/using-developer-mode


1. run the `npm run test` command
2. your default browser will open to the file server
3. copy your addons' addon.json url into construct 3 and test!
