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

    const breakpoint = 768;
    let index = 0;

    setInterval(() => {

      if (document.documentElement.clientWidth >= breakpoint) return;

      items[index].classList.add("intro__item--hidden");

      if (index === items.length - 1) {

        index = 0;

      } else {

        index += 1;

      }

      items[index].classList.remove("intro__item--hidden");

    }, 2000);

  }

}
