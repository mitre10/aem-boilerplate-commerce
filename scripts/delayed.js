// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import { getConfigValue } from './configs.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

// Load Commerce events SDK and collector
const config = {
  environmentId: await getConfigValue('commerce-environment-id'),
  environment: await getConfigValue('commerce-environment') === 'Production' ? 'prod' : 'non-prod',
  storeUrl: await getConfigValue('commerce-store-url'),
  websiteId: parseInt(await getConfigValue('commerce-website-id'), 10),
  websiteCode: await getConfigValue('commerce-website-code'),
  storeId: parseInt(await getConfigValue('commerce-store-id'), 10),
  storeCode: await getConfigValue('commerce-store-code'),
  storeViewId: parseInt(await getConfigValue('commerce-store-view-id'), 10),
  storeViewCode: await getConfigValue('commerce-store-view-code'),
  websiteName: await getConfigValue('commerce-website-name'),
  storeName: await getConfigValue('commerce-store-name'),
  storeViewName: await getConfigValue('commerce-store-view-name'),
  baseCurrencyCode: await getConfigValue('commerce-base-currency-code'),
  storeViewCurrencyCode: await getConfigValue('commerce-base-currency-code'),
  storefrontTemplate: 'Franklin',
};

window.adobeDataLayer.push(
  { storefrontInstanceContext: config },
  { eventForwardingContext: { commerce: true, aep: false } },
);

// Load events SDK and collector
import('./commerce-events-sdk.js');
import('./commerce-events-collector.js');

// Conversion tracking
function convert(event, value, extraData = {}) {
  sampleRUM('convert', { source: event, target: value, ...extraData });
}

window.adobeDataLayer.push((dl) => {
  dl.addEventListener('add-to-cart', ({ eventInfo }) => {
    convert('addToCart', 'addToCart', eventInfo?.shoppingCartContext?.items?.map((item) => item.product.sku));
  });

  dl.addEventListener('create-account', () => {
    convert('createAccount', 'createAccount');
  });

  dl.addEventListener('sign-in', () => {
    convert('signIn', 'signIn');
  });

  dl.addEventListener('place-order', ({ eventInfo }) => {
    convert('placeOrder', 'placeOrder', eventInfo.shoppingCartContext.items.map((item) => item.product.sku));
  });
});
