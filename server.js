var express = require('express')

var app = express()

var kitties = {}

function createKitty (kitty) {
  var id = Object.keys(kitties).length
  kitties[id] = kitty
}

createKitty({
  name: 'MacGyver',
  slug: 'macgyver',
  age: '8',
  lives_with: 'Katie and Chris'
})
createKitty({
  name: 'Luna',
  slug: 'luna',
  age: '2',
  lives_with: 'Beth and Max'
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    kitties: kitties
  })
})

app.get('/macgyver', function (request, response) {
  response.render('pages/macgyver', {
    kitties: kitties
  })
})

app.get('/luna', function (request, response) {
  response.render('pages/luna', {
    kitties: kitties
  })
})

app.listen(8080)
