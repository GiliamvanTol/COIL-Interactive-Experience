"use strict";

const targetDate = new Date().getTime() + (1000 * 480);

// Countdown function to update the timer
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the countdown div
    document.getElementById("countdown").innerHTML = 
        `0${minutes}:${seconds}`;

    // Check if the countdown has ended
    if (timeLeft > 0) {
        setTimeout(updateCountdown, 1000); // Call updateCountdown again after 1 second
    } else {
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}

// Initial call to start the countdown
updateCountdown();
// Define an array with some items
// Keep track of the current index and click count
let currentIndex = 0;
let clickCount = 0;

// Function to show the next item and update the click counter
function showNextItemPlus() {
  if (currentIndex < items.length - 1) {
    currentIndex++; // Increment the index to show the next item
    document.getElementById('display').innerText = items[currentIndex];
    
    clickCount++; // Increment the click counter
    document.getElementById('clickCount').innerText = clickCount;
  } else {
    if (clickCount < 5){
      document.getElementById('display').innerHTML = "Hahahaha ha silly human!"
      document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
    }
    if (clickCount > 5){
      document.getElementById('display').innerHTML = "You Beat Mr Evil"
      document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
  }
  }
}

function showNextItemMin() {
    if (currentIndex < items.length - 1) {
      currentIndex++; // Increment the index to show the next item
      document.getElementById('display').innerText = items[currentIndex];
      
      clickCount--; // Increment the click counter
      document.getElementById('clickCount').innerText = clickCount;
    } else {
      if (clickCount < 5){
        document.getElementById('display').innerHTML = "Hahahaha ha silly human!"
        document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
      }
      if (clickCount > 5){
        document.getElementById('display').innerHTML = "You Beat Mr Evil"
        document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
  }
  }
}

let amountSkipped = 0;

function showNextItemSkip() {
    if (amountSkipped > 2) {
      return;
    }

    amountSkipped++;

    ShowAmountOfSkipsLeft();

    if (currentIndex < items.length - 1) {
      currentIndex++; // Increment the index to show the next item
      document.getElementById('display').innerText = items[currentIndex];
    } else {
    if (clickCount < 5){
      document.getElementById('display').innerHTML = "Hahahaha ha silly human!"
      document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
  }
    if (clickCount > 5){
       document.getElementById('display').innerHTML = "You Beat Mr Evil"
        document.getElementById('nextButtonSkip').disabled = true; // Disable the button when reaching the last item
  }   
  }
}

ShowAmountOfSkipsLeft();

function ShowAmountOfSkipsLeft() {
  document.getElementById('skipButtonCount').innerText = 3 - amountSkipped;
}

// Show the first item initially
document.getElementById('display').innerText = items[currentIndex];
// Add event listener to the button to show the next item and update the click counter when clicked
document.getElementById('nextButtonPlus').addEventListener('click', showNextItemPlus);
// Add event listener to the button to show the next item and update the click counter when clicked
document.getElementById('nextButtonMin').addEventListener('click', showNextItemMin);
// Add event listener to the button to show the next item and update the click counter when clicked
document.getElementById('nextButtonSkip').addEventListener('click', showNextItemSkip);