/**
 * Created by ST on 19/06/2014.
 */

  // --------------------- module Angular
angular.module("rdvmedecins", ['ui.bootstrap', 'ngLocale', 'pascalprecht.translate']);
// configuration initiale
angular.module("rdvmedecins")
  .config(['$translateProvider', function ($translateProvider) {
    // messages français
    $translateProvider.translations("fr", {
      'msg_header': 'Cabinet Médical<br/>Les Médecins Associés',
      'msg_langues': 'Langues',
      'msg_agenda': 'Agenda de {{titre}} {{prenom}} {{nom}}<br/>le {{jour}}',
      'msg_calendrier': 'Calendrier',
      'msg_jour': 'Jour sélectionné : ',
      'msg_meteo': "Aujourd'hui, il va pleuvoir..."
    });
    // messages anglais
    $translateProvider.translations("en", {
      'msg_header': 'The Associated Doctors',
      'msg_langues': 'Languages',
      'msg_agenda': "{{titre}} {{prenom}} {{nom}}'s Diary<br/> on {{jour}}",
      'msg_calendrier': 'Calendar',
      'msg_jour': 'Selected day: ',
      'msg_meteo': 'Today, it will be raining...'
    });
    // langue par défaut
    $translateProvider.preferredLanguage("fr");
  }]);
// contrôleur
angular.module("rdvmedecins")
  .controller('rdvMedecinsCtrl', ['$scope', '$locale', '$translate', '$filter',
    function ($scope, $locale, $translate, $filter) {
      // ------------------- initialisation modèle
      // date minimale
      $scope.minDate = new Date();
      // locales
      var locales = {
        fr: {
          "DATETIME_FORMATS": {
            "AMPMS": [
              "AM",
              "PM"
            ],
            "DAY": [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi"
            ],
            "MONTH": [
              "janvier",
              "f\u00e9vrier",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "ao\u00fbt",
              "septembre",
              "octobre",
              "novembre",
              "d\u00e9cembre"
            ],
            "SHORTDAY": [
              "dim.",
              "lun.",
              "mar.",
              "mer.",
              "jeu.",
              "ven.",
              "sam."
            ],
            "SHORTMONTH": [
              "janv.",
              "f\u00e9vr.",
              "mars",
              "avr.",
              "mai",
              "juin",
              "juil.",
              "ao\u00fbt",
              "sept.",
              "oct.",
              "nov.",
              "d\u00e9c."
            ],
            "fullDate": "EEEE d MMMM y",
            "longDate": "d MMMM y",
            "medium": "d MMM y HH:mm:ss",
            "mediumDate": "d MMM y",
            "mediumTime": "HH:mm:ss",
            "short": "dd/MM/yy HH:mm",
            "shortDate": "dd/MM/yy",
            "shortTime": "HH:mm"
          },
          "NUMBER_FORMATS": {
            "CURRENCY_SYM": "\u20ac",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": "\u00a0",
            "PATTERNS": [
              {
                "gSize": 3,
                "lgSize": 3,
                "macFrac": 0,
                "maxFrac": 3,
                "minFrac": 0,
                "minInt": 1,
                "negPre": "-",
                "negSuf": "",
                "posPre": "",
                "posSuf": ""
              },
              {
                "gSize": 3,
                "lgSize": 3,
                "macFrac": 0,
                "maxFrac": 2,
                "minFrac": 2,
                "minInt": 1,
                "negPre": "(",
                "negSuf": "\u00a0\u00a4)",
                "posPre": "",
                "posSuf": "\u00a0\u00a4"
              }
            ]
          },
          "id": "fr-fr",
          "pluralCat": function (n) {
            if (n >= 0 && n <= 2 && n != 2) {
              return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
          }
        },
        en: {
          "DATETIME_FORMATS": {
            "AMPMS": [
              "AM",
              "PM"
            ],
            "DAY": [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "MONTH": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            "SHORTDAY": [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat"
            ],
            "SHORTMONTH": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "fullDate": "EEEE, MMMM d, y",
            "longDate": "MMMM d, y",
            "medium": "MMM d, y h:mm:ss a",
            "mediumDate": "MMM d, y",
            "mediumTime": "h:mm:ss a",
            "short": "M/d/yy h:mm a",
            "shortDate": "M/d/yy",
            "shortTime": "h:mm a"
          },
          "NUMBER_FORMATS": {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ".",
            "GROUP_SEP": ",",
            "PATTERNS": [
              {
                "gSize": 3,
                "lgSize": 3,
                "macFrac": 0,
                "maxFrac": 3,
                "minFrac": 0,
                "minInt": 1,
                "negPre": "-",
                "negSuf": "",
                "posPre": "",
                "posSuf": ""
              },
              {
                "gSize": 3,
                "lgSize": 3,
                "macFrac": 0,
                "maxFrac": 2,
                "minFrac": 2,
                "minInt": 1,
                "negPre": "(\u00a4",
                "negSuf": ")",
                "posPre": "\u00a4",
                "posSuf": ""
              }
            ]
          },
          "id": "en-us",
          "pluralCat": function (n) {
            if (n == 1) {
              return PLURAL_CATEGORY.ONE;
            }
            return PLURAL_CATEGORY.OTHER;
          }
        }};
      // on met par défaut le calendrier en français
      angular.copy(locales['fr'], $locale);
      // date d'aujourd'hui
      $scope.jour = new Date();
      // un texte à traduire
      $scope.msg = {'text': 'msg_agenda', 'model': {'titre': 'Mme', 'prenom': 'Laure', 'nom': 'PELISSIER', 'jour': $filter('date')($scope.jour, 'fullDate')}};
      // un autre texte à traduire
      $scope.msg2 = $filter('translate')('msg_meteo');

      // ------------------- gestionnaire d'evts
      // changement de langue
      $scope.setLang = function (lang) {
        // on change la locale
        angular.copy(locales[lang], $locale);
        // on met à jour le jour affiché pour forcer le calendrier à changer de locale
        $scope.jour = new Date($scope.jour.getTime());
        // on ferme la liste déroulante
        $scope.isopen = false;
        // on change la langue de traduction
        $translate.use(lang);
        // on met à jour msg2
        $scope.msg2 = $filter('translate')('msg_meteo');
        // et le jour de msg
        $scope.msg.model.jour = $filter('date')($scope.jour, 'fullDate');
      };

      // changement de jour dans le calendrier
      $scope.calendarClick = function () {
        // modification du jour affiché
        $scope.msg.model.jour = $filter('date')($scope.jour, 'fullDate');
      }
    }]);
