/**
 * create by fky
 * create on 12/5/2018
 */

export  class StatusModel {
     private _status :  string = "";
     private _message : string = "";


     constructor( status: string, msg : string ){
         this._status = status;
         this._message = msg;
     }


    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}