import { artistDiv, mainWrapper, roundButs, goHome } from "./changeScreen";
import { indexPic } from "./openRoundForPicture";
import { goScore } from "./Score";
import { Round } from "./class";
import { Classes, WrapperQHTML } from "./models";
import { showRoundResult, openResult } from "./openResults";
import { startTime } from "./timer";

export const wrapperQ = document.querySelector(Classes.wrapQ);

export let picturePlace;
export let artistNameButs;
export { count };
export let indexI;
let count = { a: 1 };

export function openArtistRounds() {
  if (artistDiv.style.display == "block") {
    let homeBut = document.querySelectorAll(Classes.navCatItem)[0];
    homeBut.addEventListener("click", goHome);
    let scoreBut = document.querySelectorAll(Classes.navCatItem)[1];
    scoreBut.addEventListener("click", goScore);
    roundButs.forEach((roundBut, index) => {
      roundBut.addEventListener("click", openRound);
      roundBut.addEventListener("click", () => {
        show(index);
      });
    });
  }
}

export function show(i) {
  indexI = i;
  if (indexPic + 1) {
    indexPic == undefined;
  }
  let round = new Round(indexI + 1);
  round.getImage();
  round.getAuthors();
  round.getPictureName();
}
export let bulletArt;
function openRound() {
  artistDiv.style.display = "none";
  mainWrapper.style.display = "none";
  wrapperQ.innerHTML = WrapperQHTML;
  const closeIcon = document.querySelector(Classes.closeIcon);
  closeIcon.addEventListener("click", showRoundResult);
  bulletArt = document.querySelectorAll(Classes.bulletArt);
  const questionMain = document.querySelector(Classes.mainQuestArt);
  localStorage.getItem("lang") == "EN"
    ? (questionMain.innerHTML = "Who is the author of this art?")
    : (questionMain.innerHTML = "Кто написал данную картину?");
  wrapperQ.style.display = "flex";
  picturePlace = document.querySelector(Classes.mainPic);
  artistNameButs = document.querySelectorAll(Classes.answerArt);
  artistNameButs.forEach((but, i) => {
    but.addEventListener("click", () => {
      openResult(but.innerHTML);
    });
  });
}

export let allAuthors = [];

export let json;
if (localStorage.getItem("lang") == "RU") {
  json = require("../assets/image-data/imagesRu.json");
} else {
  json = require("../assets/image-data/imagesEng.json");
}

export let authors;

function uniqueAuthors() {
  json.map((image) => {
    allAuthors.push(image.author);
  });
  authors = allAuthors.filter((item, pos) => {
    return allAuthors.indexOf(item) == pos;
  });
  return authors;
}
uniqueAuthors();
