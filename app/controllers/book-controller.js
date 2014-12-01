app.controller('BookController',['$scope','BookService','$routeParams',function($scope,BookService,$routeParams){
	PromiseBook=BookService.getBook($routeParams.BookId);
	PromiseBook.success(function(data){
		$scope.bookData=data;
	});
}]);