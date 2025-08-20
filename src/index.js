require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRouter = require('./routes/users');
const classesRouter = require('./routes/classes');
const enrollmentsRouter = require('./routes/enrollments');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRouter);
app.use("/classes", classesRouter);
app.use("/enrollments", enrollmentsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
