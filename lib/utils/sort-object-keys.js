module.exports = function sortObjectKeys(o = {}) {
  return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}
