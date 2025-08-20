const dbPool = require('../config/database');

const enrollUser = (body) => dbPool.execute('INSERT INTO enrollments (userId, classId) VALUES (?, ?)', [body.userId, body.classId]);
const getAllEnrollments = () => dbPool.execute(`
    SELECT e.id, u.username, c.title 
    FROM enrollments e
    JOIN users u ON e.userId = u.idusers
    JOIN classes c ON e.classId = c.id
`);

module.exports = { enrollUser, getAllEnrollments };
