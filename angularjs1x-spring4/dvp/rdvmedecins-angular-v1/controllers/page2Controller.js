/**
 * Created by ST on 26/06/2014.
 */
// contrôleur
angular.module("rdvmedecins")
  .controller('page2Ctrl', ['$scope', '$location',
    function ($scope, $location) {
      // navigation autorisée ?
      var main = $scope.main;
      if (main.lastUrl && main.lastUrl != '/page1') {
        // on revient à la dernière URL
        $location.path(main.lastUrl);
        return;
      }
      // on mémorise l'URL de la page
      main.lastUrl = '/page2';

      // modèle de la page
      var page2 = $scope.page2;
      page2.text = "[Modèle local dans page 2]";
    }]);
