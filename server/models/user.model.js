const mongoose  = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true, "Please enter your first name"],
        minlength: [2, "Must be at least 3 characters"],
        maxlength: [20, "Maximum characters allowed is 20"]
    },
    lastName:{
        type:String,
        required: [true, "Please enter your last name"],
        minlength: [2, "Must be at least 2 characters"],
        maxlength: [20, "Maximum characters allowed is 20"]
    },

    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: [true, "Email must be unique"],
        match: /.+\@.+\..+/,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Passwords MUST be at least 8 characters"]
    }
},{timestamps:true})

// confirm password does not need to be in the database.

    UserSchema.virtual("confirmPassword")
        .get(()=>this._confirmPassword)
        .set((value)=>this._confirmPassword = value)

// Mongoose Middleware

UserSchema.pre("validation", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password must match!")
        console.log("Password do not match")
    }
    next()
})
UserSchema.pre("save", function(next){
    console.log("in pre save");
        //hash the password BEFORE it's saved to the db
        //Remember, we know they match from middleware above
        bcrypt.hash(this.password, 10)
            .then((hashedPassword)=>{
                //give our password the value of the returned hash
                this.password = hashedPassword;
                next();
            })
})

const User = mongoose.model("User", UserSchema);

module.exports = User;