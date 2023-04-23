
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//DB model
const shops = require('./models/shop_model')
const delivery = require('./models/delivery_modal')
const item = require('./models/item_modal')

const port = process.env.PORT || 3135;

//db
const mongo_conn = require('./db/db_config');
mongo_conn();


const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/views"));


//..............................................routes........................................
app.get('/',(req,res)=>{
   res.status(200).send("hello world")
})

//...........................shop................................................

app.get('/shop',async(req,res)=>{

    try {
        var result = await shops.find()
        res.status(200).send(result)
    } catch (e) {
        console.log("shop",e)
        res.status(400).send(e)
    }
})


app.post('/shop',async (req,res)=>{

    try {
        
        var new_shop_detail = new shops(req.body)
        await new_shop_detail.save((err,result)=>{
            if(err){
                console.log("err",err.name,err.code)
            }
            return res.status(200).send("saved successfully")
        })
        // res.status(200).send("save successfully")
    } catch (e) {
        console.log("shop",e)
        res.status(422).send("shop",e)
    }
})

//...........................item................................................

app.get('/item',async(req,res)=>{

    try {
        var result = await item.find()
        res.status(200).send(result)
    } catch (e) {
        console.log("item",e)
        res.status(400).send(e)
    }
})


app.post('/item',async (req,res)=>{

    try {
        
        var new_item_detail = new item(req.body)
        await new_item_detail.save((err,result)=>{
            if(err){
                console.log("err",err.name,err.code)
            }
            return res.status(200).send("saved successfully")
        })
        
    } catch (e) {
        console.log("item",e)
        res.status(422).send("item",e)
    }
})


//...........................delivery................................................

app.get('/delivery',async(req,res)=>{

    try {
        var result = await delivery.find()
        res.status(200).send(result)
    } catch (e) {
        console.log("delivery",e)
        res.status(400).send(e)
    }
})


app.post('/delivery',async (req,res)=>{

    try {
        
        var new_delivery_detail = new delivery(req.body)
        await new_delivery_detail.save((err,result)=>{
            if(err){
                console.log("err",err.name,err.code)
            }
            return res.status(200).send("saved successfully")
        })
        
    } catch (e) {
        console.log("delivery",e)
        res.status(422).send("delivery",e)
    }
})





app.listen(port,(req,res)=>{
    console.log(`server running @ localhost:${port}`);
})