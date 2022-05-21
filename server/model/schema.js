const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');


const samsloginschemas = new mongoose.Schema({
    userid:{ 
        type:String,
        
    },
    password:{
        type:String,
        
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

// centerdetailsschemas.pre('save',async function(next){
//         if(this.isModified('password')){
//             this.password= await bcrypt.hash(this.password,13);
//             this.confirm_password= await bcrypt.hash(this.confirm_password,13);
        
//         }
//         next();
// });

samsloginschemas.methods.generateAuthToken = async function(){
    try{

        let token = jwt.sign({_id:this.id},process.env.SECRETEKEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
            console.log(err);
    }
}

const samsloginschemasdetails = mongoose.model('SAMSLOGINSCHEMAS',samsloginschemas);

module.exports = samsloginschemasdetails;
