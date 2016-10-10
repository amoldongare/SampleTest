angular.module('reader.controllers.reservations', [])
  .controller('ReservationsCtrl', ReservationsCtrl);

function ReservationsCtrl($log,$scope,$ionicPopover) {
  var vm = this;
  vm.$scope = $scope;
  vm.openPopover=openPopover;

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  function translateToast(key) {
    $translate(key).then(function (translation) {
      ionicToast.show(translation, 'middle', false, 5000, 'toast-error');
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

  //common function for opening the modal
  function openModal(modal_name) {
    ModalService
      .init(modal_name, vm.$scope)
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnHomeFailed);
  }

  function promiseOnHomeFailed(err) {
    $ionicLoading.hide();
    if (!err || !err.message) {
      RecentTicketVm.translateToast('RESERVATIONS.PROMISE_ERROR');
    }
    ionicToast.show(err.message, 'bottom', false, 5000, 'toast-error');
    $log.error(err);
  }

  $scope.$on('$ionicView.beforeEnter', function () {
    $log.debug("you are on the reservations page");
    // $interval.cancel(intervalPromise);
    // vm.getCurrentReservation();
    // intervalPromise = $interval(vm.getCurrentReservation, 10000);
  });
}
