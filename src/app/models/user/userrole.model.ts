/**
 * create by fky
 * create on 12/9/2018
 */

export  class  UserRoleModel {

    id:number;
    roleName : string;
    description:string;

    constructor(userid:number, name:string,desc:string){
        this.id=userid;
        this.roleName=name;
        this.description = desc;
    }
}
