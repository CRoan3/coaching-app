const express = require('express');
const router = express.Router();
const dataService = require("../db_services/account_shipper")
const {hashPassword} = require("../JSutilities/hasher");
const { tsOptionMap, genOptionMap } = require('../JSutilities/optionMappings');



router.post('/register', async (req, res) => {
    const { email, psw, fname, gender, age, lname, ts,username } = req.body;


    // Check for missing data and handle accordingly
    if (!email || !psw || !fname || !gender || !age || !lname || !ts || !username) {
        return res.status(400).json({ message: "Missing required data in request body" });
    }

    try {
        const passwordHash = await hashPassword(psw);
        const gender_mapped = genOptionMap(gender);
        const ts_mapped = tsOptionMap(ts);
        const dataToSave = { email, password_hash: passwordHash, fname, gender: gender_mapped, birthdate: age, lname, first_training_status: ts_mapped, username };
        const result = await dataService.saveData(dataToSave);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error saving data" });
    }
});

module.exports = router;