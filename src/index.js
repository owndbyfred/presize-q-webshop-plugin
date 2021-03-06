import { appendButton } from "./js/components/button";
import { appendPopup } from "./js/components/popup";
import { cssString } from "./js/testCss";
import { addStyles } from "./js/util";

(() => {
  addStyles(cssString);
  appendButton();
  appendPopup();
})();
