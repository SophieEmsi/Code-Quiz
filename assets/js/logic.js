
var startBtn = document.getElementById('start'); // create a variable for the start button on the index.html page

startBtn.addEventListener('click', startQuiz); //add event listener to the startBtn so that an event happens when it is clicked. The event is startQuiz.

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");// removes the start screen style from the index.html page
    document.getElementById("questions").classList.remove("hide"); // adds the questions screen to the page by removing the hide class in index.html using classList to target the elements class.


firstQuestion(0); // to call the first question in the list starting at index 0.
}
function firstQuestion(index) { // creates function with index as its parameter to display the questions and choices
    var questionTitle = document.getElementById("question-title"); // takes the emelement "question-title" from the index.html page and uses it to create a variable called questionTitle.
    var questionChoices = document.getElementById("choices");// takes the emelement "choices" from the index.html page and uses it to create a variable called questionChoices.


questionTitle.textContent = questions[index].question; // takes the 'question' as title text from the questions array in questions.js. The index makes sure this changes according to what question we are on.

questionChoices.innerHTML = ""; //this will clear the choices element after making selection for the next question.



    //choices are still not showing up on the browser so I will try to add a button for the choices and see if they appear.

    // var choiceButton = document.createElement("button");

// the button still didn't add the choices to the page so I will create a loop before the button and see if looping through the questions and its choices availeble will make them appear.
 
    for (var i = 0; i < questions[index].choices.length; i++){
    var choiceButton = document.createElement("button");
    
// Everything seemed to be in the wrong order so i moved this. I haven't told the code what I want the buttons to say so I need to create a line that takes the index choice from the choices array in questions.js and creates a button for each choice.

        choiceButton.textContent = questions[index].choices[i];

//i've created the buttons for each choice and the loop to go through each question and its choices so I created an event listener to the choiceButton otherwise nothing will happen with it is clicked.

//   choiceButton.addEventListener("click", function() {}); duplicated line of code.

  //i'm still not getting the choices show up on the browser but i forgot that the choiceButton needs to be added to the questionChoices element as a child. Apppendchild will add the choiceButton to the questionChoices which stores the html element of id choices so this links the button back to the html.

     

  // I need the choiceButton event to tell the player if the answer is correct or not. To do this i will modify the choiceButton with if else.

// add event listener to the choice button so that when it is clicked the event of checking the answer is triggered. eg. choiceButton.addEventListener(click, event); if event text target matches the answer from questions.js then show correct! as a message and if the answer does not match then else and show incorrect! as message. In this example we are checking to see if the text of the clicked button matched the correctAnswer var which gets its data from the answer. If correct we log correct and otherwise we log incorrect. I will try this in the console to begin with before adding message to browser.
choiceButton.addEventListener("click", function() {
var answer = questions[index].answer;
// choiceButton.addEventListener("click", function(event) {
//     var answer = questions[index].answer; // create var to display the correct answer taken from questions.js.
//     if (event.target.textContent === answer) {
//         console.log("correct!");
//     } else {
//         console.log("incorrect!");
//     }
//     });

// i re-wrote the above code as the console log was displaying all answer as incorrect even the correct one 

// this.textContent refers to the DOM element that triggered the event of clicking the button. it returns the text content of the button that was clicked and compares it with the correct answer.

if (this.textContent === questions[index].answer) {
    showFeedback("Correct!");

} else {
    showFeedback("Wrong!")
}
});

questionChoices.appendChild(choiceButton);
    };
   
}

// this new function of showfeedback will tell the player if they are correct or wrong by selecting the feedback from the html. 

function showFeedback(text) {
    var feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = text;
}


    




    


