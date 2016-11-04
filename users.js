exports.getEach = function(cb) {  
    const x;
    const address = [{ 
        id: '1ObYpBk6jEc|000000000000000004',
        channelId: 'webchat',
        user: { id: 'BPnto7CIh1z' },
        conversation: { id: '1ObYpBk6jEc' },
        bot: { id: 'Timeincbot', name: 'Timeincbot' },
        serviceUrl: 'https://webchat.botframework.com',
        useAuth: true 
    }]

    for (x in address) {
        cb(address[x]);
    }
}