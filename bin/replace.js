#!/usr/bin/env node

var json = require('read-data').json;
var replace = require("replace"),
    userHome = require('user-home');

var Read = {

    read: function(options) {

            var passPath = (options && options.passPath) ? options.passPath : userHome;
            var data = json.sync(passPath + '/pass.json');

        var recursive = (options && options.recursive) ? options.recursive : false;

            for (var group in data) {
                for (var pass in data[group]) {
                    var toReplace = group + '.' + pass;
                    console.info("Replacing: " + toReplace + " by: " + data[group][pass]);
                    replace({
                        regex: "<" + toReplace + ">",
                        replacement: data[group][pass],
                        paths: [options.path],
                        recursive: recursive
                    })
                }
            }
        }
};

module.exports = Read;
