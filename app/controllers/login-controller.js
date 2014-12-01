app.controller('loginController',['$scope','userService',function($scope,userService){
	//alert("login controller");
	$scope.doLogin=function(){
		var userdata=userService.login($scope.user);
		console.log(userdata);
		
	}

}]);