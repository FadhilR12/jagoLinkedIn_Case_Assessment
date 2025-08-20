const express = require('express');
const enrollmentController = require('../controller/enrollments');
const router = express.Router();

router.post('/', enrollmentController.enrollUser);     
router.get('/', enrollmentController.getAllEnrollments);

module.exports = router;
