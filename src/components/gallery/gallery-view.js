import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./gallery.pug");
const getGalleryTemplate = (obj) => template(obj);

export class GalleryView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getGalleryTemplate(this.options);

  }

}
