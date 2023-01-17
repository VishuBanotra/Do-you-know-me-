let readLineSync = require('readline-sync');
let score = 0;

let highScore = [
  {
    name: "Vishal",
    score: 3
  },
  {
    name: "Nidhi",
    score: 4
  }
];

questions = [
  {
    question: "Where do Vishu live? ",
    answer: "Jammu"
  },
  {
    question: "What is the middle name of Vishu? ",
    answer: "Vishal"
  },
  {
    question: "What Vishu is fond of? ",
    answer: "Cars"
  },
  {
    question: "What is the name of favourite web series of Vishu? ",
    answer: "Peaky Blinders"
  },
  {
    question: "Who is the best friend of Vishu? ",
    answer: "Shivam"
  }
];

function greet(){
  let userName = readLineSync.question("What is your name? ");
  console.log(`Welcome ${userName}, to DO YOU KNOW Vishu.`);
}

function quiz(question,answer){
  let userQuestion = readLineSync.question(question);

  if (userQuestion.toUpperCase === answer.toUpperCase){
    console.log("You are right.");
    score++
  }
  else{
    console.log("You are wrong.");
  }
  console.log("------------")
}

function game(){
  for (let i=0; i<questions.length; i++){
  let curQuestion = questions[i].question;
  let curAnswer = questions[i].answer;
  quiz(curQuestion,curAnswer);
}
  }


function finalScore(){
  console.log("Your score is: ", score);

  console.log("If you want to update your score just ping me over WhatsApp.")
  highScore.map(score => console.log (score.name, ":", score.score))
}

greet();
game();
finalScore();


