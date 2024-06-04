//write a javascript function to reverse a number.
function reverseNumber(){
    
const number='23456';

const reverseNum=number.split('').reverse().join('');
console.log(reverseNum);
}

reverseNumber();


console.log('----------------------------------------')

//note:split method does't work on numbers, it works only on strings.

//write a javascript function that returns a passed string with letters in alphabetical order.
function alphabeticalOrder(){
    
const str='the lazy forg jump on the well';

const strSort=str.split(' ').sort().join(' ');
console.log(strSort)
}

    alphabeticalOrder();


    console.log('----------------------------------------')

/*note:when we write string and the first letter is capital and rest of the the letter is
capital then the capital letter is the heighest priority
But if we gives spcaing in inverted comma the words first letter will count as priority*/


/*write a javascript function that accepts the string  and counts the
number of vowels within the string*/


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    
    let count = 0;
    
        const vowelEtract=str.split('')
        console.log(vowelEtract)

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const exampleString = "this is javascript file here";
console.log(countVowels(exampleString));  


console.log('----------------------------------------');


/*write a javscript function that accepts a string as a parameter and convert the first letter of
each word of the string in uppercase*/

function changeUpperCase(str){
    let letters='abcdefghijklmnopqrstuvwxyz'

    console.log(`Lets splits the sentences`)
    let change=str.split(' ');
    console.log(change)
     let capitalize=change.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
     })
     return capitalize.join(' ');

}

const string='the lazy frog jump on the tree'
console.log("Before change:\n", string)
console.log("The change string is:\n",changeUpperCase(string));

console.log('----------------------------------------');

/*write a javscript program to get the current date */


function currentDate(){
    const days=new Date;
    const day=days.getDate();
    const month=days.getMonth()+1;
    const year=days.getFullYear();

    let fullDate=`The current date is:${day}-${month}-${year}`;

    return fullDate;
}

console.log(currentDate());

console.log('----------------------------------------');

/*write a javascript program to calculate the number of days left untill the next christmas */

function christmasDay(){
    let day=new Date;
    
    const CurrentYear=day.getFullYear();

    let isChristmas=new Date(CurrentYear,11,25);

    console.log(isChristmas)

    if(day > isChristmas){
        isChristmas=setFullYear(CurrentYear + 1,11,25)
    }
    let difference=isChristmas  - day;

    const leftDays=Math.ceil(difference / (1000 * 60 * 60 * 24));

    return leftDays;
}
console.log(`The next christmas will be ${christmasDay()} days`);

console.log('----------------------------------------');

/* write a program that accept two integer and display the larger */

const prompt=require("prompt-sync")();

//  const greater=()=>{
    
// let num1=prompt("Enter first number:");
// let num2=prompt("Enter second number:");

// if(num1>num2){
//     console.log("num1 is greater")
// }else{
//     console.log("num2 is greater")
// }
//  }

//  greater();

 /*write a javascript function to check whether as input is array or not */

 function checkArray(user){
   
    return Array.isArray(user);
 }

 console.log(checkArray([1,2,3,4]));


 console.log('----------------------------------------');

 /*write a javascript function to clone an array */

 function clone(arr){
   return arr.slice(0);
 }

 const originalArray=[1,2,4,0]
 console.log(`original array is ${originalArray}`)
const cloneArray=clone(originalArray)
console.log(`clone array is ${cloneArray}`)

console.log(originalArray===cloneArray)


/*write a program to sort an array */

const array=[3, 8, 7, 6, 5, -4, 3, 2, 1]

const sortedArr=array.sort();
console.log(sortedArr);



