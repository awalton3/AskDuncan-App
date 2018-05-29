function SearchController(SearchService, $state) {

  var ctrl = this;

  ctrl.submitKeyword = function() {
    console.log(ctrl.searchInput)
    return SearchService
      .navParse(ctrl.searchInput)
  };

  ctrl.navResult = function() {
    console.log("success!");
    $state.go('searchResults');
  };

}

angular
  .module('components.search')
  .controller('SearchController', SearchController);
