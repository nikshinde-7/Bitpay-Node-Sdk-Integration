const BitPaySDK = require('bitpay-sdk');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async () => {
  try {
    const result = await client.GetSubscriptions('draft');
    
    console.log(" -------------------- Result of Get Subscription -----------------");
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

main();