const specialEvent = require('../models/SpecialEvents');
const event = require('../models/Events');


exports.events = async (req, res) => {
    try {
        const result = await event.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.saveEvent = async (req, res) => {
    // try {
        const result = await event.insertMany(req.body);
        return result;
        // res.status(200).json(result);
    // } catch (error) {

        // res.status(500).json(error);
    // }
}

exports.specialEvents = async (req, res) => {
    try {
        const result = await specialEvent.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.saveSpecialEvents = async (req, res) => {
    try {

        const result = await specialEvent.insertMany(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};
