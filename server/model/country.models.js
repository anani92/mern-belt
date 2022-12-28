const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema(
  {
    contest: {
      type: String,
      required: [true, 'contest is required'],
      minlength: [10, 'contest should be at least 10 charachters'],
      unique: true,
    },
    countryOne: {
      type: String,
      required: [true, 'country one is required'],
    },
    countryOneVotes: {
      type: Number,
      default: 0,
    },
    countryTwo: {
      type: String,
      required: [true, 'country two is required'],
    },
    countryTwoVotes: {
      type: Number,
      default: 0,
    },
    countryThree: {
      type: String,
    },
    countryThreeVotes: {
      type: Number,
      default: 0,
    },
    sumVotes: {
      type: Number,
      value:
        this.countryOneVotes + this.countryTwoVotes + this.countryThreeVotes,
    },
  },
  { timestamps: true }
)
const Country = mongoose.model('Country', countrySchema)
module.exports = Country
