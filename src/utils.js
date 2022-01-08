'use strict';

function createMap(values, ignoreCase) {
  const map = {};
  for (const value of values) {
    map[value] = 1;
  }

  return ignoreCase ?
    value => map[value.toLowerCase()] === 1 :
    value => map[value] === 1;
}

exports.createMap = createMap;
exports.createMapFromString = (values, ignoreCase) => {
  return createMap(values.split(/,/), ignoreCase);
};
