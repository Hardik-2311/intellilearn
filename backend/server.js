const express = require('express');
const connectDb = require("./config/db_connection");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
// Rate limiting middleware
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});





// routes import
const userRoutes = require('./routes/userRoute')
const courseRoutes = require('./routes/courseRoute');
const lessonRoutes = require('./routes/lessonRoute');
const enrollmentRoutes = require('./routes/enrollmentRoute');
const discussionRoutes = require('./routes/disscussionRoute');
const assignmentRoutes = require('./routes/assignmentRoute');
const quizRoutes = require("./routes/quizRoute")

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();


// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(limiter);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error' });
});


// db
connectDb();

// create routes
app.use("/api/users", userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/quiz', quizRoutes)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
