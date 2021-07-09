const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const Pet = require('../models/pets');
const petsController = require('../controllers/pets');

// route create pet
router.post('/', [
    check('name', 'the field name its necesary').not().isEmpty(),
    check('specie', 'the field specie its necesary').not().isEmpty(),
    check('sex', 'the field sex its necesary').not().isEmpty(),
    check('age', 'the field age its necesary').not().isEmpty(),
    check('owner', 'the field owner its necesary').not().isEmpty(),

], petsController.createPets)

// get
router.get('/', petsController.getPets)

// delete
router.put('/delete', petsController.deletePet)

//update
router.put('/:id', petsController.updatePet)

module.exports = router;