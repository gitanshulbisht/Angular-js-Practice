var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);

myApp.controller('secondController', ['$scope', '$routeParams', function($scope,$routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
