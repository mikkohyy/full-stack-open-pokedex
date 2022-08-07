const express = require('express')
const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('0.0.7.1')
})

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
