// these are variables grabbing classes from the index file
var timerElement = document.querySelector(".timer-count");
var button1 = document.querySelector(".start-button");
var button2 = document.querySelector(".score-button");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var head = document.querySelector(".head");
var questionZone = document.querySelector(".question-zone");
var corwro = document.querySelector(".corwro");
var enterScore = document.querySelector(".enterScore");
var enterHere = document.querySelector(".enterHere");

var score = 0;
var seconds = 75;
var corwroTime = 2;
var timer;
var timerCount;

// this function sets the visiblity of the textarea and removes the 2 extra buttons
function openingpage() {
    enterScore.style.visibility = "hidden";
    enterHere.style.visibility = "hidden";

    button1.addEventListener("click", function() {
        question1();
    });

    button2.addEventListener("click", function() {
        scorepage();
    });

    button3.remove();
    button4.remove();
}
openingpage();

// this function controls the timer
function countdown() {
    timerCount = setInterval(function() {
        seconds--;
        timerElement.textContent = "Time Left: " + seconds;
        if(seconds <= 0) {
            clearInterval(timerCount);
            seconds = 0;
            afterquiz();
        }
    }, 1000);
}

// this function sets the score to the amount the timer is on
function points() {
    score += seconds;
}

// if the user answers a question correctly then correct flashes on the screen
function correct() {
    var corInterval = setInterval(function() {
        corwroTime--;
        corwro.textContent = "correct";
        if(corwroTime <= 0) {
            clearInterval(corInterval);
            corwro.textContent = "";
            corwroTime = 2;
        }
    }, 350);
}

// if the user answers incorrectly then wrong flashes on the screen and it also takes away 10 to the timer and score
function wrong() {
    var wroInterval = setInterval(function() {
        corwroTime--;
        corwro.textContent = "wrong";
        if(corwroTime <= 0) {
            clearInterval(wroInterval);
            corwro.textContent = "";
            corwroTime = 2;
        }
    }, 350);
    seconds-=10;
}

// the next 5 functions control the questions by changing the text area to the questions and adding the 2 other buttons back to use for the answer choices
function question1() {
    button1.remove();
    button2.remove();
    countdown();
    questionZone.textContent = "Commonly used data types DO NOT include:";

    button1 = document.createElement("button");
    button1.innerHTML = "strings";
    document.body.children[1].appendChild(button1);
    button1.addEventListener("click", function() {
        wrong();
        question2();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "booleans";
    document.body.children[1].appendChild(button2);
    button2.addEventListener("click", function() {
        wrong();
        question2();
    });

    button3 = document.createElement("button");
    button3.innerHTML = "alerts";
    document.body.children[1].appendChild(button3);
    button3.addEventListener("click", function() {
        correct();
        question2();
    });

    button4 = document.createElement("button");
    button4.innerHTML = "numbers";
    document.body.children[1].appendChild(button4);
    button4.addEventListener("click", function() {
        wrong();
        question2();
    });
}

function question2() {
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    questionZone.textContent = "The condition in an if / else statement is enclosed within ____.";

    button1 = document.createElement("button");
    button1.innerHTML = "quotes";
    document.body.children[1].appendChild(button1);
    button1.addEventListener("click", function() {
        wrong();
        question3();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "curly brackets";
    document.body.children[1].appendChild(button2);
    button2.addEventListener("click", function() {
        wrong();
        question3();
    });

    button3 = document.createElement("button");
    button3.innerHTML = "parenthesis";
    document.body.children[1].appendChild(button3);
    button3.addEventListener("click", function() {
        correct();
        question3();
    });

    button4 = document.createElement("button");
    button4.innerHTML = "square brackets";
    document.body.children[1].appendChild(button4);
    button4.addEventListener("click", function() {
        wrong();
        question3();
    });
}

function question3() {
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    questionZone.textContent = "Arrays in JavaScript can be used to store____.";

    button1 = document.createElement("button");
    button1.innerHTML = "numbers and strings";
    document.body.children[1].appendChild(button1);
    button1.addEventListener("click", function() {
        wrong();
        question4();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "other arrays";
    document.body.children[1].appendChild(button2);
    button2.addEventListener("click", function() {
        wrong();
        question4();
    });

    button3 = document.createElement("button");
    button3.innerHTML = "booleans";
    document.body.children[1].appendChild(button3);
    button3.addEventListener("click", function() {
        wrong();
        question4();
    });

    button4 = document.createElement("button");
    button4.innerHTML = "all of the above";
    document.body.children[1].appendChild(button4);
    button4.addEventListener("click", function() {
        correct();
        question4();
    });
}

function question4() {
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    questionZone.textContent = "String values must be enclosed within ____ when being assigned to variables.";

    button1 = document.createElement("button");
    button1.innerHTML = "commas";
    document.body.children[1].appendChild(button1);
    button1.addEventListener("click", function() {
        wrong();
        question5();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "curly brackets";
    document.body.children[1].appendChild(button2);
    button2.addEventListener("click", function() {
        wrong();
        question5();
    });

    button3 = document.createElement("button");
    button3.innerHTML = "quotes";
    document.body.children[1].appendChild(button3);
    button3.addEventListener("click", function() {
        wrong();
        question5();
    });

    button4 = document.createElement("button");
    button4.innerHTML = "parenthesis";
    document.body.children[1].appendChild(button4);
    button4.addEventListener("click", function() {
        correct();
        question5();
    });
}

function question5() {
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    questionZone.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

    button1 = document.createElement("button");
    button1.innerHTML = "javaScript";
    document.body.children[1].appendChild(button1);
    button1.addEventListener("click", function() {
        wrong();
        afterquiz();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "terminal/bash";
    document.body.children[1].appendChild(button2);
    button2.addEventListener("click", function() {
        correct();
        afterquiz();
    });

    button3 = document.createElement("button");
    button3.innerHTML = "for loops";
    document.body.children[1].appendChild(button3);
    button3.addEventListener("click", function() {
        wrong();
        afterquiz();
    });

    button4 = document.createElement("button");
    button4.innerHTML = "console log";
    document.body.children[1].appendChild(button4);
    button4.addEventListener("click", function() {
        wrong();
        afterquiz();
    });
}

// this shows the user their score and allows them to enter their initials
function afterquiz() {
    points();
    seconds = 1;
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    questionZone.textContent = "All done! Your final score is " + score + " Enter initials";
    enterScore.style.visibility = "visible";
    enterHere.style.visibility = "visible";
    enterScore.style

    button1 = document.createElement("button");
    button1.innerHTML = "Submit";
    document.body.children[1].children[2].appendChild(button1);
    button1.addEventListener("click", function() {
        localStorage.setItem("user", enterScore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

// this shows the user the score they got and also allows them to take the quiz again or erase their current score
function scorepage() {
    clearInterval(timerCount);
    button1.remove();
    button2.remove();
    enterScore.style.visibility = "hidden";
    enterHere.style.visibility = "hidden";
    head.textContent = "High Scores";

    questionZone.textContent = localStorage.getItem("user") + ": " +localStorage.getItem("score");

    button1 = document.createElement("button");
    button1.innerHTML = "Restart Quiz";
    document.body.children[1].children[2].appendChild(button1);
    button1.addEventListener("click", function() {
        location.reload();
    });

    button2 = document.createElement("button");
    button2.innerHTML = "Clear Scores";
    document.body.children[1].children[2].appendChild(button2);
    button2.addEventListener("click", function() {
        localStorage.clear();
        questionZone.textContent = "";
    });
}