function SearchController() {

  var ctrl = this;

  ctrl.submit = function () {

    console.log("Success");

  }

  submit();

  //
  // ctrl.$onChanges = function (changes) {
  //   if (changes.searchInput) {
  //     ctrl.searchInput = angular.copy(ctrl.searchInput);
  //   }
  // };
  //
  // ctrl.search = function (ctrl.searchInput) {
  //   return SearchService;
  // }
  //
  // search();

}

angular
  .module('components.search')
  .controller('SearchController', SearchController);
