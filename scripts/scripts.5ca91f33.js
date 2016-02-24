"use strict";angular.module("bookSearchApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","angularSpinner","toastr"]).config(["$routeProvider","$httpProvider",function(a,b){b.defaults.useXDomain=!0,b.defaults.withCredentials=!1,delete b.defaults.headers.common["X-Requested-With"],a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/search/:keyword",{templateUrl:"views/search.html",controller:"SearchCtrl"}).when("/book/:bookId",{templateUrl:"views/book.html",controller:"BookCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("bookSearchApp").controller("MainCtrl",["$scope","$location",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.q="php",a.hitSearch=function(){b.path("search/"+a.q)}}]),angular.module("bookSearchApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bookSearchApp").service("api",["$http",function(a){var b=this;return b.endPoint="http://it-ebooks-api.info/v1/",b.request=function(c,d,e){var f=b.endPoint+d;return a({method:c,url:f,data:e})},b}]),angular.module("bookSearchApp").service("Book",["api",function(a){var b=this;return b.search=function(b){return a.request("GET","search/"+b)},b.get=function(b){return a.request("GET","book/"+b)},b}]),angular.module("bookSearchApp").controller("SearchCtrl",["$scope","$routeParams","$location","Book","usSpinnerService","toastr",function(a,b,c,d,e,f){console.log("SearchCtrl"),a.fetch=function(){e.spin("spinner-1"),a.q=b.keyword,a.data={},d.search(a.q).success(function(b,c){console.log(c),a.data=b,setTimeout(function(){e.stop("spinner-1"),localStorage.getItem("_bs_lastquery")!=a.q&&(localStorage.setItem("_bs_lastquery",a.q),f.success(b.Total+" Results found"))},1234)}).error(function(a,b){-1==b&&f.error("Connection Error !"),e.stop("spinner-1")})},a.fetch()}]),angular.module("bookSearchApp").controller("BookCtrl",["$scope","$location","$routeParams","Book","usSpinnerService","toastr",function(a,b,c,d,e,f){a.bookId=c.bookId,a.fetchBook=function(){e.spin("bs-load-details"),d.get(a.bookId).success(function(b){a.book=b,setTimeout(function(){e.stop("bs-load-details")},1234)}).error(function(a){-1==a&&f.error("Connection Error !"),setTimeout(function(){e.stop("bs-load-details")},1234)})},a.fetchBook()}]),angular.module("bookSearchApp").run(["$templateCache",function(a){a.put("views/about.html",'<p> <a href="http://github.com/saratonite">Hey I\'M</a> </p>'),a.put("views/book.html",'<div class="row"> <section class="main-results"> <div> <span us-spinner spinner-key="bs-load-details" spinner-start-active="true"></span> </div> <div ng-show="book"> <div class="col-md-3"> <img class="img-responsive" ng-src="{{book.Image}}" alt="{{book.Title}}"> <p class="container-fluid"> <a class="btn btn-primary btn-block" href="">Download</a> </p> </div> <div class="col-md-9"> <h3>{{book.Title}}</h3> <p> {{book.Description}} </p> <p> <table class="table table-bordered"> <tr> <td>Author</td> <td>{{book.Author}}</td> </tr> <tr> <td>Publisher</td><td>{{book.Publisher}}</td> </tr> <tr> <td>Year</td><td>{{book.Year}}</td> </tr> <tr> <td>ISBN</td><td>{{book.ISBN}}</td> </tr> <tr> <td>Pages</td><td>{{book.Page}}</td> </tr> </table> </p> </div> </div> </section> </div>'),a.put("views/main.html",'<div class="main-box"> <h3>Search Books <small>Free Books For Hackers</small></h3> <p> <input class="form-control" ng-model="q" type="text"> </p> <p> <input type="button" name="search" class="btn btn-sccess" value="Search" ng-click="hitSearch()"> </p> </div>'),a.put("views/search.html",'<div class="row"> <!-- <div class="form-inline">\n		<input type="text" class="form-control" ng-model="q">\n	</div> --> <div> <span us-spinner spinner-key="spinner-1" spinner-start-active="true"></span> </div> <div class="main-results"> <div class="book-item row" ng-repeat="book in data.Books"> <img class="col-md-3" ng-src="{{book.Image}}"> <p class="book-details col-md-6"> <h3><a href="#/book/{{book.ID}}">{{book.Title}}</a></h3> {{book.Description}} </p> </div> </div> </div>')}]);