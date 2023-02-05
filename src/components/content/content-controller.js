import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { ContentView } from "./content-view.js";

import { IntroController } from "../intro/intro-controller.js";
import { GalleryController } from "../gallery/gallery-controller.js";

export class ContentController {

  constructor (container, parameters) {

    this.container = container;
    this.parameters = parameters;

    this.options = null;
    this.view = null;
    this.introController = null;
    this.galleryController = null;
    this.currentController = null;

    this.clearContent = this.clearContent.bind(this);
    this.mountIntroController = this.mountIntroController.bind(this);
    this.mountGalleryController = this.mountGalleryController.bind(this);

  }

  setMediatorMethods () {

    MEDIATOR.clearContent = this.clearContent;
    MEDIATOR.mountIntroController = this.mountIntroController;
    MEDIATOR.mountGalleryController = this.mountGalleryController;

  }

  initiate () {

    this.view = new ContentView(this.parameters);
    this.setMediatorMethods();
    this.mountIntroController();
    render(this.container, this.view.getElement());

  }

  mountIntroController () {

    this.introController = new IntroController(this.view.getElement());
    this.introController.initiate();
    this.currentController = this.introController;

  }

  mountGalleryController () {

    this.galleryController = new GalleryController(this.view.getElement());
    this.galleryController.initiate();
    this.currentController = this.galleryController;

  }

  clearContent () {

    this.view.clear();

    if (this.currentController === this.galleryController) {

      this.galleryController.removeMasonryLayout();

    }

  }

}
