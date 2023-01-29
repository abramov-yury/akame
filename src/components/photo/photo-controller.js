import { render } from "../../helpers/render.js";

import { PhotoView } from "./photo-view.js";

export class PhotoController {

  constructor (container, options) {

    this.container = container;
    this.options = options;

    this.view = null;

  }

  initiate () {

    this.view = new PhotoView(this.options);
    render(this.container, this.view.getElement());

  }

}
