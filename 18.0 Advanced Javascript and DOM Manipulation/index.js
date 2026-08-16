const sounds = {
  w: './sounds/crash.mp3',
  a: './sounds/kick-bass.mp3',
  s: './sounds/snare.mp3',
  d: './sounds/tom-1.mp3',
  j: './sounds/tom-2.mp3',
  k: './sounds/tom-3.mp3',
  l: './sounds/tom-4.mp3'
};

for (const element of document.querySelectorAll("button")) {
  element.addEventListener("click", function () {
    const class_name = this.classList[0];
    const audio = new Audio(sounds[class_name]);
    audio.play();
  });
}

// call a function by operator
function add(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
};

function calculator(a, b, operator)
{
    return operator(a, b);
}

console.log(calculator(2, 3, add));      // 5
console.log(calculator(2, 3, multiply)); // 6

