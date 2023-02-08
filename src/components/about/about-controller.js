import { render } from "../../helpers/render.js";

import { AboutView } from "./about-view.js";

import { SkillController } from "../skill/skill-controller.js";

const data = require("./about.json");

export class AboutController {

  constructor (container) {

    this.cotainer = container;
    this.view = null;

  }

  initiate () {

    this.view = new AboutView();
    render(this.cotainer, this.view.getElement());

    this.renderSkills();

  }

  renderSkills () {

    data.skills.forEach((item) => this.renderSkill(item));

  }

  renderSkill (obj) {

    const skill = new SkillController(this.view.getSkillsWrapper(), obj);
    skill.initiate();

  }

}
