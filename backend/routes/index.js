const { Router } = require("express")
const router = Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const pool = require('../database.js');
const { checkAuthenticated, checkNotAuthenticated } = require('./authenticate')


router.get("/user", checkAuthenticated, (req, res) => {
    res.send(req.user);
});

// router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
router.post('/login', (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) return res.status(400).json({
            success: false,
            message: 'Not User Found',
            redirectUrl: '/login'
        });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                // res.send("Successfully Authenticated");
                return res.status(200).json({
                    success: true,
                    redirectUrl: '/page'
                })
                // console.log(req.user);
            });
        }
    })(req, res, next);
});

// router.post('/register', checkNotAuthenticated, async (req, res) => {
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password, 10
        )
        const newUser = {
            // id: Date.now().toString(),
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
        await pool.query('INSERT INTO tbuser set ?', [newUser]);
        res.send("User Created");
    } catch {
        res.send("Error");
    }
})
router.delete('/logout', checkNotAuthenticated, (req, res) => {
    req.logOut(),
        res.redirect('/login')
})

module.exports = router;