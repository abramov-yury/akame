import { render } from "../../helpers/render.js";

import { NavigationView } from "./navigation-view.js";

export class NavigationController {

  constructor (container, parameters, position) {

    this.container = container;
    this.position = position;
    this.parameters = parameters;

    this.view = null;

  }

  setHandlers () {

    this.view.switchClickHandler();

  }

  initiate () {

    this.view = new NavigationView(this.parameters);
    this.setHandlers();
    render(this.container, this.view.getElement(), this.position);

  }

}
