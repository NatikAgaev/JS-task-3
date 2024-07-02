// task 1

let userNumber = +prompt("Write any 2-digit number", 24);

while(userNumber < 100) {
    userNumber += 7;
}

console.log(`Now your number became ${userNumber}`);

// task 2

let userLoopNumber = +prompt("Write how many times do you want to see a specific sentence?", 3);

while(userLoopNumber > 0) {
    console.log("I know how to use cycles");
    userLoopNumber--;
}

// task 3

let number3Digit = 100;

do {
    if(number3Digit % 10 == 0) {
        console.log(number3Digit);
    }
    number3Digit++;
} while(number3Digit <= 999);

// task 4

let initialNumber = 10;
let sum = 0;

while(initialNumber < 100) {
    if(initialNumber % 2 != 0) {
        sum += initialNumber;
    }
    initialNumber++;
}

console.log(sum);

// task 5

let userHugeNumber = +prompt("Choose a big number(4-digit and more)", 2000);

let counter = 100;
let container = 0;

while(counter < 1000) {
    if(userHugeNumber % counter == 0) {
        console.log(counter);
        container += counter;
    }
    counter++;
}

console.log(`This is a some of all 3-digit number divisors: ${container}`);

// task 6

let userSpecialNumber = +prompt("Choose a special number", 37);

let arr =[];

while(userSpecialNumber > 0) {
    arr.push(userSpecialNumber);
    for(let i = userSpecialNumber - 1; i > 1; i--) { 
        if(userSpecialNumber % i == 0) {
            arr.pop();
            break;
        }
    }
    userSpecialNumber--;
}

console.log(`These are prime numbers: ${arr}`);

// task 7

let chosenNumber = +prompt("Choose any number", 7);

for(let i = 0; i < 10; i++) {
    chosenNumber *= 2;
}

console.log(chosenNumber);

// task 8

let userText = prompt("Write down any sentence, please", "How is your day?");

let userReverseText = "";

for(let i = userText.length - 1; i >= 0; i--) {
    userReverseText += userText[i];
}

console.log(`Here is your text in reverse mode:: ${userReverseText}`);

// task 9

let userLookingText = prompt("Try to write a huge text with as many . as possible");

for (let i = 0; i < userLookingText.length; i++) {
    if(userLookingText[i] == ".") {
        console.log(i);
    }
}

// extra task: Fibonacci

let userCounter = +prompt("Please, write any number for counting process", 5);
let originalContainer = 0;
let nextNumber = 1;

for (let i = 0; i < userCounter; i++) {
    nextNumber += originalContainer;
    originalContainer = nextNumber - originalContainer;
    console.log(nextNumber);
}