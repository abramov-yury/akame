import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { MenuView } from "./menu-view.js";

export class MenuController {

  constructor (container) {

    this.container = container;

    this.view = null;

  }

  setHandlers () {

    this.view.switchClickHandler();

  }

  setMediatorMethods () {

    MEDIATOR.showMenu = this.view.showMenu;

  }

  initiate () {

    this.view = new MenuView();
    this.setHandlers();
    this.setMediatorMethods();
    render(this.container, this.view.getElement());

  }

}
