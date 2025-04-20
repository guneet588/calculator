const display = document.getElementById('display');
const expression = document.getElementById('expression');

function appendValue(val) {
  expression.value += val;
}

function clearDisplay() {
  expression.value = '';
  display.value = '';
}

function deleteLast() {
  expression.value = expression.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(expression.value);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
