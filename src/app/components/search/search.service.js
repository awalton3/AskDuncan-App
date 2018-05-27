// function SearchService (Parse, moment, $filter, $scope, searchInput) {
//
//   // PARSE QUERY to get data
//   var Keyword = Parse.Object.extend("Keyword")
//   var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse
//
//   // Including pointers
//   query.include("hours")
//   query.include("floorImage")
//
//   // keyword has to be equal to inputted keyword by the user
//   query.equalTo("keyword", searchInput);
//
//   query.first().then(function(result){
//
//       // Converting Parse objects to readable angular objects
//       Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
//       Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
//       Parse.defineAttributes(result.floorImage, ['floorImage']);
//
//       // Calls Moment - Time library
//       $scope.startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS'); // $scope - accessible on the view
//       $scope.endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS'); // $scope - accessible on the view
//
//       $scope.result = result; // Makes results accessible on the view
//       console.log(result);
//       result.keyword = duncanService.searchInput;
//
// };
//
// angular
//   .module('components.search')
//   .service('SearchService', SearchService);
