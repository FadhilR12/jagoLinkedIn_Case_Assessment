const usersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();
        res.json({ message: 'GET all users success', data });
    } catch (error) {
        res.status(500).json({ message: 'Error', serverMessage: error });
    }
};

const createNewUser = async (req, res) => {
    try {
        await usersModel.createNewUser(req.body);
        res.json({
            message: 'CREATE new user success',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({ message: 'Error', serverMessage: error });
    }
};

const updateUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await usersModel.updateUser(req.body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: { id: idUser, ...req.body }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error', serverMessage: error });
    }
};

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await usersModel.deleteUser(idUser);
        res.json({ message: 'DELETE user success' });
    } catch (error) {
        res.status(500).json({ message: 'Error', serverMessage: error });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await usersModel.getUserByEmailPassword(email, password);

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = users[0];
        res.json({
            message: 'LOGIN success',
            data: { id: user.id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error', serverMessage: error });
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    loginUser
};
