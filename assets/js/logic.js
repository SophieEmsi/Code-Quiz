
var startBtn = document.getElementById('start'); // create a variable for the start button on the index.html page

startBtn.addEventListener('click', startQuiz); //add event listener to the startBtn so that an event happens when it is clicked. The event is startQuiz.

function startQuiz() {
    document.getElementById("start-screen").style.display = "none"; // removes the start screen style from the index.html page
    document.getElementById("questions").classList.remove("hide"); // adds the questions screen to the page by removing the hide class in index.html
}