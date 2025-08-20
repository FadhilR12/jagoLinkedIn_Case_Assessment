const express = require('express');

const classController = require('../controller/classes');

const router = express.Router();

router.post('/', classController.createClass);       

router.get('/', classController.getAllClasses);   

router.get('/:idClass', classController.getClassById);

router.patch('/:idClass', classController.updateClass); 

router.delete('/:idClass', classController.deleteClass);

module.exports = router;
