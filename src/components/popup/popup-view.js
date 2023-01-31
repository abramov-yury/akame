import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./popup.pug");
const getPopupTemplate = (obj) => template(obj);

export class PopupView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.changeScale = this.changeScale.bind(this);

  }

  getTemplate () {

    return getPopupTemplate(this.options);

  }

  getButtonCross () {

    return this.getElement().querySelector(".popup__button--cross");

  }

  getButtonScale () {

    return this.getElement().querySelector(".popup__button--scale");

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

}
