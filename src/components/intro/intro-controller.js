import { render } from "../../helpers/render.js";

import { IntroView } from "./intro-view.js";
import { IntroModel } from "./intro-model.js";

export class IntroController {

  constructor (container) {

    this.container = container;

    this.view = null;
    this.model = null;

  }

  initiate () {

    this.model = new IntroModel();
    this.model.setData();
    this.view = new IntroView(this.model.getData());
    render(this.container, this.view.getElement());

  }

}
