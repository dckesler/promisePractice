angular.module('app').service("service", function($http, $q){
  this.test = function(lat, lon){
    var dfd = $q.defer();

    //THIS RETURNS A PROMISE
    $http({
      method: "GET",
      url: 'http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+ lon +'&zoom=18&addressdetails=1'
    }).then(function(response){
      dfd.resolve(response.data.address.county + ", " + response.data.address.state);
      var arr = [];
      for(var i = 0; i < results.data.results.length; i++){
        arr.push({
          Artist: results.data.results[i].artistName,
        })
      }
      dfd.resolve(arr)
    })

    //THIS IS THE OTHER PROMISE (OUR PROMISE)
    return dfd.promise
  }
})
