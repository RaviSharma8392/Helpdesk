const crudRepository = require('./crudRepository');
const jwt = require('jsonwebtoken');
const User = require('../schema/userSchema');
require('dotenv').config();


const userRepository = {
    ...crudRepository(User),
    
    signUpUser: async function(data){
          const{userName,email,password,role}=data

        const newUser = new User({userName,email,password,role});
        await newUser.save();
        return newUser
    },
    getByEmail: async function(email){
      
        const user = await User.findOne({email});
        return user;
    },
    getByUserName: async function getByUserName(userName) {
  console.log("Looking for:", userName);

  const user = await User.findOne({
    userName
  });

  if (!user) {
    console.log("No user found.");
  } else {
    console.log("User found:", user.userName);
  }

  return user;
},

    getByToken: async function(token){
    
const tokenSecret = process.env.JWT_SECRET;


  try {
    const decodedToken = jwt.verify(token, tokenSecret);
    const { id } = decodedToken;
    console.log("Decoded admin ID:", id);
    return id;
  } catch (err) {
    console.error("JWT verification failed:", err.message);
  }
}

    

}
module.exports = userRepository;