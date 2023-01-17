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
      item: "intro__item",
      itemHidden: "intro__item--hidden",
      itemMoved: "intro__item--moved",
      itemMasked: "intro__item--masked",
    };

    this.items = this.getElement().querySelectorAll(".intro__item");
    this.onItemPointerOver = this.onItemPointerOver.bind(this);
    this.onItemPointerLeave = this.onItemPointerLeave.bind(this);

    this.setHandlers();
    this.runSlider();

  }

  getTemplate () {

    return createIntroTemplate(this.options);

  }

  setHandlers () {

    this.items.forEach((item) => item.addEventListener("pointerover", this.onItemPointerOver));
    this.items.forEach((item) => item.addEventListener("pointerleave", this.onItemPointerLeave));

  }

  moveItem (element) {

    if (element.dataset.index < 2) return;

    if (!element.classList.contains(this.cls.itemMoved)) {

      element.classList.add(this.cls.itemMoved);

    }

  }

  displaceNextSibling (evt) {

    const poster = evt.currentTarget;

    if (!(poster.previousSibling && poster.nextSibling)) return;
    if (!poster.classList.contains(this.cls.itemMoved)) return;

    const matrix = getComputedStyle(poster.nextSibling).transform;
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ");
    const x = +matrixValues[4];
    const newValue = x - (poster.parentElement.offsetWidth * .04);

    poster.nextSibling.style.transform = `translateX(${newValue}px)`;

    setTimeout(() => poster.nextSibling.style.transform = "", 400);

  }

  removeShift (evt) {

    if (!evt.relatedTarget) return;
    if (!evt.relatedTarget.classList.contains(this.cls.item)) return;
    if (!evt.relatedTarget.style.transform) return;
    evt.relatedTarget.style.transform = "";

  }

  hideMask (currentElement) {

    const isCurrentElement = (item) => +item.dataset.index === +currentElement.dataset.index;
    const isClassName = (item) => item.classList.contains(this.cls.itemMasked);

    this.items.forEach((item) => {

      if (isCurrentElement(item) && isClassName(item)) {

        item.classList.remove(this.cls.itemMasked);

      }

      if (!isCurrentElement(item) && !isClassName(item)) {

        item.classList.add(this.cls.itemMasked);

      }

    });

  }

  onItemPointerOver (evt) {

    if (!isBreakPoint(mediumBreakpoint)) return;

    this.displaceNextSibling(evt); // the first
    this.hideMask(evt.currentTarget); // the second

    this.items.forEach((item) => {

      if (+item.dataset.index > +evt.currentTarget.dataset.index) {

        this.moveItem(item);

        return;

      }

      if (item.classList.contains(this.cls.itemMoved)) {

        item.classList.remove(this.cls.itemMoved);

      }

    });

  }

  onItemPointerLeave (evt) {

    if (!isBreakPoint(mediumBreakpoint)) return;

    this.removeShift(evt);

    this.items.forEach((item) => {

      if (!evt.relatedTarget) return;
      if (!evt.relatedTarget.classList.contains(this.cls.item)) return;
      if (!evt.relatedTarget.classList.contains(this.cls.itemMoved)) return;

      this.moveItem(item);

    });

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
