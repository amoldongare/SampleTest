angular.module('reader.controllers.ticket', [])
  .controller('TicketCtrl', TicketCtrl);

function TicketCtrl($scope, $rootScope, $log, $translate, $state, $ionicPopover, $ionicLoading, ModalService, ReservationService, ionicToast, locker, VehicleService, UserService, SearchService, $stateParams, GeoService, PhotoService, ScannerService, locale, $ionicPopup) {

  var ticketVm = this;
  ticketVm.$scope = $scope;
  $scope.userval = {};
  ticketVm.ticketData = {};
  ticketVm.flag = false;
  //ticket form json object
  ticketVm.ticketFormDetails = {};
  ticketVm.ticketFormDetails.images = [];
  ticketVm.ticketFormDetails.geoLocation = {};
  ticketVm.ticketFormDetails.fineTotal = 0;
  ticketVm.ticketFormDetails.vehicle = {};
  ticketVm.ticketFormDetails.comments = {};
  ticketVm.ticketFormDetails.comments.public = [];
  ticketVm.ticketFormDetails.comments.private = [];
  //vehicle models
  ticketVm.ticketMakes = VehicleService.content.makes;
  ticketVm.ticketModels = VehicleService.content.models;
  ticketVm.ticketColors = VehicleService.content.colors;
  ticketVm.ticketStates = locale.states;
  ticketVm.ticketZones = [];
  ticketVm.selection = [];
  ticketVm.violationsList = [];
  ticketVm.preferedColors = [];
  ticketVm.preferedMakes = [];
  // list of functions
  ticketVm.updateModel = updateModel;
  ticketVm.submitTicketForm = submitTicketForm;
  ticketVm.toggleScanner = toggleScanner;
  ticketVm.getPhoto = getPhoto;
  ticketVm.openModal = openModal;
  ticketVm.ticketFormPristine = ticketFormPristine;
  ticketVm.removeSelection = removeSelection;
  ticketVm.confirmRemoveChanges = confirmRemoveChanges;
  ticketVm.removeComments = removeComments;
  ticketVm.addCustomComment = addCustomComment;
  ticketVm.translateToast = translateToast;
  ticketVm.openPopover = openPopover;
  ticketVm.addDefaultViolation = addDefaultViolation;
  ticketVm.setDetailsFromParam = setDetailsFromParam;
  ticketVm.confirmForceAddViolation = confirmForceAddViolation;
  ticketVm.formInvalidAlert = formInvalidAlert;
  ticketVm.removeImage = removeImage;
  ticketVm.openScanner = openScanner;
  ticketVm.confirmClearAll = confirmClearAll;

  $scope.getItemHeight = function (item, index) {
    return (index % 2) === 0 ? 50 : 60;
  };

  $scope.closeModal = function () {
    $scope.closeModalService();
  }

  function translateToast(key) {
    $translate(key).then(function (translation) {
      ionicToast.show(translation, 'bottom', false, 5000, 'toast-error');
    }).catch(promiseOnTicketFailed);
  }

  function removeComments(type, comment) {
    var idx = type.indexOf(comment);
    type.splice(idx, 1);
  }

  function setDetailsFromParam(paramDetails) {
    ticketVm.ticketData = paramDetails.ticket || paramDetails;
    ticketVm.ticketFormDetails.vehicle.licensePlate = ticketVm.ticketData.vehicle.licensePlate;
    ticketVm.ticketFormDetails.vehicle.licenseState = ticketVm.ticketData.zone.state;
  }

  function addCustomComment(type, comment) {
    $log.debug(type, comment);
    type.push(comment);
    $scope.closeModalService();
    ticketVm.searchText = "";
  }

  function addDefaultViolation() {
    var result;
    var keepGoing = true;
    ticketVm.violationsList.forEach(function (key) {
      if (keepGoing) {
        if (key.label == "Meter Overtime") {
          keepGoing = false;
          result = key;
        }
      }
    });
    return result;
  }

  function openPopover($event) {
    $ionicPopover.fromTemplateUrl('common/more-modal.html', {
      scope: $scope,
    }).then(function (popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    }).catch(promiseOnTicketFailed);
  }

  function openModal(modal_name) {
    ModalService
      .init(modal_name, ticketVm.$scope)
      .then(function (modal) {
        modal.show();
      }).catch(promiseOnTicketFailed);
  }

  function ticketFormPristine() {
    var geoLocation = ticketVm.ticketFormDetails.zone;
    ticketVm.ticketFormDetails = {};
    ticketVm.ticketFormDetails.vehicle = {};
    ticketVm.selection = [];
    ticketVm.ticketFormDetails.images = [];
    ticketVm.ticketData = {};
    ticketVm.ticketFormDetails.zone = geoLocation;
    ticketVm.ticketFormDetails.vehicle.licenseState = geoLocation.state;
    ticketVm.ticketFormDetails.fineTotal = 0;
    ticketVm.ticketFormDetails.comments = {};
    ticketVm.ticketFormDetails.comments.public = [];
    ticketVm.ticketFormDetails.comments.private = [];
    ticketVm.ticketForm.$setPristine();
  }

  function promiseOnTicketFailed(err) {
    $ionicLoading.hide();
    if (!err || !err.message) {
      ticketVm.translateToast('NEW_TICKET.VALID.PROMISE_ERROR');
    }
    ionicToast.show(err.message, 'bottom', false, 5000, 'toast-error');
    $log.error("error is", err);
  }

  function updateModel(updateModel) {
    if (VehicleService.modelsFromMake(updateModel).length) {
      ticketVm.ticketModels = VehicleService.modelsFromMake(updateModel);
    } else {
      ticketVm.ticketModels = VehicleService.content.models;
    }
    $scope.closeModal();
  }

  function removeSelection(option) {
    var idx = ticketVm.selection.indexOf(option);
    ticketVm.selection.splice(idx, 1);
    ticketVm.ticketFormDetails.fineTotal = Math.abs(option.cost - ticketVm.ticketFormDetails.fineTotal);
  }

  function submitTicketForm(ticketFormDetails) {
    ticketVm.ticketForm.$submitted = true;
    if (ticketVm.ticketForm.$valid) {
      $ionicLoading.show();
      ticketVm.ticketFormDetails.officerName = $scope.userval.name.first + " " + $scope.userval.name.last;
      ticketVm.ticketFormDetails.zone = ticketVm.ticketFormDetails.zone._id;
      ticketVm.ticketFormDetails.geoLocation = ticketVm.latLon;
      var data = { "ticket": ticketVm.ticketFormDetails };
      ReservationService.uploadTicket(JSON.stringify(data))
        .success(function (response) {
          $ionicLoading.hide();
          ticketVm.translateToast('NEW_TICKET.VALID.SUBMIT_SUCCESS');
          ticketVm.ticketFormPristine();
          $state.go('tab.reservations');
        }).catch(promiseOnTicketFailed);
    } else {
      ticketVm.formInvalidAlert();
      return false;
    }
  }

  function confirmClearAll() {
    $translate(['MODAL_POPUP.CLEAR_FORM.TITLE', 'MODAL_POPUP.CLEAR_FORM.TEMPLATE', 'MODAL_POPUP.CLEAR_FORM.BTN_SAVE', 'MODAL_POPUP.CLEAR_FORM.BTN_CANCEL']).then(function (translation) {
      var myPopup = $ionicPopup.show({
        template: translation['MODAL_POPUP.CLEAR_FORM.TEMPLATE'],
        title: translation['MODAL_POPUP.CLEAR_FORM.TITLE'],
        scope: $scope,
        buttons: [
          {
            text: translation['MODAL_POPUP.CLEAR_FORM.BTN_CANCEL'],
            type: 'button-clear button-assertive',
            onTap: function (e) {
            }
          },
          {
            text: '<b>' + translation['MODAL_POPUP.CLEAR_FORM.BTN_SAVE'] + '</b>',
            type: 'button-clear button-positive',
            onTap: function (e) {
              ticketVm.ticketFormPristine();
            }
          },
        ]
      }).catch(promiseOnTicketFailed);
    });
  }

  function formInvalidAlert() {
    $translate(['MODAL_POPUP.FORM_INVALID.TITLE', 'MODAL_POPUP.FORM_INVALID.TEMPLATE', 'MODAL_POPUP.FORM_INVALID.BTN_OK']).then(function (translation) {
      var alertPopup = $ionicPopup.alert({
        title: ' <i class="icon ion-android-warning assertive"></i><span>' + translation['MODAL_POPUP.FORM_INVALID.TITLE'] + '</span>',
        template: translation['MODAL_POPUP.FORM_INVALID.TEMPLATE'],
        buttons: [
          {
            text: '<b>' + translation['MODAL_POPUP.FORM_INVALID.BTN_OK'] + '</b>',
            type: 'button button-clear button-positive',
            onTap: function (e) {
              alertPopup.close();
            }
          },
        ]
      });
      alertPopup.then(function (res) {
      }).catch(promiseOnTicketFailed);
    });
  }

  function removeImage(indexVal) {
    $translate(['MODAL_POPUP.REMOVE_PHOTO.TITLE', 'MODAL_POPUP.REMOVE_PHOTO.TEMPLATE', 'MODAL_POPUP.REMOVE_PHOTO.BTN_SAVE', 'MODAL_POPUP.REMOVE_PHOTO.BTN_CANCEL']).then(function (translation) {
      var myPopup = $ionicPopup.show({
        template: translation['MODAL_POPUP.REMOVE_PHOTO.TEMPLATE'],
        title: translation['MODAL_POPUP.REMOVE_PHOTO.TITLE'],
        scope: $scope,
        buttons: [
          {
            text: translation['MODAL_POPUP.REMOVE_PHOTO.BTN_CANCEL'],
            type: 'button-clear button-assertive',
            onTap: function (e) {
            }
          },
          {
            text: '<b>' + translation['MODAL_POPUP.REMOVE_PHOTO.BTN_SAVE'] + '</b>',
            type: 'button-clear button-positive',
            onTap: function (e) {
              ticketVm.ticketFormDetails.images.splice(indexVal, 1);
            }
          },
        ]
      }).catch(promiseOnTicketFailed);
    });
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
                ticketVm.scanner = false;
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
        }).catch(promiseOnTicketFailed);
      });
    }
  }

  function confirmRemoveChanges() {
    $translate(['MODAL_POPUP.DISCARD.TITLE', 'MODAL_POPUP.DISCARD.TEMPLATE', 'MODAL_POPUP.DISCARD.BTN_CANCEL', 'MODAL_POPUP.DISCARD.BTN_SAVE',]).then(function (translation) {
      var myPopup = $ionicPopup.show({
        template: translation['MODAL_POPUP.DISCARD.TEMPLATE'],
        title: translation['MODAL_POPUP.DISCARD.TITLE'],
        scope: $scope,
        buttons: [
          {
            text: translation['MODAL_POPUP.DISCARD.BTN_CANCEL'],
            type: 'button-clear button-assertive',
            onTap: function (e) {
              $log.debug("Stay right there where you are!!!");
              if (ticketVm.openViolationModal) {
                if (!ticketVm.openViolationModal) {
                  $scope.toggleSelection(ticketVm.addDefaultViolation());
                } else {
                  ticketVm.openModal('ticket/add-violation-modal.html');
                }
              }
            }
          },
          {
            text: '<b>' + translation['MODAL_POPUP.DISCARD.BTN_SAVE'] + '</b>',
            type: 'button-clear button-positive',
            onTap: function (e) {
              ticketVm.ticketFormPristine();
              if ($stateParams.ticketData) {
                if (!$stateParams.ticketData.valid) {
                  $scope.toggleSelection(ticketVm.addDefaultViolation());
                  ticketVm.ticketForm.$dirty = true;
                } else {
                  ticketVm.openModal('ticket/add-violation-modal.html');
                }
              }
            }
          },
        ]
      }).catch(promiseOnTicketFailed);
    });
  }

  function confirmForceAddViolation(violation) {
    $translate(['MODAL_POPUP.CONFIRM_VIO.TITLE', 'MODAL_POPUP.CONFIRM_VIO.TEMPLATE', 'MODAL_POPUP.CONFIRM_VIO.BTN_CANCEL', 'MODAL_POPUP.CONFIRM_VIO.BTN_SAVE',]).then(function (translation) {
      var myPopup = $ionicPopup.show({
        template: translation['MODAL_POPUP.CONFIRM_VIO.TEMPLATE'],
        title: translation['MODAL_POPUP.CONFIRM_VIO.TITLE'],
        scope: $scope,
        buttons: [
          {
            text: translation['MODAL_POPUP.CONFIRM_VIO.BTN_CANCEL'],
            type: 'button-clear button-assertive',
            onTap: function (e) {
              $scope.closeModal();
            }
          },
          {
            text: '<b>' + translation['MODAL_POPUP.CONFIRM_VIO.BTN_SAVE'] + '</b>',
            type: 'button-clear button-positive',
            onTap: function (e) {
              ticketVm.selection.push(violation);
              ticketVm.ticketFormDetails.fineTotal = Math.abs(ticketVm.ticketFormDetails.fineTotal + violation.cost);
              ticketVm.ticketFormDetails.violations = ticketVm.selection;
              $scope.closeModal();
            }
          },
        ]
      }).catch(promiseOnTicketFailed);
    });
  }

  $scope.$on('$ionicView.afterEnter', function () {
    UserService.getUser().then(function (res) {
      ticketVm.internalComments = res.config.reader.comments;
      temResult = SearchService.getPrefered(ticketVm.ticketColors, res.config.reader.colors);
      ticketVm.preferedColors = temResult;
      temResult = SearchService.getPrefered(ticketVm.ticketMakes, res.config.reader.makes);
      ticketVm.preferedMakes = temResult;
      ticketVm.ticketZones = res.municipality.zones;
      ticketVm.violationsList = res.municipality.integrations.ticket.codes;
      $scope.userval = res;
      if ($stateParams.ticketData) {
        if (!ticketVm.openViolationModal) {
          $scope.toggleSelection(ticketVm.addDefaultViolation());
          ticketVm.ticketForm.$dirty = true;
        }
      }
    }).catch(promiseOnTicketFailed);
  });

  $scope.$on('$ionicView.beforeEnter', function () {
    ticketVm.selection = [];
    ticketVm.ticketFormDetails.fineTotal = 0;
    ticketVm.scanner = UserService.getScanner();

    if ($stateParams.ticketData) {
      ticketVm.setDetailsFromParam($stateParams.ticketData);
      if ($stateParams.ticketData.valid) {
        ticketVm.openViolationModal = true;
      } else {
        ticketVm.openViolationModal = false;
      }
    } else {
      // if (ticketVm.ticketForm.$pristine && UserService.getScanner()) {
      //   $log.debug("OPENING SCANNER.......");
      //   if(ionic.Platform.isWebView()){
      //     ticketVm.openScanner();
      //   }
      // }
    }

    if (ticketVm.ticketForm.$dirty) {
      confirmRemoveChanges();
    } else {
      if (ticketVm.openViolationModal)
        ticketVm.openModal('ticket/add-violation-modal.html');
    }

    GeoService.getCurrentLocation()
      .then(function (pos) {
        ticketVm.latLon = {
          "geometry": {
            "type": "Point",
            "coordinates": [pos.coords.latitude, pos.coords.longitude]
          }
        };
        //SearchService.searchZone(pos.coords.latitude, pos.coords.longitude).then(function (res) {
        SearchService.searchZone(32.78316149796426, -96.79658889770508).then(function (res) {
          if (!(res.data.zone).length) {
            $log.error("Zone not available for this lat lon");
          } else {
            ticketVm.ticketFormDetails.zone = res.data.zone[0];
            ticketVm.ticketFormDetails.vehicle.licenseState = res.data.zone[0].state;
          }
        }).catch(promiseOnTicketFailed);
      }).catch(promiseOnTicketFailed);
  });

  function openScanner() {
    $log.debug("OPENING SCANNER.......");
    if (ionic.Platform.isWebView()) {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          "preferFrontCamera": false, // iOS and Android
          "showFlipCameraButton": true, // iOS and Android
          "prompt": "Place a barcode inside the scan area", // supported on Android only
          "formats": "QR_CODE,PDF_417,EAN_8,EAN_13", // default: all but PDF_417 and RSS_EXPANDED
          "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
        }
      );
    }
  }

  $scope.toggleSelection = function toggleSelection(violation) {
    if (ticketVm.selection.length == 0 && violation.label == 'Meter Overtime') {
      ticketVm.flag = false;
    } else {
      ticketVm.flag = true;
    }
    if (ticketVm.openViolationModal && violation.label == 'Meter Overtime') {
      ticketVm.confirmForceAddViolation(violation);
    } else {
      var idx = ticketVm.selection.indexOf(violation);
      if (idx > -1) {
        ticketVm.selection.splice(idx, 1);
        ticketVm.ticketFormDetails.fineTotal = Math.abs(violation.cost - ticketVm.ticketFormDetails.fineTotal);
      }
      else {
        ticketVm.selection.push(violation);
        ticketVm.ticketFormDetails.fineTotal = Math.abs(ticketVm.ticketFormDetails.fineTotal + violation.cost);
      }
      ticketVm.ticketFormDetails.violations = ticketVm.selection;
      if (ticketVm.flag)
        $scope.closeModal();
      else
        ticketVm.flag = true;
    }
  }

  $scope.toggleComments = function toggleComments(type, comment) {
    var idx = type.indexOf(comment);
    if (idx > -1) {
      type.splice(idx, 1);
    }
    else {
      if (type == ticketVm.ticketFormDetails.comments.public && ticketVm.ticketFormDetails.comments.public.length == 3) {
        $scope.closeModalService();
        return;
      }
      type.push(comment);
    }
    $scope.closeModalService();
  }

  function getPhoto() {
    // use these options to make a 7.96 megapixel jpeg:
    var quality = 80;
    var width = 3456;
    var height = 2304;

    var source = 'CAMERA'; // or 'PHOTOLIBRARY'

    // return a base64 encoded image string. Will return a dummy image when used in the browser
    PhotoService.getPhotoData(width, height, quality, source)
      .then(function (imgData) {
        ticketVm.ticketForm.$dirty = true;
        ticketVm.imgSrc = "data:image/jpeg;base64," + imgData;
        var data = {
          "data": imgData
        };
        if (ticketVm.ticketFormDetails.images.length == 4) {
          // ticketVm.ticketFormDetails.images.pop();
          // ticketVm.ticketFormDetails.images.push(data);
        } else {
          ticketVm.ticketFormDetails.images.push(data);
        }
        // then you can set the image src directly in your template to display a thumbnail, ie
        // $scope.imgData = imgData;
        // ng-src="{{imgData}}"
      }, function (err) {
        console.error(err);
      }).catch(promiseOnTicketFailed);
  }
}
