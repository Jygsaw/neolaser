angular.module('neolaser.factories', [
])
.factory('sampleDB', function() {
  var getAllSamples = function() {
    return [{
      id: '999999999',
      test: 'corrosion coupon',
    }];
  };

  return {
    getAllSamples: getAllSamples,
  };
});