var questionData = [{
    question: "What is the Full Form Of HTML",
    options: [
      "HyperText Makeup Language",
      "HyperText Markup Language",
      "HyperText Markup Lame",
      "HyperTate Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What does CSS stands for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What does PHP stands for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "What does SQL stands for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    question: "What year was JavaScript launched?",
    answer: "1995",
    options: ["1996", "1995", "1994", "None of the Above"],
  },

];

var questionText = document.getElementById('questionText');
var option = document.getElementById('option');
var questionCount = document.getElementById('questionCount');

var questionIndex = 0;
var score = 0;

function renderQuestion(){
  if(questionIndex < questionData.length){
    questionText.innerHTML = questionData[questionIndex].question;
  questionCount.innerHTML = `Question Count ${questionIndex + 1}/${questionData.length}`;
  option.innerHTML = "";
  for (var i = 0; i < questionData[questionIndex].options.length ; i++){
    option.innerHTML += `<div class="col-md-6">
    <div class="p-2 shadow-lg rounded">
        <button class="btn w-100" onmouseover="this.style.backgroundColor='grey'" onmouseout="this.style.backgroundColor='white'" onclick="checkAnswer('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')">${questionData[questionIndex].options[i]}</button>
    </div>    
</div>`
  }
  }else{
    duration = 0;
    questionText.innerHTML = "";
    option.innerHTML = "";
    questionText.innerHTML = `<div class="result"> <p>Your Score is ${score} out of ${questionData.length} <br> Your Percentage is ${(score/questionData.length)*100}%</p> </div> `;

  }
  
}
renderQuestion()


function nextQuestion(){
  questionIndex++;
  renderQuestion();
}


function checkAnswer(userSelectedAns,correctAnswer){
    if(userSelectedAns === correctAnswer){
      score++;
    }else{
      console.log("Wrong Answer");
    }
    console.log(score);
}

var duration = document.getElementById('duration');
var sec = 59;
var min = 4;
setInterval(function(){
  duration.innerHTML = "";
  duration.innerHTML = `Duration ${min}:${sec}`;
  sec--;
  if(sec < 0){
    sec = 10;
    min--;
  }  
},1000);

