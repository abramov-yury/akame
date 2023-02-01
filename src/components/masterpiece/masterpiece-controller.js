import { render } from "../../helpers/render.js";

import { MasterpieceView } from "./masterpiece-view.js";

export class MasterpieceController {

  constructor (container, options, parent) {

    this.container = container;
    this.options = options;
    this.options.parent = parent;

    this.view = null;

  }

  initiate () {

    this.view = new MasterpieceView(this.options);
    render(this.container, this.view.getElement());

  }

  remove () {

    this.view.removeElement();

  }

}
