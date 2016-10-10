angular.module('reader.controllers.ticket', [])
  .controller('TicketCtrl', TicketCtrl);

function TicketCtrl($scope,$ionicPopover) {

  var ticketVm = this;
  ticketVm.$scope = $scope;
  ticketVm.openPopover=openPopover;

  function openPopover($event) {
    $ionicPopover.fromTemplateUrl('common/more-modal.html', {
      scope: $scope,
    }).then(function (popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    });
  }
}
