const BitPaySDK = require('bitpay-sdk');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async () => {
  try {
    const result = await client.GetSubscription('QXn6cBayrT7SNKjvGpzRaR');
    
    console.log(" -------------------- Result of Get Subscription -----------------");
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

main();