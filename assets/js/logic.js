
var startBtn = document.getElementById('start'); // create a variable for the start button on the index.html page

startBtn.addEventListener('click', startQuiz); //add event listener to the startBtn so that an event happens when it is clicked. The event is startQuiz.

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");// removes the start screen style from the index.html page
    document.getElementById("questions").classList.remove("hide"); // adds the questions screen to the page by removing the hide class in index.html using classList to target the elements class.
}

firstQuestion(0); // to call the first question in the list starting at index 0.

function firstQuestion(index) { // creates function with index as its parameter to display the questions and choices
    var questionTitle = document.getElementById("question-title"); // takes the emelement "question-title" from the index.html page and uses it to create a variable called questionTitle.
    var questionChoices = document.getElementById("choices");// takes the emelement "choices" from the index.html page and uses it to create a variable called questionChoices.


questionTitle.textContent = questions[index].question; // takes the 'question' as title text from the questions array in questions.js. The index makes sure this changes according to what question we are on.

questionChoices.innerHTML = ""; //

}