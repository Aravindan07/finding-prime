const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlue("\n\nThis program will get a date of birth from the user and tells you whether it is a prime number or not.\n\n"));

let userName = readlineSync.question(chalk.greenBright("May I have your name ?\n\n"));

let dateOfBirth = readlineSync.question(chalk.cyanBright("\nEnter your date of birth in DD/MM format (E.g. 07/09)\n\n"));

function checkPrime(date) {
  let [bornDay, bornMonth] = date.split('/');
  if (Number.isInteger(Number(bornDay)) && Number.isInteger(Number(bornMonth)) && Number(bornDay) <= 31 && Number(bornMonth) <= 12) {
    let sumOfDate = Number(bornDay) + Number(bornMonth);
    let isPrime = true;
    for (let i = 2; i < sumOfDate; i++) {
      if (sumOfDate % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(chalk.yellowBright(`\nHey, ${userName} your birth date is a prime number.\n`));
      console.log(chalk.yellowBright("You can share it on social media.\n"));
    }
    else if (!isPrime) {
      console.log(chalk.yellowBright(`Hey, ${userName} Your birth date is not a prime number.`));
    }
  }

  else {
    console.log(chalk.redBright("\nPlease enter the date in valid format.\n"));
    console.log(chalk.redBright("\nClick on the run button to try again.\n"));
  }
}

function checkDaysInMonths(date){
  let [bornDay, bornMonth] = date.split('/');
  switch(bornMonth){
    case "01": case "1": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "02": case "2": if(bornDay>29){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "03"|| "3": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "04": case "4": if(bornDay>30){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "05": case "5": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "06": case "6": if(bornDay>30){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "07": case "7": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "08": case "8": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "09":case "9": if(bornDay>30){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
    else{
      checkPrime(date);
      break;
    }
    
    case "10": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "11": if(bornDay>30){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    case "12": if(bornDay>31){
      console.log(chalk.redBright("\nPlease enter a valid date in this month.\n"));
    break;
    }
     else{
      checkPrime(date);
      break;
    }
    default: checkPrime(date);
  }
}

checkDaysInMonths(dateOfBirth);
