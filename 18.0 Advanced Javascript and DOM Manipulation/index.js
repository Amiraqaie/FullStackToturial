// sounds file path
const sounds = {
  w: './sounds/crash.mp3',
  a: './sounds/kick-bass.mp3',
  s: './sounds/snare.mp3',
  d: './sounds/tom-1.mp3',
  j: './sounds/tom-2.mp3',
  k: './sounds/tom-3.mp3',
  l: './sounds/tom-4.mp3'
};

function makeSound(key)
{
    const audio = new Audio(sounds[key]);
    audio.play();
}

// keyboard event listener
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

// click event listener
for (const element of document.querySelectorAll("button")) {
  element.addEventListener("click", function () {
    const class_name = this.classList[0];
    makeSound(class_name)
    buttonAnimation(class_name);
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

// Constructor function
function Employee(firstName, lastName, jobTitle, salary) {
  // Instance properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.isActive = true;

  // Instance method
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const employee1 = new Employee("Alice", "Johnson", "Frontend Developer", 5000);
console.log(employee1.getFullName()); // Alice Johnson

// adding animation to website
function buttonAnimation(currentKey) {
  const button = document.querySelector("." + currentKey);
  button.classList.add("pressed");
  setTimeout(function() {
    button.classList.remove("pressed");
  }, 
  100);
}
