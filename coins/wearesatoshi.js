/**
 * @title WeAreSatoshi
 * @symbol WSX
 * @implementation Dynamic
 */
var request = require('request');

module.exports = (callback) => {
    request('https://chainz.cryptoid.info/wsx/api.dws?q=circulating', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body)
            });
        } else {
            callback(new Error('Request error ' + response.statusCode));
        }
    });
};
