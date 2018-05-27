  angular
    .module('components.search', [
      'ui.router',
      //'ngParse'
    ]);
    // .config(function (ParseProvider) {
    //
    //     var MY_PARSE_APP_ID = 'dMTmXzxnwbeMe9iyK4vivUqoCdQSq5XJGf3LGHOq';
    //     var MY_PARSE_JS_KEY = 'kAMpM6libZXYPBNa6gl20X09BiqjURQhUrsKoSlX';
    //     ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
    //     ParseProvider.serverURL = 'https://parseapi.back4app.com/';
    //
    //   })
    //
    // .run(function () {
    //   // $transitions.onStart({
    //   //   to: function (state) {
    //   //     return !!(state.data && state.data.requiredAuth);
    //   //   }
    //   // }, function() {
    //   //   return AuthService
    //   //     .requireAuthentication()
    //   //     .catch(function () {
    //   //       return $state.target('auth.login');
    //   //     });
    //   // });
    //   // $transitions.onStart({
    //   //   to: 'auth.*'
    //   // }, function () {
    //   //   if (AuthService.isAuthenticated()) {
    //   //     return $state.target('app');
    //   //   }
    //   // });
    // });
