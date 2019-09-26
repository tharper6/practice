import {Query} from '../../db';

const All = () => Query('SELECT * FROM categories')
const One = (id: number) => Query('SELECT * FROM categories WHERE id = ?', [id])

export default {
    All,
    One
}