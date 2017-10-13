const path = require('path')
const express = require('express')
const app = express()

const proxyPath = '/_proxy_'

app.use(proxyPath, express.static(path.resolve(__dirname, './sources')))
app.use('/', (req, res) => {
  const proxyURL = `${proxyPath}/${req.hostname}${req.url}`
  console.log('proxy path: ' + req.url + ' -> ' + proxyURL);
  res.redirect(proxyURL)
})

app.listen(4000, () => {
  console.log('4000!')
})
