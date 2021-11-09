(() => {
    // Elements
    let numbers = document.getElementsByClassName('numeral');
    let equals = document.getElementById('equals');
    let add = document.getElementById('add');
    let subtract = document.getElementById('subtract');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');
    let total = document.getElementById('total');
    let negative = document.getElementById('negative');
    let sqrt = document.getElementById('sqrt');
    let square = document.getElementById('square');
    let clear = document.getElementById('clear');
    let label = document.getElementById('history'); // This is used so the user knows the last number input when an operator is clicked.

    //Classes
    class Calculator {
        constructor() {
            this.total = 0;
            this.temp = 0;
            this.operation = "None";
        }

        addToTotal(number) {
            if(this.operation === "=") { // If user just did equals operation, clears and resets the operation to default.
                this.clear();
                this.operation = "None";
            }
            total.value = total.value * 10 + parseInt(number); // Appends each number input to the end rather than overwriting the last input.
        }
        
        equals() {
            label.innerText += " " + total.value + " ="; // Displays the two inputs and the operation in the label.
            switch(this.operation) {
                case "+":
                    total.value = parseFloat(this.temp) + parseFloat(total.value);
                    break;
                case "-":
                    total.value = parseFloat(this.temp) - parseFloat(total.value);
                    break;
                case "*":
                    total.value = parseFloat(this.temp) * parseFloat(total.value);
                    break;
                case "/":
                    total.value = parseFloat(this.temp) / parseFloat(total.value);
                    break;
                default:
                    this.clear(); // Clears when = is clicked, if no new operations have been done.
                    break;       
            }
            this.operation = "=";
        }
        
        add() {
            this.temp = total.value;
            label.innerText = this.temp + " + ";
            total.value = 0;
            this.operation = "+";
        }

        subtract() {
            this.temp = total.value;
            label.innerText = this.temp + " - ";
            total.value = 0;
            this.operation = "-";
        }
        multiply() {
            this.temp = total.value;
            label.innerText = this.temp + " * ";
            total.value = 0;
            this.operation = "*";
        }
        divide() {
            this.temp = total.value;
            label.innerText = this.temp + " / ";
            total.value = 0;
            this.operation = "/";
        }
        negative() {
            label.innerText = "-(" + total.value + ")";
            total.value = -parseFloat(total.value);
        }
        sqrt() {
            label.innerText = "\u221A" + total.value; // \u221A is the sqrt symbol
            total.value = Math.sqrt(total.value);
        }
        square() {
            label.innerText = total.value + " * " + total.value;
            total.value = Math.pow(total.value, 2);
        }
        clear() { // Resets values and displays to zero.
            total.value = 0;
            this.temp = 0;
            label.innerText = 0;
        }
    }

    var calc = new Calculator();

    //EventListeners
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function() {
            calc.addToTotal(this.innerText);
        });
    }
    add.addEventListener('click', () => {
        calc.add();
    })
    subtract.addEventListener('click', () => {
        calc.subtract();
    })
    multiply.addEventListener('click', () => {
        calc.multiply();
    })
    divide.addEventListener('click', () => {
        calc.divide();
    })
    negative.addEventListener('click', () => {
        calc.negative();
    })
    sqrt.addEventListener('click', () => {
        calc.sqrt();
    })
    square.addEventListener('click', () => {
        calc.square();
    })
    clear.addEventListener('click', () => {
        calc.clear();
    })
    equals.addEventListener('click', () => {
        calc.equals();
    });

})()