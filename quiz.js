var answer1 = document.getElementById("ans1");
var answer2 = document.getElementById("ans2");
var answer3 = document.getElementById("ans3");
var answer4 = document.getElementById("ans4");
var question = document.getElementById("question")
var questionNumber = document.getElementById("q1")
var ask1 = ["blue", "green", "yellow", "pink"];
var ask2 = ["blue", "green", "yellow", "pink"];
var ask3 = ["blue", "green", "yellow", "pink"];
var ask4 = ["blue", "green", "yellow", "pink"];
var ask5 = ["blue", "green", "yellow", "pink"];

question1();
function question1(){
    question.innerText = "What is my favorite color?"
    questionNumber = "Question 1"
    answer1.innerHTML = ask1[0];
    answer2.innerHTML = ask1[1];
    answer3.innerHTML = ask1[2];
    answer4.innerHTML = ask1[3];

    $("button").on("click", function(e){
    if(trueAns){
        alert("Correct")
    } else {
        alert("Wrong!")
    }
})
}


