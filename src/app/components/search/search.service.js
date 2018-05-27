function SearchService(Parse) {

  // PARSE QUERY to get data
  var Keyword = Parse.Object.extend("Keyword")
  var query = new Parse.Query(Keyword) // Targets "Keyword" class in Parse

  // Including pointers
  query.include("hours")
  query.include("floorImage")

  //Function grabs data for searched keyword
  this.navParse = function(searchInput) {
    query.equalTo("keyword", searchInput)
    query.first().then(function(result) {

      // Converting Parse objects to readable angular objects
      Parse.defineAttributes(result, ['keyword', 'roomNumber', 'floorNumber', 'hours', 'floorImage']);
      Parse.defineAttributes(result.hours, ['startTime', 'endTime']);
      Parse.defineAttributes(result.floorImage, ['floorImage']);

      // Calls Moment - Time library
      var startTime = moment(result.hours.startTime).add(5, 'hours').format('LTS');
      var endTime = moment(result.hours.endTime).add(5, 'hours').format('LTS');

      console.log(result);
      console.log(startTime, endTime);
    })
  }
};

angular
  .module('components.search')
  .service('SearchService', SearchService);
