import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./blog.pug");
const getBlogTemplate = (obj) => template(obj);

export class BlogView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getBlogTemplate(this.options);

  }

}
