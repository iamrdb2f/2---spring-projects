/**
 * Created by ST on 26/06/2014.
 */
// contrôleur
angular.module("rdvmedecins")
  .controller('page1Ctrl', ['$scope', '$location',
    function ($scope, $location) {
      // navigation autorisée ?
      var main = $scope.main;
      if (main.lastUrl && main.lastUrl != '/page3') {
        // on revient à la dernière URL
        $location.path(main.lastUrl);
        return;
      }
      // on mémorise l'URL de la page
      main.lastUrl = '/page1';
      // modèle de la page
      var page1 = $scope.page1;
      page1.text = "[Modèle local dans page 1]";
    }]);
