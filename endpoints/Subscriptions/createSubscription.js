const BitPaySDK = require('bitpay-sdk');
let client;
client = new BitPaySDK.Client('../../secure/BitPay.config.json');

const main = async (req, res) => {
  try {

    let subscription_data = {
        "billData": {
            "number": "subscription1234-DEMO",
            "currency": "USD",
            "name": "Nikhil Shinde",
            "address1": "2630 Hegal Place",
            "address2": "Apt 42",
            "city": "Alexandria",
            "state": "VA",
            "zip": 23242,
            "country": "US",
            "email": "john@doe.com",
            "cc": [
                "jane@doe.com"
            ],
            "phone": "555-123-456",
            "dueDate": "2021-12-20",
            "passProcessingFee": true,
            "items": [
                {
                    "description": "Test item 1",
                    "price": 6,
                    "quantity": 1
                },
                {
                    "description": "Test item 2",
                    "price": 4,
                    "quantity": 1
                }
            ]
        },
        "nextDelivery": "2021-12-20",
        "schedule": "weekly",
    };
     
    const result = await client.CreateSubscription(subscription_data);
    console.log(" -------------------- Result of Create Subscription -----------------");
    console.log(result);

  }catch(e){
    console.log(e);
  }
}

main();
