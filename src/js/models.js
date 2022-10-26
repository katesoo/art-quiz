export const ArtistPicHTML = `
<header class="header_category">
    <div class="header_category_title">
        <div class="ellipse_category ellipse1_cat"></div>
        <div class="ellipse_category"></div>
        <div class="header_category_text">Art <span class="quiz">qiuz</span></div>
    </div>
</header>
<main class="main_categoryPic">
    <div class="main_category_title"> Round</div>
        <ul class="main_category_artist">
            <li class="main_categoryPic_artist_item">01</li>
            <li class="main_categoryPic_artist_item">02</li>
            <li class="main_categoryPic_artist_item">03</li>
            <li class="main_categoryPic_artist_item">04</li>
            <li class="main_categoryPic_artist_item">05</li>
            <li class="main_categoryPic_artist_item">06</li>
            <li class="main_categoryPic_artist_item">07</li>
            <li class="main_categoryPic_artist_item">08</li>
            <li class="main_categoryPic_artist_item">09</li>
            <li class="main_categoryPic_artist_item">10</li>
            <li class="main_categoryPic_artist_item">11</li>
            <li class="main_categoryPic_artist_item">12</li>
        </ul>
</main>
<nav class="nav_category">
    <ul class="nav_category_list">
        <li class="nav_category_item"><img src="./asset/home.svg" alt="ops" class="nav_category_img"> Home</li>
        <li class="nav_category_item"><img src="./asset/score.svg" alt="ops" class="nav_category_img">Score</li>
    </ul>
</nav>`;

export const ArtistArtHTML = `
<header class="header_category">
    <div class="header_category_title">
        <div class="ellipse_category ellipse1_category"></div>
        <div class="ellipse_category"></div>
        <div class="header_category_text">Art <span class="quiz">qiuz</span></div>
    </div>
</header>
<main class="main_category">
    <div class="main_category_title"> Round</div>
        <ul class="main_category_artist">
            <li class="main_category_artist_item">01</li>
            <li class="main_category_artist_item">02</li>
            <li class="main_category_artist_item">03</li>
            <li class="main_category_artist_item">04</li>
            <li class="main_category_artist_item">05</li>
            <li class="main_category_artist_item">06</li>
            <li class="main_category_artist_item">07</li>
            <li class="main_category_artist_item">08</li>
            <li class="main_category_artist_item">09</li>
            <li class="main_category_artist_item">10</li>
            <li class="main_category_artist_item">11</li>
            <li class="main_category_artist_item">12</li>
        </ul>
</main>
<nav class="nav_category">
    <ul class="nav_category_list">
        <li class="nav_category_item"><img src="./asset/home.svg" alt="ops" class="nav_category_img"> Home</li>
        <li class="nav_category_item"><img src="./asset/score.svg" alt="ops" class="nav_category_img">Score</li>
    </ul>
</nav>`;

export const Classes = {
  ArtistDivId: "wrapper_categories",
  artistBut: ".artist-but",
  answerArt: ".answer",
  answerPic: ".answerPic",
  answerImg: ".answer-img",
  artistItemArt: ".main_category_artist_item",
  artistItemPic: ".main_categoryPic_artist_item",
  authorAndYear: ".author-and-year",
  butRu: ".buttonRU",
  butEn: ".buttonEN",
  butMinus: ".button-minus",
  butPlus: ".button-plus",
  bulletArt: ".bullet",
  bulletPic: ".bulletPic",
  catTitle: ".main_category_title",
  catItem: ".nav_category_item",
  closeIcon: ".close-icon",
  closeIconPic: ".close-iconPic",
  done: ".done",
  formWrap: ".wrapper-for-form",
  itemHome: ".item-home",
  itemScore: ".item-score",
  image: ".image",
  images: ".images",
  imageResult: ".imageResults",
  langTitlt: ".lang-title",
  mainQuestArt: ".main-question",
  mainQuestPic: ".main-questionPic",
  mainPic: ".main-picture",
  navCatItem: ".nav_category_item",
  navItem: ".nav_item",
  next: ".next",
  pictureBut: ".picture-but",
  playedPic: "playedPicture",
  picName: ".name-picture",
  saveBut: ".set-but2",
  secNum: ".time-changer-num",
  spanInfo: ".spanInfo",
  setts: ".settings",
  settsImg: ".settings-img",
  setArrow: ".set-arrow",
  settsTitle: ".settings-title",
  timerOnOff: ".timer-on-off",
  timerSwitch: ".timer-switch",
  timetTitle: ".timer-title",
  titleTime: ".timer-title-time",
  textForm: ".form-text",
  transparent: ".transparent",
  volInput: ".volume-input",
  volTitle: ".volume-title",
  wrapA: ".wrapperPictures",
  wrapQ: ".wrapperQuestion",
  wrapR: ".wrapperResults",
};

export const Answer = {
  right: `<form class="rightanswer">
    <div class="answer-img">
        <div class="right-answer-img"></div>
    </div>
    <div class="name-picture"></div>
    <div class="author-and-year"></div>
    <button type="button" class="next"></button>
    </form>`,
  wrong: `<form class="rightanswer">
    <div class="answer-img">
      <div class="right-answer-img wrong-answer-img"></div>
    </div>
    <div class="name-picture"></div>
    <div class="author-and-year"></div>
    <button type="button" class="next"></button>
    </form>`,
  rightColor: "#20a12b",
  wrongColor: "#a12020"
};

export const questionCount = 10;

export const End = {
  RoundForm: ` <form  class="end-round">
    <div class="form-img"></div>
    <div class="form-text"></div>
    <div class="done-all"><span class="done"></span>/<span class="all">10</span></div>
    <div class="form-buttons">
        <button type="button" class="form-button button2"></button>
    </div>
  </form>`,
};

export const WrapperRHTML = `<header class="header">
  <div class="header_title">
      <div class="ellipse ellipse1"></div>
      <div class="ellipse"></div>
      <div class="header_text">Art <span class="quiz">qiuz</span></div>
  </div>
  </header>
  <nav class="nav">
  <ul class="nav_list">
      <li class="nav_item item-home"><img src="./asset/home.svg" alt="ops" class="nav_img"> Home</li>
      <li class="nav_item item-score"><img src="./asset/score.svg" alt="ops" class="nav_img">Score</li>
  </ul>
  </nav>
  <main class="main">
  <div class="result-title">Results</div>
  <di class="images">
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
      <div class="image"></div>
  </di>
  </main>
  <footer class="footer">
  <div class="footer_block">
      <div class="rsschool">
          <a href="https://rs.school/js/" target="blank">
              <img class="logoRs" src="./asset/rs_school_js1.png" alt="smth goes wrong">
          </a>
          </div>
      <div class="git-hub footer-text">
          <h5 class="git-hub_link"><a href="https://github.com/katesoo" target="blank">App developer: Katesoo</a></h5>
      </div>
      <div class="year footer-text">
          <h6>2021</h6>
      </div>
  </div>
  </footer>`;

export const mainChangeHTML = `
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>
  <div class="imageResults"><span class="spanInfo"></span></div>`;

export const WrapperQHTML = `<header class="header">
<div class="close-icon"></div>
</header>
<main class="main">
<div class="main-question"></div>
<div class="main-picture"></div>
<div class="paginatoin">
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
</div>
<div class="all-answers">
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
    <button class="answer"></button>
</div>
</main>
<footer class="footer">
<div class="footer_block">
    <div class="rsschool">
        <a href="https://rs.school/js/" target="blank">
            <img class="logoRs" src="./asset/rs_school_js1.png" alt="smth goes wrong">
        </a>
        </div>
    <div class="git-hub footer-text">
        <h5 class="git-hub_link"><a href="https://github.com/katesoo" target="blank">App developer: Katesoo</a></h5>
    </div>
    <div class="year footer-text">
        <h6>2021</h6>
    </div>
</div>
</footer>`;

export const WrapperAHTML = `<header class="header">
<div class="close-iconPic"></div>

</header>
<main class="main">
<div class="main-questionPic"></div>
<div class="all-answers">
    <button class="answerPic"></button>
    <button class="answerPic"></button>
    <button class="answerPic"></button>
    <button class="answerPic"></button>
</div>
<div class="paginatoin">
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
    <div class="bulletPic"></div>
</div>
</main>
<footer class="footer">
<div class="footer_block">
    <div class="rsschool">
        <a href="https://rs.school/js/" target="blank">
            <img class="logoRs" src="./asset/rs_school_js1.png" alt="smth goes wrong">
        </a>
        </div>
    <div class="git-hub footer-text">
        <h5 class="git-hub_link"><a href="https://github.com/katesoo" target="blank">App developer: Katesoo</a></h5>
    </div>
    <div class="year footer-text">
        <h6>2021</h6>
    </div>
</div>
</footer>`;