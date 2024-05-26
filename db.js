const mongoose=require('mongoose');
require('dotenv').config();
const mongoUrl=process.env.DB_URL;
//const mongoUrl='mongodb://localhost:27017/university';
//const mongoUrl='mongodb+srv://mohammedniyaf77:niyaf12345@cluster0.ddwi55r.mongodb.net/'

mongoose.connect(mongoUrl,{
   // useNewUrlParser:true,
   // useUnifiedTopology:true

});



const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongoDB is connected to server");
});


db.on('error',()=>{
    console.log("mongoDB server is error");
});

db.on('disconnected',()=>{
    console.log("mongoDB serve is disconnected ");
});


module.exports=db;