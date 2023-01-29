export class GalleryModel {

  constructor () {

    this.data = null;
    this.filters = null;
    this.pictures = null;

  }

  setData () {

    this.data = require("./gallery.json");
    this.filters = this.data.filters;
    this.pictures = this.data.pictures;

  }

}
