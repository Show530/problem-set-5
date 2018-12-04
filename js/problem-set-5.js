/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = prompt("Enter a integer between 1 and 23");
  height= parseInt(height, 10)
  
  while((height > 23 || height < 1 ) || ! Number.isInteger(height)) {
    height= parseInt(height, 10)
    height = prompt("Enter a height integer between 1 and 23!");
  }

  let i=1;
  let j=0
  let hash='#';
  let lines="<code>";
  let spaces=height-2;

  while (i<=height){
    let a='';
    for(j=0;j<=spaces;j++) {
      a+='&nbsp;';
    }
    spaces--;
    hash=hash+'#';
    lines=lines+a+hash+"</br>";
    i++;
  }

  document.getElementById("mario-easy-output").innerHTML=lines;
  lines=lines+"</code>"
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  height = prompt("Enter a integer between 1 and 23");
  height= parseInt(height, 10)
  while((height > 23 || height < 1 ) || ! Number.isInteger(height)) {
    height= parseInt(height, 10)
    height = prompt("Enter a height integer between 1 and 23!");
  }

  let i=1;
  let hash='#';
  let lines="<code>";
  let spaces_Before=height-2;
  let spaces_After='&nbsp'+'&nbsp';
  while (i<=height){
    let a='';
    for(let j=0;j<=spaces_Before;j++) {
      a+='&nbsp;';
    }
    spaces_Before--;
    hash=hash+'#';
    lines=lines+a+hash+spaces_After+hash+"</br>";
    i++;
  }
  document.getElementById("mario-hard-output").innerHTML=lines;
  lines=lines+"</code>"
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */
  let p = document.getElementById("credit-output")
  
  //integer check
  do {
    card = parseInt(prompt("Enter a credit card number."), 10)
  } while (!Number.isInteger(card))

  // see if valid using luhn's algorithm

  let stringCard = card.toString()
  let length = stringCard.length
  let i
  let j
  let k
  let sumMul= 0
  let sumAdd= 0
  let valid = false

  max = length - 1 
  for (i = max; i > 0; i = i-2) {
    j = stringCard.charAt(i-1)
    j = parseInt(j, 10)
    k = j * 2
    sumMul += (k % 10) + Math.floor(k / 10)
  }

  max = length - 2
  for (i = max; i > 0; i = i-2) {
    j = stringCard.charAt(i-1)
    j = parseInt(j, 10)
    sumAdd += j
  }

  let x = stringCard.charAt(length-1)
  x= parseInt(x, 10)
  if (0 == ((sumMul + sumAdd + x) % 10)) {
    valid = true
  }

  // determine card type/picture
  
  let stringStart = stringCard.substring(0, 2)
  let stringStart1 = stringCard.substring(0, 1)

  if(! valid) {
    p.innerHTML = "Invalid."
  }
  else if (15 == length && ("34" == stringStart || "37" == stringStart)) {
    p.innerHTML = "<img src='./images/amex.png' />"
  }
  else if (16 == length && ("51" == stringStart || "52" == stringStart || "53" == stringStart || "54" == stringStart || "55" == stringStart)) {
    p.innerHTML = "<img src='./images/mastercard.png' />"
  }
  else if ((13 == length || 16 == length) && "4" == stringStart1) {
    p.innerHTML = "<img src='./images/visa.png' />"
  }
  else {
    p.innerHTML = "Invalid."
  }

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let max=  1000
  let nGuess= 0
  let rand=0
 
  rand= Math.floor(Math.random() * Math.floor(max)) + 1
  let guess = prompt("Guess a number between 1 and 1000.")
  guess = parseInt(guess, 10)

  while (rand !== guess) {
    if (guess < rand) {
      guess = prompt("Guess a HIGHER number between 1 and 1000.")
      guess = parseInt(guess, 10)
    }
    else if (guess > rand) {
      guess = prompt("Guess a LOWER number between 1 and 1000.")
      guess = parseInt(guess, 10)
    }

    if(guess > 0 && guess < 1000) {
      nGuess += 1
    }
  }

  let p= document.getElementById("guess-output")
  p.innerHTML= `Random Number: ${rand} <br/> Attempts: ${nGuess}`

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  windspeed = prompt("Enter a non-negative integer between 1 and infinity");
  while(windspeed < 1) {
      windspeed = prompt("Enter a non-negative integer between 1 and infinity");
  }

  let type = parseInt(windspeed, 10)
  var p= document.getElementById("hurricane-output");

  if(windspeed >= 157) {
    p.innerHTML= "Category 5 Hurricane."
  }
  else if(windspeed >= 130 && windspeed <= 156) {
    p.innerHTML= "Category 4 Hurricane."
  }
  else if(windspeed >= 111 && windspeed <= 129) {
    p.innerHTML= "Category 3 Hurricane."
  }
  else if(windspeed >= 96 && windspeed <= 110) {
    p.innerHTML= "Category 2 Hurricane."
  }
  else if(windspeed >= 74 && windspeed <= 95) {
    p.innerHTML= "Category 1 Hurricane."
  }
  else if(windspeed >= 39 && windspeed <= 73) {
    p.innerHTML= "Tropical Storm."
  }
  else if(windspeed <= 38) {
    p.innerHTML= "The skies are calm..."
  }
  windspeed = type


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

let firstScore= prompt("Enter a real number first score between 0 and 10")
while(firstScore < 0 || firstScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
firstScore= parseInt(firstScore, 10)

let secondScore=  prompt("Enter a real number second score between 0 and 10")
while(secondScore < 0 || secondScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
secondScore= parseInt(secondScore, 10)

let thirdScore=  prompt("Enter a real number third score between 0 and 10")
while(thirdScore < 0 || thirdScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
thirdScore= parseInt(thirdScore, 10)

let fourthScore=  prompt("Enter a real number fourth score between 0 and 10")
while(fourthScore < 0 || fourthScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
fourthScore= parseInt(fourthScore, 10)

let fifthScore=  prompt("Enter a real number fifth score between 0 and 10")
while(fifthScore < 0 || fifthScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
fifthScore= parseInt(fifthScore, 10)

let sixthScore=  prompt("Enter a real number sixth score between 0 and 10")
while(sixthScore < 0 || sixthScore > 10) {
  prompt("Enter a real number score between 0 and 10")
}
sixthScore= parseInt(sixthScore, 10)

scores.push(firstScore)
scores.push(secondScore)
scores.push(thirdScore)
scores.push(fourthScore)
scores.push(fifthScore)
scores.push(sixthScore)

total= firstScore + secondScore + thirdScore + fourthScore + fifthScore + sixthScore
let minScore= Math.min(firstScore, secondScore, thirdScore, fourthScore, fifthScore, sixthScore)
let maxScore= Math.max(firstScore, secondScore, thirdScore, fourthScore, fifthScore, sixthScore)

let average= (total-(minScore+maxScore)) / 4
average= average.toFixed(2)
let removed= `${minScore}, ${maxScore}`

let p= document.getElementById("gymnastics-output")
p.innerHTML= `Discarded: ${removed}<br/>Score: ${average}`
  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

let hGrades
let qGrades
let tGrades

do {
  hGrades = prompt("Enter homework grades. When finished entering, use a -1 grade to signify such.")
  if (hGrades >= 0 && hGrades <= 100){
    homeworkTotal= hGrades + homeworkTotal
    homeworks= homeworks + 1
  }
} while(hGrades!= -1)

do {
  qGrades = prompt("Enter quiz grades. When finished entering, use a -1 grade to signify such.")
  if (qGrades >= 0 && qGrades <= 100) {
    quizTotal= qGrades + quizTotal
    quizzes= quizzes + 1
  }
} while(qGrades!= -1)

do {
  tGrades = prompt("Enter test grades. When finished entering, use a -1 grade to signify such.")
  if(tGrades >= 0 && tGrades <= 100) {
    testTotal= tGrades + testTotal
    tests= tests + 1
  }
} while(tGrades!= -1)

let homeAve= homeworkTotal/homeworks
let quizAve= quizTotal/quizzes
let testAve= testTotal/tests

let averageGrade= (homeAve * 0.1) + (quizAve * 0.3) + (testAve * 0.6)
averageGrade = Math.ceil(averageGrade * 100) / 100

homeworkTotal = homeworkTotal.toFixed(2)
quizTotal = Math.ceil(quizTotal * 100) / 100
testTotal = Math.ceil(testTotal * 100) / 100

let p= document.getElementById("report-card-output")
p.innerHTML= `Tests: ${testAve}</br> Quizzes: ${quizAve}</br> Homework: ${homeworkAve}</br> Grade: ${averageGrade}`

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
