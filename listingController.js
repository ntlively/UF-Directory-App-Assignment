angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchTerm = "";
    $scope.currentDetails ="";
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {
      $scope.currentDetails=index;
    };
  }
]);