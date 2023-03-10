const express = require('express')
const app = express()
const port = 8080;

// Middleware
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})