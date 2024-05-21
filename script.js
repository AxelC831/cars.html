
// Displaying a message on the browser screen via DOM
function displayMessage(message) {
  let messageElement = document.createElement("p");
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
}

// Outputting a message to the console
function logMessage(message) {
  console.log(message);
}

// Displaying a message on the browser screen via DOM and logging it to the console
function showMessageAndLog(message) {
  displayMessage(message);
  logMessage(message);
}

logMessage("Look for the car that you like");

alert("Hello this is my website!!")

var BMWcarprice = document.getElementById("img1")

BMWcarprice.addEventListener("click", function() {
  alert("BMW X5, starting at $59,400");
});

let cars = 2000000;
let bigcars = 100000;
let total = cars * 8;
let total2 = bigcars * 5;

alert("Total price for all cars is " + total)

if (total > 5000000 || total2 > 450000) {
  showMessageAndLog("It's a big number of moneys");
} else {
  showMessageAndLog("It's a little small number of moneys");
}


  