export const users = [
  {id: 1, name: 'Bob', login: 'Bobik', pass: '123456'},
  {id: 2, name: 'Martin', login: 'D@rkMage', pass: 'qwerty'}
];

export const products = [
  {id: 1, name: 'product1', reviews: [{id: 1, name: 'review11'}, {id: 2, name: 'review12'}]},
  {id: 2, name: 'product2', reviews: [{id: 3, name: 'review21'}, {id: 4, name: 'review22'}]},
  {id: 3, name: 'product3', reviews: [{id: 5, name: 'review31'}, {id: 6, name: 'review32'}]}
];

export const reviews = [
  {id: 1, name: 'review11', product_id: 1},
  {id: 2, name: 'review12', product_id: 1},
  {id: 3, name: 'review21', product_id: 2},
  {id: 4, name: 'review22', product_id: 2},
  {id: 5, name: 'review22', product_id: 3},
  {id: 6, name: 'review32', product_id: 3},
];

export const cities = [
  { name: 'Gdansk', country: 'Poland', capital: false, location: { lat: 24.735879, long: 54.269306 } },
  { name: 'Kiev', country: 'Ukraine', capital: true, location: { lat: 66.235326, long: 16.749913 } },
  { name: 'Wroclaw', country: 'Poland', capital: false, location: { lat: 22.807730, long: 48.600792 } },
];
