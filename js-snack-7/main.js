

const randomNumber = [];

let sumRandomNumber = 0;

for (i = 0; i < 10; i++) {
    randomNumber.push(Math.floor(Math.random() * 100));
    sumRandomNumber += randomNumber;
    console.log(sumRandomNumber);

}



