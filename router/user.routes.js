const express=require("express");
const router=express.Router();
const userController=require("../controller/user.controller")
const {verifyAccessToken}=require("../Auth/auth")

router
.post("/signup",
userController.signup)

router
.post("/login",
userController.login)

router
.post("/assignProduct",
verifyAccessToken,
userController.assignProduct
)

router
.post("/getAssignProduct",
verifyAccessToken,
userController.getAssignProduct
)

module.exports=router;
