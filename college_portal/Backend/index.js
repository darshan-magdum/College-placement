require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const jobPostingRoutes = require("./routes/jobPostingRoutes"); 
const additionInfoRoutes = require("./routes/additionalInfoPostingsRoutes");



// database connection
connection();

// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", jobPostingRoutes);
app.use("/api/additionalInfoPostings", additionInfoRoutes);




const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));