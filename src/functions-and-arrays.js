// Iteration #1: Find the maximum
function maxOfTwoNumbers(first, second) {
  if(first>second) return(first)
  else return(second)
}



// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(check) {

  if(check.length== 0) return null
  let store="";
  for (let element of check){
    if (element.length>store.length) store=element
  }
  return store;
}

console.log(findLongestWord(words))



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumMe) {
  let sum = 0
  for(let number of sumMe)
  { sum= sum+number
  }
  return sum
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10, [1,3]];

// Iteration #3.1 Bonus:
function sum(sumItAll) {
  let masum = 0;
  for( let adx of sumItAll){
    if(typeof adx==="object")
     {
       throw new Error("Unsupported data type sir or ma'am");
      }
    if(typeof adx === "string") masum += adx.length
    if(typeof adx === "number") masum+=adx
    if(typeof adx === "boolean"){
      switch(adx){
        case true : 
        masum+=1
        break;
      }
    }
  }

return masum

}

console.log(sum(mixedArr))




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrtocheck) {

  if(arrtocheck.length==0) return null
  let avg = 0
  let count = 0
  for(let number of arrtocheck){
    avg+=number
    count++
  }
  return(avg/count)
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrofstrings) {
    if (arrofstrings.length==0) return null
    let holdnumb=0
    let count= 0
    for(let newname of arrofstrings){
      holdnumb+=newname.length
      count++
    }
    return(holdnumb/count)
 }

// Bonus - Iteration #4.1

const mixedArravg = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mxarravg) {
  if (mxarravg.length==0)return null
  let maxarravgt = 0;
  let avgcount =0;
  if(mxarravg.lenght==0) return null
  for (let x of mxarravg){
    switch(typeof x){
      case "number": 
      maxarravgt+=x;
      break
      case "string":
         maxarravgt+=x.length;
         break;
      case "boolean":
        if(x==true)maxarravgt+=1
        break;
    }

    avgcount++
  }
  return (maxarravgt/avgcount)

}

console.log(avg(mixedArravg))

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(uniques) {
  if (uniques.length==0) return null
  let count = 0;
  let newarr=[]
  let isornot= false
  for(let wordd of uniques){
    isornot=newarr.includes(wordd)


    if( isornot== false)
    newarr.push(wordd)

  }
  return (newarr);
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(yaa, ww) {
  if (yaa.length==0) return null
  return (yaa.includes(ww))
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(lolo, xx) {
  let cc=0
  for( let many of lolo){
    if(many===xx) cc++
  }
  return cc

}



// Iteration #8: Bonus
const matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let results =[]

function greatestProduct(matrixx) {
  let co = 0
for(let raw of matrixx){
  let stop= raw.length
  stop-=4
  for(let numbers of raw){
    if (co>stop) continue;
    results.push(numbers*raw[co+1]*raw[co+2]*raw[co+3])
    co ++
  }
  co = 0
}
let cmn=1;
let cdue=0;
for(let column of matrixx){
  let sstop=matrixx.length
  sstop-=4
  for(let nm of column){
    if(cmn>=sstop)continue;
  results.push(nm*matrixx[cmn][cdue]*matrixx[cmn+1][cdue]*matrixx[cmn+2][cdue])
  cdue++
  }
  cmn++
}
let end = 0
for(let res of results){
  if(res>end)end=res
}

return end
}



console.log(greatestProduct(matrix))

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
