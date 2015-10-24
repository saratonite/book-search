'use strict';

/**
 * @ngdoc function
 * @name bookSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the bookSearchApp
 */
angular.module('bookSearchApp')
  .controller('SearchCtrl', function ($scope,$routeParams,$location,book) {


  	/*
  	
  	Fetch seatch results from server
  	 */
  	$scope.fetch = function() {
  		$scope.q = $routeParams.keyword;
  		$scope.data = {};
  		book.search($scope.q)
  		.success(function(response,status){
  			console.log(status);
  			$scope.data = response;
  			
  		})
  		.error(function(error,status){
  			console.log(status);
  			alert('Err');
  		});

  	}

  	$scope.fetch();

  });
