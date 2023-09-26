var numOfButtons = document.querySelectorAll(".drum").length;

function handleClick() {
  alert("I got clicked!");
}

for (i = 0; i < numOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
