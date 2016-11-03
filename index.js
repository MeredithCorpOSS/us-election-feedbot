var restify = require('restify');
var builder = require('botbuilder');
var config  = require('config');

// Create bot and add dialogs
var connector = new builder.ChatConnector({
    appId: config.microsoftBot.appId,
    appPassword: config.microsoftBot.appSecret
});
var bot = new builder.UniversalBot(connector);  
bot.dialog('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
