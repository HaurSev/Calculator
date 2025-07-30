import {
  Calculator,
  AppendNumberCommand,
  AppendDecimalCommand,
  ClearCommand,
  ToggleSignCommand,
  ReciprocalCommand,
  SetOperatorCommand,
  CalculateCommand,
  Factorial,
} from "./src/script";

describe("Command execute methods", () => {
  let calc;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="input-history"></div>
      <div id="display"></div>
      <div id="memory-indicator"></div>
      <div id="history-indicator"></div>
    `;
    calc = new Calculator();
    calc.updateDisplay = jest.fn();
    calc.updateMemoryIndicator = jest.fn();
    calc.updateHistoryIndicator = jest.fn();
    calc.updateInputHistory = jest.fn();
    calc.showErrorAndClear = jest.fn();
  });

  test("AppendNumberCommand adds number to display", () => {
    calc.displayValue = "0";
    const cmd = new AppendNumberCommand(calc, "5");
    cmd.execute();
    expect(calc.displayValue).toBe("5");
  });

  test("AppendNumberCommand appends number", () => {
    calc.displayValue = "12";
    const cmd = new AppendNumberCommand(calc, "3");
    cmd.execute();
    expect(calc.displayValue).toBe("123");
  });

  test("AppendDecimalCommand adds decimal", () => {
    calc.displayValue = "12";
    const cmd = new AppendDecimalCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("12.");
  });

  test("AppendDecimalCommand does not add second decimal", () => {
    calc.displayValue = "12.3";
    const cmd = new AppendDecimalCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("12.3");
  });

  test("ClearCommand resets calculator", () => {
    calc.displayValue = "123";
    calc.firstOperand = 5;
    calc.operator = "+";
    calc.memory = 10;
    const cmd = new ClearCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("0");
    expect(calc.firstOperand).toBeNull();
    expect(calc.operator).toBeNull();
    expect(calc.memory).toBe(0);
  });

  test("ToggleSignCommand toggles sign", () => {
    calc.displayValue = "5";
    const cmd = new ToggleSignCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("-5");
  });

  test("ReciprocalCommand computes reciprocal", () => {
    calc.displayValue = "4";
    const cmd = new ReciprocalCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("0.25");
  });

  test("ReciprocalCommand handles zero", () => {
    calc.displayValue = "0";
    const cmd = new ReciprocalCommand(calc);
    cmd.execute();
    expect(calc.showErrorAndClear).toHaveBeenCalled();
  });

  test("SetOperatorCommand sets operator and firstOperand", () => {
    calc.displayValue = "7";
    const cmd = new SetOperatorCommand(calc, "+");
    cmd.execute();
    expect(calc.firstOperand).toBe(7);
    expect(calc.operator).toBe("+");
    expect(calc.waitingForSecondOperand).toBe(true);
  });

  test("SetOperatorCommand calculates intermediate result", () => {
    calc.displayValue = "3";
    calc.firstOperand = 2;
    calc.operator = "+";
    const cmd = new SetOperatorCommand(calc, "-");
    cmd.execute();
    expect(calc.displayValue).toBe("5");
    expect(calc.firstOperand).toBe(5);
    expect(calc.operator).toBe("-");
    expect(calc.waitingForSecondOperand).toBe(true);
  });

  test("CalculateCommand does nothing if operator is null", () => {
    calc.displayValue = "5";
    calc.operator = null;
    const cmd = new CalculateCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("5");
  });

  test("CalculateCommand does nothing if waitingForSecondOperand", () => {
    calc.displayValue = "5";
    calc.operator = "+";
    calc.waitingForSecondOperand = true;
    const cmd = new CalculateCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("5");
  });

  test("CalculateCommand computes result", () => {
    calc.displayValue = "3";
    calc.firstOperand = 2;
    calc.operator = "+";
    calc.waitingForSecondOperand = false;
    const cmd = new CalculateCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("5");
    expect(calc.firstOperand).toBeNull();
    expect(calc.operator).toBeNull();
    expect(calc.waitingForSecondOperand).toBe(false);
  });

  test("Testing pow command", () => {
    calc.displayValue = "3";
    calc.firstOperand = 2;
    calc.operator = "pow";
    calc.waitingForSecondOperand = false;
    const cmd = new CalculateCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("8");
  });

  test("Testing root command", () => {
    calc.displayValue = "3";
    calc.firstOperand = 64;
    calc.operator = "root";
    calc.waitingForSecondOperand = false;
    const cmd = new CalculateCommand(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("4");
  });

  test("Testing factorial command", () => {
    calc.displayValue = "5";
    const cmd = new Factorial(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("120");
  });

  test("Testing factorial command with zero", () => {
    calc.displayValue = "0";
    const cmd = new Factorial(calc);
    cmd.execute();
    expect(calc.displayValue).toBe("1");
  });
});
