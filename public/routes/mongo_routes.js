const express = require('express');
const router = express.Router();
const models = require('../services/mongodb');

router.post('/exercises', async (req, res) => {
    // Validate the request body
    const { target_muscle_groups, equipmentRequired, reps_duration, duration_count, warnings, purpose, category } = req.body;
    const errors = [];

    // Perform basic validation (optional)
    if (!target_muscle_groups || !purpose || !category) {
        errors.push('Missing required fields');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const newExercise = new Exercise({
            target_muscle_groups,
            equipmentRequired,
            reps_duration,
            duration_count,
            warnings,
            purpose,
            category,
        });

        const savedExercise = await newExercise.save();
        res.status(201).json(savedExercise);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;