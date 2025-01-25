const express = require('express')

const app = express()


app.use('/',(req, res) => {
    res.send('Namaste satyajeet from Dashboard')
})
app.use('/hello',(req, res) => {
    res.send('Hello Hello Hello')
})

app.use("/test",(req, res) => {
    res.send('Hello fron server')
})

app.listen(7777, () => {
    console.log('Server is successfully running on port 7777')
})