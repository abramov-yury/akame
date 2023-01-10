import { render } from "../../helpers/render.js";

import { IntroView } from "./intro-view.js";
import { IntroModel } from "./intro-model.js";

export class IntroController {

  constructor (container, paremeters) {

    this.container = container;
    this.paremeters = paremeters;

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
