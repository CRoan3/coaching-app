const akeyless = require('akeyless');

const createSecret = async (secretName, secretValue) => {
    const client = new akeyless.ApiClient();
    client.basePath = 'https://api.akeyless.io';
    const api = new akeyless.V2Api(client);
    api.auth(akeyless.Auth.constructFromObject({
        'access-id': "p-jnpl2a5vv5lfam",
        'access-key': "qLj2RipV9sruXAf8S+k6HRrsu8nKe8e2VRoKUursD8k=",
    })).then(data => data.token)
        .then(token => {
            return api.getSecretValue(akeyless.GetSecretValue.constructFromObject({
                'name': 'JWT_USER_LOGIN',
            }))
        })
        .then(console.log)
        .catch(console.log)
    // console.log(createSecretOutput);
};
