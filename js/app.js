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
  const container = document.createElement("div");
  container.className = "container";

  const image = document.createElement("img");
  image.className = "image";
  image.src = "assets/image.webp";
  image.alt = "ryuk";

  const heading = document.createElement("h2");
  heading.className = "heading";
  heading.textContent = "Ты умрешь через:";

  const countDown = document.createElement("div");
  countDown.className = "countdown";

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

  countDown.appendChild(createCountItem("years"));
  countDown.appendChild(createCountItem("months"));
  countDown.appendChild(createCountItem("days"));
  countDown.appendChild(createCountItem("hours"));
  countDown.appendChild(createCountItem("minutes"));
  countDown.appendChild(createCountItem("seconds"));

  container.appendChild(image);
  container.appendChild(heading);
  container.appendChild(countDown);
  document.body.appendChild(container);

  const items = document.querySelectorAll(".countdown-item > h4");

  function getRandomFutureDate() {
    const now = new Date();
    const randomYears = Math.floor(Math.random() * 5) + 1;
    const randomMonths = Math.floor(Math.random() * 12);
    const randomDays = Math.floor(Math.random() * 30);
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    now.setFullYear(now.getFullYear() + randomYears);
    now.setMonth(now.getMonth() + randomMonths);
    now.setDate(now.getDate() + randomDays);
    now.setHours(randomHours);
    now.setMinutes(randomMinutes);
    now.setSeconds(randomSeconds);

    return now.getTime();
  }

  let countDownDate = getRandomFutureDate();
  console.log("Конечная дата:", new Date(countDownDate));

  function getCountTime() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const oneSecond = 1000;
    const oneMinute = 60 * oneSecond;
    const oneHour = 60 * oneMinute;
    const oneDay = 24 * oneHour;
    const oneMonth = 30 * oneDay;
    const oneYear = 12 * oneMonth;

    let years = Math.floor(distance / oneYear);
    let months = Math.floor((distance % oneYear) / oneMonth);
    let days = Math.floor((distance % oneMonth) / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / oneSecond);

    const values = [years, months, days, hours, minutes, seconds];

    items.forEach((item, index) => {
      item.textContent = values[index];
    });

    if (distance < 0) {
      clearInterval(countDownInterval);
      countDown.innerHTML = '<img src="assets/smert-s-kosoy.jpg" alt="ryuk" class="image" />';
      heading.textContent = "Ты умер!";
    }
  }

  let countDownInterval = setInterval(getCountTime, 1000);
  getCountTime();
});
