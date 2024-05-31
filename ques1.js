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
