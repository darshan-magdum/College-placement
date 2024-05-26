const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    confirmPassword: { type: String, required: true, select: false }, 
    contact: { type: String, required: true },

});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const User = mongoose.model("User", userSchema);

const validateUser = (data) => {
    const schema = Joi.object({
        Name: Joi.string().required().label("Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        confirmPassword: Joi.equal(Joi.ref("password")).required().label("Confirm Password"),
        contact: Joi.string().required().label("Contact"), // Add validation for contact field
    });
    return schema.validate(data);
};


module.exports = { User, validateUser };
