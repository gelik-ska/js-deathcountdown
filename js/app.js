// Это объединенный js с HTML разметкой и счетчиком

// document.addEventListener("DOMContentLoaded", function() {
//   const container = document.createElement("div");
//   container.className = "container";

//   const image = document.createElement("img");
//   image.className = "image";
//   image.src = "assets/image.webp";
//   image.alt = "ryuk";

//   const heading = document.createElement("h2");
//   heading.className = "heading"
//   heading.textContent = "Ты умрешь через:";

//   const countDown = document. createElement("div");
//   countDown.className = "countdown";

// // ---------------
//   function createCountItem(value, label) {
//     const countItem = document.createElement("div");
//     countItem.className = "countdown-item"

//     const hFour = document.createElement("h4");
//     hFour.className = label;
//     hFour.textContent = value;

//     const timeText = document.createElement("span");
//     timeText.textContent = label;

//     countItem.appendChild(hFour);
//     countItem.appendChild(timeText);

//     return countItem;
//   }
//   countDown.appendChild(createCountItem("days", "Дней"));
//   countDown.appendChild(createCountItem("hours", "Часов"));
//   countDown.appendChild(createCountItem("minutes", "Минут"));
//   countDown.appendChild(createCountItem("seconds", "Секунд"));
  
//   // countDown.appendChild(createCountItem(10, "days"));
//   // countDown.appendChild(createCountItem(10, "days"));
//   // countDown.appendChild(createCountItem(10, "days"));
//   // countDown.appendChild(createCountItem(10, "days"));

//   container.appendChild(image);
//   container.appendChild(heading);
//   container.appendChild(countDown);

//   document.body.appendChild(container);
// })



document.addEventListener("DOMContentLoaded", function() {
  // Создаём контейнер
  const container = document.createElement("div");
  container.className = "container";

  // Добавляем изображение
  const image = document.createElement("img");
  image.className = "image";
  image.src = "assets/image.webp";
  image.alt = "ryuk";

  // Заголовок
  const heading = document.createElement("h2");
  heading.className = "heading";
  heading.textContent = "Ты умрешь через:";

  // Контейнер для таймера
  const countDown = document.createElement("div");
  countDown.className = "countdown";

  // Функция для создания элементов таймера
  function createCountItem(label) {
    const countItem = document.createElement("div");
    countItem.className = "countdown-item";

    const hFour = document.createElement("h4");
    hFour.className = label;

    const timeText = document.createElement("span");
    timeText.textContent = label;

    countItem.appendChild(hFour);
    countItem.appendChild(timeText);

    return countItem;
  }

  // Добавляем таймер
  countDown.appendChild(createCountItem("days"));
  countDown.appendChild(createCountItem("hours"));
  countDown.appendChild(createCountItem("minutes"));
  countDown.appendChild(createCountItem("seconds"));

  // Добавляем элементы в контейнер
  container.appendChild(image);
  container.appendChild(heading);
  container.appendChild(countDown);
  document.body.appendChild(container);

  // Получаем элементы после добавления в DOM
  const items = document.querySelectorAll(".countdown-item > h4");

  // 📌 Функция для генерации случайной даты в будущем
  function getRandomFutureDate() {
    const now = new Date();

    // Генерируем случайные дни (от 1 до 365)
    const randomDays = Math.floor(Math.random() * 365) + 1;
    // Генерируем случайные часы, минуты и секунды
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    // Добавляем к текущей дате
    now.setDate(now.getDate() + randomDays);
    now.setHours(randomHours);
    now.setMinutes(randomMinutes);
    now.setSeconds(randomSeconds);

    return now.getTime();
  }

  // 🕒 Устанавливаем случайную дату отсчёта
  let countDownDate = getRandomFutureDate();
  console.log("Конечная дата:", new Date(countDownDate)); // Проверяем в консоли

  function getCountTime() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Вычисляем дни, часы, минуты, секунды
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    // Обновляем HTML
    items.forEach((item, index) => {
      item.textContent = values[index];
    });

    // Если время истекло
    if (distance < 0) {
      clearInterval(countDownInterval);
      countDown.innerHTML = '<img src="assets/smert-s-kosoy.jpg" alt="ryuk" class="image" />';
      heading.textContent = "Ты умер!";
    }
  }

  // Запускаем таймер
  let countDownInterval = setInterval(getCountTime, 1000);
  getCountTime();
});

