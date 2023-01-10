export class IntroModel {

  constructor () {

    this.data = require("./intro.json");

  }

  getPictures () {

    return this.data.pictures;

  }

}
