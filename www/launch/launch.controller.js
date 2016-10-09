angular.module('reader.controllers.launch', [])

  .controller('LaunchCtrl', LaunchCtrl);

function LaunchCtrl($log, $translate,
  $scope, ionicToast,$ionicLoading,$state, locker) {

  var LaunchVm = this;
  LaunchVm.$scope = $scope;
  LaunchVm.userData = {};
  LaunchVm.loginForm = {};
  LaunchVm.login = login;
  LaunchVm.logout = logout;
  LaunchVm.changeLanguage = changeLanguage;
  LaunchVm.translateToast = translateToast;
  LaunchVm.openModal = openModal;

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  $scope.hideToast = function () {
    ionicToast.hide();
  }

  function changeLanguage(language) {
    $translate.use(language);
    moment.locale(language);
  }

  function logout() {
    $scope.popover.hide();
    $state.go('login');
  }

  //localization of toast messages
  function translateToast(key) {
    $translate(key).then(function (translation) {
      ionicToast.show(translation, 'bottom', false, 5000, 'toast-error');
    });
  }

  $scope.$on('$ionicView.beforeEnter', function () {

  });

  //common function for opening the modal
  function openModal(modal_name) {
    ModalService
      .init(modal_name, LaunchVm.$scope)
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnLoginFailed);
  }

  function promiseOnLoginFailed(err) {
    $ionicLoading.hide();
    if (err && !(err.data.error.message.length)) {
      LaunchVm.translateToast('LOGIN_PAGE.PROMISE_ERROR');
    } else {
      ionicToast.show(err.data.error.message, 'bottom', false, 5000, 'toast-error');
    }
  }

  function login(userData) {
    if (LaunchVm.loginForm.$valid) {
      $ionicLoading.show();
	  $log.debug("username",userData.username);
	  if(LaunchVm.userData.username == 'navnath@gmail.com' && LaunchVm.userData.password == 'navnath'){
		  LaunchVm.translateToast('LOGIN_PAGE.LOGIN_SUCCESS');
		  $state.go('tab.reservations');		  
		  $ionicLoading.hide();
	  }else{
		LaunchVm.translateToast('LOGIN_PAGE.LOGIN_ERROR');
		$ionicLoading.hide();
	  }        
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
