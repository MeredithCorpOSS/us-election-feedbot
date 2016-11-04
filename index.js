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
    session.send("You are all set to receive updates on this election...");
});



// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
 