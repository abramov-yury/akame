export class IntroModel {

  constructor () {

    this.data = null;

    this.setData();

  }

  setData () {

    this.data = require("./intro.json");

  }

  getPictures () {

    return this.data.pictures;

  }

}
