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

  getFiltersControls () {

    return this.getElement().querySelectorAll(".gallery__filter-input");

  }

  getGalleryList () {

    return this.getElement().querySelector(".gallery__list");

  }

  clearGallery () {

    if (!this.getGalleryList().childNodes.length) return;
    this.getGalleryList().innerHTML = "";

  }

  setFiltersControlsHandler (callback) {

    this.getFiltersControls().forEach((item) => item.addEventListener("change", callback));

  }

}
