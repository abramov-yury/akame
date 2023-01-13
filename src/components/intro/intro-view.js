import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./intro.pug");
const createIntroTemplate = (obj) => template(obj);

const mediumBreakpoint = 768;
const isBreakPoint = (breakpoint) => document.documentElement.clientWidth >= breakpoint;

export class IntroView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.cls = {
      itemHidden: "intro__item--hidden",
    };

    this.items = this.getElement().querySelectorAll(".intro__item");

    this.setHandlers();
    this.runSlider();

  }

  getTemplate () {

    return createIntroTemplate(this.options);

  }

  setHandlers () {

    this.items.forEach((item) => item.addEventListener("pointerover", this.onItemPointOver));

  }

  onItemPointOver (evt) {

    if (!isBreakPoint(mediumBreakpoint)) return;

    console.log(evt.target);

  }

  runSlider () {

    const duration = 5000;
    let index = 0;

    setInterval(() => {

      if (isBreakPoint(mediumBreakpoint)) return;

      this.items[index].classList.add(this.cls.itemHidden);

      if (index === this.items.length - 1) {

        index = 0;

      } else {

        index += 1;

      }

      this.items[index].classList.remove(this.cls.itemHidden);

    }, duration);

  }

}
