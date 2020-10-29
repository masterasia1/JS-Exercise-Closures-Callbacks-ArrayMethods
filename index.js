// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? 
 * 
 * 2. Which of the two uses a closure? How can you tell? The second method uses a closure because it accesses a variable outside of the {}
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * Math.floor(3));

}

//console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game 
in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){
  let x = 0;
  let homeScore = 0;
  let visitorScore = 0;
  while (x < numberOfInnings){
    homeScore = homeScore + inning();
    visitorScore = visitorScore + inning();
    x++;
  }
  let finalScore = {
    "Home": homeScore,
    "Away": visitorScore,
  };
  return finalScore;
}

//console.log(finalScore(inning, 5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so: scoreboard(6)

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

if(){

}else{

}





Final Score: awayTeam - homeTeam */


function ordinal_suffix_of(i) {
  if(i == 1){return "st";}
  if(i == 2){return "nd";}
  if(i == 3){return "rd";}
  return "th";
} 

function scoreboard(inning, numberOfInnings) {
  let currentInning = 1;
  let homeScoreThisInning = 0;
  while(currentInning < (numberOfInnings + 1)){
    homeScoreThisInning = inning();
    console.log(currentInning + ordinal_suffix_of(currentInning) + " inning: Away " + homeScoreThisInning + " - Home " + inning());
    homeTotalScore = homeTotalScore + homeScoreThisInning;
    currentInning++;
  }
}

let homeTotalScore = 0;
scoreboard(inning, 9);

console.log("HomeTotalScore: " + homeTotalScore);