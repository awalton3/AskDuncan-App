var searchResults = {
  templateUrl: './searchResults.html',
  controller: 'SearchResultsController'
};

angular
  .module('components.search')
  .component('searchResults', searchResults)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('searchResults', {
        parent: 'search',
        url: '/results',
        component: 'searchResults'
      });
  // $urlRouterProvider.otherwise('search');
  });
