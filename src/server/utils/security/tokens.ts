import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config'
import db from '../../db';

export const CreateToken = async(payload: IPayload) => {
    let tokenid: any = await db.tokens.insert(payload.userid);
    payload.tokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await db.tokens.update(payload.tokenid, token);
    return token;
}

export const ValidToken = async(token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid]: any = await db.tokens.findOneByIdAndToken(payload.tokenid, token);
    // console.log(accesstokenid)
    if(!accesstokenid) {
        throw new Error('Invalid Token')
    } else {
        return payload;
    }
}

export interface IPayload {
    tokenid?: any,
    userid: number;
    unique?: string
}