/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/layout/header */ "./src/js/layout/header.js");
/* harmony import */ var _js_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/card */ "./src/js/components/card.js");
/* harmony import */ var _js_constants_data_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/constants/data_cards */ "./src/js/constants/data_cards.js");
/* harmony import */ var _js_utils_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/utils/category */ "./src/js/utils/category.js");





var content = _js_components_card__WEBPACK_IMPORTED_MODULE_2__.default(Object.keys(_js_constants_data_cards__WEBPACK_IMPORTED_MODULE_3__.cards));
document.body.appendChild(_js_layout_header__WEBPACK_IMPORTED_MODULE_1__.default());
document.body.appendChild(content);
_js_utils_category__WEBPACK_IMPORTED_MODULE_4__.default(content);

/***/ }),

/***/ "./src/js/components/card.js":
/*!***********************************!*\
  !*** ./src/js/components/card.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createMain,
/* harmony export */   "rotateCard": () => /* binding */ rotateCard
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getData */ "./src/js/utils/getData.js");




function createMain(words) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var imgUrl;
  var srcRotate = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imgRotate, ".svg");
  var cardsContainer = _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'cards');

  if (!category) {
    imgUrl = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageCategoryBase);
    words.forEach(function (key) {
      var card = _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'card', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'title-card', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('p', '', key))]);
      cardsContainer.appendChild(card);
    });
  } else {
    imgUrl = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageBase, "/").concat(category);

    if (_utils_getData__WEBPACK_IMPORTED_MODULE_3__.getCheckboxStatus()) {
      words.forEach(function (key) {
        var card = _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'card hover', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'faces', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'front', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'title-card', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('p', '', key), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('img', 'rotate', null, null, ['src', srcRotate])])]), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'back', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'title-card', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('p', '', _constants_data_cards__WEBPACK_IMPORTED_MODULE_1__.cards[category][key]))])]));
        cardsContainer.appendChild(card);
      });
    } else {
      words.forEach(function (key) {
        var card = _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'card hover', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'faces', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'front', [_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('img', 'cardImg cardImgPlay', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('div', 'title-card hidden', _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('p', '', key))])));
        cardsContainer.appendChild(card);
      });
    }
  }

  return _utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default('main', 'content', cardsContainer);
}
function rotateCard(card) {
  card.classList.add('turn');
  card.addEventListener('mouseleave', function () {
    card.classList.remove('turn');
  });
}
document.addEventListener('click', function (e) {
  if (e.path[0].closest('.rotate')) {
    rotateCard(e.path[3]);
  }
});

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/*! namespace exports */
/*! export H1 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PLAY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STARTBTN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TRAIN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export assetBase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export iconBase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export iconCategoryBase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imageBase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imageCategoryBase [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imgGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imgRepeat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export imgRotate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PLAY": () => /* binding */ PLAY,
/* harmony export */   "TRAIN": () => /* binding */ TRAIN,
/* harmony export */   "STARTBTN": () => /* binding */ STARTBTN,
/* harmony export */   "H1": () => /* binding */ H1,
/* harmony export */   "imgGame": () => /* binding */ imgGame,
/* harmony export */   "imgRepeat": () => /* binding */ imgRepeat,
/* harmony export */   "imgRotate": () => /* binding */ imgRotate,
/* harmony export */   "assetBase": () => /* binding */ assetBase,
/* harmony export */   "iconBase": () => /* binding */ iconBase,
/* harmony export */   "iconCategoryBase": () => /* binding */ iconCategoryBase,
/* harmony export */   "imageBase": () => /* binding */ imageBase,
/* harmony export */   "imageCategoryBase": () => /* binding */ imageCategoryBase
/* harmony export */ });
var PLAY = 'play';
var TRAIN = 'train';
var STARTBTN = 'Start game';
var H1 = 'English for kids';
var imgGame = 'power';
var imgRepeat = 'repeat';
var imgRotate = 'rotate';
var assetBase = 'src/assets';
var iconBase = "".concat(assetBase, "/icons");
var iconCategoryBase = "".concat(iconBase, "/categories");
var imageBase = "".concat(assetBase, "/images");
var imageCategoryBase = "".concat(imageBase, "/categories");

/***/ }),

/***/ "./src/js/constants/data_cards.js":
/*!****************************************!*\
  !*** ./src/js/constants/data_cards.js ***!
  \****************************************/
/*! namespace exports */
/*! export cards [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cards": () => /* binding */ cards
/* harmony export */ });
var cards = {
  Actions: {
    dance: 'танцевать',
    draw: 'рисовать',
    jump: 'прыгать',
    play: 'играть',
    ride: 'ездить',
    run: 'бегать',
    sing: 'петь',
    sleep: 'спать',
    swim: 'плавать'
  },
  Animals: {
    cat: 'кот',
    deer: 'олень',
    dog: 'собака',
    fox: 'лиса',
    horse: 'лошадь',
    mouse: 'мышь',
    rabbit: 'кролик',
    tiger: 'тигр',
    turtle: 'черепаха'
  },
  Body: {
    back: 'спина',
    ear: 'ухо',
    eye: 'глаз',
    hand: 'рука',
    head: 'голова',
    leg: 'нога',
    lip: 'губа',
    neck: 'шея',
    nose: 'нос'
  },
  Clothes: {
    dress: 'платье',
    glove: 'перчатка',
    hat: 'шапка',
    pants: 'штаны',
    scarf: 'шарф',
    shirt: 'рубашка',
    shoe: 'туфля',
    skirt: 'рубашка',
    sock: 'носок'
  },
  Emotions: {
    anger: 'злость',
    cry: 'плач',
    fear: 'страх',
    joy: 'веселье',
    shout: 'крик',
    shyness: 'застенчивость',
    smile: 'улыбка',
    sorrow: 'печаль',
    wonder: 'удивление'
  },
  Family: {
    aunt: 'тетя',
    baby: 'младенец',
    brother: 'брат',
    father: 'отец',
    grandfather: 'дедушка',
    grandmother: 'бабушка',
    mother: 'мама',
    sister: 'сестра',
    uncle: 'дядя'
  },
  Food: {
    apple: 'яблоко',
    banana: 'банан',
    bread: 'хлеб',
    cake: 'торт',
    cheese: 'сыр',
    donut: 'пончик',
    egg: 'яйцо',
    milk: 'молоко',
    tomato: 'помидор'
  },
  Nature: {
    beach: 'пляж',
    desert: 'пустыня',
    flower: 'цветок',
    forest: 'лес',
    lake: 'озеро',
    rain: 'дождь',
    rainbow: 'радуга',
    river: 'река',
    snow: 'снег'
  }
};

/***/ }),

/***/ "./src/js/layout/header.js":
/*!*********************************!*\
  !*** ./src/js/layout/header.js ***!
  \*********************************/
/*! namespace exports */
/*! export btnGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export btnGameRepeat [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkboxSwitcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxSwitcher": () => /* binding */ checkboxSwitcher,
/* harmony export */   "btnGame": () => /* binding */ btnGame,
/* harmony export */   "btnGameRepeat": () => /* binding */ btnGameRepeat,
/* harmony export */   "default": () => /* binding */ createHeader
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");
/* harmony import */ var _utils_playSound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/playSound */ "./src/js/utils/playSound.js");
/* harmony import */ var _utils_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/category */ "./src/js/utils/category.js");
/* harmony import */ var _utils_playGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/playGame */ "./src/js/utils/playGame.js");






var srcBtnGame = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.imgGame, ".png");
var srcBtnRepeat = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.imgRepeat, ".svg");
var check = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', '', null, null, ['type', 'checkbox']);
var checkMenu = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu-toggle', [check, (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span')]);
var menu = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu');
var itemMenu = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('li', '', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/icon.png")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', 'Main')]);
var menuUl = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('ul', '', itemMenu);
var categories = [];
Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_2__.cards).forEach(function (key) {
  categories.push(key);
  var menuLi = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('li', '', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconCategoryBase, "/").concat(key, ".png")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', key)]);
  menuUl.appendChild(menuLi);
});
menu.appendChild(menuUl);
var checkboxSwitcher = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', '', null, null, ['type', 'checkbox']);
checkboxSwitcher.checked = true;
var switcher = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'switcher', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('label', 'toggle', [checkboxSwitcher, (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'switch-left', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TRAIN), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'switch-right', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.PLAY)]));
var btnGame = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'button start-game-button hidden', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start-game', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', srcBtnGame]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.STARTBTN)]));
var btnGameRepeat = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'button repeat-button cover', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', srcBtnRepeat]));
var menuTop = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu-top', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1), switcher, btnGame, btnGameRepeat]);
var verticalMenu = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', '', [checkMenu, menu]);

function hideMenu() {
  menu.classList.remove('active');
  check.checked = false;
}

function chooseItemMenu(e) {
  if (e.path[1].children[1]) {
    menu.removeEventListener('click', listener);
    hideMenu();
    _utils_category__WEBPACK_IMPORTED_MODULE_4__.removeClass('active-page');
    var itemMenuSelected = e.path[1].children[1].innerText;
    _utils_category__WEBPACK_IMPORTED_MODULE_4__.addClass(itemMenuSelected, 'active-page');
    var content;
    document.body.removeChild(document.body.children[3]);

    if (itemMenuSelected === 'Main') {
      content = _utils_category__WEBPACK_IMPORTED_MODULE_4__.getMainContent(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_2__.cards));
      e.path[5].children[1].children[0].innerText = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1;
      _utils_category__WEBPACK_IMPORTED_MODULE_4__.default(content);
    } else {
      content = _utils_category__WEBPACK_IMPORTED_MODULE_4__.getMainContent(_utils_category__WEBPACK_IMPORTED_MODULE_4__.randomArray(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_2__.cards[e.path[1].innerText])), itemMenuSelected);
      e.path[5].children[1].children[0].innerText = e.path[1].innerText;
    }

    document.body.appendChild(content);
    window.addEventListener('click', function (el) {
      return _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.default(el, e.path[1].innerText);
    });

    if (btnGame.classList.contains('cover')) {
      _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.setPlayRandom(false);
    }

    if (!_utils_playSound__WEBPACK_IMPORTED_MODULE_3__.getPlayRandom()) {
      _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.default(null, e.path[1].innerText);
    }
  }
}

function listener(e) {
  chooseItemMenu(e);
}

checkMenu.addEventListener('click', function () {
  menu.classList.toggle('active');
  verticalMenu.addEventListener('mouseleave', function () {
    return hideMenu();
  });
  menu.addEventListener('click', listener);
});
function createHeader() {
  itemMenu.classList.add('active-page');
  return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [verticalMenu, menuTop]);
}
checkboxSwitcher.addEventListener('click', function () {
  _utils_playGame__WEBPACK_IMPORTED_MODULE_5__.default(btnGame, checkboxSwitcher.checked);
  btnGame.classList.remove('cover');
  btnGameRepeat.classList.add('cover');
});
btnGame.addEventListener('click', function () {
  btnGame.classList.add('cover');
  btnGameRepeat.classList.remove('cover');
  _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.setCheckCard(true);
  _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.setTypeGame(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.PLAY);
  var categoryName = document.querySelector('h1');

  if (categoryName.innerText !== _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1) {
    _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.setPlayRandom(false);
    document.body.removeChild(document.body.children[3]);
    var content = _utils_category__WEBPACK_IMPORTED_MODULE_4__.getMainContent(_utils_category__WEBPACK_IMPORTED_MODULE_4__.randomArray(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_2__.cards[categoryName.innerText])), categoryName.innerText);
    document.body.appendChild(content);
    _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.default(null, categoryName.innerText);
  }
});
btnGameRepeat.addEventListener('click', function () {
  var categoryName = document.querySelector('h1');
  _utils_playSound__WEBPACK_IMPORTED_MODULE_3__.repeatSound(categoryName.innerText);
});

/***/ }),

/***/ "./src/js/utils/category.js":
/*!**********************************!*\
  !*** ./src/js/utils/category.js ***!
  \**********************************/
/*! namespace exports */
/*! export addClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getMainContent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export randomArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => /* binding */ removeClass,
/* harmony export */   "addClass": () => /* binding */ addClass,
/* harmony export */   "randomArray": () => /* binding */ randomArray,
/* harmony export */   "default": () => /* binding */ openCategory,
/* harmony export */   "getMainContent": () => /* binding */ getMainContent
/* harmony export */ });
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card */ "./src/js/components/card.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");
/* harmony import */ var _playSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playSound */ "./src/js/utils/playSound.js");
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/header */ "./src/js/layout/header.js");




function removeClass(classRemoved) {
  var activeItemMenu = document.querySelector(".".concat(classRemoved));
  activeItemMenu.classList.remove(classRemoved);
}
function addClass(item, classAdded) {
  var arrItemsMenu = document.querySelectorAll('li');
  arrItemsMenu.forEach(function (li) {
    if (li.innerText === item) li.classList.add(classAdded);
  });
}
function randomArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // eslint-disable-next-line no-param-reassign

    var _ref = [arr[j], arr[i]];
    arr[i] = _ref[0];
    arr[j] = _ref[1];
  }

  return arr;
}
function openCategory(content) {
  content.addEventListener('click', function (e) {
    if (e.path[1].closest('.card')) {
      removeClass('active-page');
      addClass(e.path[1].innerText, 'active-page');
      document.body.removeChild(content);
      var contentCategory = _components_card__WEBPACK_IMPORTED_MODULE_0__.default(randomArray(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_1__.cards[e.path[1].innerText])), e.path[1].innerText);
      document.body.appendChild(contentCategory);
      e.path[4].children[2].children[1].children[0].innerText = e.path[1].innerText;
      window.addEventListener('click', function (el) {
        return _playSound__WEBPACK_IMPORTED_MODULE_2__.default(el, e.path[1].innerText);
      });

      if (_layout_header__WEBPACK_IMPORTED_MODULE_3__.btnGame.classList.contains('cover')) {
        _playSound__WEBPACK_IMPORTED_MODULE_2__.setPlayRandom(false);
      }

      if (!_playSound__WEBPACK_IMPORTED_MODULE_2__.getPlayRandom()) {
        _playSound__WEBPACK_IMPORTED_MODULE_2__.default(null, e.path[1].innerText);
      }
    }
  });
}
function getMainContent(words) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _components_card__WEBPACK_IMPORTED_MODULE_0__.default(words, category);
}

/***/ }),

/***/ "./src/js/utils/createElement.js":
/*!***************************************!*\
  !*** ./src/js/utils/createElement.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ create
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function create(elem, classes, childs, parent) {
  var element = null;

  try {
    element = document.createElement(elem);
  } catch (error) {
    throw new Error('Unable to create HTMLElement');
  }

  if (classes) {
    var _element$classList;

    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes.split(' ')));
  }

  if (childs && Array.isArray(childs)) {
    childs.forEach(function (child) {
      child && element.appendChild(child);
    });
  } else if (childs && _typeof(childs) === 'object') {
    element.appendChild(childs);
  } else if (childs && typeof childs === 'string') {
    element.innerHTML = childs;
  }

  if (parent) {
    parent.appendChild(element);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      return element.setAttribute(attrName, attrValue);
    });
  }

  return element;
}

/***/ }),

/***/ "./src/js/utils/getData.js":
/*!*********************************!*\
  !*** ./src/js/utils/getData.js ***!
  \*********************************/
/*! namespace exports */
/*! export getCheckboxStatus [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCheckboxStatus": () => /* binding */ getCheckboxStatus
/* harmony export */ });
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/header */ "./src/js/layout/header.js");

function getCheckboxStatus() {
  return _layout_header__WEBPACK_IMPORTED_MODULE_0__.checkboxSwitcher.checked;
}

/***/ }),

/***/ "./src/js/utils/playGame.js":
/*!**********************************!*\
  !*** ./src/js/utils/playGame.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ startGame
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/js/utils/category.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _playSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playSound */ "./src/js/utils/playSound.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");




function startGame(btnGame, checked) {
  var categoryName = document.querySelector('h1');
  var content = document.querySelector('.content');

  if (checked === false) {
    btnGame.classList.remove('hidden');
  } else {
    btnGame.classList.add('hidden');
    _playSound__WEBPACK_IMPORTED_MODULE_2__.setTypeGame(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.TRAIN);
    _playSound__WEBPACK_IMPORTED_MODULE_2__.setCheckCard(false);
  }

  if (categoryName.innerText !== _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1) {
    document.body.removeChild(content);
    var contentCards = _category__WEBPACK_IMPORTED_MODULE_0__.getMainContent(_category__WEBPACK_IMPORTED_MODULE_0__.randomArray(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_3__.cards[categoryName.innerText])), categoryName.innerText);
    document.body.appendChild(contentCards);
  }
}

/***/ }),

/***/ "./src/js/utils/playSound.js":
/*!***********************************!*\
  !*** ./src/js/utils/playSound.js ***!
  \***********************************/
/*! namespace exports */
/*! export checkAnswer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getPlayRandom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTypeGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export repeatSound [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setCheckCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setPlayRandom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setTypeGame [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTypeGame": () => /* binding */ setTypeGame,
/* harmony export */   "getTypeGame": () => /* binding */ getTypeGame,
/* harmony export */   "setPlayRandom": () => /* binding */ setPlayRandom,
/* harmony export */   "getPlayRandom": () => /* binding */ getPlayRandom,
/* harmony export */   "setCheckCard": () => /* binding */ setCheckCard,
/* harmony export */   "checkAnswer": () => /* binding */ checkAnswer,
/* harmony export */   "default": () => /* binding */ playCard,
/* harmony export */   "repeatSound": () => /* binding */ repeatSound
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./src/js/utils/category.js");




var audio = _createElement__WEBPACK_IMPORTED_MODULE_0__.default('audio', '');
document.body.appendChild(audio);
var playRandom = false;
var checkCard = false;
var arraySounds = []; // eslint-disable-next-line

var typeGame = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TRAIN;
function setTypeGame(type) {
  typeGame = type;
}
function getTypeGame() {
  return typeGame;
}
function setPlayRandom(play) {
  playRandom = play;
}
function getPlayRandom() {
  return playRandom;
}
function setCheckCard(check) {
  checkCard = check;
}

function playSound(srcAudio) {
  audio.src = srcAudio;
  audio.currentTime = 0;
  audio.pause();
  setTimeout(function () {
    return audio.play();
  }, 0);
}

function showSmile() {
  window.scrollTo(0, 0);
  var content = document.body.querySelector('.content');
  document.body.removeChild(content);
  var smileResultGame = _createElement__WEBPACK_IMPORTED_MODULE_0__.default('img', 'result-game show', null, null, ['src', './src/assets/images/victory.png']);
  document.body.appendChild(smileResultGame);
  setTimeout(function () {
    window.location.reload();
  }, 4000);
}

function checkAnswer(el) {
  var categoryName = document.querySelector('h1').innerText;

  if (el.path[3].classList.contains('hover')) {
    if (el.path[3].children[0].children[0].children[1].children[0].innerText === arraySounds[0]) {
      playSound('./src/assets/sounds/right.mp3');
      el.path[3].classList.add('untouchable');
      el.path[3].classList.remove('hover');
      arraySounds.shift();
      setTimeout(function () {
        playSound("./src/assets/sounds/".concat(categoryName, "/").concat(arraySounds[0], ".mp3"));
      }, 1000);
    } else {
      playSound('./src/assets/sounds/error.mp3');
    }
  }

  if (arraySounds.length === 0) {
    setTimeout(function () {
      playSound('./src/assets/sounds/victory.mp3');
      showSmile();
    }, 1000);
  }
}
function playCard(el, categoryName) {
  if (el && el.path[6] && getTypeGame() === _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TRAIN && !el.path[2].classList.contains('turn') && !el.target.classList.contains('rotate') && el.path[1].children[1] && !el.path[1].children[1].classList.contains('hidden')) {
    if (el.path[3].classList.contains('card')) {
      playSound("./src/assets/sounds/".concat(categoryName, "/").concat(el.path[1].children[1].children[0].innerText, ".mp3"));
    } else if (el.path[4].classList.contains('card')) {
      playSound("./src/assets/sounds/".concat(categoryName, "/").concat(el.path[0].innerText, ".mp3"));
    }
  } else if (getTypeGame() === _constants_constants__WEBPACK_IMPORTED_MODULE_1__.PLAY && !playRandom && categoryName !== _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1) {
    setPlayRandom(true);
    arraySounds = _category__WEBPACK_IMPORTED_MODULE_3__.randomArray(Object.keys(_constants_data_cards__WEBPACK_IMPORTED_MODULE_2__.cards[categoryName]));
    playSound("./src/assets/sounds/".concat(categoryName, "/").concat(arraySounds[0], ".mp3"));
  }

  if (checkCard) {
    if (el && el.path[4] && el.path[3].classList.contains('card')) checkAnswer(el);
  }
}
function repeatSound(categoryName) {
  playSound("./src/assets/sounds/".concat(categoryName, "/").concat(arraySounds[0], ".mp3"));
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=script.js.map