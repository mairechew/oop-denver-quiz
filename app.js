function populate() {
  if(quiz.isEnded()) {

  }
  else {
    //showQuestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML= choices[i];
        guess("btn" + i, choices[i]);
    }
  }

  showProgress();
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}

function showProgress() {
  var currentQuestionNumber  = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTMl = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
      gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
      element = document.getElementById("quiz");
      element.innerHTML = gameOverHtml;
}

var questions = [
   new Question("Colorado was the only state to turn down the opportunity to host what?", ["Iditarod", "Jam Cruise", "Winter Olympics", "Mardi Gras"], "Winter Olympics"),
   new Question("What is Colorado's state flower?", ["Rocky Mountain Columbine", "Daisy", "Lily", "Rocky Mountain Rose"], "Rocky Mountain Columbine"),
   new Question("What brewery can you tour in Golden?", ["Angry Orchard", "Blue Moon","Coors", "Stella"], "Coors"),
   new Question("Where can you find The Garden of the Gods?", ["Colorado Springs", "Fort Collins", "Vail", "Denver"], "Colorado Springs"),
   new Question("What annual sporting event takes place in Grand Junction?", ["Connie Mack World Series", "Junior College World Series", "MLB World Series", "Little League World Series"], "Junior College World Series")
];

var quiz = new Quiz(questions);

populate();
