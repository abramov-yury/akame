import { render } from "../../helpers/render.js";

import { GalleryView } from "./gallery-view.js";
import { GalleryModel } from "./gallery-model.js";

export class GalleryController {

  constructor (container) {

    this.cotainer = container;

    this.view = null;
    this.model = null;

  }

  initiate () {

    this.model = new GalleryModel();
    this.model.setData();
    this.view = new GalleryView(this.model.getData());
    render(this.cotainer, this.view.getElement());

  }

}
