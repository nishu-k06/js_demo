// Function to greet user
function greetUser() {
  const name = document.getElementById('nameInput').value;
  const greetingEl = document.getElementById('greeting');

  if (name) {
    greetingEl.innerText = "Hello, " + name + "!";
  } else {
    greetingEl.innerText = "Hello!";
  }
}

// Function to change background color randomly
function changeBackgroundColor() {
  const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightgray'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to print numbers 1 to 5
function printNumbers() {
  const numberList = document.getElementById('numberList');
  numberList.innerHTML = ''; // clear existing numbers

  for (let i = 1; i <= 5; i++) {
    const span = document.createElement('span');
    span.innerText = i + " ";
    numberList.appendChild(span);
  }
}

// Function to toggle paragraph visibility
function toggleParagraph() {
  const para = document.getElementById('togglePara');
  if (para.style.display === 'none') {
    para.style.display = 'block';
  } else {
    para.style.display = 'none';
  }
}

// Add event listeners to buttons
document.getElementById('greetBtn').addEventListener('click', greetUser);
document.getElementById('colorBtn').addEventListener('click', changeBackgroundColor);
document.getElementById('toggleBtn').addEventListener('click', toggleParagraph);

// Call printNumbers on page load
printNumbers();
