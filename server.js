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
createKitty({
  name: 'Cosette',
  slug: 'cosette',
  age: '16 (at death)',
  lives_with: 'Johnson family (until 2014)'
})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    kitties: kitties
  })
})

app.get('/macgyver', function (request, response) {
  response.render('pages/kitty', {
    kitties: kitties,
    kitty: kitties[0]
  })
})

app.get('/luna', function (request, response) {
  response.render('pages/kitty', {
    kitties: kitties,
    kitty: kitties[1]
  })
})

app.get('/cosette', function (request, response) {
  response.render('pages/kitty', {
    kitties: kitties,
    kitty: kitties[2]
  })
})

app.listen(8080)
