const index = require('./index');

function test(){
	var event = {
		resource_path:'bubble'
	};
	index.handler(event,null,function(res){

	});
}

test();