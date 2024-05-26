const userModels = require('../models/User');

exports.userRegister = async(model) => {
    return await userModels.save(model);
};