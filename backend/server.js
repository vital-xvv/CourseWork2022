require('dotenv').config()
const connectDatabase = require('./database/db.js');
const cors = require('cors');
const colors = require('colors')
const express = require('express');
const authRoutes = require('./routes/auth.js')
const registerRoutes = require('./routes/register.js')
const progQuestionsRoutes = require('./routes/quizprogquest')
const biologyQuestionsRoutes = require('./routes/quizBiologyQuestions')
const todosRoutes = require('./routes/todos');
const userInfoRoutes = require('./routes/userinfo');

// connection to databse
connectDatabase();

// creating server
const app = express();
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}...`.bgCyan))

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/signin", authRoutes);
app.use("/api/signup", registerRoutes);
app.use("/api/quizprog", progQuestionsRoutes);
app.use("/api/quizbiology", biologyQuestionsRoutes);
app.use("/api/todoapp", todosRoutes);
app.use("/api/user", userInfoRoutes);
