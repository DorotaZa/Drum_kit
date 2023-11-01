//document.querySelector("button").addEventListener("click", handleClick);   //handleClick NOT handleClick() - because that function would be called before taking any action!!! = straight up function call
// function handleClick() {
//   alert("I got clicked!");
// }

var numOfButtons = document.querySelectorAll(".drum").length;

// for (i = 0; i < numOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     //adding sound 'tom-1.mp3' to all of the buttons
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   });
// }

for (i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(button);
  }
}
