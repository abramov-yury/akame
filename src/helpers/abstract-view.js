import { createElement } from "./create-element.js";

export class AbstractView {

  constructor () {

    if (new.target === AbstractView) {

      throw new Error("Can't instantiate AbstractView, only concrete one.");

    }

    this.element = null;

  }

  // eslint-disable-next-line class-methods-use-this
  getTemplate () {

    throw new Error("AbstractView method not implemented: getTemplate");

  }

  getElement () {

    if (!this.element) {

      this.element = createElement(this.getTemplate());

    }

    return this.element;

  }

  removeElement () {

    this.getElement().remove();
    this.element = null;

  }

}
