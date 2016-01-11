#!/usr/bin/env node

var fs = require('fs'),
    prompt = require('prompt'),
    jsonfile = require('jsonfile');

var pass = {
    "developer": "here your developer pass",
    "publish": "here your publisher pass"
};

prompt.start();

prompt.get(['developer', 'publish'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  developer: ' + result.developer);
    console.log('  publish: ' + result.publish);

    pass.developer = result.developer;
    pass.publish = result.publish;

    jsonfile.writeFile('../pass.json', pass, function (err) {
        if (err) {
            console.error(err);
        }
    });
});



