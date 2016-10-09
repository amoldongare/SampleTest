angular.module('reader.directive.bottom-sheet', [])
// .directive('ionBottomSheet', [function() {
//     return {
//       restrict: 'E',
//       transclude: true,
//       replace: true,
//       controller: [function() {}],
//       template: '<div class="modal-wrapper" ng-transclude></div>'  
//     };
//   }])
.directive('ionBottomSheetView', function() {
  return {
    restrict: 'E',
    compile: function(element) {
      element.addClass('bottom-sheet modal');
    }
  }
});