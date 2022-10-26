import { questionCount } from "./models";
import { count, json } from "./openRoundForArtist";
import { pictures } from "./openRoundForPicture";

export let imageNumPic;
export let rightAuthorPic;
export let namePic;
export let yearPic;

export class PictureRound {
  constructor(roundNum) {
    this.roundNum = roundNum;
  }
  async getRightImage(indexPic) {
    let arr = [];
    imageNumPic = (indexPic + 1) * questionCount - questionCount + count.a;
    arr.push(imageNumPic);
    while (arr.length < 4) {
      let randomPic = Math.floor(Math.random() * 240);
      if (json[imageNumPic].author !== json[randomPic].author && imageNumPic !== randomPic) {
        arr.push(randomPic);
      }
    }
    let randomImages = arr.sort(() => {
      return 0.5 - Math.random();
    });
    for (let i = 0; i < 4; i++) {
      let img = new Image();
      const url = `https://raw.githubusercontent.com/katesoo/image-data/master/img/${randomImages[i]}.jpg`;
      const res = await fetch(url);
      img.src = res.url;
      img.onload = () => {
        pictures[i].style.backgroundImage = `url('${img.src}')`;
      };
    }
  }
  getAuthor(indexPic) {
    imageNumPic = (indexPic + 1) * questionCount - questionCount + count.a;
    rightAuthorPic = json[imageNumPic].author;
    namePic = json[imageNumPic].name;
    yearPic = json[imageNumPic].year;
  }
}
