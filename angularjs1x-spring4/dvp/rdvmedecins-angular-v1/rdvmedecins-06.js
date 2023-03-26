/**
 * Created by ST on 19/06/2014.
 */

// --------------------- module Angular
angular.module("rdvmedecins", [ 'pascalprecht.translate', 'base64', 'ngLocale', 'ui.bootstrap' ]);

// configuration initiale
angular
  .module("rdvmedecins")
  .config(['$translateProvider', function ($translateProvider) {
    // messages français
    $translateProvider.translations("fr",
      {
        msg_header: 'Cabinet Médical<br/>Les Médecins Associés',
        msg_langues: 'Langues',
        msg_agenda: 'Agenda de {{titre}} {{prenom}} {{nom}}<br/>le {{jour}}',
        msg_calendrier: 'Calendrier',
        msg_jour: 'Jour sélectionné : ',
        msg_meteo: "Aujourd'hui, il va pleuvoir...",
        msg_cancel: 'Annuler',
        msg_waiting: 'Opération en cours. Patientez...',
        msg_waiting_time_text: "Temps d'attente : ",
        msg_list_medecins: "Liste des médecins",
        msg_list_clients: "Liste des clients",
        msg_urlserver_label: "URL du service web : ",
        msg_login_label: "Login : ",
        msg_password_label: 'Mot de passe : ',
        error_unknown: "Erreur non identifiée",
        not_authorized: "Erreur d'authentification",
        server_not_available: "Serveur indisponible",
        msg_get_medecins_errors: "Les erreurs suivantes se sont produites lors du chargement de la liste des médecins",
        msg_get_clients_errors: "Les erreurs suivantes se sont produites lors du chargement de la liste des clients",
        forbidden: "Accès refusé",
        not_http_error: "L'accès au serveur n'a pu être réalisé. Vérifiez sa disponibilité.",
        server_url: "URL du serveur",
        not_found: "Document non trouvé. Vérifiez l'URL du serveur",
        msg_get_agenda_title: 'Agenda',
        msg_jour_title: 'Jour',
        msg_get_agenda_errors: "Les erreurs suivantes se sont produites lors de la demande de l'agenda",
        agenda_medecinsanscreneaux: "Ce médecin n'a pas encore de créneaux de consultation",
        agenda_client: "Client",
        agenda_action: "Action",
        agenda_reserver: "Réserver",
        agenda_supprimer: "Supprimer",
        agenda_creneauhoraire: "Créneau horaire"
      });
    // messages anglais
    $translateProvider.translations("en",
      {
        msg_header: 'The Associated Doctors',
        msg_langues: 'Languages',
        msg_agenda: "{{titre}} {{prenom}} {{nom}}'s Diary<br/> on {{jour}}",
        msg_calendrier: 'Calendar',
        msg_jour: 'Selected day: ',
        msg_meteo: 'Today, it will be raining...',
        msg_cancel: 'Cancel',
        msg_waiting: 'Opération in progress. Please wait...',
        msg_waiting_time_text: "Waiting time:",
        msg_list_medecins: "Doctors' list",
        msg_list_clients: "Clients' list",
        msg_urlserver_label: "Web service URL:",
        msg_login_label: "Login:",
        msg_password_label: 'Password:',
        error_unknown: "Unknown error",
        not_authorized: "Authentification failure",
        server_not_available: "Unavailable server",
        msg_get_medecins_errors: "Following errors were met while loading the list of doctors.",
        msg_get_clients_errors: "Following errors were met while loading the list of clients.",
        forbidden: "Access denied",
        not_http_error: "Server access could not be achieved. Check its availability.",
        server_url: "Server URL",
        not_found: "DocumDocument not found. Check the server URL",
        msg_get_agenda_title: 'Diary',
        msg_get_jour_title: 'Day',
        msg_get_agenda_errors: "Following errors were met while loading the diary.",
        agenda_medecinsanscreneaux: "This doctor has for the moment no time slot for appointments",
        agenda_client: "Client",
        agenda_action: "Action",
        agenda_reserver: "Add",
        agenda_supprimer: "Remove",
        agenda_creneauhoraire: "Time slot"
      });
    // langue par défaut
    $translateProvider.preferredLanguage("fr");
  } ]);

// services
angular.module("rdvmedecins").factory('config', function () {
  return {
    // messages à internationaliser
    msgWaitingInit: "msg_waiting_init",
    msgWaiting: "msg_waiting",
    loadingError: 'loading_error',
    canceledOperation: 'canceled_operation',
    selectMedecin: 'select_medecin',
    identification: 'identification',
    choixMedecinJourTitle: 'choixmedecinjour_title',
    agendaTitre: 'agenda_titre',
    selectClient: 'select_client',
    postRemoveErrors: 'post_remove_errors',
    resaTitre: 'resa_titre',
    chooseAClient: 'choose_a_client',
    postResaErrors: 'post_resa_errors',
    waitingTimeText: 'msg_waiting_time_text',
    listMedecins: 'msg_list_medecins',
    listClients: 'msg_list_clients',
    urlServerLabel: 'msg_urlserver_label',
    loginLabel: 'msg_login_label',
    passwordLabel: 'msg_password_label',
    getMedecinsErrors: 'msg_get_medecins_errors',
    getClientsErrors: 'msg_get_clients_errors',
    getAgendaTitle: 'msg_get_agenda_title',
    getAgendaErrors: 'msg_get_agenda_errors',
    getCalendarTitle: 'msg_jour_title',
    // urls du client
    urlLogin: "/login",
    urlHome: "/home",
    urlAgenda: "/agenda",
    urlResa: "/resa",
    // urls du serveur
    urlSvrMedecins: "/getAllMedecins",
    urlSvrClients: "/getAllClients",
    urlSvrAgenda: "/getAgendaMedecinJour",
    urlSvrResa: "/reserver",
    urlSvrResaAdd: "/ajouterRv",
    urlSvrResaRemove: "/supprimerRv",
    // délai d'attente maximal pour les appels http en millisecondes
    timeout: 1000,
    // temps d'attente avant une tâche
    waitingTimeBeforeTask: 3000,
    // mode debug
    debug: true,
    // le dictionnaire des locales
    locales: {
      fr: {
        "DATETIME_FORMATS": {
          "AMPMS": [ "AM", "PM" ],
          "DAY": [ "dimanche", "lundi", "mardi", "mercredi",
            "jeudi", "vendredi", "samedi" ],
          "MONTH": [ "janvier", "f\u00e9vrier", "mars",
            "avril", "mai", "juin", "juillet",
            "ao\u00fbt", "septembre", "octobre",
            "novembre", "d\u00e9cembre" ],
          "SHORTDAY": [ "dim.", "lun.", "mar.", "mer.",
            "jeu.", "ven.", "sam." ],
          "SHORTMONTH": [ "janv.", "f\u00e9vr.", "mars",
            "avr.", "mai", "juin", "juil.",
            "ao\u00fbt", "sept.", "oct.", "nov.",
            "d\u00e9c." ],
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
          "AMPMS": [ "AM", "PM" ],
          "DAY": [ "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday",
            "Saturday" ],
          "MONTH": [ "January", "February", "March",
            "April", "May", "June", "July", "August",
            "September", "October", "November",
            "December" ],
          "SHORTDAY": [ "Sun", "Mon", "Tue", "Wed", "Thu",
            "Fri", "Sat" ],
          "SHORTMONTH": [ "Jan", "Feb", "Mar", "Apr", "May",
            "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
            "Dec" ],
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
      }
    }
  };
});

angular.module("rdvmedecins")
  .factory('utils', ['config', '$timeout', '$q', function (config, $timeout, $q) {
    // affichage de la représentation Json d'un objet
    function debug(message, data) {
      if (config.debug) {
        var text = data ? message + " : " + angular.toJson(data) : message;
        console.log(text);
      }
    }

    // attente
    function waitForSomeTime(milliseconds) {
      // attente asynchrone de milliseconds milli-secondes
      var task = $q.defer();
      $timeout(function () {
        task.resolve();
      }, milliseconds);
      // on retourne la tâche
      return task;
    }

    // analyse des erreurs dans la réponse du serveur JSON
    function getErrors(data, $filter) {
      // data {err:n, messages:[]}, err!=0
      // erreurs
      var errors = [];
      // code d'erreur
      var err = data.err;
      switch (err) {
        case 2:
          // not authorized
          errors.push('not_authorized');
          break;
        case 3:
          // forbidden
          errors.push('forbidden');
          break;
        case 4:
          // erreur locale
          errors.push('not_http_error');
          break;
        case 6:
          // document non trouvé
          errors.push('not_found');
          break;
        default:
          // autres cas
          errors = data.messages;
          break;

      }
      // si pas de msg, on en met un
      if (errors.length == 0) {
        errors.push($filter('translate')('error_unknown'));
      }
      // on rend la liste des erreurs
      return errors;
    }

    // mise en forme du libellé d'un créneau horaire
    function getTextForCreneau(creneau) {
      return getTextFor(creneau.hDebut) + "h"
        + getTextFor(creneau.mDebut) + ":"
        + getTextFor(creneau.hFin) + "h"
        + getTextFor(creneau.mFin);
    }

    function getTextFor(number) {
      // met un 0 devant le chiffre si moins de deux chiffres
      var text = "" + number;
      if (text.length < 2) {
        text = "0" + text;
      }
      return text;
    }

    // instance du service
    return {
      debug: debug,
      waitForSomeTime: waitForSomeTime,
      getErrors: getErrors,
      getTextForCreneau: getTextForCreneau
    }
  } ]);

angular.module("rdvmedecins").factory(
  'dao', ['$http', '$q', 'config', '$base64', 'utils',
    function ($http, $q, config, $base64, utils) {

      // logs
      utils.debug("[dao] init");

      // ----------------------------------méthodes privées
      // obtenir des données auprès du service web
      function getData(serverUrl, username, password, urlAction, info) {
        // opération asynchrone
        var task = $q.defer();
        // url requête HTTP
        var url = serverUrl + urlAction;
        // authentification basique
        var basic = "Basic "
          + $base64.encode(username + ":" + password);
        // la réponse
        var réponse;
        // les requêtes http doivent être toutes authentifiées
        var headers = $http.defaults.headers.common;
        headers.Authorization = basic;
        // on fait la requête GET
        var promise;
        if (info) {
          promise = $http.post(url, info, {
            timeout: config.timeout
          });
        } else {
          promise = $http.get(url, {
            timeout: config.timeout
          });
        }
        promise.then(success, failure);
        // on retourne la tâche elle-même afin qu'elle puisse
        // être annulée
        return task;

        // success
        function success(response) {
          // response.data={status:0, data:[med1, med2, ...]}
          // ou {status:x, data:[msg1, msg2, ...]
          utils.debug("[dao] getData[" + urlAction
            + "] success réponse", response);
          // réponse
          var payLoad = response.data;
          réponse = payLoad.status == 0 ? {
            err: 0,
            data: payLoad.data
          } : {
            err: 1,
            messages: payLoad.data
          };
          // on rend la réponse
          task.resolve(réponse);
        }

        // failure
        function failure(response) {
          utils.debug("[dao] getData[" + urlAction
            + "] error réponse", response);
          // on analyse le status
          var status = response.status;
          var error;
          switch (status) {
            case 401:
              // unauthorized
              error = 2;
              break;
            case 403:
              // forbidden
              error = 3;
              break;
            case 404:
              // not found
              error = 6;
              break;
            case 0:
              // erreur locale
              error = 4;
              break;
            default:
              // autre chose
              error = 5;
          }
          // on rend la réponse
          task.resolve({
            err: error,
            messages: [ response.statusText ]
          });
        }
      }

      // --------------------- instance du service [dao]
      return {
        getData: getData
      }
    } ]);

// contrôleur
angular
  .module("rdvmedecins")
  .controller(
  'rdvMedecinsCtrl', ['$scope', 'utils', 'config', 'dao', '$translate', '$timeout', '$filter', '$locale',
    function ($scope, utils, config, dao, $translate, $timeout, $filter, $locale) {
      // ------------------- initialisation modèle
      // modèle
      $scope.waiting = {text: config.msgWaiting, visible: false, cancel: cancel, time: 3000};
      $scope.server = {url: 'http://localhost:8080', login: 'admin', password: 'admin'};
      $scope.errors = {show: false, model: {}};
      $scope.medecins = {
        data: [
          {id: 1, version: 1, titre: "Mme", nom: "PELISSIER", prenom: "Marie"},
          {id: 2, version: 1, titre: "Mr", nom: "BROMARD", prenom: "Jacques"},
          {id: 3, version: 1, titre: "Mr", nom: "JANDOT", prenom: "Philippe"},
          {id: 4, version: 1, titre: "Melle", nom: "JACQUEMOT", prenom: "Justine"}
        ],
        title: config.listMedecins
      };
      $scope.agenda = {title: config.getAgendaTitle, data: undefined, show: false};
      $scope.calendar = {title: config.getCalendarTitle, minDate: new Date(), jour: new Date()};
      // on style la liste déroulante
      $timeout(function () {
        $('.selectpicker').selectpicker();
      });
      // locale française pour le calendrier
      angular.copy(config.locales['fr'], $locale);

      // tâche asynchrone
      var task;

      // exécution action
      $scope.execute = function () {
        // les infos du formulaire
        var idMedecin = $('.selectpicker').selectpicker('val');

        // vérification
        utils.debug("[homeCtrl] idMedecin", idMedecin);
        utils.debug("[homeCtrl] jour", $scope.calendar.jour);

        // on met le jour au format yyyy-MM-dd
        var formattedJour = $filter('date')(
          $scope.calendar.jour, 'yyyy-MM-dd');
        // mise à jour de la vue
        $scope.waiting.visible = true;
        $scope.errors.show = false;
        $scope.agenda.show = false;
        // attente simulée
        var task = utils.waitForSomeTime($scope.waiting.time);
        // on demande l'agenda du médecin
        var promise = task.promise.then(function () {
          // le chemin de l'URL de service
          var path = config.urlSvrAgenda + "/" + idMedecin + "/" + formattedJour;
          // on demande l'agenda
          task = dao.getData($scope.server.url, $scope.server.login, $scope.server.password, path);
          // on retourne la promesse d'achèvement de la tâche
          return task.promise;
        });
        // on analyse le résultat de l'appel au service [dao]
        promise.then(function (result) {
          // fin d'attente
          $scope.waiting.visible = false;
          // erreur ?
          if (result.err == 0) {
            // on prépare le modèle de l'agenda
            $scope.agenda.data = result.data;
            $scope.agenda.show = true;
            // mise en forme de l'affichage des horaires
            angular.forEach($scope.agenda.data.creneauxMedecin, function (creneauMedecin) {
              creneauMedecin.creneau.text = utils.getTextForCreneau(creneauMedecin.creneau);
            });
            // on crée un evt pour styler la table après l'affichage de la vue
            $timeout(function () {
              $("#creneaux").footable();
            });
          } else {
            // il y a eu des erreurs pour obtenir l'agenda
            $scope.errors = {
              title: config.getAgendaErrors,
              messages: utils.getErrors(result),
              show: true
            };
          }
        })
      };

      // annulation attente
      function cancel() {
        // on termine la tâche
        task.reject();
        // on met à jour l'UI
        $scope.waiting.visible = false;
        $scope.agenda.show = false;
        $scope.errors.show = false;
      }
    } ]);
