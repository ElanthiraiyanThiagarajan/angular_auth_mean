const userModels = require('../models/User');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const userResponse = req.body;
        const existingUser = await userModels.findOne({ email: userResponse.email });
        if (existingUser) {
            const hashedPassword = await bycrypt.hash(userResponse.password, 10);
            userResponse.password = hashedPassword;
            userModels.findOneAndUpdate({ _id: existingUser._id }, userResponse, { upsert: true }).then((result) => {
                let payload = { subject: result._id };
                let token = jwt.sign(payload, process.env.JWT_SECRET);
                res.status(200).send({message: 'Update successful', token });
            }).catch((error) => {

                res.status(500).json({
                    message: error.message
                });

            });

        } else {
            const user = new userModels(userResponse);
            await user.save();
            let payload = { subject: user._id };
            let token = jwt.sign(payload, process.env.JWT_SECRET);
            res.status(200).send({message: 'Save successful', token });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const userResponse = req.body;
        const user = await userModels.findOne({ email: userResponse.email });
        if (!user) {
            res.status(404).json({
                message: 'Invalid email'
            });
        } else {
            const isMatch = await bycrypt.compare(userResponse.password, user.password);
            if (isMatch) {
                const token = jwt.sign({ subject: user._id }, process.env.JWT_SECRET);
                res.status(200).json({
                    message: 'Login successful',
                    token
                });
            } else {
                res.status(400).json({
                    message: 'Invalid password'
                });
            }
            // if (userResponse.password != user.password) {
            //     res.status(404).json({
            //         message: 'Invalid password'
            //     });
            // } else {
            //     let payload = { subject: user._id };
            //     let token = jwt.sign(payload, process.env.SECRET_KEY);
            //     res.status(200).send({token});
            // }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};