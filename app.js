const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw new Error('error...')
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})
