'use strict';

/**
 * @ngdoc overview
 * @name bookSearchApp
 * @description
 * # bookSearchApp
 *
 * Main module of the application.
 */
angular
  .module('bookSearchApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularSpinner',
    'toastr'
  ])
  .config(function ($routeProvider,$httpProvider) {
    // Hack CORS
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = false;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    //$httpProvider.defaults.headers.common["Accept"] = "application/json";
    //$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

    // App Routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search/:keyword',{
        templateUrl:'views/search.html',
        controller:'SearchCtrl'
      })
      .when('/book/:bookId',{
        templateUrl:'views/book.html',
        controller:'BookCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
