/**
 * Created by ST on 26/06/2014.
 */

// --------------------- module Angular
angular.module("rdvmedecins", [ 'ngRoute' ]);

angular.module("rdvmedecins").config(["$routeProvider", function ($routeProvider) {
// ------------------------ routage
  $routeProvider.when("/page1",
    {
      templateUrl: "views/page1.html",
      controller: 'page1Ctrl'
    });
  $routeProvider.when("/page2",
    {
      templateUrl: "views/page2.html",
      controller: 'page2Ctrl'
    });
  $routeProvider.when("/page3",
    {
      templateUrl: "views/page3.html",
      controller: 'page3Ctrl'
    });
  $routeProvider.otherwise(
    {
      redirectTo: "/page1"
    });
}]);
