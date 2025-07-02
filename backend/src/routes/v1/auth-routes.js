const express=require("express");
const { authController } = require("../../controllers");
const router=express.Router()
router.post("/signIn",authController.signIn);
router.post("/signOut",authController.signOut);
router.post("/signUp",authController.signup);


module.exports=router