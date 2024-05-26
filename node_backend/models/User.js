const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', async function (next) {
//     if(!this.isModified('password')) return next();
//     try{
//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//         next();
//     } catch(error){
//        return next(error);
//     }
// });
// userSchema.pre('upsert', async function (next) {
//     if(!this.isModified('password')) return next();
//     try{
//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//         next();
//     } catch(error){
//        return next(error);
//     }
// });


module.exports = mongoose.model('User', userSchema,'users');