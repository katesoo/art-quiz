localStorage.setItem("lang", localStorage.getItem("lang") || "EN");

const setBut = document.querySelector(Classes.settsImg);
const settings = document.querySelector(Classes.setts);
const setArrow = document.querySelector(Classes.setArrow);
const volumeInput = document.querySelector(Classes.volInput);
const textOnOff = document.querySelector(Classes.timerOnOff);
// const timerSwitch = document.querySelector(Classes.timerSwitch);
const saveBut = document.querySelector(Classes.saveBut);
const langRu = document.querySelector(Classes.butRu);
const langEn = document.querySelector(Classes.butEn);
// const timerTitle = document.querySelector(Classes.titleTime);
// const timerTit = document.querySelector(Classes.timetTitle);
const langTit = document.querySelector(Classes.langTitlt);
const volTit = document.querySelector(Classes.volTitle);
const setTit = document.querySelector(Classes.settsTitle);

import { ArtistBut, PictureBut } from "./changeScreen";
import { Classes } from "./models";

function changeLang() {
  localStorage.getItem("lang") == "EN"
    ? (saveBut.innerHTML = "Save") && (langEn.innerHTML = "English") && (langRu.innerHTML = "Russian") && (langTit.innerHTML = "Language")
    && (volTit.innerHTML = "Volume") && (setTit.innerHTML = "Settings") && (ArtistBut.innerHTML = "Artist-quiz") && (PictureBut.innerHTML = "Picture-quiz")
    : (saveBut.innerHTML = "Сохранить") && (langEn.innerHTML = "Английский") && (langRu.innerHTML = "Русский") && (langTit.innerHTML = "Язык")
    && (volTit.innerHTML = "Громкость") && (setTit.innerHTML = "Настройки") && (ArtistBut.innerHTML = "Художники") && (PictureBut.innerHTML = "Картины");
}
changeLang();

setBut.addEventListener("click", () => {
  settings.style.left = 0;
  settings.classList.add("_active");
});
setArrow.addEventListener("click", () => {
  settings.style.left = 100 + "%";
  setTimeout(() => settings.classList.remove("_active"), 1000);
});
saveBut.addEventListener("click", () => {
  settings.style.left = 100 + "%";
  setTimeout(() => settings.classList.remove("_active"), 1000);
});

langEn.addEventListener("click", () => localStorage.setItem("lang", "EN"));
langEn.addEventListener("click", changeLang);
langRu.addEventListener("click", () => localStorage.setItem("lang", "RU"));
langRu.addEventListener("click", changeLang);

volumeInput.value = localStorage.getItem("volume") * 30 || 0;
volumeInput.addEventListener("change", Sound);

function Sound() {
  let audioR = new Audio("./asset/right.mp3");
  audioR.volume = volumeInput.value / 30;
  audioR.autoplay = true;
  localStorage.setItem("volume", audioR.volume);
}

// timerSwitch.addEventListener("change", () => {
//   if (timerSwitch.checked) {
//     localStorage.setItem("timerCheck", "true");
//     if (localStorage.getItem("lang") == "EN") {
//       textOnOff.innerHTML = "On";
//     }
//     if (localStorage.getItem("lang") == "RU") {
//       textOnOff.innerHTML = "Вк";
//     }
//   } else {
//     localStorage.setItem("timerCheck", "false");
//     if (localStorage.getItem("lang") == "EN") {
//       textOnOff.innerHTML = "Off";
//     }
//     if (localStorage.getItem("lang") == "RU") {
//       textOnOff.innerHTML = "Вык";
//     }
//   }
// });

// const butMinus = document.querySelector(Classes.butMinus);
// const butPlus = document.querySelector(Classes.butPlus);
// const numOfSec = document.querySelector(Classes.secNum);
// numOfSec.value = localStorage.getItem("timeValue") || 20;

// function timeMinus() {
//   if (numOfSec.value <= 5) {
//     numOfSec.value = 5;
//   } else {
//     numOfSec.value -= 5;
//   }
//   localStorage.setItem("timeValue", numOfSec.value);
// }
// butMinus.addEventListener("click", timeMinus);

// butPlus.addEventListener("click", timePlus);
// function timePlus() {
//   if (numOfSec.value >= 30) {
//     numOfSec.value = 30;
//   } else {
//     numOfSec.value = +numOfSec.value + 5;
//   }
//   localStorage.setItem("timeValue", numOfSec.value);
// }
