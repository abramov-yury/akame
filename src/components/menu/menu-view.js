import { AbstractView } from "../../helpers/abstract-view.js";
import { MEDIATOR } from "../../helpers/mediator.js";

const template = require("./menu.pug");
const createMenuTemplate = (obj) => template(obj);

export class MenuView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;
    this.switch = this.getElement().querySelector(".menu__switch");

    this.showMenu = this.showMenu.bind(this);
    this.onClickSwitch = this.onClickSwitch.bind(this);

  }

  getTemplate () {

    return createMenuTemplate(this.options);

  }

  hideMenu () {

    this.getElement().classList.add("menu--hidden");

  }

  showMenu () {

    this.getElement().classList.remove("menu--hidden");

  }

  onClickSwitch () {

    this.hideMenu();
    MEDIATOR.showNavigation();

  }

  switchClickHandler () {

    this.switch.addEventListener("click", this.onClickSwitch);

  }

}
