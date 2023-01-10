import { render } from "../../helpers/render.js";

import { IntroView } from "./intro-view.js";
import { IntroModel } from "./intro-model.js";

export class IntroController {

  constructor (container) {

    this.container = container;

    this.model = null;
    this.view = null;
    this.options = null;

  }

  setOptions () {

    this.options = {
      pictures: this.model.getPictures(),
    };

  }

  initiate () {

    this.model = new IntroModel();
    this.setOptions();
    this.view = new IntroView(this.options);
    render(this.container, this.view.getElement());

  }

}
