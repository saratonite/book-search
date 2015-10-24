'use strict';

/**
 * @ngdoc function
 * @name bookSearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookSearchApp
 */
angular.module('bookSearchApp')
  .controller('MainCtrl', function ($scope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.q = "php";

    $scope.hitSearch = function (){
    	alert( $location.absUrl());
    	$location.path('/search/'+$scope.q)
    }

  });
