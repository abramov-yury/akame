import { debounce } from "../../helpers/debounce.js";

import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./popup.pug");
const getPopupTemplate = (obj) => template(obj);

export class PopupView extends AbstractView {

  constructor () {

    super();

    this.timeout = 150;

    this.changeScale = this.changeScale.bind(this);

  }

  getTemplate () {

    return getPopupTemplate(this.options);

  }

  getPictureWrapper () {

    return this.getElement().querySelector(".popup__picture-wrapper");

  }

  getButtonCross () {

    return this.getElement().querySelector(".popup__button--cross");

  }

  getButtonScale () {

    return this.getElement().querySelector(".popup__button--scale");

  }

  getButtonBackArrow () {

    return this.getElement().querySelector(".popup__button--back-arrow");

  }

  getButtonForwardArrow () {

    return this.getElement().querySelector(".popup__button--forward-arrow");

  }

  getPopupPictureWrapper () {

    return this.getElement().querySelector(".popup__picture-wrapper");

  }

  changeScale () {

    this.getPopupPictureWrapper().classList.toggle("popup__picture-wrapper--zoomed");
    this.getButtonScale().classList.toggle("popup__button--minus");

  }

  buttonCrossHandler (callback) {

    this.getButtonCross().addEventListener("click", callback);

  }

  buttonScaleHandler () {

    this.getButtonScale().addEventListener("click", this.changeScale);

  }

  buttonBackArrowHandler (callback) {

    this.getButtonBackArrow().addEventListener("click", debounce(callback, this.timeout));

  }

  buttonForwardArrowHandler (callback) {

    this.getButtonForwardArrow().addEventListener("click", debounce(callback, this.timeout));

  }

}
