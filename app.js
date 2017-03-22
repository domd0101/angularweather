angular.module('AngWeather', [])
.controller('controllerAngWeather',['$scope','$http',function($scope,$http){


  $http.get("http://ip-api.com/json").then(function(response){
    $scope.info = response.data;
    console.log('work');


  $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+$scope.info.zip+",us&APPID=061f24cf3cde2f60644a8240302983f2")
  .then(function(response){
    $scope.details = response.data;
  var i = 1;
  $scope.city = $scope.details.name;
  $scope.description = $scope.details.weather[0].description;
  $scope.ftemp = (($scope.details.main.temp)*(9/5)-459.67).toFixed(1);
  $scope.ctemp = (($scope.details.main.temp)-273.15).toFixed(1);
  $scope.icon ='http://openweathermap.org/img/w/'+$scope.details.weather[0].icon+'.png';
  $scope.display=$scope.ftemp;


  $scope.changeTemp = function(){
    if($scope.display === $scope.ftemp){
      $scope.display = $scope.ctemp;
    }
    else{
      $scope.display = $scope.ftemp;
    }
  }
        });
     });

}]);
