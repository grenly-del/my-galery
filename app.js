const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.redirect('/image')
})

app.get('/image', (req, res) => {
	res.render('index')
})

app.listen(port, (err) => {
	console.log(`server telah jalan di port ${port}`)
})