const express = require('express');
const router = express.Router();
const user_emails = require('../db_services/get_user_emails');

/* GET programming languages. */
router.get('/users', async function(req, res, next) {
    try {
        res.json(await user_emails.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting users: `, err.message);
        next(err);
    }
});

module.exports = router;