import { AbstractView } from "../../helpers/abstract-view.js";

const template = require("./about.pug");
const getAboutTemplate = () => template();

export class AboutView extends AbstractView {

  getTemplate () {

    return getAboutTemplate();

  }

}
