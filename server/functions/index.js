const functions = require("firebase-functions");
const Crawler = require("crawler");
const config = require("./src/config");
const {
  getDefaultPostalCode,
} = require("./src/utils");
const axios = require("axios").default;
const { admin, db } = require('./src/admin');
var _ = require('lodash');
const path = require('path');
const os = require('os');
const fs = require('fs');
const spawn = require('child-process-promise').spawn;

const {
  updateFlippData
} = require("./src/data")
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.gatherFlippAllData = functions.https.onRequest(async (request, response) => {
  const postalCode = "T3R0H8"
  const result = await axios(`${config.flippAllBaseUri}${postalCode}`)
  if(result.status == 200){
    const data = result.data
    await updateFlippData(data)
    response.send(`success, flyers number: ${data.flyers.length} coupons number: ${data.coupons.length} flyer_item_coupon number: ${data.flyer_item_coupons.length}`)
  }else{
    response.send('error')
  }
});

exports.onNewFlyer = functions.firestore.document('flyers/{flyerId}').onCreate(async (snap, context) =>{
  functions.logger.log('onNewFlyer!!!!!!!!!');
  const newFlyer = snap.data();

  // download image
  const response = await axios({
    method: 'get',
    url: 'https://f.wishabi.net/flyers/94a76dbe-722f-45c6-a369-ecab3534972c/3_0_0.jpg',
    responseType: 'stream'
  })
  const metadata = {
    contentType: 'image/jpeg',
  };
  const fileName = '3_0_0.jpg'
  const  bucket = admin.storage().bucket('beezpaws')
  const filePath = bucket.name
  const tempFilePath = path.join(os.tmpdir(), fileName);
  await response.data.pipe(fs.createWriteStream(tempFilePath))
  functions.logger.log('Image downloaded locally to', tempFilePath);
  const thumbFilePath = path.join(path.dirname(filePath), fileName);
  // Uploading the thumbnail.
  await bucket.upload(tempFilePath, {
    destination: thumbFilePath,
    metadata: metadata,
  });
  // Once the thumbnail has been uploaded delete the local file to free up disk space.
  return fs.unlinkSync(tempFilePath);
})


// exports.gatherFlipp = functions.https.onRequest((request, response) => {
//   const c = new Crawler({
//     // 最大并发数默认为10
//     maxConnections: 1,
//     // 两次请求之间将闲置1000ms
//     rateLimit: 5000,
//     callback: function(error, res, done) {
//       if (error) {
//         console.log(error);
//       } else {
//         const $ = res.$;
//         console.log($("title").text());
//       }
//       done();
//     },
//   });
//   const qArray = config.provincesAbbr.map((provAbbr)=>{
//     return `${config.flippBaseUri}${getDefaultPostalCode(provAbbr)}`;
//   });
//   c.queue(qArray);
// });
