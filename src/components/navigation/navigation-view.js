import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./navigation.pug");
const createNavigationTemplate = (obj) => template(obj);

export class NavigationView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;
    this.switch = this.getElement().querySelector(".navigation__switch");

    this.cls = {
      show: "navigation--shown",
      link: "navigation__link",
      active: "navigation__link--active",
    };

    this.showNavigation = this.showNavigation.bind(this);

  }

  getTemplate () {

    return createNavigationTemplate(this.options);

  }

  showNavigation () {

    this.getElement().classList.add(this.cls.show);

  }

  hideNavigation () {

    this.getElement().classList.remove(this.cls.show);

  }

  getCurrentActiveLink () {

    return this.getElement().querySelector(`.${this.cls.active}`);

  }

  makeLinkActive (item) {

    this.getCurrentActiveLink().classList.toggle(this.cls.active);
    item.classList.toggle(this.cls.active);

  }

  getNavigationLinks () {

    return this.getElement().querySelectorAll(`.${this.cls.link}`);

  }

  switchClickHandler (callback) {

    this.switch.addEventListener("click", callback);

  }

  switchNavigationHandler (callback) {

    this.getNavigationLinks().forEach((item) => item.addEventListener("click", callback));

  }

}
