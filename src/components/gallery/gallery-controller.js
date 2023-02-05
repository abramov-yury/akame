import { MEDIATOR } from "../../helpers/mediator.js";
import { Masonry } from "../../libraries/masonry/masonry.js";

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
    this.currentPhotos = null;
    this.masonry = null;

    this.onFilterControlChange = this.onFilterControlChange.bind(this);
    this.getCurrentPhotos = this.getCurrentPhotos.bind(this);

  }

  setHandlers () {

    this.view.setFiltersControlsHandler(this.onFilterControlChange);

  }

  setMediatorMethods () {

    MEDIATOR.getCurrentPhotos = this.getCurrentPhotos;

  }

  setMasonryLayout () {

    this.masonry = new Masonry(this.view.getGalleryList(), this.view.masonryLayoutSettings);

  }

  removeMasonryLayout () {

    this.masonry.remove();

  }

  initiate () {

    this.model = new GalleryModel();
    this.model.setData();
    this.view = new GalleryView([...this.model.filters]);
    this.setHandlers();
    this.createPhotos([...this.model.pictures]);
    this.setMediatorMethods();
    render(this.container, this.view.getElement());

    this.setMasonryLayout();

  }

  createPhoto (options) {

    const data = { ...options };
    data.parent = "gallery";
    this.photoController = new PhotoController(this.view.getGalleryList(), data);
    this.photoController.initiate();

  }

  createPhotos (arr) {

    shuffle(arr);
    this.currentPhotos = arr;

    arr.forEach((item) => this.createPhoto(item));

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

    if (this.masonry) this.removeMasonryLayout();
    this.setMasonryLayout(); // sure after this.createPhotos

  }

  getCurrentPhotos () {

    return this.currentPhotos;

  }

}
