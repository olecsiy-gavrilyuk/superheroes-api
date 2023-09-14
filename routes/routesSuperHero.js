// routes/superheroes.js
const express = require('express');
const router = express.Router();
const superheroController = require('../controllers/heroesController');

// Маршрути для CRUD операцій
// router.post('/createHero', validatehero ,superheroController.createSuperhero);
router.post('/post/createHero',superheroController.createSuperHero);
router.get('/get/allHeroes', superheroController.getAllSuperHeroes);
router.post('/post/updateHero', superheroController.updateSuperHero);
router.post('/post/deleteHero', superheroController.deleteSuperHero);



module.exports = router;
