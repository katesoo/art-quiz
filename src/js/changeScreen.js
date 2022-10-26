export const mainWrapper = document.querySelector("#wrapper");
export const ArtistBut = document.querySelector(Classes.artistBut);
export const artistDiv = document.querySelector("#wrapper_categories");
export const PictureBut = document.querySelector(Classes.pictureBut);
import { wrapperQ, count, openArtistRounds } from "./openRoundForArtist";
import { openPictureRounds, wrapperA } from "./openRoundForPicture";
import { wrapperR, goScore } from "./Score";
import { ArtistPicHTML, ArtistArtHTML, Classes } from "./models";

export let roundButs;
export let currentHTML;
let roundPictureButs;

ArtistBut.addEventListener("click", () => {
  currentHTML = ArtistArtHTML;
  openArtist(currentHTML);
});

PictureBut.addEventListener("click", () => {
  currentHTML = ArtistPicHTML;
  openArtist(currentHTML);
});

export function openArtist(currentHTML) {
  artistDiv.style.display = "block";
  artistDiv.style.opacity = 1;
  artistDiv.innerHTML = currentHTML;
  const mainTitle = document.querySelector(Classes.catTitle);
  roundButs = document.querySelectorAll(Classes.artistItemArt);
  roundPictureButs = document.querySelectorAll(Classes.artistItemPic);
  hideForArtist();
  let homeBut = document.querySelectorAll(Classes.catItem)[0];
  localStorage.getItem("lang") == "EN"
    ? (mainTitle.innerHTML = "Round") &&
      (homeBut.innerHTML =
        '<img src="./asset/home.svg" alt="ops" class="nav_category_img"> Home')
    : (mainTitle.innerHTML = "Раунд") &&
      (homeBut.innerHTML =
        '<img src="./asset/home.svg" alt="ops" class="nav_category_img"> Домой');
  homeBut.addEventListener("click", goHome);
  let scoreBut = document.querySelectorAll(Classes.catItem)[1];
  localStorage.getItem("lang") == "EN"
    ? (scoreBut.innerHTML =
        '<img src="./asset/score.svg" alt="ops" class="nav_category_img">Score')
    : (scoreBut.innerHTML =
        '<img src="./asset/score.svg" alt="ops" class="nav_category_img">Результаты');
  scoreBut.addEventListener("click", () => {
    goScore();
  });
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 11; j++) {
      currentHTML === ArtistArtHTML
        ? playedRoundsArt(i, j)
        : playedRoundsPic(i, j);
    }
  }
  count.a = 1;
  currentHTML === ArtistArtHTML ? openArtistRounds() : openPictureRounds();
}

function playedRoundsArt(i, j) {
  if (localStorage.getItem(`Iround${i}count${j}`)) {
    roundButs[i].classList.add("played");
    roundButs[i].innerHTML =
      (localStorage.getItem(`Iresult${i}`) || "0") + "/10";
  }
}

function playedRoundsPic(i, j) {
  if (localStorage.getItem(`Pround${i}count${j}`)) {
    roundPictureButs[i].classList.add(Classes.playedPic);
    roundPictureButs[i].innerHTML =
      (localStorage.getItem(`Presult${i}`) || "0") + "/10";
  }
}

function hideForArtist() {
  mainWrapper.style.display = "none";
  artistDiv.id = Classes.ArtistDivId;
  wrapperR.style.display = "none";
  wrapperA.style.display = "none";
  wrapperQ.style.display = "none";
}

export function goHome() {
  artistDiv.style.display = "none";
  mainWrapper.style.display = "flex";
  wrapperR.style.display = "none";
}
