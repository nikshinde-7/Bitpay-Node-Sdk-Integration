const BitPaySDK = require('bitpay-sdk');
let Models = require('bitpay-sdk/src/Model');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async () => {
  try {
    const result = await client.GetInvoices('2021-5-10', '2021-12-31', 'complete');
    
    console.log(" -------------------- Result of Get invoice -----------------");
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

main();