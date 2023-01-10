import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./intro.pug");
const createIntroTemplate = (obj) => template(obj);

export class IntroView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.runSlider();

  }

  getTemplate () {

    return createIntroTemplate(this.options);

  }

  runSlider () {

    const items = this.getElement().querySelectorAll(".intro__item");
    let index = 0;

    setInterval(() => {

      items[index].style.opacity = 0;

      if (index === items.length - 1) {

        index = 0;

      } else {

        index += 1;

      }

      items[index].style.opacity = 1;

    }, 2000);

  }

}
