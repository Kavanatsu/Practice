let month = 1;  
let year = 2024; 

// Определение поры года
let season;
if (month >= 3 && month <= 5) {
  season = "весна";
} else if (month >= 6 && month <= 8) {
  season = "лето";
} else if (month >= 9 && month <= 11) {
  season = "осень";
} else {
  season = "зима";
}

console.log("Пора года:", season);

// Проверка на високосный год
let isLeapYear = false;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
}

if (isLeapYear) {
  console.log(year, "год - високосный");
} else {
  console.log(year, "год - не високосный");
}