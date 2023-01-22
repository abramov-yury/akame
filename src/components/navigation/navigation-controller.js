import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { NavigationView } from "./navigation-view.js";

export class NavigationController {

  constructor (container) {

    this.container = container;

    this.data = require("./navigation.json");
    this.mode = this.data[0].value;
    this.view = null;

    this.onSwitchClick = this.onSwitchClick.bind(this);
    this.onNavigationItemClick = this.onNavigationItemClick.bind(this);

  }

  setHandlers () {

    this.view.switchClickHandler(this.onSwitchClick);
    this.view.switchNavigationHandler(this.onNavigationItemClick);

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

  renderContent (value) {

    switch (value) {

    case this.data[0].value: {

      MEDIATOR.mountIntroController();
      break;

    }

    case this.data[2].value: {

      MEDIATOR.mountGalleryController();
      break;

    }

    }

  }

  onNavigationItemClick (evt) {

    evt.preventDefault();

    if (evt.currentTarget.dataset.point === this.mode) return;

    this.view.makeLinkActive(evt.currentTarget);

    MEDIATOR.clearContent();
    this.renderContent(evt.currentTarget.dataset.point);

    this.mode = evt.currentTarget.dataset.point;

  }

}
