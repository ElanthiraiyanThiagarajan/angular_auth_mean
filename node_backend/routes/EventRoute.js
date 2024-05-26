const express = require('express');
const eventRouter = express.Router();

const eventController = require('../controllers/EventController');

eventRouter.get('/events', eventController.events);
eventRouter.get('/specials', eventController.specials);
eventRouter.post('/saveSpecialsEvents', eventController.specialsSaveAll);
eventRouter.post('/saveEvents', eventController.eventSaveAll);

eventRouter.get('/', eventController.default);


module.exports = eventRouter;