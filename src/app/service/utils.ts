/**
 * create by fky
 * create on 1/3/2019
 */

export default class Utils {
    static  propertyContainEmpty(object){
        console.log(object);
        if(object && Object.keys(object).length>0){
            let keys = Object.keys(object);
            for (let i of keys){
                // ignore id  property
                if(i === 'id'){
                    continue;
                }
                if(object[i] && object[i] !==""){
                    continue;
                }
                return true
            }
            return false;
        }

        return true;
    };
}