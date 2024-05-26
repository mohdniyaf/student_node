const express=require('express');
const router=express.Router();

const students=require('../models/students');


router.post('/',async(req,res)=>{
    try {
     const data=req.body;
     const newStudent=new students(data);
     const response=await newStudent.save();
     console.log("data saved");
     res.status(200).json(response);
    } 
    catch (error) {
     console.log(error);
     res.status(500).json({err:"internal error"});
    } 
 })


 router.get('/',async(req,res)=>{
    try {
       const data=await students.find();
       console.log("data fetched");
       res.status(200).json(data);
    } catch (error) {
     console.log(error);
     res.status(500).json({err:"internal error"});
    }
 })

 module.exports=router;
