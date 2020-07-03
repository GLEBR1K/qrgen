const initialTextParam = 't';

const getParameter = (name) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
};

const getInitialTextFromUrl = () => getParameter(initialTextParam);

export default {
  getParameter,
  getInitialTextFromUrl,
};
