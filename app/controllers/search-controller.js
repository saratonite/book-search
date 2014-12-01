app.controller('searchController',['$scope','BookService','$routeParams','$location',function($scope,BookService,$routeParams,$location){
	//alert("Hello");
	
		//console.log($routeParams.page);
		$scope.search=function(){
		$scope.search_term=$routeParams.term;
		var resp=BookService.search($scope.search_term,$routeParams.page);
		resp.success(function(data){
			$scope.searched=true;
			console.log(data);
			$scope.total=data.Total;
			$scope.books=data.Books;
			$scope.total_pages=0;
			//$scope.pages[];
			if($scope.total>0){
				$scope.total_pages=Math.ceil(data.Total/10);
				for(i=1;i<=total_pages;i++){
					$scope.pages.push(i);
				}
			}
			console.log("pages "+$scope.pages);
			
			console.log(data.Books);
		});
	}

	$scope.hitSearch=function(){
		$location.path('/search/'+$scope.search_term);
	}

	$scope.search();
	
	
	
}]);
