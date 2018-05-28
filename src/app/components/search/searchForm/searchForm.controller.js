function SearchController(SearchService) {

  var ctrl = this;

  ctrl.submitKeyword = function() {
    console.log(ctrl.searchInput)
    return SearchService
      .navParse(ctrl.searchInput)
  };

}

angular
  .module('components.search')
  .controller('SearchController', SearchController);
