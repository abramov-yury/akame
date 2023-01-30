import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./popup.pug");
const getPopupTemplate = (obj) => template(obj);

export class PopupView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getPopupTemplate(this.options);

  }

  getButtonCross () {

    return this.getElement().querySelector(".popup__button--cross");

  }

  buttonCrossHandler (callback) {

    this.getButtonCross().addEventListener("click", callback);

  }

}
