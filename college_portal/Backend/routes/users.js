const router = require("express").Router();
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already exists!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);

        user = new User({ ...req.body, password: hashPassword, confirmPassword: hashConfirmPassword });
        await user.save();
      
            // Return user ID upon successful signup
            res.status(201).send({ message: "User created successfully", userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
