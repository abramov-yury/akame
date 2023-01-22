import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./content.pug");
const createContentTemplate = (obj) => template(obj);

export class ContentView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.clear = this.clear.bind(this);

  }

  getTemplate () {

    return createContentTemplate(this.options);

  }

  clear () {

    this.getElement().innerHTML = "";

  }

}
