const maxCapacity = 10;
const localStorageKey = 'history';

const removeDuplicate = (history, item) => {
  const i = history.indexOf(item);
  if (i > -1) {
    history.splice(i, 1);
  }
  return history;
};

const addFirst = (history, item) => {
  history.splice(0, 0, item);
  return history;
};

const trimToMaxCapacity = (history) => history.slice(0, maxCapacity);

const helper = {
  getHistory: () => {
    const history = localStorage.getItem(localStorageKey);
    return history ? JSON.parse(history) : [];
  },

  pushToHistory: (value) => {
    let history = helper.getHistory();
    history = removeDuplicate(history, value);
    history = addFirst(history, value);
    history = trimToMaxCapacity(history);
    localStorage.setItem(localStorageKey, JSON.stringify(history));
  },

  clearHistory: () => {
    localStorage.removeItem(localStorageKey);
  },
};

export default helper;
