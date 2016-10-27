function checkAnagram(string1, string2){
    function stringToArray(str){
        str = str.split("").sort().join().trim();   
        return str;       
    }    
    if(string1.length == string2.length && stringToArray(string1) === stringToArray(string2)) {
     return true;   
    }
    else {
        return false;
    }
}
