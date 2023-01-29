import { render } from "../../helpers/render.js";

import { PhotoView } from "./photo-view.js";

export class PhotoController {

  constructor (container, options) {

    this.container = container;
    this.options = options;

    this.view = null;

  }

  setHandlers () {

    this.view.photoClickHandler(this.onPhotoClick);

  }

  initiate () {

    this.view = new PhotoView(this.options);
    this.setHandlers();
    render(this.container, this.view.getElement());

  }

  onPhotoClick (evt) {

    console.log(evt.target);

  }

}
