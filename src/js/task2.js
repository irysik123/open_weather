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

/*    function hasSurvived(attackers, defenders) {
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
   console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); */

/*   function max(...arg) {
    arg = arg.flat(Infinity)
    let maxN = 0
    console.log(arg)
    for(let i = 0; i<arg.length; i++) {
      if(arg[i] < arg[i+1]) {
        maxN = arg[i+1]
      } else {
        maxN = arg[i]
      }
    }
    return maxN
  }
  
 console.log((max(1,2,[3,[4]])))
 console.log((max(1,2,[3,4]))) */

/*  function min(...arg) {
  arg = arg.flat(Infinity)
  let minN = arg[0]
  for(let i = 0; i<arg.length; i++) {
    if(arg[i] <= minN) {
      minN = arg[i]
    }
    else if(arg[i] > minN) {
        minN = arg[0]
      } else {
        minN = NaN
      }
  }
  return minN
}
console.log(min()) */

/* function max(...arg) {
  arg = arg.flat(Infinity)
if(arg.length == 0) {
  return 0
}
  let maxN = arg[0]
  for(let i = 0; i<arg.length; i++) {
    
    if(arg[i] >= maxN) {
      maxN = arg[i]
    } else { 
      if(isNaN(arg[i]) {
         return NaN
         })
    }
  }
  return maxN
}

isNaN() */

/* function calculateTotalTime(customers, n) {
  const checkoutTimes = new Array(n).fill(0); // Initialize current checkout times for each till

  for (const customer of customers) {
    // Find the till with the minimum current checkout time
    const minTime = Math.min(...checkoutTimes);
    console.log("minTime=",minTime)
    // Add the checkout time of the current customer to the selected till's current time
    const selectedTill = checkoutTimes.indexOf(minTime);
    console.log('selectedTill=', selectedTill)
    checkoutTimes[selectedTill] += customer;
  }

  return Math.max(...checkoutTimes);
}

console.log(calculateTotalTime([6,10,2,5,3],3)) */

/* bonus = function(arr, s) {
  let minAbsence = Math.min(...arr)
  let prop = []
  for (const item of arr) {
    prop.push(minAbsence / item)
    console.log(prop)
  }
  let sum = prop.reduce((acc, val) => acc + val)
  console.log(sum)
  let base = s / sum
  console.log(base)
  let result = prop.map((val) => val * base)
  console.log(result)
}

console.log(bonus([18, 15, 12], 851)) */

/* function cupAndBalls(b, arr) {
  let ballCup = b;
  arr.forEach(num => {
    if (num[0] == ballCup) {
      ballCup = num[1];
    } else if (num[1] == ballCup) {
      ballCup = num[0];
    }
  })
  return ballCup
}

console.log(
  cupAndBalls(1, [
    [2, 3],
    [1, 2],
    [1, 2],
  ])
); */

// function buyTofu(cost, box) {
//   let result = [];
//   let newBox = box.split(' ');
//   let monN = 0;
//   let monmeN = 0;
  

//   for (let item of newBox) {
//     if (item === 'mon') {
//       monN += 1;
//     } else if (item === 'monme') {
//       monmeN += 1;
//     }
//   }

//   let monmeToUse = monmeN * 60

//   result[0] = monN;
//   result[1] = monmeN;
//   result[2] = monmeToUse + monN;

//   let remaining = cost
//   let numCoins = 0
  
//   let minMon = remaining % 60 
  
//   if (minMon <= result[0]) {
//     numCoins += minMon
//     monN -= minMon
//     remaining -= minMon
    
//     const monmeCoins = Math.floor(remaining / 60)
    
//     if (monmeCoins <= result[1]) {
//       numCoins += monmeCoins;
//       remaining -= monmeCoins * 60 ;
//     } 
//       else if (monmeCoins > result[1]){
//       remaining -= result[1] * 60
//       numCoins += result[1]
        
//         if (remaining <= monN) {
//         numCoins += remaining
//       }   else {
//             return "leaving the market"
//       }
//     } 
//   } else {
//     return "leaving the market";
//   }
  
//   result[3] = numCoins;

//   return result;
// }

/* function buyTofu(cost, box) {
  let newBox = box.split(' ');

  const coins = {
    monme: 60,
    mon: 1
  };

  const extractedCoins = newBox.filter(item => Object.keys(coins).includes(item));
  
  const count = extractedCoins.reduce((count, coin) => {
    count[coin]++;
    return count;
  }, { monme: 0, mon: 0 });

  const sum = extractedCoins.reduce((total, coin) => total + coins[coin], 0);

  if (sum < cost) {
    return "leaving the market";
  }

  let remaining = cost;
  let numCoins = 0;

  if (remaining >= coins.monme) {
    const monmeCoins = Math.floor(remaining / coins.monme);
    console.log("monmeCoins = ", monmeCoins)
    numCoins += monmeCoins;
    remaining -= monmeCoins * coins.monme;
  }

  if (remaining >= coins.mon) {
    const monCoins = Math.floor(remaining / coins.mon);
    numCoins += monCoins;
    remaining -= monCoins * coins.mon;
  }

  if (remaining > 0) {
    return "leaving the market";
  }

  return [count.mon, count.monme, sum, numCoins];
} */
/* 
var box =
    'monme mon mon monme',
  cost = 1;
console.log(buyTofu(cost, box));


console.log( Math.floor(122 / 60)) */


/* function numberOfPairs(gloves)
{
 const glovesArr = {}

 for(let i = 0; i < gloves.length; i++) {
  if (glovesArr[gloves[i]]) {
    glovesArr[gloves[i]] += 1
  } else {
    glovesArr[gloves[i]] = 1
  }
  console.log(glovesArr)
 }
 let numberGloves = Object.values(glovesArr)

 let result = numberGloves.reduce((acc, val) => {
  if(val >= 2) {
    acc += Math.floor(val / 2)
  }
  return acc
 },0)
return result
}
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])) */


// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

/* function betweenExtremes(numbers) {
  let min = numbers[0]
  let max = numbers[0]
  
  numbers.forEach(element => {
    if(element > max) {
      max = element
    } else if (element < min) {
      min = element
    }
  })
  let result = max - min
  return result
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12])) */


function keepOrder(ary, val) {
  let result = 0
  for (let i = 0; i < ary.length; i++) {
    if (val <= ary[i]) {
      result = i
    }
  }
  return result
}

console.log(keepOrder([1, 2, 3, 4], -1))