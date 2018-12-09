/**
 * create by fky
 * create on 12/9/2018
 */
import {UserRoleModel} from "./userrole.model";

export class UserModel {

    userName:string;
    email:string;
    displayName:string;

    userRoles:Array<UserRoleModel>;

    constructor(){}
}