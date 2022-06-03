const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');


const samspaymentdetailsschemas = new mongoose.Schema({
    name:{ 
        type:String,
        
    },
    address:{
        type:String,
        
    },
    status:{
        type:String,
        
    }
})

// centerdetailsschemas.pre('save',async function(next){
//         if(this.isModified('password')){
//             this.password= await bcrypt.hash(this.password,13);
//             this.confirm_password= await bcrypt.hash(this.confirm_password,13);
        
//         }
//         next();
// });



const samspaymentdetailsschemasdetails = mongoose.model('SAMSPAYENTDETAILSSCHEMAS',samspaymentdetailsschemas);

module.exports = samspaymentdetailsschemasdetails;
