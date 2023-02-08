import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./about.pug");
const getAboutTemplate = (obj) => template(obj);

export class AboutView extends AbstractView {

  constructor (options) {

    super();

    this.options = options;

  }

  getTemplate () {

    return getAboutTemplate(this.options);

  }

  getSkillsWrapper () {

    return this.getElement().querySelector(".about__skills-wrapper");

  }

}
