const {userRepository} = require('../repositories');
const signUpService = async (data) => {
try{
const newUser = await userRepository.signUpUser(data);
return newUser;
}
catch(error){
    console.log(error.name);
throw error;
}
}
module.exports = signUpService;