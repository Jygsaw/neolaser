angular.module('neolaser', [
  'ui.router',
  'neolaser.factories',
  'neolaser.dashboard',
  'neolaser.samples',
])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('neolaser', {
    url: '/',
    template: '<h1>WELCOME TO NEO LASER</h1>',
  });
});
