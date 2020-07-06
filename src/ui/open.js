const open = document.getElementById('open');

open.setContentToOpen = (url) => {
  open.setAttribute('href', url);
};

export default open;
