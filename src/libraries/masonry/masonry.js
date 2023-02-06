/**
 * For this library to work, each child element of the "masonry" block must have data-ratio attributes.
 * The data-ratio attribute is the ratio of the height to the width of the image that should be in the child element of the "masonry" block.
 */

import { debounce } from "../../helpers/debounce.js";

const defaultSettings = {
  0: {
    columns: 1,
    gap: 12,
  },
  576: {
    columns: 2,
    gap: 12,
  },
  768: {
    columns: 3,
    gap: 16,
  },
  1200: {
    columns: 4,
    gap: 20,
  },
};

export class Masonry {

  constructor (container, settings = defaultSettings) {

    this.container = container;
    this.settings = settings;
    this.children = Array.from(this.container.children);
    this.options = {};
    this.childrenData = [];
    this.settingsSizes = [];
    this.debonceResize = null;

    this.setClassNames();
    this.setSettingsSizes();
    this.setParameters();

    this.setParameters = this.setParameters.bind(this);

    this.setHandlers();
    this.activeMasonryLayout();

  }

  setClassNames () {

    this.container.classList.add("masonry");
    this.children.forEach((item) => item.classList.add("masonry__item"));

  }

  setHandlers () {

    this.debonceResize = debounce(this.setParameters, 100);
    window.addEventListener("resize", this.debonceResize);

  }

  setSettingsSizes () {

    this.settingsSizes = Object.keys(this.settings)
      .map((item) => Number(item))
      .sort((a, b) => a - b);

  }

  remove () {

    window.removeEventListener("resize", this.debonceResize);
    this.container.classList.remove("masonry--active");

  }

  setParameters () {

    this.childrenData = this.children.map((item) => ({ element: item }));

    const containerWidth = this.container.offsetWidth;
    this.setCurrentOptions();

    const itemWidth = (containerWidth - (this.options.gap * (this.options.columns - 1))) / this.options.columns;
    this.setItemValues(itemWidth);

    this.setSizeContainer();
    this.setPosition(itemWidth);

  }

  setCurrentOptions () {

    let currentSize = null;

    this.settingsSizes.forEach((item) => {

      if (window.screen.availWidth >= item) {

        currentSize = item;

      }

    });

    this.options.columns = this.settings[currentSize].columns;
    this.options.gap = this.settings[currentSize].gap;

  }

  setItemValues (width) {

    const setItemHeight = (ratio) => {

      const factor = Number(ratio) < 1 ? (Math.random() * .5) + 1 : Number(ratio);
      return Math.round(factor * width);

    };

    this.childrenData.forEach((item) => {

      item.width = width;
      item.height = setItemHeight(item.element.dataset.ratio, width); // !!!
      item.element.style.width = `${width}px`;
      item.element.style.height = `${item.height}px`;

    });

  }

  setSizeContainer () {

    const columnsHeight = new Array(this.options.columns).fill(0);

    this.childrenData.forEach((item, index) => {

      columnsHeight[index % this.options.columns] += item.height + this.options.gap;

    });

    const maxColumnsHeight = columnsHeight.reduce((acc, size) => ((size > acc) ? size : acc));
    this.container.style.height = `${maxColumnsHeight - this.options.gap}px`;

  }

  setPosition (width) {

    const topSets = new Array(this.options.columns).fill(0);

    this.childrenData = this.childrenData.map((item, index) => {

      const indexColumn = index % this.options.columns;
      const left = (indexColumn * width) + (this.options.gap * indexColumn);
      const top = topSets[indexColumn];
      topSets[indexColumn] += item.height + this.options.gap;

      return {
        ...item,
        top,
        left,
      };

    });

    this.childrenData.forEach((item) => {

      item.element.style.transform = `translate3d(${item.left}px, ${item.top}px, 0)`;

    });

  }

  activeMasonryLayout () {

    this.container.classList.add("masonry--active");

  }

}
