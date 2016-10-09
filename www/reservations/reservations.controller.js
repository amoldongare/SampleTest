angular.module('reader.controllers.reservations', [])
  .controller('ReservationsCtrl', ReservationsCtrl);

function ReservationsCtrl(UserService, $log, $ionicPopover, $ionicScrollDelegate, $timeout, $scope, $state, $interval, ModalService, ReservationService) {
  var vm = this;
  vm.$scope = $scope;
  vm.currentReservation = [];
  vm.userZones = [];

  vm.clearSearch = clearSearch;
  vm.getCurrentReservation = getCurrentReservation;
  vm.openModal = openModal;
  vm.translateToast = translateToast;
  vm.openPopover = openPopover;
  vm.openActionSheet = openActionSheet;
  $scope.userval={};
  var scrollPosY = 0;
  var intervalPromise;

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  function clearSearch() {
    vm.searchText = "";
  }

  function openActionSheet(data, valid) {
    vm.ticketDetails = { "ticket": data, "valid": valid };
    vm.openModal('reservations/reservation-action.html');
  }

  //localization of toast messages
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
    $interval.cancel(intervalPromise);
    vm.getCurrentReservation();
    intervalPromise = $interval(vm.getCurrentReservation, 10000);
    UserService.getUser().then(function (res) {
      $scope.userval=res;
      vm.userZones = res.municipality.zones;
    }).catch(promiseOnHomeFailed);
  });

  function getCurrentReservation() {
    if ($state.current.name != "tab.reservations") {
      $interval.cancel(intervalPromise);
    }
    $log.debug("checking for new reservation");
    ReservationService.getData().then(function (results) {
      vm.currentReservation = results.data.reservation;
    }).catch(promiseOnHomeFailed);
  }

  //function for show/hide serach on scroll
  $scope.scroll = function () {
    $scope.csp = $ionicScrollDelegate.getScrollPosition().top;
    if ($scope.csp > (scrollPosY + 5) && $scope.csp > 50) {
      //scrolling down
      scrollPosY = $scope.csp;
      $timeout(function () {
        $scope.scrolling = false;
      });
    } else if ($scope.csp < (scrollPosY - 200) || $scope.csp < 30) {
      //scrolled up or scrolling up
      scrollPosY = $scope.csp;
      $timeout(function () {
        $scope.scrolling = true;
      });
    }
  };
}
