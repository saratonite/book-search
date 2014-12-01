app.service('BookService',['$http',function($http){
	var userdata=null;
	return {
		search:function(term,page){
			page_url='';
			if(page){
				page_url='/page/'+page
			}
			$promise=$http.get('http://it-ebooks-api.info/v1/search/'+term+page_url);
			return $promise;
		},
		getBook:function(Id){
			var id=Id;
			$promise=$http.get('http://it-ebooks-api.info/v1/book/'+id);
			return $promise;
		}
	}
}]);