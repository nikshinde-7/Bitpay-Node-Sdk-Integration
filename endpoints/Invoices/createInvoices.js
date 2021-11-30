const BitPaySDK = require('bitpay-sdk');
let Models = require('bitpay-sdk/src/Model');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async () => {
  try{
    let invoiceData = new Models.Invoice(1, Currencies.USD);

    const result = await client.CreateInvoice(invoiceData);

    console.log(" -------------------- Result of created invoice -----------------");

    console.log(" -----------------------------------------------------------------")
  }catch(e){
    console.log(e);
  }
}

main();