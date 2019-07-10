const os = require('os')
const path=require('path')
const result = require('dotenv').config({path: path.join(__dirname + '../../../config.env')})
const express = require('express');
const app = express();



app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

app.use(express.static('dist'));

const db = require('./config/database');

const Gig = require('./models/Gig')

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


// Routes

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));  

app.get('/api/gigs', (req,res)=>{

    Gig.findAll()
    .then(gigs=>{
        res.send(gigs);
    })
    .catch(err=>console.log(err))
})