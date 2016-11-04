var config  = require('./config');
var builder = require('botbuilder');

exports.send = function(msg) {  
    // Create bot and add dialogs
    var connector = new builder.ChatConnector({
      appId: config.microsoftBot.appId,
      appPassword: config.microsoftBot.appSecret
    });

    // console.log(`appid for udit ${config.microsoftBot.appId}`);
    var bot = new builder.UniversalBot(connector);

    
    // console.log(msg);
    bot.send(msg);
}