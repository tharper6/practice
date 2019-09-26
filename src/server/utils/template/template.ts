import {Router} from 'express';

const router = Router();

router.use();
router.get('/test', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;