require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const jobPostingRoutes = require("./routes/jobPostingRoutes"); 
const additionInfoRoutes = require("./routes/additionalInfoPostingsRoutes");
const JobApplyRoutes = require("./routes/applicationRoutes");
const JobApplicationRoutes = require("./routes/JobApplicationRoutes");


// database connection
connection();

// middlewares
app.use(express.json({ limit: '400mb' }));
app.use(express.urlencoded({ limit: '400mb', extended: true }));


app.use(cors());

app.use('/uploads', express.static('uploads'));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", jobPostingRoutes);
app.use("/api/additionalInfoPostings", additionInfoRoutes);
app.use("/api/", JobApplyRoutes);
app.use("/api/JobApplicationRoutes", JobApplicationRoutes);





const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));