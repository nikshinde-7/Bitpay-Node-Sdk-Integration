const BitPaySDK = require('bitpay-sdk');
let Models = require('bitpay-sdk/src/Model');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async () => {
  try {
    const result = await client.GetInvoice('E1chjCF71KYw8k8wuWxttJ');
    
    console.log(" -------------------- Result of Get invoice -----------------");
    console.log(result);
    console.log(" -------------------- Result of created invoice -----------------");
  } catch(e) {
    console.log(e);
  }
}

main();