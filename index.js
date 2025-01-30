var express = require("express");
require('./db');
const prodModel = require('./model/product');
var app = express();
app.use(express.json());

// port number
var port = 3000;

// api to add data 
app.post("/",(req,res)=>{
    try {
        prodModel(req.body).save();
        res.send("Data Added Successfully");
    } catch (error) {
        res.send(error);   
    }
});

// api to get data

app.get("/",async(req,res)=>{
    try {
        var data = await prodModel.find()
        res.send(data);
    } catch (error) {
        res.send(error)
    }
});

// api to delete data
app.delete('/remove/:id',async(req,res)=>{
    try {
        await prodModel.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    } catch (error) {
        res.send(error);
    }
});
// port 
app.listen(port,(req,res)=>{
    console.log(`Server is connected in ${port}`)
});
