export class GalleryModel {

  constructor () {

    this.data = null;

  }

  setData () {

    this.data = require("./gallery.json");

  }

  getData () {

    return this.data;

  }

}
