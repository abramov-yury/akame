import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./navigation.pug");
const createNavigationTemplate = (obj) => template(obj);

export class NavigationView extends AbstractView {

  constructor (parameters) {

    super();

    this.parameters = parameters;

  }

  getTemplate () {

    return createNavigationTemplate(this.parameters);

  }

}
