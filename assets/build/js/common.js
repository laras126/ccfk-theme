/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entries/common.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entries/common.entry.js":
/*!*********************************!*\
  !*** ./entries/common.entry.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/main.js */ "./src/js/main.js");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/inc/navigation.js":
/*!**********************************!*\
  !*** ./src/js/inc/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return siteNavigation; });
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
function siteNavigation() {
  var container, button, menu, links, i, len;
  container = document.querySelector('[data-site-nav]');

  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];

  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0]; // Hide menu toggle button if menu is empty and return early.

  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');

  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function () {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  }; // Get all the link elements within the menu.


  links = menu.getElementsByTagName('a'); // Each time a menu link is focused or blurred, toggle focus.

  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }
  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */


  (function (container) {
    var touchStartFn,
        i,
        parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

    if ('ontouchstart' in window) {
      touchStartFn = function touchStartFn(e) {
        var menuItem = this.parentNode,
            i; // eslint-disable-line

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();

          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              // eslint-disable-line
              continue;
            }

            menuItem.parentNode.children[i].classList.remove('focus');
          }

          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inc_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc/navigation.js */ "./src/js/inc/navigation.js");


(function () {
  document.addEventListener('DOMContentLoaded', function () {
    Object(_inc_navigation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Toggle Menu
    // @link http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button

    var $toggle = document.querySelector('[data-site-nav-toggle]'),
        $menu = document.querySelector('[data-site-nav] .menu'),
        $dropdowns = document.querySelectorAll('[data-site-nav] .menu-item-has-children');
    var isMenuOpen = false;
    $toggle.addEventListener('click', function () {
      toggleMenu();
    });

    function toggleMenu() {
      isMenuOpen = !isMenuOpen ? true : false;
      $menu.classList.toggle('is-open');
      $toggle.classList.toggle('is-open');

      if (isMenuOpen) {
        $toggle.innerHTML = 'Close';
      } else {
        $toggle.innerHTML = 'Menu';
      }
    } // ESC key closes the menu


    document.addEventListener('keyup', function (e) {
      if (27 === e.keyCode && $menu.classList.contains('is-open')) {
        toggleMenu();
        $toggle.focus();
      }
    });
  });
})();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=common.js.map