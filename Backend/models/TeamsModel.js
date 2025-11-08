const { model } = require('mongoose');

const { TeamFormSchema } = require('../schemas/TeamFormSchema');

const TeamsModel = new model("Team", TeamFormSchema);

module.exports = {TeamsModel};