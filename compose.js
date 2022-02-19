// const add = ;
// const divide = ;
// const multiply = ;
// const compose = ;

module.exports = function start() {
  return compose(divide(2), add(2), multiply(3))(8);
};
