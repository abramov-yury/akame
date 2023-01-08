import { AbstractView } from "../../helpers/abstract-view.js";
import { Mediator } from "../../helpers/mediator.js";

const template = require("./menu.pug");
const createMenuTemplate = (obj) => template(obj);

export class MenuView extends AbstractView {

  constructor (parameters) {

    super();

    this.parameters = parameters;
    this.switch = this.getElement().querySelector(".menu__switch");

  }

  getTemplate () {

    return createMenuTemplate(this.parameters);

  }

  onClickSwitch () {

    Mediator.showNavigation();

  }

  switchClickHandler () {

    this.switch.addEventListener("click", this.onClickSwitch);

  }

}
