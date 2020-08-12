var answer = document.getElementById("ans");
var question = document.getElementById("question");
var questionNumber = document.getElementById("q1");
var ask1 = ["blue", "green", "yellow", "pink"];
var ask2 = ["1", "2", "3", "4"];
var ask3 = ["2004", "1999", "2012", "1901"];
var countDown = document.getElementById("time") 

question1()
function question1() {
    $("#buttons").empty();
    $("text area").empty();
    $(".container").empty();
  question.innerText = "What is my favorite color?";
  questionNumber.innerText = "Question 1";

  for (let i = 0; i < ask1.length; i++) {
    const element = ask1[i];
    const ansBtn = $("<button>");
    $(ansBtn).addClass("ans");
    $(ansBtn).attr("data", ask1[i]);
    $(ansBtn).text(ask1[i]);
    $("#buttons").append(ansBtn);
  }

  $(".ans").on("click", function () {
    if ("button" === "green") {
      alert("Correct");
      question2();
    } else {
      alert("wrong");
      question2();
    }
  });
}

function question2() {
  $("#buttons").empty();
  question.innerText = "How many pets do I have?";
  questionNumber.innerText = "Question 2";

  for (let i = 0; i < ask2.length; i++) {
    const element = ask2[i];
    const ansBtn = $("<button>");
    $(ansBtn).addClass("ans");
    $(ansBtn).attr("data", ask2[i]);
    $(ansBtn).text(ask2[i]);
    $("#buttons").append(ansBtn);
  }

  $(".ans").on("click", function (question1) {
    if ("green") {
      alert("Correct");
      question3();
    }
  });
}

function question3() {
  $("#buttons").empty();
  question.innerText = "What year is my truck?";
  questionNumber.innerText = "Question 3";

  for (let i = 0; i < ask3.length; i++) {
    const element = ask3[i];
    const ansBtn = $("<button>");
    $(ansBtn).addClass("ans");
    $(ansBtn).attr("data", ask3[i]);
    $(ansBtn).text(ask3[i]);
    $("#buttons").append(ansBtn);
  }

  $(".ans").on("click", function (question1) {
    if ("green") {
      alert("Correct");
      scorePage();
    }
  });
}

function scorePage() {
  $("#buttons").empty();
  $("#q1").empty();
  question.innerText = "You are done!";
  const score = $("<text area>");
  score.addClass("container");
  score.attr("data", score);
  score.text("Your Score is " + "");
  $(".score").append(score);
  newLine();
}
function newLine() {
  const initials = $("<text area>");
  initials.addClass("container");
  initials.attr("data", initials);
  initials.text("Your initials ");
  $(".score").append(initials);

  const resetBtn = $("<button>");
  $(resetBtn).addClass("ans");
  $(resetBtn).text("retry?");
    $("#buttons").append(resetBtn);

    $(".ans").on("click", function (){
        question1()

      });

}

// for (let i = 0; i < ask2.length; i++) {
//     const element = ask2[i];
//     const ansBtn = $("<button>");
//     $(ansBtn).addClass("ans")
//     $(ansBtn).attr("data-letter", ask2[i]);
//     $(ansBtn).text(ask2[i]);
//     $("#buttons").append(ansBtn);

// }

// for (let i = 0; i < ask3.length; i++) {
//     const element = ask3[i];
//     const ansBtn = $("<button>");
//     $(ansBtn).addClass("ans")
//     $(ansBtn).attr("data-letter", ask3[i]);
//     $(ansBtn).text(ask3[i]);
//     $("#buttons").append(ansBtn);

// }

// question1();
// function question1() {
//   question.innerText = "What is my favorite color?";
//   questionNumber.innerText = "Question 1";

//   $(answer2).on("click", function () {
//     if ("true") {
//       alert("Correct");
//       question2();
//     }
//   });
//   $(falseBtn).on("click", function () {
//     alert("wrong");
//     question2();
//   });
// }

// function question2() {
//   question.innerText = "How many pets do I have?";
//   questionNumber.innerText = "Question 2";
//   answer1.innerHTML = ask2[0];
//   answer2.innerHTML = ask2[1];
//   answer3.innerHTML = ask2[2];
//   answer4.innerHTML = ask2[3];
//   var falseBtn = [answer1, answer2, answer3];

//   $(answer4).on("click", function () {
//     if ("true") {
//       alert("Correct");
//       question3();
//     }
//   });
//   $(falseBtn).on("click", function () {
//     alert("wrong");
//     question3();
//   });
// }

// function question3() {
//   question.innerText = "What year is my truck?";
//   questionNumber.innerText = "Question 3";
//   answer1.innerHTML = ask3[0];
//   answer2.innerHTML = ask3[1];
//   answer3.innerHTML = ask3[2];
//   answer4.innerHTML = ask3[3];
//   var falseBtn = [answer2, answer3, answer4];

//   $(answer1).on("click", function () {
//     if ("true") {
//       alert("Correct");
//       score();
//     }
//   });
//   $(falseBtn).on("click", function () {
//     alert("wrong");
//     score();
//   });
// }

// function score() {
//   question.innerText = "Your Score is";
//   questionNumber.innerText = "All Done!";
// }
