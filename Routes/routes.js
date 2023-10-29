const express=require("express");
const router=express.Router();

const studenController= require("../Controllers/studentController.js");
const courseController=require("../Controllers/courseController.js");

//Student routes
router.post("/register",studenController.createStudent);
router.get("/getstudent",studenController.readStudent);
router.get("/getstudent/:id",studenController.readStudentbyid);
router.put("/updatestudent/:id",studenController.updateStudent);
router.delete("/deletestudent/:id",studenController.deleteStudent);

//Course routes
router.post("/course",courseController.createCourse);
router.get("/getcourse",courseController.readCourse);
router.get("/getcourse/:id",courseController.readCoursebyid);
router.put("/updatecourse/:id",courseController.updateCourse);
router.delete("/deletecourse/:id",courseController.deleteCourse);

module.exports = router;