/**
 * create by fky
 * create on 12/5/2018
 */
import {decodeJwtPayload} from "../service/token.service";

export class AuthToken {

    username: string = '';

    exptime: number = -1;

    isValid(): boolean {
        if (this.username !== '' && this.exptime > 0) {
            const date = new Date(0);
            date.setUTCSeconds(this.exptime);
            if (new Date() < date) {
                return true
            }
        }
        return false;

    }

    constructor(tokenString: string) {
        if (tokenString) {
            const jsonStr = decodeJwtPayload(tokenString);
            if (jsonStr && jsonStr.hasOwnProperty('exp')) {
                this.exptime = jsonStr.exp;
            }

            if (jsonStr && jsonStr.hasOwnProperty('username')) {
                this.username = jsonStr.username;
            }
        }
    }
}