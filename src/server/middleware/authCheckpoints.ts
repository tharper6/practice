import * as passport from 'passport';
import { RequestHandler } from 'express';

export const tokenCheckpoint: RequestHandler = (req:any, res, next) => {
    return passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
};

export const isAdmin: RequestHandler = (req: any, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401)
    } else {
        return next();
    }
};