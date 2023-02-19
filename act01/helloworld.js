const { application } = require('express')
const express = require('express')

const helloworld = express()

// helloworld.get('/', function (req, res) {
//   res.send('Hola Sergi Marti')
// })

function resta(a, b) {
  return a - b
}

let resultat = resta(7, 2)

helloworld.listen(3000)