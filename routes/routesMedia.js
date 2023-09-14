const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const mediaController = require('../controllers/mediaController');

// Маршрути для CRUD операцій
// router.post('/createHero', validatehero ,superheroController.createSuperhero);

router.post('/post/uploadMedia',  mediaController.uploadMedia);
router.post('/post/deleteMedia', mediaController.deleteMedia);

module.exports = router;