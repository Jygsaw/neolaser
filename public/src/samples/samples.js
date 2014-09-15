angular.module('neolaser.samples', [])
.config(function($stateProvider) {
  $stateProvider.state('samples', {
    url: '/samples',
    templateUrl: 'src/samples/samples.html',
  });
});
