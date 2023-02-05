export const fontLoadedListener = (element, callback) => {

  const interval = setInterval(() => {

    const hasLoaded = document.fonts.check("16px 'Montserrat'");

    if (hasLoaded) {

      console.log("the font was loaded");
      clearInterval(interval);
      callback();

      return;

    }

    console.log("the font wasn't loaded");

  }, 100);

};
