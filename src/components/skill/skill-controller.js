import { render } from "../../helpers/render.js";

import { SkillView } from "./skill-view.js";

export class SkillController {

  constructor (container, options) {

    this.container = container;
    this.options = options;
    this.view = null;

  }

  initiate () {

    this.view = new SkillView(this.options);
    render(this.container, this.view.getElement());

  }

}
