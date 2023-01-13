export class IntroModel {

  constructor () {

    this.data = null;

  }

  setData () {

    this.data = require("./intro.json");

  }

  getData () {

    return this.data;

  }

}
