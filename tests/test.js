const mochaPytest = require('mocha-pytest');

describe('Python Tests', () => {
  mochaPytest('tests/*.py');
});