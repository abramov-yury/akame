import { render } from "../../helpers/render.js";

import { AboutView } from "./about-view.js";

export class AboutController {

  constructor (container) {

    this.cotainer = container;
    this.view = null;

  }

  initiate () {

    this.view = new AboutView();
    render(this.cotainer, this.view.getElement());

  }

}
