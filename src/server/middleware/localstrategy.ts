import * as passport from 'passport';
import * as localStrategy from 'passport-local';
import db from '../db';
import {ComparePassword} from '../utils/security/password';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new localStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        let [author]: any = await db.users.findOneByEmail(email);
        if (author && ComparePassword(password, author.password)) {
            done(null, author)
        } else {
            done(null, false)
        }
    } catch (error) {
        console.log(error)
    }
}))