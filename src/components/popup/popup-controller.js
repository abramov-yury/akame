import { MEDIATOR } from "../../helpers/mediator.js";
import { render } from "../../helpers/render.js";

import { PopupView } from "./popup-view.js";

import { MasterpieceController } from "../masterpiece/masterpiece-controller.js";

export class PopupController {

  constructor (container, options) {

    this.container = container;
    this.options = options;
    this.name = "popup";

    this.view = null;
    this.masterpieceController = null;

    this.removePopup = this.removePopup.bind(this);
    this.onEscDown = this.onEscDown.bind(this);
    this.onArrowLeftDown = this.onArrowLeftDown.bind(this);
    this.onArrowRightDown = this.onArrowRightDown.bind(this);
    this.showPreviousPhoto = this.showPreviousPhoto.bind(this);
    this.showNextPhoto = this.showNextPhoto.bind(this);

  }

  setHandlers () {

    this.view.buttonCrossHandler(this.removePopup);
    this.view.buttonScaleHandler();
    this.view.buttonBackArrowHandler(this.showPreviousPhoto);
    this.view.buttonForwardArrowHandler(this.showNextPhoto);

    document.addEventListener("keydown", this.onEscDown);
    document.addEventListener("keydown", this.onArrowLeftDown);
    document.addEventListener("keydown", this.onArrowRightDown);

  }

  initiate () {

    this.view = new PopupView();
    this.renderMasterpiece();
    this.setHandlers();
    document.body.classList.add("app__popup-opened");

    render(this.container, this.view.getElement());

  }

  onEscDown (evt) {

    if (evt.key === "Escape" || evt.code === "Escape") this.removePopup();

  }

  onArrowRightDown (evt) {

    if (evt.key === "ArrowRight" || evt.code === "ArrowRight") this.showNextPhoto();

  }

  onArrowLeftDown (evt) {

    if (evt.key === "ArrowLeft" || evt.code === "ArrowLeft") this.showPreviousPhoto();

  }

  removePopup () {

    this.view.removeElement();
    document.body.classList.remove("app__popup-opened");
    document.removeEventListener("keydown", this.onEscDown);
    document.removeEventListener("keydown", this.onArrowLeftDown);
    document.removeEventListener("keydown", this.onArrowRightDown);

  }

  renderMasterpiece () {

    this.masterpieceController = new MasterpieceController(this.view.getPictureWrapper(), this.options, this.name);
    this.masterpieceController.initiate();

  }

  rerenderMasterpiece (obj) {

    this.options = obj;
    this.masterpieceController.remove();
    this.renderMasterpiece();

  }

  showPreviousPhoto () {

    const photos = MEDIATOR.getCurrentPhotos();
    const index = photos.findIndex((item) => item.name === this.options.name);

    if (photos[index - 1]) {

      this.rerenderMasterpiece(photos[index - 1]);

    } else {

      this.rerenderMasterpiece(photos[photos.length - 1]);

    }

  }

  showNextPhoto () {

    const photos = MEDIATOR.getCurrentPhotos();
    const index = photos.findIndex((item) => item.name === this.options.name);

    if (photos[index + 1]) {

      this.rerenderMasterpiece(photos[index + 1]);

    } else {

      this.rerenderMasterpiece(photos[0]);

    }

  }

}
