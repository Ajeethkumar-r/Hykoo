const express = require('express')
const connectDB = require('./config/db')
connectDB()

const app = express()

app.get('/', (req, res) => res.send('API running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server connected ${PORT}`))
