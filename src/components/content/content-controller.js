import { render } from "../../helpers/render.js";

import { ContentView } from "./content-view.js";

import { IntroController } from "../intro/intro-controller.js";

export class ContentController {

  constructor (container, parameters) {

    this.container = container;
    this.parameters = parameters;

    this.options = null;
    this.view = null;
    this.introController = null;

  }

  initiate () {

    this.view = new ContentView(this.parameters);
    this.mountComponents();
    render(this.container, this.view.getElement());

  }

  mountComponents () {

    this.mountIntroController();

  }

  mountIntroController () {

    this.introController = new IntroController(this.view.getElement());
    this.introController.initiate();

  }

}
