var numOfButtons = document.querySelectorAll(".drum").length;

// function handleClick() {
//   alert("I got clicked!");
// }

for (i = 0; i < numOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    //adding sound 'tom-1.mp3' to all of the buttons
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
