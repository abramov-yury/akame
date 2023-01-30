import { render } from "../../helpers/render.js";

import { PopupView } from "./popup-view.js";

export class PopupController {

  constructor (container, options) {

    this.container = container;
    this.options = options;

    this.view = null;

  }

  initiate () {

    this.view = new PopupView(this.options);
    render(this.container, this.view.getElement());

  }

}
