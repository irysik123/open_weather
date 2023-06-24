/* ------Завдання 1----------*/
/* function palindrom(word) {
    for(let i=0; i<Math.floor(word.length/2); i++) {
        word = word.toLowerCase();
        let letter = word[i];
        let lastLetterIndex = word.length - 1 - i;
        let lastLetter = word[lastLetterIndex]
        console.log(letter, lastLetter)
        if(letter!==lastLetter) {
            return false
        } 
    }
    return true
}
console.log(palindrom("Olololo")) */

/* ---------Завдання 2 -----------*/
/* function multiplyWord(num,word) {
    const object = {
        one: 1,
        two: 2,
        three:3,
        four: 4,
        five: 5
    } 
    return object[word]*num */
    /* if(word==="one") {
       return 1*num
    } else if(word==="two") {
        return 2*num
    } else if(word==="three") {
        return 3*num
    } else if(word==="four") {
        return 4*num
    } else if(word==="five") {
        return 5*num
    } */
/* } */
/* console.log(multiplyWord(2, "five")) */

/* ---------Завдання 2 -----------*/

/* function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
		res.push(function(){
			console.log(i)
		})
	}
	return res
}

console.log(buildFun(3))

console.log(buildFun(3)[0]()) */