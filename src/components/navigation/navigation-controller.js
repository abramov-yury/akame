import { render } from "../../helpers/render.js";

import { NavigationView } from "./navigation-view.js";

export class NavigationController {

  constructor (container) {

    this.container = container;

    this.view = null;

  }

  setHandlers () {

    this.view.switchClickHandler();

  }

  initiate () {

    this.view = new NavigationView();
    this.setHandlers();
    render(this.container, this.view.getElement());

  }

}
