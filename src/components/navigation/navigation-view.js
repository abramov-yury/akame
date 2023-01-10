import { AbstractView } from "../../helpers/abstract-view.js";
import { MEDIATOR } from "../../helpers/mediator.js";

const template = require("./navigation.pug");
const createNavigationTemplate = (obj) => template(obj);

export class NavigationView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;
    this.switch = this.getElement().querySelector(".navigation__switch");
    this.cls = {
      show: "navigation--shown",
    };
    this.showNavigation = this.showNavigation.bind(this);
    this.onSwitchClick = this.onSwitchClick.bind(this);

    this.setMediatorMethods();

  }

  getTemplate () {

    return createNavigationTemplate(this.options);

  }

  setMediatorMethods () {

    MEDIATOR.showNavigation = this.showNavigation;

  }

  showNavigation () {

    this.getElement().classList.add(this.cls.show);

  }

  hideNavigation () {

    this.getElement().classList.remove(this.cls.show);

  }

  onSwitchClick () {

    this.hideNavigation();
    MEDIATOR.showMenu();

  }

  switchClickHandler () {

    this.switch.addEventListener("click", this.onSwitchClick);

  }

}
