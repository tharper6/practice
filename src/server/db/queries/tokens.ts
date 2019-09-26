import {Query} from '../index';

const findOneByIdAndToken = (id: number, token: string) => Query(`SELECT * FROM tokens WHERE id = ? AND token = ?`, [id, token]);
const insert = (userid: number) => Query(`INSERT INTO tokens (userid) VALUE (?)`, [[userid]]);
const update = (id: number, token: string) => Query(`UPDATE tokens SET token = ? WHERE id = ?`, [token, id])

export default {
    findOneByIdAndToken,
    insert,
    update
}