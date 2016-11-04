const index = require('./index');

function test(){
	var event = {
		resource_path:'bubble'
	};
	index.handler(event,null,function(res){

		if(!res) {
			return false;
		}


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
}

test();