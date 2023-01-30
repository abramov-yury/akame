import { MEDIATOR } from "../../helpers/mediator.js";

import { MenuController } from "../menu/menu-controller.js";
import { NavigationController } from "../navigation/navigation-controller.js";
import { ContentController } from "../content/content-controller.js";
import { PopupController } from "../popup/popup-controller.js";

export class AppController {

  constructor () {

    this.name = "app";

    this.menuController = null;
    this.navigationController = null;
    this.contentController = null;
    this.popupController = null;

    this.createPopup = this.createPopup.bind(this);

  }

  setMediatorMethods () {

    MEDIATOR.createPopup = this.createPopup;

  }

  initiate () {

    this.menuController = new MenuController(document.body);
    this.navigationController = new NavigationController(document.body);
    this.contentController = new ContentController(document.body, { parent: this.name });

    this.setMediatorMethods();

    this.menuController.initiate();
    this.navigationController.initiate();
    this.contentController.initiate();

  }

  createPopup (options) {

    this.popupController = new PopupController(document.body, options);
    this.popupController.initiate();

  }

}
