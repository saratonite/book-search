'use strict';

/**
 * @ngdoc service
 * @name bookSearchApp.book
 * @description
 * # book
 * Service in the bookSearchApp.
 */
angular.module('bookSearchApp')
  .service('Book', function (api) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var book = this;
    book.search = function (keyword) {
    	return api.request('GET','search/'+keyword);
    };

    book.get = function(bookId) {

    	return api.request('GET','book/'+bookId);
    }

    return book;
  });
