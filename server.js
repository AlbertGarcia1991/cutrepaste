const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

require('dotenv').config();
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

app.get('/login', (req, res) => {
    res.render('login', {
    })
})

app.get('/signin', (req, res) => {
    res.render('signin', {
    })
})

app.get('/', (req, res) => {
    res.render('paste_write', {
    })
})

app.get('/read', (req, res) => {
    const code = 
    `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" integrity="sha512-D9gUyxqja7hBtkWpPWGt9wfbfaMGVt9gnyCvYa+jojwwPHLCzUm5i8rpk7vD7wNee9bA35eYIjobYPaQuKS1MQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/solarized-dark.min.css" integrity="sha512-kBHeOXtsKtA97/1O3ebZzWRIwiWEOmdrylPrOo3D2+pGhq1m+1CroSOVErIlsqn1xmYowKfQNVDhsczIzeLpmg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script>hljs.highlightAll();</script>
<link rel="stylesheet" href="/styles.css" />
<title>CUTREPASTE</title>`
    res.render('paste_read', {
        code: code,
        secretAccessKey: secretAccessKey
    })
})

app.post('/save', (req, res) => {
    const value = req.body.value;
    console.log(value)
})

app.listen(3000)