const classesModel = require('../models/classes');

const getAllClasses = async (req, res) => {
    try {
        const [data] = await classesModel.getAllClasses();
        res.json({ message: 'GET all classes success', data });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

const getClassById = async (req, res) => {
    try {
        const { idClass } = req.params;
        const [data] = await classesModel.getClassById(idClass);
        res.json({ message: 'GET class success', data: data[0] });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

const createClass = async (req, res) => {
    try {
        await classesModel.createClass(req.body);
        res.json({ message: 'CREATE class success', data: req.body });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

const updateClass = async (req, res) => {
    try {
        const { idClass } = req.params;
        await classesModel.updateClass(req.body, idClass);
        res.json({ message: 'UPDATE class success', data: { id: idClass, ...req.body } });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

const deleteClass = async (req, res) => {
    try {
        const { idClass } = req.params;
        await classesModel.deleteClass(idClass);
        res.json({ message: 'DELETE class success' });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

module.exports = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass
}
