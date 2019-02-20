export const Routes = {
  productsPath: () =>`products`,
  productPath: (id: string) => `products/${id}`,
  taxonsPath: () => 'taxons',
  taxonPath: (id: string) => `taxons/${id}`,
  countriesPath: () => 'countries',
  countryPath: (iso: string) => `countries/${iso}`,
  cartPath: () => `cart`,
  cartAddItemPath: () => 'cart/add_item',
  cartRemoveItemPath: (id: string) => `cart/remove_line_item/${id}`,
  cartEmptyPath: () => 'cart/empty',
  cartSetItemQuantity: () => 'cart/set_quantity',
  cartApplyCodePath: () => 'cart/apply_coupon_code',
  cartRemoveCodePath: (code: string) => `cart/remove_coupon_code/${code}`,
  checkoutPath: () => 'checkout',
  checkoutNextPath: () => 'checkout/next',
  checkoutAdvancePath: () => 'checkout/advance',
  checkoutCompletePath: () => 'checkout/complete',
  checkoutAddStoreCreditsPath: () => 'checkout/add_store_credit',
  checkoutRemoveStoreCreditsPath: () => 'checkout/remove_store_credit',
  checkoutPaymentMethodsPath: () => 'checkout/payment_methods',
  checkoutShippingMethodsPath: () => 'checkout/shipping_rates',
  oauthTokenPath: () => 'spree_oauth/token',
  accountPath: () => 'account',
  accountCreditCardsPath: () => 'account/credit_cards',
  accountDefaultCreditCardPath: () => 'account/credit_cards/default',
  accountCompletedOrdersPath: () => 'account/orders',
  accountCompletedOrderPath: (number: string) => `/account/orders/${number}`
}
