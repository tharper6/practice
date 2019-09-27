import {Router} from 'express';
import booksRouter from './books';
import categoryRouter from './categories'
import * as passport from 'passport';
import { tokenCheckpoint } from '../../middleware/authCheckpoints';

const router = Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

router.use(tokenCheckpoint)
router.use('/books', booksRouter);
router.use('/categories', categoryRouter)

export default router;