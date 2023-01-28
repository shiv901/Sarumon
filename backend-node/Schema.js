const mongoose = require('mongoose');

const dexSchema = mongoose.Schema({
  symbol: String,
  number: {
    type: String,
    required: true
  },
  owned: Boolean,
  nfts: {
    mint: String,
    owned: Boolean,
    metadata: {
      name: String,
      desc: String,
      image: String,
      attributes: [{
        trait_type: String,
        value: String
      }]
    }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Dex", dexSchema);