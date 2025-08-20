const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.username, body.password, body.email]);
};

const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET username=?, password=?, email=? WHERE id=?`;
    return dbPool.execute(SQLQuery, [body.username, body.password, body.email, idUser]);
};

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id=?`;
    return dbPool.execute(SQLQuery, [idUser]);
};

const getUserByEmailPassword = (email, password) => {
    const SQLQuery = `SELECT * FROM users WHERE email=? AND password=?`;
    return dbPool.execute(SQLQuery, [email, password]);
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUserByEmailPassword
};
