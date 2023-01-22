import { render } from "../../helpers/render.js";

import { GalleryView } from "./gallery-view.js";

export class GalleryController {

  constructor (container) {

    this.cotainer = container;

    this.view = null;

  }

  initiate () {

    this.view = new GalleryView();
    render(this.cotainer, this.view.getElement());

  }

}
