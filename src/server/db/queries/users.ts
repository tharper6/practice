import {Query} from '../../db';

const findOneByEmail = (email: string) => Query(`SELECT * FROM users WHERE email = ?`, [email]);
const findOneById = (id: number) => Query(`SELECT * FROM users WHERE id = ?`, [id]);
const insert = (email: string, password: string, name: string) => Query('INSERT INTO users (email, password, name) VALUE (?)', [[email, password, name]])

export default {
    findOneByEmail,
    findOneById,
    insert
}