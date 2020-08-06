const initialTextParam = 't';

const helper = {
  getParameter: (name) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  },

  getInitialTextFromUrl: () => helper.getParameter(initialTextParam),
};

export default helper;
