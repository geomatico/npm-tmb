#!/usr/bin/env node

var fs = require('fs'),
    prompt = require('prompt'),
    jsonfile = require('jsonfile'),
    userHome = require('user-home');

var pass = {
    "developer": {
        "app_id": "here your developer app ID",
        "app_key": "here your developer app key"
    },
    "publish": {
        "app_id": "here your publisher app ID",
        "app_key": "here your publisher app key"
    }
};

var schemaDefault = {
    "properties": {
        "developer_app_id": {
            description: 'Enter your developer app_id',
            required: true
        },
        'developer_app_key': {
            description: 'Enter your developer app_key',
            required: true
        },
        'publish_app_id': {
            description: 'Enter your publisher app_id (empty to use developer)'
        },
        'publish_app_key': {
            description: 'Enter your publisher app_key (empty to use developer)'
        }
    }
};

var Create = {

    create : function(options) {

        prompt.start();

        var path = (options && options.path) ? options.path : userHome;
        console.info("Your pass.json file will be saved in: " + path + '/pass.json');
        console.info('Insert your TMB API passwords:');

        var schema = (options && options.schema) ? options.schema : schemaDefault;

        prompt.get(schema, function (err, result) {

            pass.developer.app_id = result.developer_app_id;
            pass.developer.app_key = result.developer_app_key;
            if (result.publish_app_id) {
                pass.publish.app_id = result.publish_app_id;
            } else {
                pass.publish.app_id = result.developer_app_id
            }
            if (result.publish_app_key) {
                pass.publish.app_key = result.publish_app_key;
            } else {
                pass.publish.app_key = result.developer_app_key
            }


            jsonfile.writeFile(path + '/pass.json', pass, function (err) {
                if (err) {
                    console.error(err);
                }
            });

        });
    }
};

module.exports = Create;