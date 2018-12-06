/**
 * create by fky
 * create on 12/5/2018
 */
import {StatusModel} from "../models/status.model";


export function decodeJwtPayload(payload: string): any {

    if (payload.length === 0) {
        return new StatusModel("100", "Cannot extract from an empty payload.");
    }

    const parts = payload.split('.');

    if (parts.length !== 3) {
        return new StatusModel("101", `The payload ${payload} is not valid JWT payload and must consist of three parts.`);
    }

    let decoded;
    try {
        decoded = urlBase64Decode(parts[1]);
    } catch (e) {
        return new StatusModel("102",
            `The payload ${payload} is not valid JWT payload and cannot be parsed.`);
    }

    if (!decoded) {
        return new StatusModel("103",
            `The payload ${payload} is not valid JWT payload and cannot be decoded.`);
    }
    return JSON.parse(decoded);
}


export function urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
            throw new Error('Illegal base64url string!');
        }
    }
    return b64DecodeUnicode(output);
}

export function b64decode(str: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output: string = '';

    str = String(str).replace(/=+$/, '');

    if (str.length % 4 === 1) {
        throw new Error(`'atob' failed: The string to be decoded is not correctly encoded.`);
    }

    for (
        // initialize result and counters
        let bc: number = 0, bs: any, buffer: any, idx: number = 0;
        // get next character
        buffer = str.charAt(idx++);
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
        // try to find character in table (0-63, not found => -1)
        buffer = chars.indexOf(buffer);
    }
    return output;
}

// https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
export function b64DecodeUnicode(str: any) {
    return decodeURIComponent(Array.prototype.map.call(b64decode(str), (c: any) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}