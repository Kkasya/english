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
/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _js_layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/layout/header */ "./src/js/layout/header.js");
/* harmony import */ var _js_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/card */ "./src/js/components/card.js");
/* harmony import */ var _js_utils_random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/utils/random */ "./src/js/utils/random.js");
/* harmony import */ var _js_constants_data_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/constants/data_cards */ "./src/js/constants/data_cards.js");






var content = _js_components_card__WEBPACK_IMPORTED_MODULE_3__.default(Object.keys(_js_constants_data_cards__WEBPACK_IMPORTED_MODULE_5__.cards));
document.body.appendChild(_js_layout_header__WEBPACK_IMPORTED_MODULE_2__.default());
document.body.appendChild(content);
content.addEventListener('click', function (e) {
  if (e.path[1].closest('.card')) {
    document.body.removeChild(content);
    content = _js_components_card__WEBPACK_IMPORTED_MODULE_3__.default(_js_utils_random__WEBPACK_IMPORTED_MODULE_4__.default(Object.keys(_js_constants_data_cards__WEBPACK_IMPORTED_MODULE_5__.cards[e.path[1].innerText])), e.path[1].innerText, _js_constants_constants__WEBPACK_IMPORTED_MODULE_1__.cardsCategory);
    document.body.appendChild(content);
  }
});
document.addEventListener('click', function (e) {
  if (e.path[0].closest('.rotate')) {
    _js_components_card__WEBPACK_IMPORTED_MODULE_3__.rotateCard(e.path[3]);
  }
});
var toggle = document.querySelector('.menu-toggle');
var box = document.querySelector('.menu');
toggle.addEventListener('click', function () {
  box.classList.toggle('active');
});

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



function createMain(words) {
  var category = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var typeCard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants_constants__WEBPACK_IMPORTED_MODULE_0__.categories;
  var typeGame = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants_constants__WEBPACK_IMPORTED_MODULE_0__.TRAIN;
  var imgUrl;
  var srcRotate = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imgRotate, ".svg");
  var cardsContainer = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'cards');

  if (typeCard === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.categories) {
    imgUrl = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageCategoryBase);
    words.forEach(function (key) {
      if (typeCard !== _constants_constants__WEBPACK_IMPORTED_MODULE_0__.categories) title.appendChild((0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'rotate', null, null, ['src', srcRotate]));
      var card = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'card', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'title-card', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('p', '', key))]);
      cardsContainer.appendChild(card);
    });
  } else {
    imgUrl = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.imageBase, "/").concat(category);
    words.forEach(function (key) {
      var card = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'card', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'faces', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'front', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'title-card', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('p', '', key), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'rotate', null, null, ['src', srcRotate])])]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'back', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'cardImg', null, null, ['src', "".concat(imgUrl, "/").concat(key, ".jpg")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'title-card', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('p', '', _constants_data_cards__WEBPACK_IMPORTED_MODULE_1__.cards[category][key]))])]));
      cardsContainer.appendChild(card);
    });
  }

  return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_2__.default)('main', 'content', cardsContainer);
}
function rotateCard(card) {
  card.classList.add('turn');
  card.addEventListener('mouseleave', function () {
    card.classList.remove('turn');
  });
}

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
/*! export cardsCategory [provided] [no usage info] [missing usage info prevents renaming] */
/*! export categories [provided] [no usage info] [missing usage info prevents renaming] */
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
/* harmony export */   "categories": () => /* binding */ categories,
/* harmony export */   "cardsCategory": () => /* binding */ cardsCategory,
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
var categories = 'categories';
var cardsCategory = 'cardsCategory';
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createHeader
/* harmony export */ });
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ "./src/js/utils/createElement.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _constants_data_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/data_cards */ "./src/js/constants/data_cards.js");



var srcBtnGame = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.imgGame, ".png");
var srcBtnRepeat = "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/").concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.imgRepeat, ".png");
var checkbox = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu-toggle', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('input', '', null, null, ['type', 'checkbox']), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span')]);
var menu = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu');
var menuUl = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('ul', '', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('li', '', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', "".concat(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.iconBase, "/icon.png")]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', 'Main')]));
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
var btnGame = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'button start-game-button', (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'start-game', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('img', '', null, null, ['src', srcBtnGame]), (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('span', '', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.STARTBTN)]));
var menuTop = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'menu-top', [(0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('h1', '', _constants_constants__WEBPACK_IMPORTED_MODULE_1__.H1), switcher, btnGame]);
function createHeader() {
  return (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'header', [checkbox, menu, menuTop]);
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

/***/ "./src/js/utils/random.js":
/*!********************************!*\
  !*** ./src/js/utils/random.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ randomArray
/* harmony export */ });
function randomArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // eslint-disable-next-line no-param-reassign

    var _ref = [arr[j], arr[i]];
    arr[i] = _ref[0];
    arr[j] = _ref[1];
  }

  return arr;
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