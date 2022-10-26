import { rightAuthorArt, url, nameArt, year } from "./class";
import { rightAuthorPic, imageNumPic, namePic, yearPic } from "./PictureClass";
import {
  indexPic,
  openPictureRound,
  showPic,
  wrapperA,
  bulletPic,
  openPictureRounds,
} from "./openRoundForPicture";
import {
  show,
  indexI,
  count,
  wrapperQ,
  bulletArt,
  openArtistRounds,
} from "./openRoundForArtist";
import { openArtist, currentHTML } from "./changeScreen";
import {
  Answer,
  ArtistArtHTML,
  ArtistPicHTML,
  Classes,
  End,
  questionCount,
} from "./models";

export var resultCount = 0;

const formWrapper = document.querySelector(Classes.formWrap);
const transperent = document.querySelector(Classes.transparent);

export async function openResult(ans) {
  let rightUrlPic = `url("https://raw.githubusercontent.com/katesoo/image-data/master/img/${imageNumPic}.jpg")`;
  transperent.style.display = "block";
  formWrapper.style.display = "flex";
  let index;
  let bulletCom;
  let AnswerRight;
  let urlCom;
  if (currentHTML === ArtistArtHTML) {
    bulletCom = bulletArt;
    index = indexI;
    AnswerRight = rightAuthorArt;
    urlCom = url;
  }
  if (currentHTML === ArtistPicHTML) {
    bulletCom = bulletPic;
    index = indexPic;
    AnswerRight = rightUrlPic;
    urlCom = `https://raw.githubusercontent.com/katesoo/image-data/master/img/${imageNumPic}.jpg`;
  }
  if (AnswerRight == ans) {
    if (bulletCom) {
      bulletCom[count.a - 1].style.backgroundColor = Answer.rightColor;
    }
    formWrapper.innerHTML = Answer.right;
    if (Number.isInteger(index)) {
      currentHTML === ArtistArtHTML
        ? localStorage.setItem(`Iround${index}count${count.a}`, "true")
        : localStorage.setItem(`Pround${index}count${count.a}`, "true");
    }
    resultCount++;
    Sound("./asset/right.mp3");
  } else {
    if (bulletCom) {
      bulletCom[count.a - 1].style.backgroundColor = Answer.wrongColor;
    }
    formWrapper.innerHTML = Answer.wrong;
    if (Number.isInteger(index)) {
      currentHTML === ArtistArtHTML
        ? localStorage.setItem(`Iround${index}count${count.a}`, "false")
        : localStorage.setItem(`Pround${index}count${count.a}`, "false");
    }
    Sound("./asset/wrong.mp3");
  }
  let img = new Image();
  const answerImg = document.querySelector(Classes.answerImg);
  const res = await fetch(urlCom);
  img.src = res.url;
  img.onload = () => {
    answerImg.style.backgroundImage = `url('${img.src}')`;
  };
  const namePicture = document.querySelector(Classes.picName);
  namePicture.innerHTML = nameArt || namePic;
  const authorAndYear = document.querySelector(Classes.authorAndYear);
  authorAndYear.innerHTML =
    (rightAuthorArt || rightAuthorPic) + "," + (year || yearPic);
  const nextBut = document.querySelector(Classes.next);
  localStorage.getItem("lang") == "EN"
    ? (nextBut.innerHTML = "Next")
    : (nextBut.innerHTML = "Далее");
  nextBut.addEventListener("click", function () {
    if (count.a == questionCount) {
      showRoundResult();
      return index == undefined;
    } else if (index + 1) {
      count.a++;
      transperent.style.display = "none";
      formWrapper.style.display = "none";
      if (currentHTML === ArtistArtHTML) {
        show(index);
      }
      if (currentHTML === ArtistPicHTML) {
        showPic(index);
        openPictureRound();
      }
      return count.a;
    }
  });
}

function Sound(url) {
  let audio = new Audio(url);
  audio.volume = localStorage.getItem("volume");
  audio.autoplay = true;
}

export function showRoundResult() {
  let index;
  currentHTML === ArtistArtHTML? index = indexI : index = indexPic;
  Sound("./asset/end.mp3");
  transperent.style.display = "block";
  formWrapper.style.display = "flex";
  formWrapper.innerHTML = End.RoundForm;
  let endText = document.querySelector(Classes.textForm);
  localStorage.getItem("lang") == "EN"
    ? (endText.innerHTML = "Congradulations!")
    : (endText.innerHTML = "Поздравляем!");
  var doneCount = document.querySelector(Classes.done);
  currentHTML === ArtistArtHTML && Number.isInteger(index)
    ? localStorage.setItem(`Iresult${index}`, resultCount)
    : localStorage.setItem(`Presult${index}`, resultCount);
  if (Number.isInteger(index)) {
    currentHTML === ArtistArtHTML
      ? (doneCount.innerHTML = localStorage.getItem(`Iresult${index}`))
      : (doneCount.innerHTML = localStorage.getItem(`Presult${index}`));
  }
  const butToNext = document.querySelector(".button2");
  localStorage.getItem("lang") == "EN"
    ? (butToNext.innerHTML = "Next")
    : (butToNext.innerHTML = "Далее");
  butToNext.addEventListener("click", function () {
    transperent.style.display = "none";
    formWrapper.style.display = "none";
    wrapperQ.style.display = "none";
    wrapperA.style.display = "none";
  });
  resultCount = 0;
  count.a = 1;
  if(index + 1){
    butToNext.addEventListener("click", () => {
      openArtist(currentHTML);
      currentHTML === ArtistArtHTML?  openArtistRounds() : openPictureRounds();
    });
  }
}
