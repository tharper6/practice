import { Query } from '../index';

const All = () => Query('SELECT * FROM books');
const One = (id: number) => Query('SELECT * FROM books WHERE id = ?', [id]);
const Post = (title: string, author: string, categoryid: number, price: number) => Query('INSERT INTO books (title, author, categoryid, price) VALUES(?)', [[title, author, categoryid, price]]);
const Edit = (title: string, author: string, categoryid: number, price: number, id: number) => Query('UPDATE books SET title = ?, author = ?, categoryid = ?, price = ? WHERE id = ?', [title, author, categoryid, price, id]);
const Delete = (id: number) => Query('DELETE FROM books WHERE id = ?', [id])

export default {
    All,
    One,
    Post,
    Edit,
    Delete
}