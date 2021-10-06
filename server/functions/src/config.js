module.exports = {
  // eslint-disable-next-line max-len
  "provincesAbbr": ["AB"], // ["NL", "NS", "PE", "NB", "QC", "ON", "MB", "SK", "AB", "BC", "NU/NT", "YT"],
  "flippFlayersBaseUri": "https://flipp.com/flyers?postal_code=",
  "flippAllBaseUri": "https://backflipp.wishabi.com/flipp/data?locale=en-us&postal_code=",
};

/**
 * https://backflipp.wishabi.com/flipp/items/search?locale=[Your Language preference here]&postal_code=[Your postal code here]&q=[Your merchant here]

// in this example you will get all items (description, price, image etc..) 
// from all valid flyers from Walmart in in the area of  H4A1B9 postal code

https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=H4A1B9&q=Walmart

//in this example you will search at Walmart for a specifific item

https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=H4A1B9&q=Walmart AND milk

//in this example you will search all merchants for a specifific item

https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=H4A1B9&q=milk


url_getAllDataForZip = 'https://backflipp.wishabi.com/flipp/data?locale=en-us&postal_code=';
  url_findIngredientCategory = 'https://backflipp.wishabi.com/cat_dict?locale=en&all_attributes=true&terms=';
  url_findOffers = 'https://backflipp.wishabi.com/flipp/items/search?locale=en-us&postal_code=';

  # some useful URLs
# https://backflipp.wishabi.com/flipp/items/search
# https://backflipp.wishabi.com/flipp/items/search?locale=en-il&postal_code=61801&q=Walmart

    BASE_URL = 'https://flipp.com'
    BACKEND_URL = 'https://backflipp.wishabi.com/flipp'
    SEARCH_URL = '%s/items/search' % BACKEND_URL
    ITEM_URL = '%s/items/' % BACKEND_URL

    data = requests.get(
        SEARCH_URL,
        params = {
            'q': query,
            'postal_code': postal_code,
            'locale':locale
        }
    ).json()

        return [ x for x in data.get('items')]


        Get flyers based on postal code:
https://gateflipp.flippback.com/bf/flipp/data?locale=en-ca&postal_code=L0R2A0
Once you have the postal code, use the store id to get that store flyers:
https://gateflipp.flippback.com/bf/flipp/flyers/3278188
If you want to look at a flyer on your browser:
https://flipp.com/en-ca/smithville-on/flyer/3278188-fortinos-weekly-flyer?postal_code=L0R2A0

 */