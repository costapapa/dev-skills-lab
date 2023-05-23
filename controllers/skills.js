
const skill = require('../models/skill');
const { getAll, getOne, createOne, deleteOne } = require('../models/skill')

function deleteSkill(req, res) {
    skill.deleteOne(req.params.id)
    res.redirect('/skills');
}

function create(req, res) {
    createOne(req.body);
    res.redirect('/skills');
}

function newSkill(req, res){
    res.render('skills/new', { title: 'New Skill' });
}

function index(req, res, next) {
    console.log(getAll())
    res.render('skills/index', { skills: getAll() });
}


function show(req, res) {
    const { id } = req.params
    res.render('skills/show', { skill: getOne(id)});
}


module.exports = {
 index,
 show,
 newSkill,
 create,
 deleteSkill
};