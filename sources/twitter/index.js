'use strict';
const handler = require('./makeCall');
const builder = require('botbuilder');
const botSender = require('./botSender.js');
const users = require('./users.js');


function lambdaHandler(event, context, cb) {

    try {
        var resourcePath = event.resource_path;
        console.log(resourcePath);
        // validator.validateField(resourcePath, 'Resource Path is Null');

        // var reqHandler = new IAsset.AssetRequestHandler();

        handler.get(event, context, function (res) {

            if (!res) {
                return false;
            }

            users.getEach(function (user) {
                let x;
                let msg;

                console.log(user);

                for (x in res) {
                    msg = new builder.Message()
                        .address(user)
                        .text(res[x].text);

                    botSender.send(msg);
                }
            });

        });
    } catch (err) {
        console.log('Inside Index.js Catch: Caught Error :' + err);
        var error = {
            'ok': 'false11',
            'message': err.message
        };
        cb(JSON.stringify(error));
    }
}

exports.handler = lambdaHandler;