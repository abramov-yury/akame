import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./skill.pug");
const getSkillTemplate = (obj) => template(obj);

export class SkillView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;
    this.getSkillValue = this.getSkillValue.bind(this);

    this.count(this.getSkillValue, this.options.value);

  }

  getTemplate () {

    return getSkillTemplate(this.options);

  }

  getSkillValue () {

    return this.getElement().querySelector(".skill__value");

  }

  count (callback, value) {

    let counter = 0;
    setTimeout(function tick () {

      if (counter <= value) {

        callback().innerText = `${counter}%`;
        setTimeout(tick, 15);

      }

      counter += 1;

    }, 15);

  }

}
