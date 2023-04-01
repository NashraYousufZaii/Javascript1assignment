var Name = prompt("What is your name?");
var score = 0;

var q1 = prompt("What does HTML stand for?");
if (q1 === "Hyper text markup language ") {
  alert("Correct");
  score = score + 10;
} else if (q1 === "Hyper text markup language") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q2 = prompt("Who is making the Web standards?");
if (q2 === "The world wibe web consortium") {
  alert("Correct");
  score = score + 10;
} else if (q2 === "The world wibe web consortium") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q3 = prompt("Which character is used to indicate an end tag?");
if (q3 === "/") {
  alert("Correct");
  score = score + 10;
} else if (q3 === "/") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q4 = prompt(
  " Inline elements are normally displayed without starting a new line."
);
if (q4 === "True") {
  alert("Correct");
  score = score + 10;
} else if (q4 === "True") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q5 = prompt(" How can you make a numbered list? ");
if (q5 === "ol") {
  alert("Correct");
  score = score + 10;
} else if (q5 === "ol") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q6 = prompt(" How can you make a bulleted list? ");
if (q6 === "ul") {
  alert("Correct");
  score = score + 10;
} else if (q6 === "ul") {
  alert("Correct");
  score += 10;
} else {
  alert("InCorrect");
}
var q7 = prompt(" HTML comments start with <!-- and end with -->");
if (q7 === "True") {
  alert(" Correct ");
  score = score + 10;
} else if (q7 === "True") {
  alert(" Correct ");
  score += 10;
} else {
  alert("InCorrect");
}
var q8 = prompt(
  " Block elements are normally displayed without starting a new line. "
);
if (q8 === "False") {
  alert(" Correct ");
  score = score + 10;
} else if (q8 === "False") {
  alert(" Correct ");
  score += 10;
} else {
  alert("InCorrect");
}
var q9 = prompt(" In HTML, onblur and onfocus are: ");
if (q9 === "Event attributes") {
  alert(" Correct ");
  score = score + 10;
} else if (q9 === "Event attributes") {
  alert(" Correct ");
  score += 10;
} else {
  alert("InCorrect");
}
var q10 = prompt(" The HTML <canvas> element is used to: ");
if (q10 === "Draw Graphics") {
  alert(" Correct ");
  score = score + 10;
} else if (q10 === "Draw Graphics") {
  alert(" Correct ");
  score += 10;
} else {
  alert("InCorrect");
}

alert(Name + " your score is" + score);

for (var j = 0; j <= 10; j++) {
  document.write(2 + "*" + j + "=" + 2 * j);
  document.write("<br>");
}

document.write("<br>");
var total = 100;
var percentage = (score / 100) * total;

document.write("TOTAL MARKS:" + total);
document.write("<br>");

document.write("MARKS OBTAINED:" + score);
document.write("<br>");

document.write("PERCENTAGE is: " + percentage + "%");
document.write("<br>");

// document.write("<br>");
// document.write("Table of " + 2 + "<br>");
// document.write("<br>");
// for (var j = 0; j <= 10; j++) {
//   document.write(2 + "*" + j + "=" + 2 * j);
//   document.write("<br>");
// }
