import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./skill.pug");
const getSkillTemplate = (obj) => template(obj);

export class SkillView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

    this.count();

  }

  getTemplate () {

    return getSkillTemplate(this.options);

  }

  getSkillValue () {

    return this.getElement().querySelector(".skill__value");

  }

  count () {

    let counter = 0;
    const { duration } = this.getSkillValue().dataset;
    const delay = 1000 * duration / 100;

    const interval = setInterval(() => {

      if (counter >= this.options.value) clearInterval(interval);
      this.getSkillValue().innerText = `${counter}%`;
      counter += 1;

    }, delay);

  }

}
