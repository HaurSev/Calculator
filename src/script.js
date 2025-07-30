import "./style.css";
export class Command {
  constructor(calculator) {
    this.calculator = calculator;
    this.previousValue = calculator.displayValue;
    this.previousFirstOperand = calculator.firstOperand;
    this.previousOperator = calculator.operator;
    this.previousWaiting = calculator.waitingForSecondOperand;
    this.previousMemory = calculator.memory;
  }

  execute() {}
  undo() {
    Object.assign(this.calculator, {
      displayValue: this.previousValue,
      firstOperand: this.previousFirstOperand,
      operator: this.previousOperator,
      waitingForSecondOperand: this.previousWaiting,
      memory: this.previousMemory,
    });
    this.calculator.updateDisplay();
    this.calculator.updateMemoryIndicator();
  }
}

// Стандартные команды
export class AppendNumberCommand extends Command {
  constructor(calculator, number) {
    super(calculator);
    this.number = number;
  }

  execute() {
    const calc = this.calculator;
    if (calc.waitingForSecondOperand) {
      calc.displayValue = this.number;
      calc.waitingForSecondOperand = false;
    } else {
      calc.displayValue = calc.displayValue === "0" ? this.number : calc.displayValue + this.number;
    }
    calc.updateDisplay();
  }
}

export class AppendDecimalCommand extends Command {
  execute() {
    const calc = this.calculator;
    if (calc.waitingForSecondOperand) {
      calc.displayValue = "0.";
      calc.waitingForSecondOperand = false;
    } else if (!calc.displayValue.includes(".")) {
      calc.displayValue += ".";
    }
    calc.updateDisplay();
  }
}

export class ClearCommand extends Command {
  execute() {
    Object.assign(this.calculator, {
      displayValue: "0",
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false,
      memory: 0,
      history: [],
    });
    this.calculator.updateDisplay();
  }
}

export class ToggleSignCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.displayValue = (parseFloat(calc.displayValue) * -1).toString();
    calc.updateDisplay();
  }
}

export class ReciprocalCommand extends Command {
  execute() {
    const calc = this.calculator;
    const value = parseFloat(calc.displayValue);
    if (value !== 0) {
      calc.displayValue = (1 / value).toString();
    } else {
      calc.showErrorAndClear();
    }
    calc.updateDisplay();
  }
}

export class SetOperatorCommand extends Command {
  constructor(calculator, operator) {
    super(calculator);
    this.operator = operator;
  }

  execute() {
    const calc = this.calculator;
    const inputValue = parseFloat(calc.displayValue);

    if (calc.operator && calc.waitingForSecondOperand) {
      calc.operator = this.operator;
      calc.updateDisplay();
      return;
    }

    if (calc.firstOperand === null) {
      calc.firstOperand = inputValue;
    } else if (calc.operator) {
      const result = calc.calculateResult(calc.firstOperand, inputValue, calc.operator);
      calc.displayValue = parseFloat(result.toFixed(10)).toString();
      calc.firstOperand = result;
      calc.updateDisplay();
    }

    calc.waitingForSecondOperand = true;
    calc.operator = this.operator;
    calc.updateDisplay();
  }
}

export class CalculateCommand extends Command {
  execute() {
    const calc = this.calculator;
    if (calc.operator === null || calc.waitingForSecondOperand) return;

    const inputValue = parseFloat(calc.displayValue);
    const result = calc.calculateResult(calc.firstOperand, inputValue, calc.operator);

    Object.assign(calc, {
      displayValue: parseFloat(result.toFixed(10)).toString(),
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false,
    });
    calc.updateDisplay();
  }
}

// Команды для специальных операций
class SquareRootCommand extends Command {
  execute() {
    const calc = this.calculator;
    const value = parseFloat(calc.displayValue);
    if (value >= 0) {
      calc.displayValue = (value ** (1 / 2)).toString();
    } else {
      calc.showErrorAndClear();
    }
    calc.updateDisplay();
  }
}

class CubeRootCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.displayValue = (parseFloat(calc.displayValue) ** (1 / 3)).toString();
    calc.updateDisplay();
  }
}

export class NthRootCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.firstOperand = parseFloat(calc.displayValue);
    calc.operator = "root";
    calc.waitingForSecondOperand = true;
  }
}

export class PowerCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.firstOperand = parseFloat(calc.displayValue);
    calc.operator = "pow";
    calc.waitingForSecondOperand = true;
  }
}

class PowerOfTwoCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.displayValue = (parseFloat(calc.displayValue) ** 2).toString();
    calc.updateDisplay();
  }
}

class PowerOfThreeCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.displayValue = (parseFloat(calc.displayValue) ** 3).toString();
    calc.updateDisplay();
  }
}

class PowerOfTenCommand extends Command {
  execute() {
    const calc = this.calculator;
    calc.displayValue = (10 ** parseFloat(calc.displayValue)).toString();
    calc.updateDisplay();
  }
}
export class Factorial extends Command {
  execute() {
    const calc = this.calculator;
    if (calc.displayValue === "0") {
      calc.displayValue = "1";
    } else if (calc.displayValue < 0 || !Number.isInteger(parseFloat(calc.displayValue))) {
      calc.showErrorAndClear();
    } else {
      let l = 1;
      for (let i = 1; i <= parseFloat(calc.displayValue); i++) l *= i;
      calc.displayValue = l.toString();
    }
    calc.updateDisplay();
  }
}

// Команды для работы с памятью
class MemoryClearCommand extends Command {
  execute() {
    this.calculator.memory = 0;
    this.calculator.updateMemoryIndicator();
  }
}

class MemoryRecallCommand extends Command {
  execute() {
    this.calculator.displayValue = this.calculator.memory.toString();
    this.calculator.updateDisplay();
  }
}

class MemoryAddCommand extends Command {
  execute() {
    this.calculator.memory += parseFloat(this.calculator.displayValue);
    this.calculator.updateMemoryIndicator();
  }
}

class MemorySubtractCommand extends Command {
  execute() {
    this.calculator.memory -= parseFloat(this.calculator.displayValue);
    this.calculator.updateMemoryIndicator();
  }
}

export class Calculator {
  constructor() {
    this.displayValue = "0";
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
    this.memory = 0;
    this.history = [];

    this.inputHistory = document.getElementById("input-history");
    this.display = document.getElementById("display");
    this.memoryIndicator = document.getElementById("memory-indicator");
    this.historyIndicator = document.getElementById("history-indicator");
  }

  executeCommand(command) {
    command.execute();
    if (!(command instanceof ClearCommand)) {
      this.history.push(command);
    }
    this.updateHistoryIndicator();
  }

  undo() {
    if (this.history.length > 0) {
      const lastCommand = this.history.pop();
      lastCommand.undo();
      this.updateHistoryIndicator();
    }
  }

  // Основные методы калькулятора
  appendNumber(number) {
    this.executeCommand(new AppendNumberCommand(this, number));
  }

  appendDecimal() {
    this.executeCommand(new AppendDecimalCommand(this));
  }

  clear() {
    this.executeCommand(new ClearCommand(this));
  }

  toggleSign() {
    this.executeCommand(new ToggleSignCommand(this));
  }

  reciprocal() {
    this.executeCommand(new ReciprocalCommand(this));
  }

  setOperator(operator) {
    this.executeCommand(new SetOperatorCommand(this, operator));
  }

  calculate() {
    this.executeCommand(new CalculateCommand(this));
  }

  // Специальные операции
  squareRoot() {
    this.executeCommand(new SquareRootCommand(this));
  }

  cubeRoot() {
    this.executeCommand(new CubeRootCommand(this));
  }

  nthRoot() {
    this.executeCommand(new NthRootCommand(this));
  }

  powerOfTwo() {
    this.executeCommand(new PowerOfTwoCommand(this));
  }

  powerOfThree() {
    this.executeCommand(new PowerOfThreeCommand(this));
  }

  power() {
    this.executeCommand(new PowerCommand(this));
  }

  powerOfTen() {
    this.executeCommand(new PowerOfTenCommand(this));
  }
  factorial() {
    this.executeCommand(new Factorial(this));
  }

  // Работа с памятью
  memoryClear() {
    this.executeCommand(new MemoryClearCommand(this));
  }

  memoryRecall() {
    this.executeCommand(new MemoryRecallCommand(this));
  }

  memoryAdd() {
    this.executeCommand(new MemoryAddCommand(this));
  }

  memorySubtract() {
    this.executeCommand(new MemorySubtractCommand(this));
  }

  // Вспомогательные методы
  calculateResult(firstOperand, secondOperand, operator) {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      case "pow":
        return firstOperand ** secondOperand;
      case "root":
        if (secondOperand === 0) return NaN;
        return firstOperand ** (1 / secondOperand);
      default:
        return secondOperand;
    }
  }
  updateInputHistory() {
    let text = "";
    if (this.firstOperand !== null) {
      text += this.firstOperand;
      if (this.operator) {
        let op = this.operator;
        if (op === "*") op = "×";
        if (op === "/") op = "÷";
        if (op === "pow") op = "^";
        if (op === "root") op = "√";
        text += " " + op;
        if (this.waitingForSecondOperand) {
          text += " " + this.displayValue;
        }
      }
    }
    if (this.waitingForSecondOperand === false && this.operator) {
      text += " " + this.displayValue;
    }
    this.inputHistory.textContent = text.trim();
  }

  updateDisplay() {
    this.display.textContent = this.displayValue;
    this.updateInputHistory();
  }

  updateMemoryIndicator() {
    this.memoryIndicator.textContent = this.memory !== 0 ? "M" : "";
  }

  updateHistoryIndicator() {
    this.historyIndicator.textContent = this.history.length;
  }

  showErrorAndClear() {
    this.displayValue = "Error";
    this.updateDisplay();
    setTimeout(() => this.executeCommand(new ClearCommand(this)), 1000);
  }
}

if (typeof window !== "undefined") {
  window.calculator = new Calculator();
  window.Calculator = Calculator;
}
