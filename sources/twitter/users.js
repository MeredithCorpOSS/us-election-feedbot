exports.getEach = function(cb) {  
    var x;
    const address = [{ 
        id: 'JhAi3Gw7gud|000000000000000001',
        channelId: 'webchat',
        user: { id: 'BPnto7CIh1z' },
        conversation: { id: 'JhAi3Gw7gud' },
        bot: { id: 'Timeincbot', name: 'Timeincbot' },
        serviceUrl: 'https://webchat.botframework.com',
        useAuth: true 
    },
    { 
        id: '7RmBDMHIphQ|000000000000000006',
        channelId: 'webchat',
        user: { id: 'FBKctkMx5Ap' },
        conversation: { id: '7RmBDMHIphQ' },
        bot: { id: 'Timeincbot', name: 'Timeincbot' },
        serviceUrl: 'https://webchat.botframework.com',
        useAuth: true 
    },
    { 
        id: '12c2b32c35e445f097612cac441a5dae',
        channelId: 'slack',
        user: { id: 'U2T0S76VA:T2SA36G12', name: 'shettypr' },
        conversation: { isGroup: false, id: 'B2Z30NKE3:T2SA36G12:D2Y95CLLT' },
        bot: { id: 'B2Z30NKE3:T2SA36G12', name: 'election_bot' },
        serviceUrl: 'https://slack.botframework.com',
        useAuth: true 
    },
    { 
        id: 'dfa2896f286a46e48a8ad8fa4b78769b',
        channelId: 'slack',
        user: { id: 'U2XLJQ57B:T2SA36G12', name: 'deep01' },
        conversation: { isGroup: false, id: 'B2Z30NKE3:T2SA36G12:D2Z2PFUUW' },
        bot: { id: 'B2Z30NKE3:T2SA36G12', name: 'election_bot' },
        serviceUrl: 'https://slack.botframework.com',
        useAuth: true 
    },
    { 
        id: '3f7f2a16e2a946ba9feee937aba88001',
        channelId: 'slack',
        user: { id: 'U2Z3W4U3Z:T2SA36G12', name: 'jhau' },
        conversation: { isGroup: false, id: 'B2Z30NKE3:T2SA36G12:D2YC2A7SN' },
        bot: { id: 'B2Z30NKE3:T2SA36G12', name: 'election_bot' },
        serviceUrl: 'https://slack.botframework.com',
        useAuth: true 
    },
    { 
       id: 'mid.1478269687668:3d1aa56e21',
       channelId: 'facebook',
       user: { id: '1280792681982754', name: 'Us Ele' },
       conversation: { isGroup: false, id: '1280792681982754-1129708457144229' },
       bot: { id: '1129708457144229', name: 'Timeincbot' },
       serviceUrl: 'https://facebook.botframework.com',
       useAuth: true 
   }
    
    ];

    for (x in address) {
        cb(address[x]);
    }
}