"use strict";

const targetDate = new Date().getTime() + 1000 * 480;

let gameEnded = false;

// Countdown function to update the timer
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the countdown div
  document.getElementById("countdown").innerHTML = `0${minutes}:${seconds}`;

  // Check if the countdown has ended
  if (timeLeft > 0 && !gameEnded) {
    setTimeout(updateCountdown, 1000); // Call updateCountdown again after 1 second
  } else {
    document.getElementById("countdown").innerHTML = "The event has ended!";
    if (!gameEnded) {
      gameLoss();
    }
  }
}

let currentIndex = 0;
let completedAssignments = 0;
let failedAssignments = 0;

function gameWin() {
  document.getElementById("display").innerHTML = "You Beat Mr Evil";
  document.getElementById("nextButtonSkip").hidden = true; // Disable the button when reaching the last item
  document.getElementById("nextButtonPlus").hidden = true; // Disable the button when reaching the last item
  document.getElementById("nextButtonMin").hidden = true; // Disable the button when reaching the last item
  document.getElementById("backToHome").hidden = true; // Disable the button when reaching the last item
  gameEnded = true;
  document.getElementById("restartGameId").hidden = false; //This button should restart the game
}

function gameLoss() {
  document.getElementById("display").innerHTML = "Hahahaha ha silly human!";
  document.getElementById("nextButtonSkip").hidden = true; // Disable the button when reaching the last item
  document.getElementById("nextButtonPlus").hidden = true; // Disable the button when reaching the last item
  document.getElementById("nextButtonMin").hidden = true; // Disable the button when reaching the last item
  document.getElementById("backToHome").hidden = true; // Disable the button when reaching the last item
  gameEnded = true;
  document.getElementById("restartGameId").hidden = false; //This button should restart the game
}

function checkGameState() {
  if (failedAssignments > 4) {
    gameLoss();
  }
  if (completedAssignments > 9) {
    gameWin();
  }

  if (currentIndex > items.length - 1) {
    gameLoss();
  }
}

// Initial call to start the countdown
updateCountdown();
// Define an array with some items
// Keep track of the current index and click count

// Function to show the next item and update the click counter
function showNextItemPlus() {
  currentIndex++; // Increment the index to show the next item
  document.getElementById("display").innerText = items[currentIndex];

  completedAssignments++; // Increment the click counter
  document.getElementById("clickCount").innerText =
    completedAssignments - failedAssignments;

  checkGameState();
}

function showNextItemMin() {
  currentIndex++; // Increment the index to show the next item
  document.getElementById("display").innerText = items[currentIndex];

  failedAssignments++; // Increment the click counter
  document.getElementById("clickCount").innerText = completedAssignments - failedAssignments;
  checkGameState();
}

// the skip counter
let amountSkipped = 0;

function ShowAmountOfSkipsLeft() {
  document.getElementById("skipButtonCount").innerText = 3 - amountSkipped;
}

function showNextItemSkip() {
  if (amountSkipped > 2) {
    return;
  }

  amountSkipped++;

  ShowAmountOfSkipsLeft();

  currentIndex++; // Increment the index to show the next item
  document.getElementById("display").innerText = items[currentIndex];

  checkGameState();
}

ShowAmountOfSkipsLeft();

// Show the first item initially
document.getElementById("display").innerText = items[currentIndex];
// Add event listener to the button to show the next item and update the click counter when clicked
document
  .getElementById("nextButtonPlus")
  .addEventListener("click", showNextItemPlus);
// Add event listener to the button to show the next item and update the click counter when clicked
document
  .getElementById("nextButtonMin")
  .addEventListener("click", showNextItemMin);
// Add event listener to the button to show the next item and update the click counter when clicked
document
  .getElementById("nextButtonSkip")
  .addEventListener("click", showNextItemSkip);
