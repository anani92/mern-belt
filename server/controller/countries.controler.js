const Country = require('../model/country.models')

const findAllCountry = (req, res) => {
  Country.find()
    .then((allCountrys) => res.json({ allCountrys }))
    .catch((err) =>
      res.json({ message: 'something have gone wrong', error: err })
    )
}

const findCountry = (req, res) => {
  Country.findOne({ _id: req.params.id })
    .then((country) => res.json({ country: country }))
    .catch((err) => res.json({ message: 'something went wrong', error: err }))
}
const newCountry = (req, res) => {
  Country.create(req.body)
    .then((newCountry) => {
      res.json({ Country: newCountry })
    })
    .catch((err) => res.status(400).json(err))
}

const deleteCountry = (req, res) => {
  Country.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

const updateCountry = (req, res) => {
  let id = req.params.id
  Country.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedCountry) => res.json({ country: updatedCountry }))
    .catch((err) => res.status(400).json(err))
}

module.exports = {
  findAllCountry,
  findCountry,
  deleteCountry,
  updateCountry,
  newCountry,
}
