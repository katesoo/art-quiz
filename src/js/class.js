import { questionCount } from "./models";
import { picturePlace } from "./openRoundForArtist";
import {
  artistNameButs,
  allAuthors,
  json,
  count,
  authors,
} from "./openRoundForArtist";
export let rightAuthorArt;
export let url;
export let nameArt;
export let year;

export class Round {
  constructor(roundNum) {
    this.roundNum = roundNum;
  }
  questionCount() {
    let lastQuestion = this.roundNum * questionCount;
    return lastQuestion;
  }
  async getImage() {
    let imageNum = this.roundNum * questionCount - questionCount + +count.a;
    let img = new Image();
    url = `https://raw.githubusercontent.com/katesoo/image-data/master/img/${imageNum}.jpg`;
    const res = await fetch(url);
    img.src = res.url;
    img.onload = () => {
      picturePlace.style.backgroundImage = `url('${img.src}')`;
    };
  }
  getAuthors() {
    let authorNum = this.roundNum * questionCount - questionCount + +count.a;
    let randomAuthors = authors.sort(() => {
      return 0.5 - Math.random();
    });
    rightAuthorArt = allAuthors[authorNum];
    let Authors = [];
    Authors.push(rightAuthorArt);
    for (let i = 0; i < 3; i++) {
      if (Authors.indexOf(randomAuthors[i]) == -1) {
        Authors.push(randomAuthors[i]);
      }
    }
    Authors.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 4; i++) {
      artistNameButs[i].innerHTML = Authors[i];
    }
    return rightAuthorArt;
  }
  getPictureName() {
    let imageNum = this.roundNum * questionCount - questionCount + +count.a;
    nameArt = json[imageNum].name;
    year = json[imageNum].year;
    return nameArt, year;
  }
}
