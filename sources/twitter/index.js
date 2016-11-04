'use strict';
const handler = require('./makeCall');


function lambdaHandler(event, context, cb) {

  try {
    var resourcePath = event.resource_path;
    console.log(resourcePath);
    // validator.validateField(resourcePath, 'Resource Path is Null');

    // var reqHandler = new IAsset.AssetRequestHandler();

    handler.get(event, (err, data) => {
      if (err) {
        var error = {
          'ok': false,
          'message': err.message
        };
        console.error('Inside Index.js : Caught Error :' + error);
        cb(JSON.stringify(error));
      } else {
        cb(null, data);
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