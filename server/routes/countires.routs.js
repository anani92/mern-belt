const countryController = require('../controller/countries.controler')
module.exports = (app) => {
  app.get('/countries', countryController.findAllCountry)
  app.get('/countries/:id', countryController.findCountry)
  app.post('/countries/new', countryController.newCountry)
  app.delete('/countries/:id/delete', countryController.deleteCountry)
  app.put('/countries/:id/edit', countryController.updateCountry)
}
