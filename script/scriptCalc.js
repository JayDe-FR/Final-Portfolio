"use strict";

const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const displayUpTextEl = document.querySelector("[data-up]");
const displayDownTextEl = document.querySelector("[data-down]");

class Calculator {
  constructor(displayUpTextEl, displayDownTextEl) {
    this.displayUpTextEl = displayUpTextEl;
    this.displayDownTextEl = displayDownTextEl;
    this.clear();
  }

  clear() {
    this.displayUp = "";
    this.displayLow = "";
    this.operation = undefined;
  }

  delete() {}

  appendNum(number) {
    if (number === "." && this.displayLow.includes(".")) return;
    this.displayLow = this.displayLow.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.displayLow === "") return;
    if (this.displayUp !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.displayUp = this.displayLow;
    this.displayLow = "";
  }

  calculate() {
    let calculus;
    const before = parseFloat(this.displayLow);
    const after = parseFloat(this.displayUp);
    if (isNaN(before) || isNaN(after)) return;
    switch (this.operation) {
      case "+":
        calculus = before + after;
        break;
      case "-":
        calculus = before - after;
        break;
      case "×":
        calculus = before * after;
        break;
      case "÷":
        calculus = before / after;
        break;
      default:
        return;
    }
    this.displayLow = calculus;
    this.operation = undefined;
    this.displayUp = "";
  }

  updateDisplay() {
    this.displayDownTextEl.innerText = this.displayUp;
    this.displayUpTextEl.innerText = this.displayLow;
  }
}

const calculator = new Calculator(displayDownTextEl, displayUpTextEl);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});
