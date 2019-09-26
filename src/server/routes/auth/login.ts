import * as express from 'express';
import * as passport from 'passport';

import {CreateToken} from '../../utils/security/tokens'

const router = express.Router();

router.post('/', passport.authenticate('local'), async(req: any, res) => {
    try {
        // res.json(req.user)
        let token = await CreateToken({ userid: req.user.id });
        res.json({
            token,
            userid: req.user.id,
            role: req.user.role
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500).json('We fudged up!')
    }
})

export default router;