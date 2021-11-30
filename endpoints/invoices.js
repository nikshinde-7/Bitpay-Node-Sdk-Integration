const BitPaySDK = require('bitpay-sdk');
let request = require('request');
let Models = require('./node_modules/bitpay-sdk/src/Model');
let client;
client = new BitPaySDK.Client('./secure/BitPay.config.json');

const test = async (req, res) => {
  try{
    let invoiceData = new Models.Invoice(1, Currencies.USD);

    const result = await client.CreateInvoice(invoiceData);
    
    console.log(" -------------------- Result of created invoice -----------------");

    console.log(" -----------------------------------------------------------------")

    const result = await client.GetInvoice('E1chjCF71KYw8k8wuWxttJ');
    
    console.log(" -------------------- Result of Get invoice -----------------");

    console.log(result);
  }catch(e){
    console.log(e);
  }

}

test();

const getRates = async(client, InvoiceStatus) => {
  // const results = await client.GetRates();
  try{



    let resource_url = 'https://bitpay.com/tokens';
    let post_data = {
      "id": "Tez6wp3fdAK8gLdc6dkg6P36vfbD3Aw2uip",
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
      console.log(body.data[0].token, body);

      let resource_url = 'https://bitpay.com/invoices';
      let post_data = {
        "currency": "USD",
        "price": 10,
        "orderId": "20210511_fghij",
        "notificationURL": "https://merchantwebsite.com/shop/notifications",
        "redirectURL": "https://merchantwebsite.com/shop/return",
        "buyer": {
             "email": "john@doe.com"
        },
        "token": "MqA2wX15qHCbG7FBtJZRAxQunrRjAvGBRVJedsiTnZY"
      };
      let headers = {
        "X-Accept-Version": "2.0.0",
        "Content-Type": "application/json",
        "X-Identity": "02811dcd84bb5f436269ed070c27858f872196c90ce77cf869cf3516c82477d22e",
        "X-Signature": "304402201ee44e2d3df647f73ba7079f4dcfba9dff9e5ed352b2aeb3029654358538fafa0220337b38b26f85207c5f55cc24a5c6ff5e5ff151d5bff601bf4913e99fec740aa3"
      };
      let options = {
          url: resource_url,
          method: 'POST',
          json: post_data,
          headers: headers
      };
    
      request(options, function (error, response, body) {
          console.log(body);
      });
    });
 }catch(e){
   console.log(e)
 }
}
