export let wrapperR = document.querySelector(Classes.wrapR);
import { artistDiv, currentHTML, goHome, mainWrapper } from "./changeScreen";
import {
  ArtistArtHTML,
  ArtistPicHTML,
  Classes,
  mainChangeHTML,
  questionCount,
  WrapperRHTML,
} from "./models";
import { json } from "./openRoundForArtist";

export function goScore() {
  mainWrapper.style.display = "none";
  artistDiv.style.display = "none";
  getWrapperR();
}

function getWrapperR() {
  wrapperR.innerHTML = WrapperRHTML;
  const itemHome = document.querySelector(Classes.itemHome);
  const itemScore = document.querySelector(Classes.itemScore);
  localStorage.getItem("lang") == "EN"
    ? (itemHome.innerHTML =
        '<img src="./asset/home.svg" alt="ops" class="nav_img">Home') &&
      (itemScore.innerHTML =
        '<img src="./asset/score.svg" alt="ops" class="nav_img">Categories')
    : (itemHome.innerHTML =
        '<img src="./asset/home.svg" alt="ops" class="nav_img">Домой') &&
      (itemScore.innerHTML =
        '<img src="./asset/score.svg" alt="ops" class="nav_img">Категории');
  wrapperR.style.display = "flex";
  let homeBut = document.querySelectorAll(Classes.navItem)[0];
  homeBut.addEventListener("click", goHome);
  let catBut = document.querySelector(Classes.itemScore);
  getImageScore();
}

let imageConteiner;

export async function getImageScore() {
  imageConteiner = document.querySelectorAll(Classes.image);
  for (let i = 0; i < imageConteiner.length; i++) {
    let img = new Image();
    let imagesNumber = (i + 1) * questionCount - (questionCount - 1);
    const url = `https://raw.githubusercontent.com/katesoo/image-data/master/img/${imagesNumber}.jpg`;
    const res = await fetch(url);
    img.src = res.url;
    img.onload = function () {
      imageConteiner[i].style.backgroundImage = `url('${img.src}')`;
      currentHTML === ArtistArtHTML
        ? setGrayScaleArtist(i)
        : setGrayScalePic(i);
    };
    imageConteiner[i].addEventListener("click", () => {
      openScore(i);
    });

    async function openScore(roundNum) {
      let mainChange = document.querySelector(Classes.images);
      mainChange.innerHTML = mainChangeHTML;
      let imageR = document.querySelectorAll(Classes.imageResult);
      let spanInfo = document.querySelectorAll(Classes.spanInfo);
      let firstImageNum = (roundNum + 1) * questionCount - (questionCount - 1);
      for (
        let imageNums = firstImageNum;
        imageNums < firstImageNum + questionCount;
        imageNums++
      ) {
        let imageNum = imageNums - roundNum * questionCount - 1;
        let img = new Image();
        const url = `https://raw.githubusercontent.com/katesoo/image-data/master/img/${imageNums}.jpg`;
        const res = await fetch(url);
        img.src = res.url;
        img.onload = () => {
          imageR[imageNum].style.backgroundImage = `url('${img.src}')`;
          if (
            pictureRoundCount(imageNum, roundNum) ||
            artistRoundCount(imageNum, roundNum)
          ) {
            imageR[imageNum].style.filter = "grayscale(0)";
          }
          spanInfo[
            imageNum
          ].innerHTML = `${json[imageNums].name}<br> ${json[imageNums].author}, ${json[imageNums].year}`;
        };
      }
    }
  }
}

function setGrayScaleArtist(i) {
  if (localStorage.getItem(`Iresult${i}`)) {
    imageConteiner[i].style.filter = "grayscale(0)";
  }
}

function setGrayScalePic(i) {
  if (localStorage.getItem(`Presult${i}`)) {
    imageConteiner[i].style.filter = "grayscale(0)";
  }
}

function pictureRoundCount(n, a) {
  if (
    currentHTML === ArtistPicHTML &&
    localStorage.getItem(`Pround${a}count${n + 1}`) == "true"
  )
    return true;
}
function artistRoundCount(n, a) {
  if (
    currentHTML === ArtistArtHTML &&
    localStorage.getItem(`Iround${a}count${n + 1}`) == "true"
  )
    return true;
}
