var app = angular.module('facturacionApp',['ngRoute','facturacionApp.configuracion']);

app.controller('mainCtrl',['$scope','Configuracion', function($scope, Configuracion){
  $scope.config = {};
  $scope.usuario = {
    "nombre": "Pablo"
  };
  Configuracion.cargar().then(function(){
    $scope.config = Configuracion.config;
    console.log($scope.config);
  })
}]);


// RUTAS
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'dashboard/dashboard.html'
      }).
      otherwise({
        redirectTo: '/'
      })
}]);



//FILTROS
app.filter('quitarLetra', function(){
  return function(palabra){
    if(palabra != undefined && palabra.length > 1){
      return palabra.substring(1);
    } else {
      return palabra;
    }
  }
});
