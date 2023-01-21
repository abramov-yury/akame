import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { NavigationView } from "./navigation-view.js";

export class NavigationController {

  constructor (container) {

    this.container = container;

    this.view = null;

    this.onSwitchClick = this.onSwitchClick.bind(this);

  }

  setHandlers () {

    this.view.switchClickHandler(this.onSwitchClick);

  }

  setMediatorMethods () {

    MEDIATOR.showNavigation = this.view.showNavigation;

  }

  initiate () {

    this.view = new NavigationView();
    this.setMediatorMethods();
    this.setHandlers();
    render(this.container, this.view.getElement());

  }

  onSwitchClick () {

    this.view.hideNavigation();
    MEDIATOR.showMenu();

  }

}
