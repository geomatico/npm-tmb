var fsextra = require("fs-extra"),
    userHome = require('user-home'),
    exec = require('child_process').exec;

var result = null;

function makeReplace(done) {
    fsextra.copy('./spec/fixtures/pass.json', userHome + '/pass.json', function(err) {
        if (err) {
            return console.error('Oh no, there was an error: ' + err.message);
        }
        fsextra.copy('./spec/fixtures/textReplace.txt', "./spec/textReplace.txt", function(err) {
            if (err) {
                return console.error('Oh no, there was an error: ' + err.message);
            }
            exec('node bin/replace "./spec/textReplace.txt"', function(error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                fsextra.readFile('./spec/textReplace.txt', 'utf8', function (err,data) {
                    if (err) {
                        return console.log(err);
                    }
                    result = {
                        fake_developer_id: data.indexOf('fake_developer_id'),
                        fake_developer_key: data.indexOf('fake_developer_key'),
                        fake_publish_id: data.indexOf('fake_publish_id'),
                        fake_publish_key: data.indexOf('fake_publish_key')
                    };
                    done();
                });
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
        });
    })
}

describe("Testing if JSON readed correctly", function() {
        beforeEach(function (done) {
            makeReplace(done);
        });

        it("and replace pass contents on files", function() {
            expect(result.fake_developer_id).not.toBe(-1);
            expect(result.fake_developer_key).not.toBe(-1);
            expect(result.fake_publish_id).not.toBe(-1);
            expect(result.fake_publish_key).not.toBe(-1);
        })
});