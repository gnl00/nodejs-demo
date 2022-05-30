const express = require('express')
const index = express()
const port = 3000

index.listen(port, () => {
  console.log(`Example app listen on port ${port}`)
})

index.get('/', (req, res) => {
  res.send('hello, word')
})