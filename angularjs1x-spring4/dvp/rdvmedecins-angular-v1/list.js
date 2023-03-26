/**
 * Created by ST on 06/05/2014.
 */
angular.module("rdvmedecins")
  .directive("list", ['utils', '$timeout', function (utils, $timeout) {
    // instance de la directive retournée
    return {
      // élément HTML
      restrict: "E",
      // url du fragment
      templateUrl: "list.html",
      // scope unique à chaque instance de la directive
      scope: true,
      // fonction lien avec le document
      link: function (scope, element, attrs) {
        utils.debug("directive list attrs", attrs);
        scope.model = scope[attrs['model']];
        utils.debug("directive list model", scope.model);
        $timeout(function () {
          $('#' + scope.model.id).selectpicker();
        })
      }
    }
  }]);