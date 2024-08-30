// Program 1: City Name
function checkCity() {
    const city = document.getElementById("cityName").value.toLowerCase();
    const output = city === "karachi" ? "Welcome to city of lights" : "Welcome!";
    document.getElementById("cityOutput").innerText = output;
}

// Program 2: Gender
function checkGender() {
    const gender = document.getElementById("gender").value.toLowerCase();
    let output = "Good Morning!";
    if (gender === "male") {
        output = "Good Morning Sir.";
    } else if (gender === "female") {
        output = "Good Morning Ma’am.";
    }
    document.getElementById("genderOutput").innerText = output;
}

// Program 3: Traffic Signal
function checkSignal() {
    const color = document.getElementById("signalColor").value.toLowerCase();
    let output = "";
    if (color === "red") {
        output = "Must Stop";
    } else if (color === "yellow") {
        output = "Ready to move";
    } else if (color === "green") {
        output = "Move now";
    } else {
        output = "Invalid color!";
    }
    document.getElementById("signalOutput").innerText = output;
}

// Program 4: Fuel Check
function checkFuel() {
    const fuel = parseFloat(document.getElementById("fuel").value);
    const output = fuel < 0.25 ? "Please refill the fuel in your car" : "You have enough fuel";
    document.getElementById("fuelOutput").innerText = output;
}

// Program 5: Script Outputs
function runScript() {
    let output = "";

    // a
    var a = 4;
    if (++a === 5) {
        output += "given condition for variable a is true\n";
    }

    // b
    var b = 82;
    if (b++ === 83) {
        output += "given condition for variable b is true\n";
    }

    // c
    var c = 12;
    if (c++ === 13) {
        output += "condition 1 is true\n";
    }
    if (c === 13) {
        output += "condition 2 is true\n";
    }
    if (++c < 14) {
        output += "condition 3 is true\n";
    }
    if (c === 14) {
        output += "condition 4 is true\n";
    }

    // d
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        output += "The cost equals\n";
    }

    // e
    if (true) {
        output += "True\n";
    }
    if (false) {
        output += "False\n";
    }

    // f
    if ("car" < "cat") {
        output += "car is smaller than cat\n";
    }

    document.getElementById("scriptOutput").innerText = output.trim();
}

// Program 6: Marks Calculation
function calculateGrade() {
    const marks1 = parseFloat(document.getElementById("marks1").value);
    const marks2 = parseFloat(document.getElementById("marks2").value);
    const marks3 = parseFloat(document.getElementById("marks3").value);
    const totalMarks = parseFloat(document.getElementById("totalMarks").value);
    const obtainedMarks = marks1 + marks2 + marks3;
    const percentage = (obtainedMarks / totalMarks) * 100;
    let grade = "";
    let remarks = "";

    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    const output = `Total Marks: ${totalMarks}\nMarks Obtained: ${obtainedMarks}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`;
    document.getElementById("gradeOutput").innerText = output;
}

// Program 7: Guess Game
function guessGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;
    const guess = parseInt(document.getElementById("guess").value);
    let output = "";

    if (guess === secretNumber) {
        output = "Bingo! Correct answer";
    } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
        output = "Close enough to the correct answer";
    } else {
        output = `Wrong! The secret number was ${secretNumber}`;
    }

    document.getElementById("guessOutput").innerText = output;
}

// Program 8: Divisibility Check
function checkDivisibility() {
    const number = parseInt(document.getElementById("divNumber").value);
    const output = number % 3 === 0 ? "The number is divisible by 3" : "The number is not divisible by 3";
    document.getElementById("divOutput").innerText = output;
}

// Program 9: Even or Odd Check
function checkEvenOdd() {
    const number = parseInt(document.getElementById("evenOddNumber").value);
    const output = number % 2 === 0 ? "The number is even" : "The number is odd";
    document.getElementById("evenOddOutput").innerText = output;
}

// Program 10: Temperature Check
function checkTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    let output = "";

    if (temp > 40) {
        output = "It is too hot outside.";
    } else if (temp > 30) {
        output = "The Weather today is Normal.";
    } else if (temp > 20) {
        output = "Today’s Weather is cool.";
    } else if (temp > 10) {
        output = "OMG! Today’s weather is so Cool.";
    } else {
        output = "It’s freezing!";
    }

    document.getElementById("tempOutput").innerText = output;
}

// Program 11: Simple Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result = "";

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else if (operation === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid operation";
    }

    document.getElementById("calcOutput").innerText = `Result: ${result}`;
}
