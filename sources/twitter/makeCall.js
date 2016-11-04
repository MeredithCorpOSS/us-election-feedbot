const Twitter = require('twitter');
const request = require('request');

var bearerToken = 'AAAAAAAAAAAAAAAAAAAAAPkpxwAAAAAAYJeU4n%2BuOUrYX0fwBwBE4k7Loks%3DGHT4ZT40OOh0CPhFcqjiTqYYqruiRNF3pIoJbnodjKhOybej3u';
var params = {
	baseUrl: 'https://api.twitter.com',
	path: '1.1/search/tweets.json',
	url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
	qParams: {
		screen_name: 'election2016_us'
	}
};


function get(event,context,cb){
	console.log('inside makeCall');
	
	request({
		headers : {
				// "Content-Type" : params.contentType,
				"Authorization" : `Bearer ${bearerToken}`
			},
			host : params.baseUrl,
			method : "GET",
			url : params.url,
			qs : params.qParams,
			path : params.path,
		},

		function(error,response,body){
			if (error){
				console.log('Error is :'+error);
				// defer.reject('Oops! Something went wrong while calling api. Try again');
			}
			else {
				asset = JSON.parse(body);
				console.log(asset);
				cb(asset);
				// defer.resolve(asset);
			}
		});
}

module.exports = {
	get : get
};