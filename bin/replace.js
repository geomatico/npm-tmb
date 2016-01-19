#!/usr/bin/env node

var json = require('read-data').json;
var replace = require("replace"),
    userHome = require('user-home');

var args = process.argv.slice(2);

var replacePath = args[0];
var passPath = args[1];
var recursive = args[2];

var path = (passPath) ? passPath : userHome;
var data = json.sync(path + '/pass.json');

console.info("Your pass.json file will be readed from: " + path + '/pass.json');

if (replacePath) {
    for (var group in data) {
        for (var pass in data[group]) {
            var toReplace = group + '.' + pass;
            console.info("Replacing: " + toReplace + " by: " + data[group][pass]);
            replace({
                regex: "<" + toReplace + ">",
                replacement: data[group][pass],
                paths: [replacePath],
                recursive: (recursive) ? recursive : false
            })
        }
    }
} else {
    return console.error("Please, write directory or file to replace");
}

