/*var isIsomorphic = function(s, t){

    let obj1 = {},
        obj2 = {}

    for (let i = 0; i < s.length; i++){  
        if(obj1[s[i]]!==obj2[t[i]]){
            return false
        }else{
            obj1[s[i]] = i,
            obj2[t[i]] = i
        }
    }
    return true

}
*/

var isIsomorphic = function(s, t){
    if(s.length !== t.length ){   //check if these two strings are equal
        return false;
    }
    let sHashMap = {
    }
    let tHashMap = {
    }
    let curr = 0;
    while(curr <= s.length){
        if(sHashMap[s[curr]] !== tHashMap[t[curr]]){
            return false;
        }
        sHashMap[s[curr]] = curr + 1
        tHashMap[t[curr]] = curr + 1
        curr++
    }
    return true;
}
