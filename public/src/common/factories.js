angular.module('neolaser.factories', [
])
.factory('SampleDB', function() {
  var getAllSamples = function() {
    return [
      {
        id: '900000001',
        test: 'corrosion coupon',
        comments: 'blah',
      },
      {
        id: '900000002',
        test: 'corrosion coupon',
        comments: 'blah',
      },
      {
        id: '900000003',
        test: 'corrosion coupon',
        comments: 'blah',
      },
      {
        id: '900000004',
        test: 'corrosion coupon',
        comments: 'blah',
      },
      {
        id: '900000005',
        test: 'corrosion coupon',
        comments: 'blah',
      },
    ];
  };

  return {
    getAllSamples: getAllSamples,
  };
});
