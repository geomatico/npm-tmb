var create = require("../bin/create.js");
var replace = require("../bin/replace.js");
var fsextra = require("fs-extra");
var read = require('read-file'),
    userHome = require('user-home');

describe("Testing if JSON readed correctly", function() {
    describe("Reading JSON pass", function() {

        fsextra.copy('./spec/fixtures/pass.json', userHome + '/pass.json', function(err) {
            if (err) {
                console.error('Oh no, there was an error: ' + err.message);
                return err;
            }
            fsextra.copy('./spec/fixtures/textReplace.txt', "./spec/textReplace.txt", function(err) {
                if (err) {
                    console.error('Oh no, there was an error: ' + err.message);
                    return err;
                }
                replace.read({
                    path: "./spec/textReplace.txt"
                });
                read("./spec/textReplace.txt", function(err, buffer) {

                });
            });
        })
    })
});