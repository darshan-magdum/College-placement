const router = require("express").Router();
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// POST route for creating a new user
// router.post("/", async (req, res) => {
//     try {
//         const { error } = validateUser(req.body);
//         if (error)
//             return res.status(400).send({ message: error.details[0].message });

//         let user = await User.findOne({ email: req.body.email });
//         if (user)
//             return res.status(409).send({ message: "User with given email already exists!" });

//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword = await bcrypt.hash(req.body.password, salt);
//         const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);

//         user = new User({ ...req.body, password: hashPassword, confirmPassword: hashConfirmPassword });
//         await user.save();
      
//         // Return user ID upon successful signup
//         res.status(201).send({ message: "User created successfully", userId: user._id });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });

// GET route for getting a user by ID
// router.get("/:userId", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         if (!user)
//             return res.status(404).send({ message: "User not found" });
        
//         res.status(200).send(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });


router.post("/", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(409).send({ message: "User with given email already exists!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const hashConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);

        user = new User({
            Name: req.body.Name,
            email: req.body.email,
            password: hashPassword,
            confirmPassword: hashConfirmPassword,
            contact: req.body.contact
        });
        await user.save();
      
        // Return user ID upon successful signup
        res.status(201).send({ message: "User created successfully", userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// GET route for getting a user by ID
router.get("/:userId", async (req, res) => {
    try {
        // Check if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
            return res.status(400).send({ message: "Invalid user ID" });
        }

        const user = await User.findById(req.params.userId);
        if (!user)
            return res.status(404).send({ message: "User not found" });
        
        
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});





// router.put("/:userId", async (req, res) => {
//     try {
//         // Check if userId is a valid ObjectId
//         if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
//             return res.status(400).send({ message: "Invalid user ID" });
//         }

//         // Find the user by ID
//         let user = await User.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).send({ message: "User not found" });
//         }

//         // Update user profile fields
//         user.address = req.body.address;
//         user.interest = req.body.interest;
//         user.department = req.body.department;
//         user.studyingYear = req.body.studyingYear;
//         user.resume = req.body.resume;
//         user.marks10th = req.body.marks10th;
//         user.marks12thDiploma = req.body.marks12thDiploma;
//         user.engineeringFirstYear = req.body.engineeringFirstYear;
//         user.engineeringSecondYear = req.body.engineeringSecondYear;
//         user.engineeringThirdYear = req.body.engineeringThirdYear;
//         user.engineeringLastYear = req.body.engineeringLastYear;

//         // Update other fields similarly...

//         // Save the updated user profile
//         await user.save();

//         // Return success response
//         res.status(200).send({ message: "User profile updated successfully", user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });


router.put("/:userId", async (req, res) => {
    try {
        // Check if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
            return res.status(400).send({ message: "Invalid user ID" });
        }

        // Find the user by ID
        let user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Update user profile fields
        user.address = req.body.address || user.address;
        user.interest = req.body.interest || user.interest;
        user.department = req.body.department || user.department;
        user.studyingYear = req.body.studyingYear || user.studyingYear;
        user.resume = req.body.resume || user.resume;
        user.marks10th = req.body.marks10th || user.marks10th;
        user.marks12thDiploma = req.body.marks12thDiploma || user.marks12thDiploma;
        user.engineeringFirstYear = req.body.engineeringFirstYear || user.engineeringFirstYear;
        user.engineeringSecondYear = req.body.engineeringSecondYear || user.engineeringSecondYear;
        user.engineeringThirdYear = req.body.engineeringThirdYear || user.engineeringThirdYear;
        user.engineeringLastYear = req.body.engineeringLastYear || user.engineeringLastYear;

        // Save the updated user profile
        await user.save();

        // Return success response with only the updated fields
        res.status(200).send({ message: "User profile updated successfully", updatedFields: req.body });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
