const { userRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const { createJWT } = require("../utils");
const bcrypt = require("bcrypt");

// login
const signInService = async (data) => {
  try {
    const { userName, password } = data;
    

    const user = await userRepository.getByUserName(userName);

    if (!user) throw new Error("No registered user found with this userName");

const isMatch = await bcrypt.compare(password, user.password); // ✅
    console.log(user.password)
    if (!isMatch) throw new Error("You entered an incorrect password");
          

    return {
      role:user.role,
      username: user.userName,
      email: user.email,
      _id: user._id,
      token: await createJWT({ id: user._id }),
    };
  } catch (err) {
    console.log("SignIn Service Error", err);
    throw err;
  }
};

// logout 
const signOutService = async (req,res) => {
    try{
        res.clearCookie('token');
    }
    catch(err){
        console.log("SignOut service error",err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR),json(err);
    }
};

  




module.exports = { signInService, signOutService};
