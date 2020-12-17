const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlue("\n\nThis program will get a date of birth from the user and tells you whether it is a prime number or not.\n\n"));

function checkPrime(date) {
  let [bornDay, bornMonth] = date.split('/');
  if (Number.isInteger(Number(bornDay)) && Number.isInteger(Number(bornMonth))) {
    let sumOfDate = Number(bornDay) + Number(bornMonth);
    console.log(bornDay, bornMonth, sumOfDate);
    let isPrime = true;
    for (let i = 2; i < sumOfDate; i++) {
      if (sumOfDate % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(chalk.yellowBright("\nHey, Your birth date is a prime number\n"));
      console.log(chalk.yellowBright("You can share it on social media.\n"));
    }
    else if (!isPrime) {
      console.log(chalk.yellowBright("Hey, Your birth date is not a prime number"));
    }
  }

  else {
    console.log(chalk.redBright("\nPlease enter the date in valid format\n"));
    console.log(chalk.redBright("\nClick on the run button to try again.\n"));
  }

}

let dateOfBirth = readlineSync.question("Enter your date of birth in DD/MM format e.g. 07/09\n\n");
checkPrime(dateOfBirth);