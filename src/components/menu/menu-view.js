import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./menu.pug");
const createMenuTemplate = (obj) => template(obj);

export class MenuView extends AbstractView {

  constructor (parameters) {

    super();

    this.parameters = parameters;

  }

  getTemplate () {

    return createMenuTemplate(this.parameters);

  }

}
