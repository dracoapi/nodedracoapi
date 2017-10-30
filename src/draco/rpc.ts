import * as request from 'request-promise-native';

async function ping() {
    let response = await request.post({
        url: 'https://us.draconiusgo.com/ping',
    })
}

async function rpc(service, method, dcportal) {
    await request.post({
        url: 'https://us.draconiusgo.com/serviceCall',
        form: {
            service,
            method,
            dcportal,
        },
        headers: {
            'Protocol-Version': '',
            'Client-Version': '',
        },
        gzip: true,
        jar: true,
    });
}