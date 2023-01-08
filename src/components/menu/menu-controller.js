import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { MenuView } from "./menu-view.js";

export class MenuController {

  constructor (container, parameters, position) {

    this.container = container;
    this.position = position;
    this.parameters = parameters;

    this.view = null;

  }

  setHandlers () {

    this.view.switchClickHandler();

  }

  setMediatorMethods () {

    MEDIATOR.showMenu = this.view.showMenu;

  }

  initiate () {

    this.view = new MenuView(this.parameters);
    this.setHandlers();
    this.setMediatorMethods();
    render(this.container, this.view.getElement(), this.position);

  }

}
