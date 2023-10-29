const studentModel=require("../Models/studentModel.js");
//Post data
let createStudent= async(req,res)=>{
    try {
        let data = req.body
        let registerStudent = await studentModel.create(data)
        return res.status(201).send({status:true, 
                                  msg:"Student data registered succesfully",
                                  data:registerStudent});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get all data
let readStudent=async(req,res)=>{
    try {
        let studentData = await studentModel.find()
        return res.status(201).send({status:true, 
                                  msg:"Student data read succesfully",
                                  data:studentData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Get data by id
let readStudentbyid=async(req,res)=>{
    try {
        let data = req.params.id
        let studentDatabyId = await studentModel.findById(data)
        return res.status(201).send({status:true, 
                                  msg:"Student data by id read succesfully",
                                  data:studentDatabyId});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Update using id
let updateStudent= async(req,res)=>{
    try {
        let data = req.body
        let studentRec = await studentModel.findById(req.params.id)
        if(!studentRec)
        return res.status(404).send({msg:"Student record not found"});
        let updatedData = await studentModel.findByIdAndUpdate(req.params.id, data, {new:true});
        return res.status(201).send({status:true, 
                                  msg:"Student data updated succesfully",
                                  data:updatedData});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
//Delete using ID
let deleteStudent=async(req,res)=>{
    try {
        // let data = req.params.id
        let deleteStudent = await studentModel.findByIdAndDelete();
        return res.status(201).send({status:true, 
                                  msg:"Student deleted succesfully",
                                  data:deleteStudent});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};
module.exports = {createStudent, readStudent, readStudentbyid, updateStudent, deleteStudent};