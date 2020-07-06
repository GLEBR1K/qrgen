const appName = 'qrgen';

const helper = {
  setSubtitle: (subtitle) => {
    document.title = `${appName} • ${subtitle}`;
  },
};

export default helper;
