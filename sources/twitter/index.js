'use strict';
const handler = require('./makeCall');


function lambdaHandler(event, context, cb) {

  try {
    var resourcePath = event.resource_path;
    console.log(resourcePath);
    // validator.validateField(resourcePath, 'Resource Path is Null');

    // var reqHandler = new IAsset.AssetRequestHandler();

    handler.get(event, context, function(res){
      
      if(!res) {
        return false;
      }

      var x, msg;
      var restify = require('restify');
      var builder = require('botbuilder');
      var config  = require('../../config');

      // Create bot and add dialogs
      var connector = new builder.ChatConnector({
        appId: config.microsoftBot.appId,
        appPassword: config.microsoftBot.appSecret
      });

      var address = { 
        id: '1ObYpBk6jEc|000000000000000004',
        channelId: 'webchat',
        user: { id: 'BPnto7CIh1z' },
        conversation: { id: '1ObYpBk6jEc' },
        bot: { id: 'Timeincbot', name: 'Timeincbot' },
        serviceUrl: 'https://webchat.botframework.com',
        useAuth: true 
      }



      var connector = new builder.ChatConnector({
        appId: config.microsoftBot.appId,
        appPassword: config.microsoftBot.appSecret
      });

      var bot = new builder.UniversalBot(connector); 

      for (x in res){
        msg = new builder.Message()
          .address(address)
          .text(res[x].text);
        bot.send(msg);
        console.log(res[x].text);
      }
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