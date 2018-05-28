var search = {
  templateUrl: './searchForm.html',
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
    $urlRouterProvider.otherwise('search');
  });
