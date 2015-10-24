'use strict';

/**
 * @ngdoc service
 * @name bookSearchApp.api
 * @description
 * # api
 * Service in the bookSearchApp.
 */
angular.module('bookSearchApp')
  .service('api', function ($http) {
    var api = this;
    api.endPoint = "http://it-ebooks-api.info/v1/";

    api.request = function(method,url,data) {
    	var requestURL = api.endPoint+url;
    	return $http({
    		method:method,
    		url:requestURL,
    		data:data
    	});
    };

    return api;

  });
