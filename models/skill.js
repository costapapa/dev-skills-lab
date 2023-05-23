const {  } = require("../controllers/skills");

const skills = [
    { id: 123, skill: 'JavaScript', done: true},
    { id: 345, skill: 'Python', done: false},
    { id: 678, skill: 'MongoDB', done: true}
];

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
  id = parseInt(id)
  return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne,
    createOne: create,
    deleteOne
};