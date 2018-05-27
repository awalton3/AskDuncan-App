function SearchController() {

  var ctrl = this;

  //
  // ctrl.$onChanges = function (changes) {
  //   if (changes.searchInput) {
  //     ctrl.searchInput = angular.copy(ctrl.searchInput);
  //   }
  //   return ctrl.searchInput;
  // };

  ctrl.submitKeyword = function () {
    console.log(ctrl.searchInput);
    //   .navParse(ctrl.searchInput)
    //SearchService(ctrl.searchInput);
  };

  // ctrl.search = function (ctrl.searchInput) {
  //   return SearchService;
  // }
  //
  // search();

}

angular
  .module('components.search')
  .controller('SearchController', SearchController);
