const { admin, db } = require('./admin');
var _ = require('lodash');

exports.updateFlippData = async(data) => {
  const batch = db.batch();
  for (const flyer of data.flyers){
    if(flyer.id){
      const ref = db.collection('flyers').doc(flyer.id.toString());
      batch.set(ref, flyer);
    }
  }
  for (const coupon of data.coupons){
    if(coupon.coupon_id){
      const ref = db.collection('coupons').doc(coupon.coupon_id.toString());
      batch.set(ref, coupon);
    }
  }
  for (const flyer_item_coupon of data.flyer_item_coupons){
    if(flyer_item_coupon.id){
      const ref = db.collection('flyer_item_coupons').doc(flyer_item_coupon.id.toString());
      batch.set(ref, flyer_item_coupon);
    }
  }
  const misc = _.cloneDeep(data)
  delete misc.flyers
  delete misc.coupons
  delete misc.flyer_item_coupons
  const ref = db.collection('flipp').doc('misc');
  batch.set(ref, misc);
  await batch.commit();
}