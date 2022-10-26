import { PictureRound } from "./PictureClass";
import { openResult, showRoundResult } from "./openResults";
import { artistDiv, mainWrapper, goHome } from "./changeScreen";
import { rightAuthorPic } from "./PictureClass";
import { goScore } from "./Score";
import { indexI } from "./openRoundForArtist";
import { Classes, WrapperAHTML } from "./models";

export let pictures;
export let indexPic;
export const wrapperA = document.querySelector(Classes.wrapA);
export let roundPictureButs;

export function openPictureRounds() {
  if (artistDiv.style.display == "block") {
    let homeBut = document.querySelectorAll(Classes.catItem)[0];
    homeBut.addEventListener("click", goHome);
    let scoreBut = document.querySelectorAll(Classes.catItem)[1];
    scoreBut.addEventListener("click", goScore);
    roundPictureButs = document.querySelectorAll(Classes.artistItemPic);
    roundPictureButs.forEach((roundPBut, index) => {
      roundPBut.addEventListener("click", () => {
        showPic(index);
      });
      roundPBut.addEventListener("click", openPictureRound);
    });
  }
}
export function showPic(i) {
  indexPic = i;
  if (indexI + 1) {
    indexI == undefined;
  }
  let picRound = new PictureRound();
  picRound.getRightImage(indexPic);
  picRound.getAuthor(indexPic);
}
export let bulletPic;
export function openPictureRound() {
  artistDiv.style.display = "none";
  mainWrapper.style.display = "none";
  wrapperA.innerHTML
    ? (wrapperA.innerHTML = wrapperA.innerHTML)
    : (wrapperA.innerHTML = WrapperAHTML);
  const closeIconPic = document.querySelector(Classes.closeIconPic);
  closeIconPic.addEventListener("click", showRoundResult);
  bulletPic = document.querySelectorAll(Classes.bulletPic);
  const questionMain = document.querySelector(Classes.mainQuestPic);
  localStorage.getItem("lang") == "EN"
    ? (questionMain.innerHTML = `What art was made by ${rightAuthorPic}?`)
    : (questionMain.innerHTML = `Автором какой картины является ${rightAuthorPic}?`);
  wrapperA.style.display = "flex";
  pictures = document.querySelectorAll(Classes.answerPic);
  pictures.forEach((but) => {
    but.addEventListener("click", () => {
      openResult(but.style.backgroundImage);
    });
  });
}

export let arrPictures = [];
