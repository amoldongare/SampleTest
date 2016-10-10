
angular.module('reader', ['ionic',
  'ionic.service.core',
  'ionic.native',
  'pascalprecht.translate',
  'sjs.services.geo',
  'sjs.services.photo',
  'sjs.services.scanner',
  'reader.constants',
  'reader.services.user',
  'reader.services.modal',
  'reader.services.reservation',
  'reader.services.search',
  'reader.services.vehicle',
  'reader.factories.printer',
  'reader.controllers.launch',
  'reader.controllers.reservations',
  'reader.controllers.ticket',
  'reader.controllers.recent-ticket',
  'reader.directive.bottom-sheet',
  'angular-locker',
  'angularMoment',
  'ionic-material',
  'ionic-toast'
])

  .run(function ($ionicPlatform, $http, $log, $rootScope, $ionicLoading, $state, UserService) {

    //code for getting app update
    var deploy = new Ionic.Deploy();
    deploy.check().then(function (hasUpdate) {
      $log.debug('Ionic Deploy: Update available: ' + hasUpdate);
      $log.debug(hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function (err) {
      $log.error('Ionic Deploy: Unable to check for updates', err);
    });

    deploy.update().then(function (res) {
      $log.debug('Ionic Deploy: Update Success! ', res);
      $ionicLoading.hide();
    }, function (err) {
      $log.error('Ionic Deploy: Update error! ', err);
    }, function (prog) {
      $log.debug('Ionic Deploy: Progress... ', prog);
      $ionicLoading.show({
        template: 'Fetching Update Please Wait....' + Math.round(prog) + '%'
      }).then(function () {
        $log.debug("The loading indicator is now displayed");
      });
    });

    if (!UserService.getToken()) {
      $state.go('login');
    } else {
      UserService.getUserByToken(UserService.getToken())
        .then(
        function (response) {
          UserService.setUser(response.data.user);
          $state.go('tab.reservations');
        },
        function (error) {
          $log.error('auth token not valid', error);
          $state.go('login');
        }
        )
    }
    $ionicPlatform.ready(function () {

      $rootScope.appVersion = "simulator";
      //$http.defaults.headers.common['Content-Type'] = "application/json";
      //$http.defaults.headers.common.Accepts = "application/json";
      //Get app version (only if actually on device)
      if (window.wizUtils) {
        wizUtils.getBundleVersion(function (version) {
          $rootScope.appVersion = version;
          $log.debug("version", $rootScope.appVersion);
        });
      }

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $translateProvider, lockerProvider) {
    // Set up i18n
    $translateProvider
      // uncomment to select an explicit preferredLanguage
      .preferredLanguage('en')
      // set english as our fallback in case preferredLanguage is not accessible
      .fallbackLanguage('es')
      // load our files from the i18n folder
      .useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
      })
      // the next 2 options cause the app to automatically select a preferredLanguage
      // based on the navigator.language setting of the user agent
      // .registerAvailableLanguageKeys(['en', 'es'], {
      //   'en-US': 'en',
      //   'es-US': 'es'
      // })
      //.determinePreferredLanguage()
      // sanitize by default
      .useSanitizeValueStrategy('sanitize')
      // add interpolation so we can use messageformat.js with angular
      .addInterpolation('$translateMessageFormatInterpolation');
    moment.locale('es');

    // Set up locker
    lockerProvider.defaults({
      driver: 'local',
      namespace: 'mr',
      separator: '.',
      eventsEnabled: true,
      extend: {}
    });

    $ionicConfigProvider.tabs.position('top');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'launch/login.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'launch/device_settings.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        params: {
          userDetails: null
        }
      })
      .state('scanner', {
        url: '/scanner',
        templateUrl: 'launch/scanner_preferences.html'
      })
      .state('launch', {
        url: '/launch',
        templateUrl: 'launch/launch.html'
      })
      .state('ticketDetails', {
        url: '/ticketDetails',
        templateUrl: 'recent-ticket/ticket-details.html',
        params: {
          ticketDetails: null
        }
      })
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'tabs/tabs.html'
      })
      .state('tab.reservations', {
        url: '/reservations',
        views: {
          'tab-reservations': {
            templateUrl: 'reservations/reservations.html'
          }
        }
      })
      .state('tab.recent-ticket', {
        url: '/recent-ticket',
        views: {
          'tab-recent-ticket': {
            templateUrl: 'recent-ticket/recent-ticket.html'
          }
        }
      })
      .state('tab.newticket', {
        url: '/newticket',
        views: {
          'new-ticket': {
            templateUrl: 'ticket/new-ticket.html'
          }
        },
        params: {
          ticketData: null
        }
      })
    $urlRouterProvider.otherwise('/login');
  })

