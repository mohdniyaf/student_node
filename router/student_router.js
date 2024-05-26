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

 router.put('/:id', async (req, res) => {
    try {
        const studentId = req.params.id; 
        const studentUpdatedData = req.body;

        const response = await Person.findByIdAndUpdate(studentId, studentUpdatedData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ err: "person id not found" });
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal error" });
    }
});

    router.delete('/:id',async (req,res)=>{
        try {
        const studentId=req.params.id;
        const studentdeleteData=req.body;

        const response=await person.findByIdAndDelete(studentId,studentdeleteData);

        if (!response) {
            return res.status(404).json({ err: "person id not found" });
        }

        console.log("deleted data");
        res.status(200).json({message:"sucesufully deleted"});
        } catch (error) {
             console.log(error);
        res.status(500).json({ err: "internal error" });
        }
    })


 module.exports=router;
