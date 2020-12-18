let inputValue = document.getElementById("date-input");
let submitButton = document.getElementById("submit-button");
let outputDiv = document.querySelector(".output");
function clickHandler() {
  let dateValue = inputValue.value;
  let splittedDate = dateValue.split("-");
  let [birthDay, birthMonth] = [splittedDate[2], splittedDate[1]];
  let sumOfDate = Number(birthDay) + Number(birthMonth);
  let isPrime = true;
  for (let i = 2; i < sumOfDate; i++) {
    if (sumOfDate % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    outputDiv.innerText = `Hey,your birth date is a prime number.\n You can share it on social media.`;
    outputDiv.style.color = "green";
    outputDiv.style.fontSize = "1.1rem";
    outputDiv.style.fontWeight = "bold";
  } else if (!isPrime) {
    outputDiv.innerText = "Oops! Your birth date is not a prime number.";
    outputDiv.style.color = "red";
    outputDiv.style.fontSize = "1.1rem";
    outputDiv.style.fontWeight = "bold";
  }
}

submitButton.addEventListener("click", clickHandler);
