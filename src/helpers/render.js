export const RenderPosition = {
  PREPEND: "prepend",
  APPEND: "append",
  BEFORE: "before",
  AFTER: "after",
};

export const render = (container, element, place = RenderPosition.APPEND) => {

  switch (place) {

  case RenderPosition.BEFORE:
    container.before(element);
    break;
  case RenderPosition.PREPEND:
    container.prepend(element);
    break;
  case RenderPosition.AFTER:
    container.after(element);
    break;
  case RenderPosition.APPEND:
  default:
    container.append(element);

  }

};
