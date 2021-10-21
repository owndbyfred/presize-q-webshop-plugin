/**
 *
 * @param {string} selector -
 * @param {function} callback -
 */
const waitForElement = (selector, callback) => {
  const el = document.querySelector(selector);

  if (!el) {
    setTimeout(() => {
      waitForElement(selector, callback);
    }, 100);

    return;
  }

  callback(el);
};

/**
 *
 * @param {HTMLElement} element -
 * @param {HTMLELment} targetElement -
 * @param {'before'|'after'} position -
 */
const appendElement = (element, targetElement, position) => {
  targetElement.parentNode.insertBefore(
    element,
    position === "after" ? targetElement.nextSibling : targetElement
  );
};

/**
 *
 * @param {*} htmlString -
 * @param {*} className -
 */
const addBodyDiv = (htmlString, className = null, isFirstChild = false) => {
  const selector = "body";
  waitForElement(selector, (target) => {
    const div = document.createElement("div");

    if (className) {
      div.classList.add(className);
    }

    div.innerHTML = htmlString;

    if (isFirstChild) {
      target.insertBefore(div, target.firstChild);
    } else {
      target.appendChild(div);
    }
  });
};

/**
 *
 * @param {String} cssString -
 */
const addStyles = (cssString) => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = cssString;

  document.head.appendChild(styleElement);
};

/**
 *
 * @param {*} selector -
 * @param {*} handler -
 * @param {*} type -
 */
const addListener = (selector, handler, type = "click") => {
  waitForElement(selector, (target) => {
    target.addEventListener(type, (e) => handler(e));
  });
};

module.exports = {
  addStyles,
  addBodyDiv,
  waitForElement,
  addListener,
};
