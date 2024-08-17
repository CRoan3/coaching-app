const express = require('express');
const router = express.Router();
const {genOptionMap, tsOptionMap} = require("../services/optionMappings");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const db = require('../services/mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.post('/register', async (req,res,next)=>{
    try{
        const { email, psw, fname, gender, birthdate, lname, ts,username } = req.body;
            if (!email || !psw || !fname || !gender || !birthdate || !lname || !ts || !username) {
                return res.status(400).json({ message: "Missing required data in request body" });
            }
            const salt = genSaltSync(11);
            let hashedPassword = hashSync(psw,salt)
        const gender_mapped = genOptionMap(gender);
        const ts_mapped = tsOptionMap(ts);
        const user = await db.insertUser({email,fname,gender: gender_mapped,birthdate,lname,ts: ts_mapped,username});
        const userPwSaveable = await db.insertUserPw({email,hashedPassword,username});
        const jsonToken = jwt.sign({user: user}, process.env.JWT_LOGIN_SECRET, { expiresIn: '30m'} );
        res.cookie('token', jsonToken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); //we add secure: true, when using https.
        res.json({token: jsonToken});
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
});





router.post('/login', async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        let user = await db.getPwByUsername(username);

        if(!user){
            return res.json({
                message: "Invalid email or password"
            })
        }
        console.log(user.pw_hash)
        const isValidPassword = compareSync(password, user.pw_hash);
        if(isValidPassword){
            user.password = undefined;
            const jsonToken = jwt.sign({user: user}, process.env.JWT_LOGIN_SECRET, { expiresIn: '30m'} );
            res.cookie('token', jsonToken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); //we add secure: true, when using https.

            res.json({token: jsonToken});

            //return res.redirect('/mainpage') ;

        }  else{
            return res.json({
                message: "Invalid email or password"
            });
        }

    } catch(e){
        console.log(e);
    }
});

router.post('/logout', async (req, res) => {
    // ... token invalidation logic
});

router.post('/refresh', async (req, res) => {
    // ... token refresh logic
});

router.post('/account', async () => {

});


module.exports = router;
