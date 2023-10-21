const express = require('express')

const app = express()
const port = 3000
const router = require('./routes/index')

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.json({message: 'json response'})
})

app.listen(port, () => console.log(`server running on port ${port}`))