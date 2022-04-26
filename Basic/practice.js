// 1st leap year

function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

isLeaYear(2024);


// 2nd find Vowel


const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
    let count = 0;
    const letter = Array.from(sentence);

    letter.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}

console.log(countVowels("I love Bangladesh"));