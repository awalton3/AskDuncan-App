function SearchService(Parse) {

  // PARSE QUERY to get data
  var Keyword = Parse.Object.extend("Keyword")
  var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse
  var ctrl = this;

  ctrl.searchResult = {};

  // Including pointers
  query.include("hours")
  query.include("floorImage")

  //Function grabs data for searched keyword
  ctrl.navParse = function(searchInput) {
    query.equalTo("keyword", searchInput)
    query.first().then(function(result) {

      // Converting Parse objects to readable angular objects
      Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
      Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
      Parse.defineAttributes(result.floorImage, ['floorImage']);

      // Calls Moment - Time library
      ctrl.startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS');
      ctrl.endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS');

      //searchResult made accessible to the view
      ctrl.searchResult = result;
      console.log(ctrl.searchResult);
      return ctrl.searchResult
    })
  }
};

// class SearchService {
//
//   constructor() {
//     this.searchResult = {};
//     this.Parse = Parse;
//     this.Keyword = this.Parse.Object.extend("Keyword")
//     this.query = new this.Parse.Query(Keyword) // Targets "Keyword" class in Parse
//   }
//
//   // PARSE QUERY to get data
// //  var Keyword = this.Parse.Object.extend("Keyword")
// //  var query = new this.Parse.Query(Keyword) // Targets "Keyword" class in Parse
//
//   // Including pointers
//   this.query.include("hours")
//   this.query.include("floorImage")
//
//   //Function grabs data for searched keyword
//   this.navParse = function(searchInput) {
//     this.query.equalTo("keyword", searchInput)
//     this.query.first().then(function(result) {
//
//       // Converting Parse objects to readable angular objects
//       this.Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
//       this.Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
//       this.Parse.defineAttributes(result.floorImage, ['floorImage']);
//
//       // Calls Moment - Time library
//       var startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS');
//       var endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS');
//       console.log(result); //works
//       this.searchResult = result;
//       console.log(this.searchResult); //doesn't work
//     })
//   }
//
// };
//
angular
  .module('components.search')
  .service('SearchService', SearchService);
