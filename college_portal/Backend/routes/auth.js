


const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");



router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Allow a specific email and password combination as admin login
    if (
      req.body.email === "admin123@gmail.com" &&
      req.body.password === "12345678"
    ) {
      return res.status(200).send({
        data: "admin-auth-token", // Use a proper admin token here
        message: "Logged in successfully as admin",
        role: "admin", // You can include the role in the response
      });
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    // Check the role of the user and redirect accordingly
    if (user.role === "admin") {
      // Redirect to admin dashboard or perform admin-specific logic
      return res.status(200).send({
        data: user.generateAuthToken(),
        
        message: "Logged in successfully as admin",
        role: "admin",
      });
    } else {
      // Redirect to user dashboard or perform user-specific logic
      return res.status(200).send({
        data: user.generateAuthToken(),
        message: "Logged in successfully as user",
        Name: user.Name, // Include firstName here
        role: "user",
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});





const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
