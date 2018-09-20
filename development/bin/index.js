#!/usr/bin/env node

const program = require('commander');
const createAddon = require('../lib/create-addon');

program
    .command('create')
    .action(function() 
    {
        createAddon();
    });

program.parse(process.argv);