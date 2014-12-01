app.controller('mainController',['$scope','BookService','$routeParams','$location',function($scope,BookService,$routeParams,$location){

	$scope.hitSearch=function(){
		$location.path('/search/'+$scope.search_term);
	}
	
}]);
