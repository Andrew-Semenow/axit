// Смена картинок
const arr = [
  "assets/images/example-1.png",
  "assets/images/example-2.png",
  "assets/images/example-3.png",
];

$(function () {
  $(".change__button").click(function () {
    const id = this.id;
    $("#my__image").attr("src", arr[id]);
  });
});

// Город

// const headerCityButton = document.querySelector(".header__city-button");

// if (localStorage.getItem("user-location")) {
//   headerCityButton.textContent = localStorage.getItem();
// }

// headerCityButton.addEventListener("click", () => {
//   const city = prompt("Укажите ваш город:");
//   headerCityButton.textContent = city;
//   localStorage.setItem("user-location", city);
// });
