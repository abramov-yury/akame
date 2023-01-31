import { render } from "../../helpers/render.js";

import { PopupView } from "./popup-view.js";

export class PopupController {

  constructor (container, options) {

    this.container = container;
    this.options = options;

    this.view = null;

    this.removePopup = this.removePopup.bind(this);
    this.onEscDown = this.onEscDown.bind(this);

  }

  setHandlers () {

    this.view.buttonCrossHandler(this.removePopup);
    this.view.buttonScaleHandler();

    document.addEventListener("keydown", this.onEscDown);

  }

  initiate () {

    this.view = new PopupView(this.options);
    this.setHandlers();
    document.body.classList.add("app__popup-opened");
    render(this.container, this.view.getElement());

  }

  onEscDown (evt) {

    if (evt.key === "Escape" || evt.code === "Escape") this.removePopup();

  }

  removePopup () {

    this.view.removeElement();
    document.body.classList.remove("app__popup-opened");
    document.removeEventListener("keydown", this.onEscDown);

  }

}
