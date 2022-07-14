//File Name : app.js
const express = require('express');
const path=require('path');
const app=express();
const port= process.env.PORT || 2000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Donation');


const donateform = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:55 
    },
    date:{
        type:String,
        required:true
        
    },
    weight:{
        type:Number,
        required:true,
        min:50
    },
    time:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min:7000000000,
        max:9999999999
    },
    group:{
        type:String,
        required:true
    }
});
const Donate = mongoose.model('Donate', donateform);

const receiveform = new mongoose.Schema({
    names:{
        type:String,
        required:true
    },
    blgroup:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true,
        max:1000
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phones:{
        type:Number,
        required:true,
        min:7000000000,
        max:9999999999
    },
    reson:{
        type:String,
        required:true
    }
  });
const Receive = mongoose.model('Receive', receiveform);

const contactform = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min:7000000000,
        max:9999999999
    },
    email:{
        type:String,
        required:true
    }
  });
const Contact = mongoose.model('Contact', contactform);
app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')

app.set('views', path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/home',(req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/donate',(req,res)=>{
    res.status(200).render('donate.pug')
})
app.get('/receive',(req,res)=>{
    res.status(200).render('receive.pug')
})

app.get('/about',(req,res)=>{
    res.status(200).render('about.pug')
})
app.get('/services',(req,res)=>{
    res.status(200).render('services.pug')
})
app.get('/available',(req,res)=>{
    res.status(200).render('available.pug')
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})

app.post('/donate',(req,res)=>{
    var myDatas= new Donate(req.body);
    myDatas.save().then(()=>{
        res.status(200).render('thanku.pug')
    }).catch(()=>{
        res.status(200).render('donate.pug')
    })  
})
app.post('/receive',(req,res)=>{
    var myDatas= new Receive(req.body);
    myDatas.save().then(()=>{
        res.status(200).render('thanku.pug')
    }).catch(()=>{
        res.status(200).render('receive.pug')
    })
})
app.post('/contact',(req,res)=>{
    var myDatas= new Contact(req.body);
    myDatas.save().then(()=>{
        res.status(200).render('thanku.pug')
    }).catch(()=>{
        res.status(200).render('contact.pug')
    })
})

app.listen(port,()=>{
    console.log(`The application is started succesfully on port ${port}`);
});