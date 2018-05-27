var search = {
  templateUrl: './search.html',
  controller: 'SearchController'
};

angular
  .module('components.search')
  .component('search', search)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        parent: 'app',
        url: 'search',
        component: 'search'
      });
      // .state('auth.login', {
      //   url: '/login',
      //   component: 'login'
      // });
    $urlRouterProvider.otherwise('search');
  });
