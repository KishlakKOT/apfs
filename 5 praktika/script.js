//for
for (let i = 0; i < 10; i++) {
    document.write("Hello world! <br>");
}

//while Задача 1
let number = parseInt(prompt("Выведите положительное число:"));
while (number <= 0 || number > 1000000) {
    if (number <= 0) {
        number = parseInt(
            prompt(
                "Вы ввели отрицательное число или 0. Пожалуйста, введите положительное число:"
            )
        );
    } else {
        number = parseInt(
            prompt(
                "Вы ввели слишком большое число. Пожалуйста, введите число, которое меньше или равно 1000000:"
            )
        );
    }
}

let divisor = 2;
document.write("Делители числа " + number + ":<br/>");
let hasDivisors = false;
while (divisor < number) {
    if (number % divisor === 0) {
        document.write(divisor + "<br/>");
        hasDivisors = true;
    }
    divisor++;
}
if (!hasDivisors) {
    document.write("У числа " + number + " нет делителей.<br/>");
}

//while Задача 2
let balance = parseInt(prompt("Введите начальный баланс:"));
let years = 0;
const targetAmount = 1000000;
while (balance < targetAmount) {
    balance *= 1.1; //увеличиваем вклад на 10%
    years++; //увеличиваем количество лет на 1
}
document.write(
    `Вам понадобится ${years} лет, чтобы достичь суммы в ${targetAmount} у.е.`
);

//Do while Задача 1
let input;
do {
    input = prompt("Введите число от 1 до 10");
} while (input < 1 || input > 10);
console.log("Вы ввели число " + input);

//Do while Задача 2
let password;
let correctPassword = "qwerty";
do {
    password = prompt("Введите пароль:");
} while (password !== correctPassword);
alert("Добро пожаловать!");

//Break, continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}