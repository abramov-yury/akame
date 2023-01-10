import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./intro.pug");
const createIntroTemplate = (obj) => template(obj);

export class IntroView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return createIntroTemplate(this.options);

  }

}
