const bcrypt = require("bcryptjs");
const pool = require('./database')
const localStrategy = require("passport-local").Strategy;
function initialize(passport) {
    const getUserById = async (id) => {
        const data = await pool.query("select * from tbuser where userid=?", [id])
        const user = JSON.parse(JSON.stringify(data[0]))
        return user
    }
    const authenticator = async (email, password, done) => {
        const data = await pool.query("select * from tbuser where email like ?", [email])
        const user = JSON.parse(JSON.stringify(data[0]))
        if (!user) {
            return done(null, false, { message: 'No user with that email' })
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrategy({ usernameField: 'email' }, authenticator))
    passport.serializeUser((user, done) => done(null, user.userid))
    passport.deserializeUser(async (id, done) => {
        return done(null, await getUserById(id))
    })

}


module.exports = initialize