'use strict';

/**
 * @ngdoc function
 * @name bookSearchApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookSearchApp
 */
angular.module('bookSearchApp')
  .controller('BookCtrl', function ($scope,$location,$routeParams,Book,usSpinnerService) {

  	$scope.bookId = $routeParams.bookId;



  	$scope.fetchBook = function() {
      usSpinnerService.spin('bs-load-details');

  		Book.get($scope.bookId)
  			.success(function(response){

          $scope.book = response;
          setTimeout(function(){
            usSpinnerService.stop('bs-load-details');
          },1234);


  			})
  			.error(function(){
          setTimeout(function(){
            usSpinnerService.stop('bs-load-details');
          },1234);
  			});
  	}

  	$scope.fetchBook();

  });
