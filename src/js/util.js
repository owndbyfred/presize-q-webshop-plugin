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
 * @param {String} cssString -
 */
const addStyles = (cssString) => {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = cssString;

  document.head.appendChild(styleElement);
};

module.exports = {
  addStyles,
};
