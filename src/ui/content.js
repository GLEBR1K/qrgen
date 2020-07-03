import urlHelper from '../helpers/url';

const content = document.getElementById('content');

content.setValue = (val) => {
  content.value = val;
};

content.init = () => {
  const text = urlHelper.getInitialTextFromUrl();
  content.setValue(text);
};

export default content;
