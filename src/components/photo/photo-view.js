import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./photo.pug");
const getPhotoTemplate = (obj) => template(obj);

export class PhotoView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getPhotoTemplate(this.options);

  }

}
