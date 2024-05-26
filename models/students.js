const mongoose=require('mongoose');

const StudentSchema=mongoose.Schema({
      name:{
            type:String,
            require: true
           },
           class:{
            type:String,
            require:true
           },

          collage:{
            type:String,
            require:true
          },

          address:{
            type:String,
            require:true
          }
    
});

const students=mongoose.model('students',StudentSchema);
module.exports=students;