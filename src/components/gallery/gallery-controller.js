import { render } from "../../helpers/render.js";
import { shuffle } from "../../helpers/shuffle.js";

import { GalleryView } from "./gallery-view.js";
import { GalleryModel } from "./gallery-model.js";

import { PhotoController } from "../photo/photo-controller.js";

export class GalleryController {

  constructor (container) {

    this.container = container;

    this.view = null;
    this.model = null;
    this.photoController = null;

    this.onFilterControlChange = this.onFilterControlChange.bind(this);

  }

  setHandlers () {

    this.view.setFiltersControlsHandler(this.onFilterControlChange);

  }

  initiate () {

    this.model = new GalleryModel();
    this.model.setData();
    this.view = new GalleryView(this.model.filters);
    this.setHandlers();
    this.createPhotos(this.model.pictures);
    render(this.container, this.view.getElement());

  }

  createPhoto (options) {

    this.photoController = new PhotoController(this.view.getGalleryList(), options);
    this.photoController.initiate();

  }

  createPhotos (arr) {

    shuffle(arr);

    arr.forEach((item) => {

      item.parent = "gallery";
      this.createPhoto(item);

    });

  }

  getFilteredPhotos (value) {

    if (value === this.model.filters[0]) return this.model.pictures;

    const arr = [];

    this.model.pictures.forEach((item) => {

      if (item.category === value) arr.push(item);

    });

    return arr;

  }

  onFilterControlChange (evt) {

    const arr = this.getFilteredPhotos(evt.target.value);

    this.view.clearGallery();
    this.createPhotos(arr);

  }

}
