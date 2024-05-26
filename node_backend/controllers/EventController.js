const eventService = require('../services/EventService');

exports.events = async (req,res) => {
   await eventService.events(req,res);
};


exports.specials = async (req,res) => {
    await eventService.specialEvents(req,res);
};

exports.specialsSaveAll = async (req,res) => {
    await eventService.saveSpecialEvents(req,res);
};

exports.eventSaveAll = async (req,res) => {
    await eventService.saveEvent(req,res).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
};



exports.default = async (req, res) => {
    res.send('Api Called!');
};