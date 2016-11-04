var config  = require('./config');

exports.send = function(msg) {  
    // Create bot and add dialogs
    var connector = new builder.ChatConnector({
      appId: config.microsoftBot.appId,
      appPassword: config.microsoftBot.appSecret
    });

    var bot = new builder.UniversalBot(connector); 


    bot.send(msg);
}