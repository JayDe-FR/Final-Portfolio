"use strict";

const numBtn = document.querySelectorAll("[data-number]");
const opeBtn = document.querySelectorAll("[data-operator]");
const clearBtn = document.querySelectorAll("[data-clear]");
const delBtn = document.querySelectorAll("[data-delete]");
const equalBtn = document.querySelector("[data-equal]");
const displayUpTextEl = document.querySelector("[data-up]");
const displayDownTextEl = document.querySelector("[data-down]");

class Calculator {
  constructor(displayDownTextEl, displayUpTextEl) {
    this.displayDownTextEl = displayDownTextEl;
    this.displayUpTextEl = displayUpTextEl;
    this.clear();
  }

  clear() {
    this.displayUp = "";
    this.displayLow = "";
    this.operation = "";
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
        calculus = before + this.displayLow;
        break;
      case "-":
        calculus = before - this.displayLow;
        break;
      case "*":
        calculus = before * this.displayLow;
        break;
      case "/":
        calculus = before / this.displayLow;
        break;
      default:
        return;
    }
    this.displayLow = calculus;
    this.operation = undefined;
    this.displayUp = "";
  }

  updateDisplay() {
    this.displayDownTextEl.innerText = this.displayLow;
    this.displayUpTextEl.innerText = this.displayUp;
  }
}

const calculator = new Calculator(displayDownTextEl, displayUpTextEl);

numBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateDisplay();
  });
});

opeBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});
