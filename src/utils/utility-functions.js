const getHeaderIdFromInnerText = (innerText) => {
  let str = innerText.toLowerCase();
  str = str.replace(/ /g, '');
  return str;
};

export { getHeaderIdFromInnerText };
