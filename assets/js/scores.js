var highScore = []; // new variable to store high scores

if (localStorage.getItem("highScore")) { // if an item caled highScore exists in local storage take the value and convert it to an object and assign it to highScore.
    highScore = JSON.parse(localStorage.getItem("highScore")); // if nothing exists in local storage the array stays empty.
  }

function saveHighScore() { // new function that is called when high score it submitted.
    
    var initialsText = document.getElementById("initials"); // takes players initials with the id initials and stores them in new variable.
    var initials = initialsText.value; // new variable to store players initials.
    var playerScore = {initials: initials, score: score} ; // contains the player's initials and score.
    highScore.push(playerScore); // highScore is updated by pushing the player's initials and score to the highScore array.
    console.log(playerScore);

highScore.sort(function(a,b) {
    return b.score - a.score; // highScore array is sorted so that the highest score is first in the array.
});
highScore = highScore.slice(0, 10); // keeps only the top 10 scores visable or the page would be endless with scores.
  // Save the highScore array to local storage
  localStorage.setItem("highScore", JSON.stringify(highScore)); // setting a key to value pair in the local storage API. Key is the highScore and value is stringify version of highScore array.
// this highScore is being saved to local storage in order to use it later. JSON.stringify is used to convert the array to a string.
  window.location.href = "highscores.html"; // this is redirecting the player to the highscores html once they have submitted high score.
}
var highscoreList = document.createElement("ol"); // creating an ordered list of high scores
for (var i = 0; i < highScore.length; i++) { // looping through the highScore array starting at index 0.
    var playerScore = highScore[i]; // retreives the i element from highScore array and saves it to playerScore.
    var scoreText = document.createElement("li"); // creates a new html li element.
    scoreText.textContent = playerScore.initials + ": " + playerScore.score; //sets the text content of scoreText to player's initials and score.
    highscoreList.appendChild(scoreText); // adds the scoreText as a child of the highscoreList which creates a list for each player score
}
// without this container there is no where to display the higscores on the html page and the page is blank
var scoreContainer = document.getElementById("highscores"); // gets the id of highscores from the html page and assigns it to the scoreContainer.
if (scoreContainer) { // if the scoreContainer exists 
scoreContainer.innerHTML = ""; // sets the scoreContainer to an empty string.
  scoreContainer.appendChild(highscoreList); // appends the highscoreList to the scoreContainer which displays the high scores on the page in a containter


}
// I had somehow put this save score code in twice and the score was being saved twice in the highscore log.
// var submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   saveHighScore();
// });

