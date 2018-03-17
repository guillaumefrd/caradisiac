// get the models of all the brands, and save the list in 'cars.json'

const jsonfile = require('jsonfile');
const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');

var count = 0;
var result = [];

async function brands () {
  const brands = await getBrands();
  return brands;
}

async function models (brand, callback) {
  console.log('\ncalling ' + brand)
  const models = await getModels(brand);

  if(models.length == 0) {
    console.log('---- no model for ' + brand + ' ----')
  }
  else {
    models.forEach((mod) => {
      console.log(mod.model + ' || ' + mod.brand);
      result.push(mod);
      count++;
    })
  }
  setTimeout(() => {
    callback();
  }, 500);
}

brands().then(function(brands) {
    brands.reduce((promiseChain, item) => {
      return promiseChain.then(() =>  new Promise((resolve) => {
        models(item, resolve)
      }))
    }, Promise.resolve())
    .then(() => {
      console.log('\nnumber of models : ' + count);
      jsonfile.writeFile('cars.json', result, {spaces: 2}, function(err){
        if(err) console.error(err);
        else {
          console.log('\njson done')
        }
      })
    })
})
