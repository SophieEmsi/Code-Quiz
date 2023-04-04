var timeDisplay = document.getElementById("time"); // gets id from html
var timeSecond = 60; // sets time to 60 seconds

timeDisplay.innerHTML = timeSecond; // takes the 60 seconds from timeSecond variable and displays it in the html with an id of time.
  // decreases the value of timeSecond variable by 1000 milliseconds and displays new value in the timeDisplay id in html.

  var countDown = setInterval (function(){  // created a function that will run every 1000 milliseconds. 
    timeSecond--;
    timeDisplay.innerHTML = timeSecond;
    if(timeSecond <= 0 || timeSecond < 1){
        clearInterval(countDown);// stops the timer when timeSecond is less than 1 or equal to 0.
    }
},1000)
  
  var score = 0;
  
  var startBtn = document.getElementById("start"); // create a variable for the start button on the index.html page


    startBtn.addEventListener("click", startQuiz); // add an event listener to the startBtn var so that an event happens when it is clicked

  function startQuiz() {

    document.getElementById("start-screen").classList.add("hide");// removes the start screen style from the index.html page
    document.getElementById("questions").classList.remove("hide");// adds the questions screen to the page by removing the hide class in index.html using classList to target the elements class.
  
// Display the first question
firstQuestion(0);// to call the first question in the list starting at index 0.
  

// Define a function to display a question and its choices
function firstQuestion(index) {// creates function with index as its parameter to display the questions and choices
// Get the question and choices elements from the HTML
var questionElement = document.getElementById("question-title");// takes the emelement "question-title" from the index.html page and uses it to create a variable called questionTitle.
var choicesElement = document.getElementById("choices");// takes the emelement "choices" from the index.html page and uses it to create a variable called questionChoices.

// Set the text of the question element to the current question
questionElement.textContent = questions[index].question;// takes the 'question' as title text from the questions array in questions.js. The index makes sure this changes according to what question we are on.

// Clear the choices element
choicesElement.innerHTML = "";//this will clear the choices element after making selection for the next question.

        //choices are still not showing up on the browser so I will try to add a button for the choices and see if they appear.
  
      // var choiceButton = document.createElement("button");
  
  // the button still didn't add the choices to the page so I will create a loop before the button and see if looping through the questions and its choices availeble will make them appear.




// Loop through the possible choices and create a button for each one
for (var i = 0; i < questions[index].choices.length; i++) {
  // Create a new button element for the choice
  var choiceButton = document.createElement("button");

  // Set the text of the button to the current choice
  choiceButton.textContent = questions[index].choices[i];  
  // Everything seemed to be in the wrong order so i moved this. I haven't told the code what I want the buttons to say so I need to create a line that takes the index choice from the choices array in questions.js and creates a button for each choice.

  //i've created the buttons for each choice and the loop to go through each question and its choices so I created an event listener to the choiceButton otherwise nothing will happen with it is clicked.
  
  //choiceButton.addEventListener("click", function() {}); duplicated line of code.
  
  //i'm still not getting the choices show up on the browser but i forgot that the choiceButton needs to be added to the questionChoices element as a child. Apppendchild will add the choiceButton to the questionChoices which stores the html element of id choices so this links the button back to the html.
  
  // I need the choiceButton event to tell the player if the answer is correct or not. To do this i will modify the choiceButton with if else.
  
  // add event listener to the choice button so that when it is clicked the event of checking the answer is triggered. eg. choiceButton.addEventListener(click, event); if event text target matches the answer from questions.js then show correct! as a message and if the answer does not match then else and show incorrect! as message. In this example we are checking to see if the text of the clicked button matched the correctAnswer var which gets its data from the answer. If correct we log correct and otherwise we log incorrect. I will try this in the console to begin with before adding message to browser.
  choiceButton.addEventListener("click", function() {



  // i re-wrote the above code as the console log was displaying all answer as incorrect even the correct one 
  
  // this.textContent refers to the DOM element that triggered the event of clicking the button. it returns the text content of the button that was clicked and compares it with the correct answer.
    if (this.textContent === questions[index].answer) {
      // Increase the score if the answer is correct
      score++;// the quiz is not currently adding the score if the answer is correct so i add this condition and create a variable called score stored at the top of the code.
      showFeedback("Correct!");
    } else {
      // Penalize the timer if the answer is incorrect
      showFeedback("Wrong!");
      clearInterval(timer);// pauses the timer when the answer is incorrect.
      timer = setInterval(updateTimer, 1000);// restarts the timer with an updated score defined in the updateTimer function below.
    }

// the question wasn't moving to the next one if the answer was incorrect to i added a condition that says that after the answer the question must increase by 1 and if the questions reaches the end of the length then end the quiz.
    if (index < questions.length - 1) {
      showQuestion(index + 1);
    } else {
      endQuiz();
    }
 } );

  // Add the button to the choices element
  choicesElement.appendChild(choiceButton);
}
}

// this new function of showfeedback will tell the player if they are correct or wrong by selecting the feedback from the html. 
function showFeedback(text) {
var feedbackElement = document.getElementById("feedback");
feedbackElement.textContent = text;
feedbackElement.classList.remove("hide");
setTimeout(function() {
  feedbackElement.classList.add("hide");
}, 1000);
}

 //at this point i don't have a timer so I will add a start time variable to the top of this page. I w ill also add a variable that instructs where to display this start time by taking the id from the html. 
function updateTimer() {
var timeElement = document.getElementById("time");
var time = parseInt(timeElement.textContent);
if (time <= 0) {
  endQuiz();
} else {
  timeElement.textContent = time - 1;
}
}

// create a function to end the quiz
function endQuiz() {
clearInterval(timer);
document.getElementById("questions").classList.add("hide");
document.getElementById("end-screen").classList.remove("hide");
document.getElementById
}  
  }
