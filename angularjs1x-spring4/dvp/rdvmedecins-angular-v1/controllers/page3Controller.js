/**
 * Created by ST on 26/06/2014.
 */
// contrôleur
angular.module("rdvmedecins")
  .controller('page3Ctrl', ['$scope', '$location',
    function ($scope, $location) {
      // navigation autorisée ?
      var main = $scope.main;
      if (main.lastUrl && main.lastUrl != '/page2') {
        // on revient à la dernière URL
        $location.path(main.lastUrl);
        return;
      }
      // on mémorise l'URL de la page
      main.lastUrl = '/page3';

      // modèle de la page
      var page3 = $scope.page3;
      page3.text = "[Modèle local dans page 3]";
    }]);
