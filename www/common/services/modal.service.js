angular.module('reader.services.modal', [])
  .service('ModalService', function($ionicModal, $rootScope) {
    
    var init = function(tpl, $scope,animation) {
        var promise;
        var animation=animation?animation:"slide-in-up";
        $scope = $scope || $rootScope.$new();
          promise = $ionicModal.fromTemplateUrl(tpl, {
            scope: $scope,
            animation: animation
          }).then(function(modal) {
            $scope.modal = modal;
            return modal;
          });

          $scope.openModal = function() {
            $scope.modal.show();
          };

          $scope.closeModalService = function() {
            $scope.modal.hide();
          };

          $scope.$on('$destroy', function() {
            
          });
        return promise;
      }

      return {
        init: init
      }
})
