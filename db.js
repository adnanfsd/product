const mongoose = require("mongoose");
// connect to mongoose
mongoose.connect("mongodb+srv://tsadnan:adnants1234@cluster0.tkslg.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Connected to DB")})
.catch((err)=>{console.log(err)})