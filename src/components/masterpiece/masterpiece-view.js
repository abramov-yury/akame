import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./masterpiece.pug");
const getMasterpieceTemplate = (obj) => template(obj);

export class MasterpieceView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getMasterpieceTemplate(this.options);

  }

}
