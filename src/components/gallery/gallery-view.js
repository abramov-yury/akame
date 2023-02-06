import { debounce } from "../../helpers/debounce.js";

import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./gallery.pug");
const getGalleryTemplate = (obj) => template(obj);

export class GalleryView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.masonryLayoutSettings = {
      0: {
        columns: 1,
        gap: 12,
      },
      426: {
        columns: 2,
        gap: 12,
      },
      768: {
        columns: 3,
        gap: 16,
      },
      1200: {
        columns: 4,
        gap: 20,
      },
      2560: {
        columns: 5,
        gap: 24,
      },
    };

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

    this.getFiltersControls().forEach((item) => item.addEventListener("change", debounce(callback, 250)));

  }

}
