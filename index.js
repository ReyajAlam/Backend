require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('feelreyaj')
})
app.get('/login', (req, res)=>{
    res.send('<h1>This is my website</h1>')
})
app.get('/login', (req, res)=>{
    res.send('<h1>This is my website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})