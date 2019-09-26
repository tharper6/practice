import {Router} from 'express';
import DB from '../../db'
import {isAdmin} from '../../middleware/authCheckpoints'

const router = Router();

router.get('/', async (req, res) => {
    try {
        let books = await DB.books.All();
        res.json(books)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.get('/:id', async (req, res) => {
    try {
        let [book]: any = await DB.books.One(req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.post('/', isAdmin, async (req, res) => {
    try {
        let book = await DB.books.Post(req.body.title, req.body.author, req.body.categoryid, req.body.price);
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.delete('/:id', isAdmin,  async (req, res) => {
    try {
        let book = await DB.books.Delete(req.params.id)
        res.json('Deleted!')
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    try {
        let book = await DB.books.Edit(req.body.title, req.body.author, req.body.categoryid, req.body.price, req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error);
        res.status(500).json('You messed up!')
    }
});

export default router;