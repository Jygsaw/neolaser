angular.module('neolaser.dashboard', [])
.config(function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'src/dashboard/dashboard.html',
  });
});
