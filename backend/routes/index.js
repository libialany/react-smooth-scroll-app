const { Router } = require("express")
const router = Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const pool = require('../database.js');
const { checkAuthenticated, checkNotAuthenticated } = require('./authenticate')
router.get("/user", checkAuthenticated, (req, res) => {
    res.send(req.user);
});

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password, 10
        )
        const newUser = {
            // id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
        await pool.query('INSERT INTO tbuser set ?', [newUser]);
        return res.send("User Created");
    } catch {
        return res.send("Error");
    }
})
router.delete('/logout', checkNotAuthenticated, (req, res) => {
    req.logOut(),
        res.redirect('/login')
})

module.exports = router;