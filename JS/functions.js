let heading = document.getElementsByTagName("h1")[0];
console.log(heading);
// Parameters
heading.innerHTML = "<ul>";

function sum(param1, param2) {
  let sum = param1 + param2;
  console.log(sum);
  heading.innerHTML += "<li>" + sum + "</li>";
}

heading.innerHTML += "</ul>";

// sum(2, 4); // Arguments
sum(5, 5); // Calling

sum("Salman", " Ahmed");
sum("Hassan", " Khan");
sum();

// -------------------------

function myFun(rec_1, rec_2) {
  return rec_1 * rec_2;
}

let result = myFun(2, 3);
document.querySelector(".parent").innerHTML = "<h2>" + result + "</h2>"; // Concatination
