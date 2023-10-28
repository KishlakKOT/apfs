//Задача 1
x = +prompt("Введите число от 1 до 6");
switch (x) {
    case 2:
    case 4:
    case 6:
        alert("Чётное");
        break;
    case 1:
    case 3:
    case 5:
        alert("Нечётное");
        break;
    default:
        alert("Вне диапазона");
}

//Задача 2
let distance = prompt("Введите расстояние доставки в км:");
let weight = prompt("Введите вес груза в кг:");
let cargoType = prompt("Введите тип груза (Обычный, Хрупкий, Опасный):");
let transportType = prompt(
    "Введите тип транспорта (Легковой автомобиль, Грузовик, Самолёт):"
);

//Расчёт базовой стоимости доставки в зависимости от расстояния
let basePrice;
if (distance <= 50) {
    basePrice = 500;
} else if (distance > 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}

//Дополнительная стоимость для грузов с большим весом
let weightPrice = 0;
if (weight > 10) {
    weightPrice = 500;
}

let cargoPrice = 0;
switch (cargoType) {
    case "Обычный":
        cargoPrice = 0;
        break;
    case "Хрупкий":
        cargoPrice = 1000;
        break;
    case "Опасный":
        cargoPrice = 2000;
        break;
    default:
        console.log("Неверно указан тип груза");
}

let transportPrice = 0;
switch (transportType) {
    case "Лековой автомобиль":
        transportPrice = 500;
        break;
    case "Грузовик":
        transportPrice = 1500;
        break;
    case "Самолёт":
        transportPrice = 5000;
        break;
    default:
        console.log("Неверно указан тип транспорта");
}

let totalCost = basePrice + weightPrice + cargoPrice + transportPrice;
alert(`Стоимость доставки: ${totalCost} руб.`);