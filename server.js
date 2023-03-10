const express = require('express')
const app = express()
const port = 8080;

// Data
/*
const request = require('request');
const options = {
  'method': 'POST',
  'url': 'https://api.intern.d-tt.nl/api/houses',
  'headers': {
    'X-Api-Key': 'lDFCyh4KEikWVdOsZYetvp50_QSX2Rnq'
  },
  formData: {
    'price': '20',
    'bedrooms': '1',
    'bathrooms': '1',
    'size': '1',
    'streetName': 'Overtoom',
    'houseNumber': '21',
    'numberAddition': '1',
    'zip': '1181TY',
    'city': 'Amsterdam',
    'constructionYear': '1960',
    'hasGarage': 'false',
    'description': 'Nice house!'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
*/


// Middleware
app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})