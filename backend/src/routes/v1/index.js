
const authRouter=require("./auth-routes")
const express = require('express');

const router = express.Router();


router.use("/auth",authRouter);


module.exports = router;