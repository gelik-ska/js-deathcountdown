// const items = document.querySelectorAll(".countdown-item > h4");
// const heading = document.querySelector(".heading");
// const countDown = document.querySelector(".countdown");

// // назначам дату отсвета
// let countDownDate = new Date(2026, 1, 23, 11, 0, 0).getTime();
// console.log(countDownDate);

// function getCountTime() {
//   // получить текущее время
//   const now = new Date().getTime();

//   // разница времени
//   const distance = countDownDate - now;

//   // создаем переменные в млс
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;

//   let days = Math.floor(distance / oneDay);
//   let hours = Math.floor((distance % oneDay) / oneHour);
//   let minutes = Math.floor((distance % oneHour) / oneMinute);
//   let seconds = Math.floor((distance % oneMinute) / 1000);

//   // создаем массив с переменными
//   const values = [days, hours, minutes, seconds];

//   // добавлям значения
//   items.forEach(function (item, index) {
//     item.textContent = values[index];
//   })
//   if (distance < 0) {
//     clearInterval(countDownInterval);
//     countDown.innerHTML = '<img src="assets/smert-s-kosoy.jpg" alt="ryuk" class="image" />'
//     heading.textContent = "Ты умер!"
//   }
// }

// // обновление счетчика
// let countDownInterval = setInterval(getCountTime, 1000);

// // инициализация ывремени
// getCountTime();




// Функция для генерации случайной даты в будущем


// function getRandomFutureDate() {
//   const now = new Date();

//   // Генерируем случайные дни (от 1 до 365)
//   const randomDays = Math.floor(Math.random() * 365) + 1;
//   // Генерируем случайные часы, минуты и секунды
//   const randomHours = Math.floor(Math.random() * 24);
//   const randomMinutes = Math.floor(Math.random() * 60);
//   const randomSeconds = Math.floor(Math.random() * 60);

//   // Добавляем к текущей дате
//   now.setDate(now.getDate() + randomDays);
//   now.setHours(randomHours);
//   now.setMinutes(randomMinutes);
//   now.setSeconds(randomSeconds);

//   return now.getTime();
// }

// // 🕒 Устанавливаем случайную дату отсчёта
// let countDownDate = getRandomFutureDate();
// console.log("Конечная дата:", new Date(countDownDate)); // Проверяем в консоли
