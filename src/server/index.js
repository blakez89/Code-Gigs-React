const os = require('os')
const path=require('path')
const result = require('dotenv').config({path: path.join(__dirname + '../../../config.env')})
const express = require('express');
const app = express();



app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

app.use(express.json())
app.use(express.static('dist'));

const db = require('./config/database');

const Gig = require('./models/Gig')

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


// Routes

app.get('/api/gigs', (req,res)=>{

    Gig.findAll()
    .then(gigs=>{
        res.send(gigs);
    })
    .catch(err=>console.log(err))
})

app.post('/api/add', (req,res)=>{
 let {title,technologies,budget,description,contact_email} = req.body;

 if(req.body.title.length < 1){
  return res.status(400).json({
    status: 'fail',
    message: 'Missing title'
  });
 }

 Gig.create({
  title,
  technologies,
  description,
  budget,
  contact_email
})

.then(()=>res.status(200).json({status: 'success'}))
.catch(err=>console.log(err)) 


})