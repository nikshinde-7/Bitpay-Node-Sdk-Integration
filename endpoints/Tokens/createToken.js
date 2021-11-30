let request = require('request');

let resource_url = 'https://bitpay.com/tokens';
let post_data = {
   "id": "Tez6wp3fdAK8gLdc6dkg6P36vfbD3Aw2uip", // client-id should be stored in env file
   "label": "merchantwebsite.com",
   "facade": "merchant"
};
let headers = {"X-Accept-Version": "2.0.0", "Content-Type": "application/json"};
let options = {
   url: resource_url,
   method: 'POST',
   json: post_data,
   headers: headers
};

request(options, function (error, response, body) {
   console.log(body);
});
