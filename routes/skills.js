const express = require('express');
const router = express.Router();
// const skillsCtrl = require('../controllers/skills');

//controllers
const { index, show, newSkill, create, deleteSkill } = require('../controllers/skills');

router.get('/', index) 

//adds new skills
router.get('/new', newSkill);

router.get('/:id', show);

router.post('/', create);

router.delete('/:id', deleteSkill)


module.exports = router
   