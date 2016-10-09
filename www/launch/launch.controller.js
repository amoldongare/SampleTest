angular.module('reader.controllers.launch', [])

  .controller('LaunchCtrl', LaunchCtrl);

function LaunchCtrl($log, $translate,
  $scope, ionicToast, settings,$stateParams,
  UserService, $ionicPopup, ModalService, $ionicLoading, $state, locker,
  PrinterFactory) {

  var LaunchVm = this;
  LaunchVm.$scope = $scope;
  LaunchVm.userData = {};
  LaunchVm.apiEndPoint = settings.api + settings.apiUri;
  LaunchVm.pairedPrinters = {};
  LaunchVm.loginForm = {};
  LaunchVm.currentDevice = {};
  LaunchVm.userDetails={};
  LaunchVm.printerConfirm={};
  var devicelistPopup;

  LaunchVm.login = login;
  LaunchVm.logout = logout;
  LaunchVm.toggleScanner = toggleScanner;
  LaunchVm.changeLanguage = changeLanguage;
  LaunchVm.getDevices = getDevices;
  LaunchVm.selectDevice = selectDevice;
  LaunchVm.feedPage = feedPage;
  LaunchVm.translateToast = translateToast;
  LaunchVm.setDevices = setDevices;
  LaunchVm.openModal = openModal;
  LaunchVm.setPrinterFlag=setPrinterFlag;

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  $scope.hideToast = function () {
    ionicToast.hide();
  }

  function feedPage() {
    PrinterFactory.feedPage();
    // TODO: this may need to be refactored at some point to support promises
  }

  function setPrinterFlag(printerFlag) {
    UserService.setPrinter(printerFlag);
  }

  function setDevices(deviceDetails) {
    locker.put('currentDevice', deviceDetails);
    $scope.closeModal();
  }

  //set different langauges
  function changeLanguage(language) {
    $translate.use(language);
    moment.locale(language);
  }

  function logout() {
    $scope.popover.hide();
    UserService.logout();
    $state.go('login');
  }

  //localization of toast messages
  function translateToast(key) {
    $translate(key).then(function (translation) {
      ionicToast.show(translation, 'bottom', false, 5000, 'toast-error');
    });
  }

  $scope.$on('$ionicView.beforeEnter', function () {
    LaunchVm.printerConfirm=UserService.getPrinter();
    if($stateParams.userDetails){
      LaunchVm.userDetails=$stateParams.userDetails;
      console.log("user details are",LaunchVm.userDetails);
    }
    LaunchVm.scanner = UserService.getScanner();
    LaunchVm.currentDevice = locker.get('currentDevice');
    PrinterFactory.getDevices().then(function (results) {
      LaunchVm.pairedPrinters = results;
    }).catch(promiseOnLoginFailed);
  });

  //common function for opening the modal
  function openModal(modal_name) {
    ModalService
      .init(modal_name, LaunchVm.$scope)
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnLoginFailed);
  }

  function getDevices() {
    PrinterFactory.getDevices().then(function (results) {
      LaunchVm.pairedPrinters = results;
      LaunchVm.openModal('launch/devices-action-list.html');
    }).catch(promiseOnLoginFailed);
  }

  function selectDevice(d) {
    if (!d) {
      return;
    }
    d.select().then(function (config) {
      $log.debug(config);
      // if config == 'OK' then the printer has been selected successfully
    }).catch(promiseOnLoginFailed);
  }

  function promiseOnLoginFailed(err) {
    $ionicLoading.hide();
    if (err && !(err.data.error.message.length)) {
      LaunchVm.translateToast('LOGIN_PAGE.PROMISE_ERROR');
    } else {
      ionicToast.show(err.data.error.message, 'bottom', false, 5000, 'toast-error');
      //ionicToast.show(err.data.error.message, 'middle', false, 5000, 'toast-error');
    }
  }

  function login(userData) {
    if (LaunchVm.loginForm.$valid) {
      $ionicLoading.show();
      UserService.login(userData).success(function (response) {
        $ionicLoading.hide();
        UserService.setUser(response.user);
        UserService.setToken(response.token);
        LaunchVm.translateToast('LOGIN_PAGE.LOGIN_SUCCESS');
        $state.go('tab.reservations');
      }).catch(promiseOnLoginFailed);
    } else {
      LaunchVm.translateToast('LOGIN_PAGE.FORM_VALIDATION');
    }
  }

  function toggleScanner(scannerFlag) {
    if (scannerFlag) {
      $translate(['MODAL_POPUP.POPUP_SCANER.TITLE', 'MODAL_POPUP.POPUP_SCANER.TEMPLATE', 'MODAL_POPUP.POPUP_SCANER.BTN_SAVE', 'MODAL_POPUP.POPUP_SCANER.BTN_CANCEL']).then(function (translation) {
        var myPopup = $ionicPopup.show({
          template: translation['MODAL_POPUP.POPUP_SCANER.TEMPLATE'],
          title: translation['MODAL_POPUP.POPUP_SCANER.TITLE'],
          scope: $scope,
          buttons: [
            {
              text: translation['MODAL_POPUP.POPUP_SCANER.BTN_CANCEL'],
              type: 'button-clear button-assertive',
              onTap: function (e) {
                LaunchVm.scanner = false;
              }
            },
            {
              text: '<b>' + translation['MODAL_POPUP.POPUP_SCANER.BTN_SAVE'] + '</b>',
              type: 'button-clear button-positive',
              onTap: function (e) {
                UserService.setScanner(scannerFlag);
              }
            },
          ]
        });
      });
    }
  }
}
