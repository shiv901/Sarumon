const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors");
const connectDB = require('./db');
const Dex = require('./Schema')

require('dotenv').config()
mongoose.set('strictQuery', true)

const app = express()
app.use(cors())

// parse application/json
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.get('/', (req, res) => {
  res.send('Server working')
})

app.get('/dex', (req, res) => {
  Dex.find()
    .then(dex => {
      res.status(200).json(dex)
    })
})


// app.post('/store-data', async (req, res) => {
//   // console.log('In server.js Response: ' + JSON.stringify(req.body))
//   const { name, email, address, ccode, phone, captcha } = req.body
//   const user = await User.create({ name, email, address, ccode, phone, captcha })

//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       address: user.address,
//       ccode: user.ccode,
//       phone: user.phone,
//       captcha: user.captcha
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

app.listen(5000, console.log('Server Started on Port: 5000'))

// data = [{
//   "number": "016",
// },
// {
//   "number": "017",
// },
// {
//   "number": "018",
// },
// {
//   "symbol": "NOKIAMON",
//   "number": "018",
//   "nfts": {
//     "mint": "CNokqbHKea5CKc4wvgb4Cwea4NfHDLVwJhCMDcXoWkmc",
//     "owned": false,
//     "metadata": {
//       "name": "Tala & Tele",
//       "description": "Twin Fairy Nokiamons who reside in an urban area. Tala has an ambitious personality and loves to talk, while Tele has an ignorant personality and is very rebellious. They always give birth to male and female twins. They have a spinning bracelet that they use to detect metal, gold and identify potential danger. Tala and Tele have a fondness for humans and often seek out their company.",
//       "image": "https://shdw-drive.genesysgo.net/CbWGfYfTJvBfBXCsQPj3Hvvxvfgm3bVkxMSBHJGgdQp1/069.gif",
//       "symbol": "NOKIAMON",
//       "attributes": [
//         {
//           "trait_type": "Number",
//           "value": "018"
//         },
//         {
//           "trait_type": "Name",
//           "value": "Tala & Tele"
//         },
//         {
//           "trait_type": "Type 1",
//           "value": "Fairy"
//         },
//         {
//           "trait_type": "Type 2",
//           "value": "None"
//         },
//         {
//           "trait_type": "Origins",
//           "value": "Flagz"
//         },
//         {
//           "trait_type": "Generation",
//           "value": "1"
//         },
//         {
//           "trait_type": "Classification",
//           "value": "Twin"
//         },
//         {
//           "trait_type": "Height",
//           "value": "28"
//         },
//         {
//           "trait_type": "Weight",
//           "value": "6"
//         },
//         {
//           "trait_type": "Female Ratio",
//           "value": "50"
//         },
//         {
//           "trait_type": "Male Ratio",
//           "value": "50"
//         },
//         {
//           "trait_type": "Main Abilities 1",
//           "value": "Braceleto"
//         },
//         {
//           "trait_type": "Main Abilities 2",
//           "value": "Blessing Magic"
//         },
//         {
//           "trait_type": "Evolve",
//           "value": "No"
//         },
//         {
//           "trait_type": "First Appearance",
//           "value": "09 Jan 2023"
//         },
//         {
//           "trait_type": "Legendary",
//           "value": "No"
//         }
//       ]
//     }
//   }
//   ,
//   "owned": false
// },
// {
//   "number": "020",
// },
// ]

// data.map(x => {
//   const buba = new Dex(x)
//   buba.save()
//     .then(() => console.log('printed'))
//     .catch(err => console.log(err))
// })