const { StatusCodes } = require("http-status-codes");
const { signInService, signOutService, signUpService } = require("../services");

// this is for login user
const signIn = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const response = await signInService(data);
    res.cookie("token", response.token);
    res.status(StatusCodes.OK).json(response, "User signed In Successfully!");
  } catch (err) {
    console.log("User controller error", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

// this is for creating new user
const signup=async (req, res) => {
  console.log("reaced in auth controller")
  try {
    const data = req.body;
    console.log(data)
    const response = await signUpService(data);
    console.log(response)
    res.status(StatusCodes.OK).json(response, "User signed In Successfully!");
  } catch (err) {
    console.log("User controller error", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
// this is for logout user
const signOut = async (req, res) => {
  try {
    await signOutService(req, res);
    res.status(StatusCodes.OK).json("User signed out successfully!");
  } catch (err) {
    console.log("User controller error", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("Something went wrong during logout!");
  }
}
module.exports={signOut,signIn,signup

}