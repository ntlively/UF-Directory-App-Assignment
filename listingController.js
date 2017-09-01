angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchTerm = "";
    $scope.currentDetails ="";
    $scope.listing = {
      "code": "", 
      "name": "", 
      "coordinates": {
          "latitude": '', 
          "longitude": ''
      }, 
      "address": ""
  }

    $scope.addListing = function() {
      $scope.listings.push($scope.listing);
      $scope.listing="";
      $('.collapse').collapse('hide');
    };
    $scope.deleteListing = function(index) {

      $scope.currentDetails=index;
      for (var i = 0, l = $scope.listings.length; i < l; i++) {
        console.log($scope.listings[i].name, $scope.currentDetails.name);
        if($scope.listings[i].name == $scope.currentDetails.name && $scope.listings[i].code == $scope.currentDetails.code){
          console.log("GOT INSIDE");
          $scope.listings.splice(i,1);
          break;
        }
      }
      
    };
    $scope.showDetails = function(index) {
      $scope.currentDetails=index;
      $('#info_modal').modal('toggle');
    };
  }
]);