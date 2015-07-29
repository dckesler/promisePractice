angular.module('app').controller('controller', function($scope, service){

  $scope.simulateRequest = function(lat, lon){
    $scope.data = "Loading";
    service.test(lat, lon).then(function(data){
      console.log(data);
      $scope.address = data;
    }, function(err){
      console.log("ERROR", err);
    })
  }

})
