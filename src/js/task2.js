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


/* function lastSurvivor(letters, coords) {
    letters = letters.split("")
    coords.forEach((index) => {
      letters.splice(index, 1)
    })
    return letters.toString()
  }

  console.log(lastSurvivor("abc",[0,1])) */

/*   function duplicateCount(text){
    text = text.toLowerCase()
     text = text.split('')
     let result = 0
     for(let i=0; i<text.length;i+=1) {
       if(text.includes(text[i])) {
         result+=1
         console.log(i,result)
       } else {
        return 
       }
     }
     return result
   } */

   function hasSurvived(attackers, defenders) {
     let survivors = 0;
     let attSurvivors = 0;
     defenders.forEach((i, index) => {
       if (i > attackers[index]) {
         survivors += 1;
       } else if (i < attackers[index]) {
         attSurvivors += 1;
       }
     });

     if (attackers.length !== defenders.length || survivors === attSurvivors) {
       let attackersPower = attackers.reduce((acc, value) => acc + value, 0);
       let defendersPower = defenders.reduce((acc, value) => acc + value, 0);
       if (defendersPower >= attackersPower) {
         return true;
       } else {
         return false;
       }
     }
     if (survivors >= attSurvivors) {
       return true;
     } else {
       return false;
     }
   }
   console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]));