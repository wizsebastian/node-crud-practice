const Pets = require('../models/pets');
const { validationResult } = require('express-validator');


const errorVal = (errors) => {
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
}
exports.createPets = async (req, res) => {
    errorVal(validationResult(req))
    try {
        const pet = new Pets(req.body);
        await pet.save();
        res.json({ pet });
    }
    catch (e) {
        console.log(e);
        res.status(500).send('we have a error');
    }
}

exports.getPets = async (req, res) => {
    errorVal(validationResult(req))
    try {
        const pets = await Pets.find();
        res.json({ pets });
    }
    catch (e) {
        console.log(e);
        res.status(500).send('We have error');
    }
}

exports.deletePet = async (req, res) => {
    errorVal(validationResult(req));
    try {
        const pets = await Pets.updateOne(
            { _id: req.body._id },
            { active: false }
        );
        res.json({ pets });
    }
    catch (e) {
        console.log(e);
        res.status(500).send('We have error');
    }
}

exports.updatePet = async (req, res) => {
    errorVal(validationResult(req));
    try {
        const pets = await Pets.updateOne(
            { _id: req.params.id },
            req.body)
            res.json(pets)
    }
    catch (e) {
        console.log(e)
        res.status(500).send('ERROR', e)
    }
}