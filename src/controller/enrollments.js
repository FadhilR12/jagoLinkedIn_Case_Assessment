const enrollmentsModel = require('../models/enrollments');

const enrollUser = async (req, res) => {
    try {
        await enrollmentsModel.enrollUser(req.body);
        res.json({ message: 'ENROLL success', data: req.body });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

const getAllEnrollments = async (req, res) => {
    try {
        const [data] = await enrollmentsModel.getAllEnrollments();
        res.json({ message: 'GET all enrollments success', data });
    } catch (err) {
        res.status(500).json({ message: 'Error', serverMessage: err });
    }
};

module.exports = { enrollUser, getAllEnrollments };
