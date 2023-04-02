
var startBtn = document.getElementById('start'); // create a variable for the start button on the index.html page

startBtn.addEventListener('click', startQuiz); //add event listener to the startBtn so that an event happens when it is clicked. The event is startQuiz.

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");// removes the start screen style from the index.html page
    document.getElementById("questions").classList.remove("hide"); // adds the questions screen to the page by removing the hide class in index.html using classList to target the elements class.


firstQuestion(0); // to call the first question in the list starting at index 0.

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
 

// I haven't told the code what I want the buttons to say so I need to create a line that takes the index choice from the choices array in questions.js and creates a button for each choice.

  choiceButton.textContent = questions[index].choices[i];

  //i've created the buttons for each choice and the loop to go through each question and its choices so I created an event listener to the choiceButton otherwise nothing will happen with it is clicked.

  choiceButton.addEventListener("click", function() {});

  //i'm still not getting the choices show up on the browser but i forgot that the choiceButton needs to be added to the questionChoices element as a child. Apppendchild will add the choiceButton to the questionChoices which stores the html element of id choices so this links the button back to the html.

  questionChoices.appendChild(choiceButton);

} }
}