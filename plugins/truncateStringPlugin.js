// plugins/truncateStringPlugin.js

export default (context, inject) => {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  inject('truncateString', truncateString);
};
