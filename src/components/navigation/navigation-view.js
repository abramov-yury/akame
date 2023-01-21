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

  switchClickHandler (callback) {

    this.switch.addEventListener("click", callback);

  }

}
