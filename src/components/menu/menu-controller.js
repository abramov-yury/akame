import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { MenuView } from "./menu-view.js";

export class MenuController {

  constructor (container) {

    this.container = container;

    this.view = null;

    this.onClickSwitch = this.onClickSwitch.bind(this);

  }

  setHandlers () {

    this.view.switchClickHandler(this.onClickSwitch);

  }

  setMediatorMethods () {

    MEDIATOR.showMenu = this.view.showMenu;

  }

  initiate () {

    this.view = new MenuView();
    this.setMediatorMethods();
    this.setHandlers();
    render(this.container, this.view.getElement());

  }

  onClickSwitch () {

    this.view.hideMenu();
    MEDIATOR.showNavigation();

  }

}
