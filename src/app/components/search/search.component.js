var search = {
  templateUrl: './search.html',
  controller: 'searchController'
};

angular
  .module('components.search')
  .component('search', search)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        component: 'search'
      });
      // .state('auth.login', {
      //   url: '/login',
      //   component: 'login'
      // });
    $urlRouterProvider.otherwise('/search');
  });
