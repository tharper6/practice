import {Router} from 'express';

import {HashPassword} from '../../utils/security/password'
import {CreateToken} from '../../utils/security/tokens'
import db from '../../db';

const router = Router();

router.post('/', async(req, res) => {
    try {
        let newUser = {...req.body};
        newUser.password = HashPassword(req.body.password);
        let result: any = await db.users.insert(newUser.email, newUser.password, newUser.name)
        let token = await CreateToken({ userid: result.insertId });
        res.json({
            token,
            userid: result.insertId,
            role: 'admin'
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;