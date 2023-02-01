export const throttle = (callback, timeout) => {

  let timer = null;

  return function (...args) {

    if (timer) return;

    timer = setTimeout(() => {

      callback.apply(this, args);

      clearTimeout(timer);
      timer = null;

    }, timeout);

  };

};
