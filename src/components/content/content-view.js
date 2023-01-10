import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./content.pug");
const createContentTemplate = (obj) => template(obj);

export class ContentView extends AbstractView {

  getTemplate () {

    return createContentTemplate(this.parameters);

  }

}
