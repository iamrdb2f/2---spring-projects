/**
 * Created by ST on 26/06/2014.
 */
// contrôleur
angular.module("rdvmedecins")
  .controller('mainCtrl', ['$scope', '$location',
    function ($scope, $location) {

      // modèles des pages
      $scope.page1 = {};
      $scope.page2 = {};
      $scope.page3 = {};
      // modèle global
      var main = $scope.main = {};
      main.text = "[Modèle global]";

      // méthodes exposées à la vue
      main.showPage1 = function () {
        $location.path("/page1");
      };
      main.showPage2 = function () {
        $location.path("/page2");
      };
      main.showPage3 = function () {
        $location.path("/page3");
      }
    }]);
