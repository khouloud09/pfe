const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:{ 
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
},
   phone:{
        type: Number,
        required: true
   }, 
   email:{
        type:String,
        required: true   
   },
   password:{
        type:String,
        required: true
    },
    adress:{
        type:String,
        required: true
    },
    likes: {
        type: [String]
      },
    isAdmin:{ 
              type:Boolean,
              default:false
            },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);