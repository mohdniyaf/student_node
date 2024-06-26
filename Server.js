const express=require('express');
const app=express();
const db= require('./db');
require('dotenv').config();
const PORT=process.env.PORT || 3000

const bodyparser=require('body-parser');
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("SERVER CREATED");
})



// Import router file
const studentRouter = require('./router/student_router');
// Use router
app.use('/student', studentRouter);



app.listen(PORT, ()=>{
  console.log("server listen at 3000 port");

})