'use strict';

/**
 * @ngdoc function
 * @name bookSearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the bookSearchApp
 */
angular.module('bookSearchApp')
  .controller('SearchCtrl', function ($scope,$routeParams,$location,Book,usSpinnerService,toastr) {


  	/*
  	
  	Fetch seatch results from server
  	 */
  	console.log("SearchCtrl");
  	$scope.fetch = function() {
  		usSpinnerService.spin('spinner-1');
  		$scope.q = $routeParams.keyword;
  		$scope.data = {};
  		Book.search($scope.q)
  		.success(function(response,status){
  			console.log(status);
  			$scope.data = response;
  			setTimeout(function(){
  		    usSpinnerService.stop('spinner-1');
  			toastr.success(response.Total+" Results found");

  			},1234);

  			
  		})
  		.error(function(error,status){

      if(status== -1) {
        toastr.error("Connection Error !");
      }
  		usSpinnerService.stop('spinner-1');
      
  		});

  	}

  	$scope.fetch();

  });
