export class BlogModel {

  constructor () {

    this.data = null;

  }

  setData () {

    this.data =  require("./blog.json");

  }

  getData () {

    return this.data;

  }

}
