var restify = require('restify');
var builder = require('botbuilder');
var config  = require('./config');

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: config.microsoftBot.appId,
    appPassword: config.microsoftBot.appSecret
});
var bot = new builder.UniversalBot(connector);  
bot.dialog('/', function (session) {
    session.send("Starting your pizza order...");
    setTimeout(function(){
        var address = session.message.address;
        console.log(session.message.address);
        var msg = new builder.Message()
            .address(address)
            .text("Your pizza is on its way!");
        bot.send(msg);
    },20000);
});



// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
 