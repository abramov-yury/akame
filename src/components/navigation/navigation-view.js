import { AbstractView } from "../../helpers/abstract-view.js";
import { Mediator } from "../../helpers/mediator.js";

const template = require("./navigation.pug");
const createNavigationTemplate = (obj) => template(obj);

export class NavigationView extends AbstractView {

  constructor (parameters) {

    super();

    this.parameters = parameters;
    this.showNavigation = this.showNavigation.bind(this);

    this.setMediatorMethods();

  }

  getTemplate () {

    return createNavigationTemplate(this.parameters);

  }

  setMediatorMethods () {

    Mediator.showNavigation = this.showNavigation;

  }

  showNavigation () {

    console.log(this.getElement());

  }

}
