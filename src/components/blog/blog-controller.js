import { render } from "../../helpers/render.js";

import { BlogModel } from "./blog-model.js";
import { BlogView } from "./blog-view.js";

export class BlogController {

  constructor (container) {

    this.container = container;
    this.view = null;
    this.model = null;

  }

  initiate () {

    this.model = new BlogModel();
    this.model.setData();

    this.view = new BlogView(this.model.getData());
    render(this.container, this.view.getElement());

  }

}
