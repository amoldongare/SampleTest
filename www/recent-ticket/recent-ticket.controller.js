angular.module('reader.controllers.recent-ticket', [])

  .controller('RecentTicketCtrl', RecentTicketCtrl);

function RecentTicketCtrl(UserService, $log,$translate, $ionicPopup, $ionicLoading, $stateParams, $ionicPopover, $scope, ModalService) {
  var RecentTicketVm = this;
  $scope.userval = {};
  RecentTicketVm.$scope = $scope;
  RecentTicketVm.openModal = openModal;
  RecentTicketVm.translateToast = translateToast;
  RecentTicketVm.openPopover = openPopover;
  RecentTicketVm.openVoidModal = openVoidModal;
  RecentTicketVm.showConfirm = showConfirm;

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  function openVoidModal() {
    ModalService
      .init("recent-ticket/void-ticket.html", RecentTicketVm.$scope, "fade-in")
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnRecentTicketFailed);
  }

  //localization of toast messages
  function translateToast(key) {
    $translate(key).then(function (translation) {
      ionicToast.show(translation, 'bottom', false, 5000, 'toast-error');
    });
  }

  function openPopover($event) {
    $ionicPopover.fromTemplateUrl('common/more-modal.html', {
      scope: $scope,
    }).then(function (popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    });
  }

  function showConfirm() {
    RecentTicketVm.printer = UserService.getPrinter();
    if (!RecentTicketVm.printer) {
      $translate(['MODAL_POPUP.PRINTER_CONF.TITLE', 'MODAL_POPUP.PRINTER_CONF.TEMPLATE', 'MODAL_POPUP.PRINTER_CONF.TOGGLE', 'MODAL_POPUP.PRINTER_CONF.BTN_CANCEL', 'MODAL_POPUP.PRINTER_CONF.BTN_SAVE',]).then(function (translation) {
        var confirmPopup = $ionicPopup.confirm({
          title: translation['MODAL_POPUP.PRINTER_CONF.TITLE'],
          scope: $scope,
          template: translation['MODAL_POPUP.PRINTER_CONF.TEMPLATE'] + '</br><ion-list><ion-checkbox ng-model="RecentTicketVm.printer" ng-change="RecentTicketVm.setPrinterFlag(RecentTicketVm.printer)">' + translation['MODAL_POPUP.PRINTER_CONF.TOGGLE'] + '</ion-checkbox></ion-list>',
          buttons: [
            {
              text: translation['MODAL_POPUP.PRINTER_CONF.BTN_CANCEL'],
              type: 'button-clear button-assertive',
              onTap: function (e) {
              }
            },
            {
              text: '<b>' + translation['MODAL_POPUP.PRINTER_CONF.BTN_SAVE'] + '</b>',
              type: 'button-clear button-positive',
              onTap: function (e) {
                $log.debug("Print ticket in progress...");
              }
            },
          ]
        });
      }).catch(promiseOnRecentTicketFailed);
    } else {
      $log.debug("Print ticket in progress...");
    }
  }

  //common function for opening the modal
  function openModal(modal_name) {
    ModalService
      .init(modal_name, RecentTicketVm.$scope)
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnRecentTicketFailed);
  };

  $scope.$on('$ionicView.beforeEnter', function () {
  });

  function promiseOnRecentTicketFailed(err) {
    $ionicLoading.hide();
    if (!err || !err.message) {
      RecentTicketVm.translateToast('RECENT_TICKET.PROMISE_ERROR');
    }
    ionicToast.show(err.message, 'bottom', false, 5000, 'toast-error');
    $log.error(err);
  }
}
