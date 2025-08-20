const dbPool = require('../config/database');

const getAllClasses = () => dbPool.execute('SELECT * FROM classes');
const getClassById = (id) => dbPool.execute('SELECT * FROM classes WHERE id = ?', [id]);
const createClass = (body) => dbPool.execute('INSERT INTO classes (title, description, instructor) VALUES (?, ?, ?)', [body.title, body.description, body.instructor]);
const updateClass = (body, id) => dbPool.execute('UPDATE classes SET title=?, description=?, instructor=? WHERE id=?', [body.title, body.description, body.instructor, id]);
const deleteClass = (id) => dbPool.execute('DELETE FROM classes WHERE id = ?', [id]);

module.exports = { getAllClasses, getClassById, createClass, updateClass, deleteClass };
