const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
     userName: {
        type: String,
        required: [true, 'Username is required'],
        minLength: 2,
        maxLength: 50,
      
     },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: [true, 'Email already exists'],
        match: [ // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
   
role: {
  type: String,
  enum: ['admin','technicalSupport','user','operationTeam']
}
})

userSchema.pre('save', function(){
  if(this.isNew){
    const user = this;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
const hashedPassword = bcrypt.hashSync(user.password, salt);
user.password = hashedPassword;
  }
})

module.exports = mongoose.model('User',userSchema);
