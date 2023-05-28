const photos = [
  'assets/img/img_20230527_140040.jpg',
  'assets/img/img_20230527_140423.jpg',
  'assets/img/img_20230527_140814.jpg',
  'assets/img/img_20230527_141122.jpg',
  'assets/img/img_20230527_141335.jpg',
  'assets/img/img_20230527_141458.jpg',
  'assets/img/img_20230527_141639.jpg',
  'assets/img/img_20230527_142027.jpg',
  'assets/img/img_20230527_142518.jpg',
  'assets/img/IMG_20230527_142641.jpg',
  'assets/img/IMG_20230527_143241.jpg',
  'assets/img/IMG_20230527_143247.jpg',
  'assets/img/IMG_20230527_143254.jpg',
  'assets/img/IMG_20230527_143408.jpg',
  'assets/img/IMG_20230527_144123.jpg',
  'assets/img/IMG_20230527_144147.jpg',
  'assets/img/IMG_20230527_144321.jpg',
  'assets/img/IMG_20230527_144328.jpg',
  'assets/img/IMG_20230527_144343.jpg',
  'assets/img/IMG_20230527_144502.jpg',
  'assets/img/IMG_20230527_144530.jpg',
  'assets/img/IMG_20230527_144655.jpg',
  'assets/img/IMG_20230527_144700.jpg',
  'assets/img/IMG_20230527_144741.jpg',
  'assets/img/IMG_20230527_144929.jpg',
  'assets/img/IMG_20230527_145318.jpg',
  'assets/img/IMG_20230527_145823.jpg',
  'assets/img/IMG_20230527_145939.jpg',
  'assets/img/IMG_20230527_145940.jpg',
  'assets/img/IMG_20230527_150058.jpg',
  'assets/img/IMG_20230527_150106.jpg',
  'assets/img/IMG_20230527_150118.jpg',
  'assets/img/IMG_20230527_150545.jpg',
  'assets/img/IMG_20230527_150638.jpg',
  'assets/img/IMG_20230527_151155.jpg',
  'assets/img/IMG_20230527_151215.jpg',
  'assets/img/IMG_20230527_151500.jpg',
  'assets/img/IMG_20230527_151647.jpg',
  'assets/img/IMG_20230527_151651.jpg',
  'assets/img/IMG_20230527_151710.jpg',
  'assets/img/IMG_20230527_152305.jpg',
  'assets/img/IMG_20230527_152427.jpg',
  'assets/img/IMG_20230527_152649.jpg',
  'assets/img/IMG_20230527_152726.jpg',
  'assets/img/IMG_20230527_152900.jpg',
  'assets/img/IMG_20230527_153000.jpg',
  'assets/img/IMG_20230527_153035.jpg',
  'assets/img/IMG_20230527_153042.jpg',
  'assets/img/IMG_20230527_153134.jpg',
  'assets/img/IMG_20230527_153321.jpg'
]

const photoContainer = document.querySelector(".photo-container");
const popupWrapper = document.querySelector(".popup-wrapper");
const popup = document.querySelector(".popup");

// Функция для отображения всплывающего окна с выбранной фотографией
function openPopup(photoUrl) {
  const img = document.createElement("img");
  img.src = photoUrl;
  img.classList.add("photo");
  img.alt = "Description of the photo";
  popup.innerHTML = "";
  popup.appendChild(img);
  popupWrapper.classList.add("open");
}

// Функция для закрытия всплывающего окна
function closePopup() {
  popupWrapper.classList.remove("open");
}

// Добавляем обработчик события для каждой фотографии
photos.forEach((photoUrl) => {
  const img = document.createElement("img");
  img.src = photoUrl;
  img.classList.add("photo");
  img.alt = "Description of the photo";
  img.addEventListener("click", () => openPopup(photoUrl));
  photoContainer.appendChild(img);
});

// Добавляем обработчик события для закрытия всплывающего окна при клике на его области
popupWrapper.addEventListener("click", closePopup);
