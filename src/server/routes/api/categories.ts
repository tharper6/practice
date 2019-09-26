import {Router} from 'express';
import DB from '../../db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let categories = await DB.categories.All();
        res.json(categories)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.get('/:id', async (req, res) => {
    try {
        let [category]: any = await DB.categories.One(req.params.id)
        res.json(category)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;