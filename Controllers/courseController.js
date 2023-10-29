const courseModel=require("../Models/courseModel.js");
//Post Data
let createCourse= async(req,res)=>{
    try {
        let data = req.body
        let registerCourse = await courseModel.create(data);
        return res.status(201).send({status:true, 
                                  msg:"Course data registered succesfully",
                                  data:registerCourse});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get Data
let readCourse=async(req,res)=>{
    try {
        let courseData = await courseModel.find();
        return res.status(201).send({status:true, 
                                  msg:"course data read succesfully",
                                  data:courseData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get data by id
let readCoursebyid=async(req,res)=>{
    try {
        let data = req.params.id
        let courseDatabyId = await courseModel.findById(data);
        return res.status(201).send({status:true, 
                                  msg:"Student data by id read succesfully",
                                  data:courseDatabyId});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Update using id
let updateCourse= async(req,res)=>{
    try {
        let data = req.body
        let courseRec = await courseModel.findById(req.params.id)
        if(!courseRec)
        return res.status(404).send({msg:"Course record not found"});
        let updatedData = await courseModel.findByIdAndUpdate(req.params.id, data, {new:true});
        return res.status(201).send({status:true, 
                                  msg:"course data updated succesfully",
                                  data:updatedData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Delete using ID
let deleteCourse=async(req,res)=>{
    try {
        let data = req.params.id
        let deleteCourse = await courseModel.findByIdAndDelete(data);
        return res.status(201).send({status:true, 
                                  msg:"Course deleted succesfully",
                                  data:deleteCourse});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

module.exports = {createCourse, readCourse, readCoursebyid,updateCourse,deleteCourse};