/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Calculator/Calculator.js":
/*!*************************************************!*\
  !*** ./src/components/Calculator/Calculator.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/Form */ "./src/helpers/Form.js");
/* harmony import */ var _helpers_Mortgage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/Mortgage */ "./src/helpers/Mortgage.js");
/* harmony import */ var _helpers_SetMortgageResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/SetMortgageResult */ "./src/helpers/SetMortgageResult.js");
// HELPERS



var button = document.querySelector('.button');
var form = document.querySelector('.calculator__form');
var insuranceInput = document.querySelector('.calculator__formGroup--insurance input');
var interestInput = document.querySelector('.input--interest input');
var interestSlider = document.querySelector('.slider--interest input');
var loanInput = document.querySelector('.calculator__formGroup--loan input');
var results = document.querySelector('.results');
var taxInput = document.querySelector('.calculator__formGroup--tax input');
var yearsInput = document.querySelector('.input--years input');
var yearsSlider = document.querySelector('.slider--years input');
var mortgage = new _helpers_Mortgage__WEBPACK_IMPORTED_MODULE_1__["default"]();

var clearInputs = function clearInputs() {
  insuranceInput.value = 0;
  interestInput.value = 5;
  interestSlider.value = 5;
  loanInput.value = 0;
  taxInput.value = 0;
  yearsInput.value = 20;
  yearsSlider.value = 20;
};

yearsSlider.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setYears(value);
  yearsInput.value = value;
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(yearsInput);
});
yearsInput.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setYears(value);
  yearsSlider.value = value;
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(yearsInput);
});
interestSlider.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setInterest(value);
  interestInput.value = value;
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(interestInput);
});
interestInput.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setInterest(value);
  interestSlider.value = value;
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(interestInput);
});
loanInput.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setLoan(value);
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(loanInput);
});
taxInput.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setAnnualTax(value);
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(taxInput);
});
insuranceInput.addEventListener('input', function (event) {
  var value = event.target.value;
  mortgage.setAnnualInsurance(value);
  (0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.validateInputError)(insuranceInput);
});
form.addEventListener('input', function () {
  button.disabled = !(0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.isFormValid)(form);
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!(0,_helpers_Form__WEBPACK_IMPORTED_MODULE_0__.isFormValid)(form)) return;
  (0,_helpers_SetMortgageResult__WEBPACK_IMPORTED_MODULE_2__["default"])(mortgage.calculateMortgageResult());
  results.classList.remove('results--hidden');
});
window.addEventListener('load', function () {
  mortgage.setYears(yearsInput.value);
  mortgage.setInterest(interestInput.value);
});
window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  clearInputs();
  form.removeEventListener('input', function () {});
  form.removeEventListener('submit', function () {});
  insuranceInput.removeEventListener('input', function () {});
  loanInput.removeEventListener('input', function () {});
  interestInput.removeEventListener('input', function () {});
  interestSlider.removeEventListener('input', function () {});
  taxInput.removeEventListener('input', function () {});
  yearsInput.removeEventListener('input', function () {});
  yearsSlider.removeEventListener('input', function () {});
  window.removeEventListener('load', function () {});
});

/***/ }),

/***/ "./src/components/Slider/Slider.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/Slider.js ***!
  \*****************************************/
/***/ (function() {

var sliders = document.querySelectorAll('.slider');
sliders.forEach(function (slider) {
  var range = slider.querySelector('.slider__range');
  var thumb = slider.querySelector('.slider__thumb');
  var track = slider.querySelector('.slider__innerTrack');
  var sliderMax = Number(range.getAttribute('max'));

  var updateSlider = function updateSlider(value) {
    var percentageValue = Number(value) / Number(sliderMax) * 100;
    thumb.style.left = "".concat(percentageValue, "%");
    thumb.style.transform = "translate(-".concat(percentageValue, "%, -50%)");
    track.style.width = "".concat(percentageValue, "%");
  };

  updateSlider(sliderMax / 2);
  range.addEventListener('input', function (e) {
    return updateSlider(e.target.value);
  });
});
window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  sliders.forEach(function (slider) {
    slider.removeEventListener('input', function () {});
  });
});

/***/ }),

/***/ "./src/helpers/Form.js":
/*!*****************************!*\
  !*** ./src/helpers/Form.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateInputError": function() { return /* binding */ validateInputError; },
/* harmony export */   "isFormValid": function() { return /* binding */ isFormValid; }
/* harmony export */ });
/**
 * Validate and display if an input has any error.
 * @param {HTMLElement} element - The input DOM Element.
 *
*/
var validateInputError = function validateInputError(element) {
  if (!element) return;
  var parent = element.parentNode;
  var errorText = element.nextElementSibling;

  if (element.validity.valid) {
    parent.classList.remove('input--error');
    return;
  }

  parent.classList.add('input--error');
  if (!errorText) return;

  if (element.validity.rangeUnderflow || element.validity.tooShort) {
    errorText.textContent = 'Please, insert a amount bigger than $1';
    return;
  }

  if (element.validity.rangeOverflow || element.validity.tooLong) {
    errorText.textContent = 'Please, insert a amount smaller than $1,000,000';
    return;
  }

  if (element.validity.badInput) {
    errorText.textContent = 'Please, insert an integer number';
    return;
  }

  if (element.validity.valueMissing) {
    errorText.textContent = 'Mandatory field';
  }
};
/**
 * Validate if all inputs of the form are valid.
 * @param {HTMLElement} formELEMENT - The form DOM Element.
 *
*/


var isFormValid = function isFormValid(formElement) {
  var allInputs = Array.from(formElement.querySelectorAll('input'));
  return allInputs.every(function (input) {
    return input.validity.valid;
  });
};



/***/ }),

/***/ "./src/helpers/FormatToCurrency.js":
/*!*****************************************!*\
  !*** ./src/helpers/FormatToCurrency.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Format a value to USD currency.
 * @param {number} value
 * @returns {number} Formatted value as following $100,00.
 *
*/
var formatToCurrency = function formatToCurrency(value) {
  var currency = 'USD';
  var language = 'en-US';
  var maximumFractionDigits = 2;
  var notation = 'standard';
  var currencyFormater = new Intl.NumberFormat(language, {
    currency: currency,
    maximumFractionDigits: maximumFractionDigits,
    minimumFractionDigits: 0,
    notation: notation,
    style: 'currency'
  });
  return currencyFormater.format(value);
};

/* harmony default export */ __webpack_exports__["default"] = (formatToCurrency);

/***/ }),

/***/ "./src/helpers/Mortgage.js":
/*!*********************************!*\
  !*** ./src/helpers/Mortgage.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatToCurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatToCurrency */ "./src/helpers/FormatToCurrency.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// HELPERS

/**
 * The result of a Mortgage calculation.
 * @typedef {Object} MortgageResult
 * @type {object}
 * @property {string} insurance - Insurance amount.
 * @property {string} monthlyPayment - The amount of money that will be paid per month.
 * @property {string} principleAndInterest - Money that goes to the lender in exchange for the loan.
 * @property {string} tax - Tax amount of the loan.
*/

/** Class that represents a Mortgage. */

var Mortgage = /*#__PURE__*/function () {
  function Mortgage() {
    _classCallCheck(this, Mortgage);

    this.annualInsurance = 0;
    this.annualTax = 0;
    this.interest = 0;
    this.loan = 0;
    this.years = 0;
  }
  /**
   * Calculate and return the tax price.
   * @returns {number} - Tax price of a month.
   *
  */


  _createClass(Mortgage, [{
    key: "getTaxPrice",
    value: function getTaxPrice() {
      return this.annualTax / 12;
    }
    /**
     * Calculate and return the insurance price.
     * @returns {number} - Insurance price of a month.
     *
    */

  }, {
    key: "getInsurancePrice",
    value: function getInsurancePrice() {
      return this.annualInsurance / 12;
    }
    /**
     * Calculate and return the principle & interest.
     * @returns {number} Total of principle & interest per month.
     *
    */

  }, {
    key: "getPrincipleAndInterests",
    value: function getPrincipleAndInterests() {
      var months = 12;
      var interestRatePerMonth = this.interest / 100 / months;
      var result = interestRatePerMonth * this.loan / (1 - Math.pow(1 + interestRatePerMonth, -this.years * months));
      return result;
    }
    /**
     * Calculate and return the total value per month.
     * @returns {number} Sum of interests, taxes and insurance.
     *
    */

  }, {
    key: "getMontlyPayment",
    value: function getMontlyPayment() {
      var principleAndInterests = this.getPrincipleAndInterests();
      var tax = this.getTaxPrice();
      var insurance = this.getInsurancePrice();
      return principleAndInterests + tax + insurance;
    }
    /**
     * Calculate and return the final results of a mortgage calculation
     * @returns {MortgageResult}
    */

  }, {
    key: "calculateMortgageResult",
    value: function calculateMortgageResult() {
      var insurance = (0,_FormatToCurrency__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getInsurancePrice());
      var monthlyPayment = (0,_FormatToCurrency__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getMontlyPayment());
      var principleAndInterest = (0,_FormatToCurrency__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getPrincipleAndInterests());
      var tax = (0,_FormatToCurrency__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getTaxPrice());
      return {
        insurance: insurance,
        monthlyPayment: monthlyPayment,
        principleAndInterest: principleAndInterest,
        tax: tax
      };
    }
    /**
     * Set the annual insurance amount.
     * @param {number} annualInsurance
    */

  }, {
    key: "setAnnualInsurance",
    value: function setAnnualInsurance(annualInsurance) {
      if (!annualInsurance) return;
      this.annualInsurance = Number(annualInsurance);
    }
    /**
     * Set the annual tax amount.
     * @param {number} annualTax
    */

  }, {
    key: "setAnnualTax",
    value: function setAnnualTax(annualTax) {
      if (!annualTax) return;
      this.annualTax = Number(annualTax);
    }
    /**
     * Set the annual interest amount.
     * @param {number} interest
    */

  }, {
    key: "setInterest",
    value: function setInterest(interest) {
      if (!interest) return;
      this.interest = Number(interest);
    }
    /**
     * Set the loan amount.
     * @param {number} loan
    */

  }, {
    key: "setLoan",
    value: function setLoan(loan) {
      if (!loan) return;
      this.loan = Number(loan);
    }
    /**
     * Set the years amount.
     * @param {number} years
    */

  }, {
    key: "setYears",
    value: function setYears(years) {
      if (!years) return;
      this.years = Number(years);
    }
  }]);

  return Mortgage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Mortgage);

/***/ }),

/***/ "./src/helpers/SetMortgageResult.js":
/*!******************************************!*\
  !*** ./src/helpers/SetMortgageResult.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var insuranceElement = document.querySelector('.results__value--insurance');
var interestElement = document.querySelector('.results__value--interest');
var taxElement = document.querySelector('.results__value--tax');
var totalElement = document.querySelector('.results__value--total');
/**
 * Set the mortgage results on the respective elements.
 * @param {import('./Mortgage').MortgageResult} mortgageResults
 *
*/

var setMortgageResults = function setMortgageResults(mortgageResults) {
  var principleAndInterest = mortgageResults.principleAndInterest,
      insurance = mortgageResults.insurance,
      tax = mortgageResults.tax,
      monthlyPayment = mortgageResults.monthlyPayment;
  interestElement.textContent = principleAndInterest;
  taxElement.textContent = tax;
  insuranceElement.textContent = insurance;
  totalElement.textContent = monthlyPayment;
};

/* harmony default export */ __webpack_exports__["default"] = (setMortgageResults);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Calculator/Calculator */ "./src/components/Calculator/Calculator.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Slider/Slider */ "./src/components/Slider/Slider.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__);
 // COMPONENTS



}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map