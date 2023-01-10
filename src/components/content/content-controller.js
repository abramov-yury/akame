import { render } from "../../helpers/render.js";

import { ContentView } from "./content-view.js";

export class ContentController {

  constructor (container) {

    this.container = container;

    this.view = null;

  }

  initiate () {

    this.view = new ContentView();
    render(this.container, this.view.getElement());

  }

}
