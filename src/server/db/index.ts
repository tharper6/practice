import * as mysql from 'mysql';
import config from '../config'

export const connection = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if(err) reject (err);
            resolve(results)
        })
    })
}

import books from './queries/books';
import users from './queries/users';
import categories from './queries/categories';
import tokens from './queries/tokens'

export default {
    books,
    users,
    categories,
    tokens
}