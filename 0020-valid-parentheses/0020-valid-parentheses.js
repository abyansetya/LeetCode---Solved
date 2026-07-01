/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {")" : "(", "}": "{", "]" : "["}
    const res = []

    for(letter of s){
        if(letter == "(" || letter == "[" || letter == "{" ){
            res.push(letter)
        }
        else{
            const top = res.pop()
            if(top !== map[letter]) return false
        }
    }

    return res.length == 0
};

//map = {")": "(", "}": "{", "]" : "["}
//if(set.first[]  )