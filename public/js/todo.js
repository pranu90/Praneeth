var storeApp = angular.module('storeApp', []);



storeApp.controller('CategoryCntrl', function ($scope) {
	
	$scope.categories = [
	  {text:'TV'},
	  {text:'Refrigerator'},
	  {text:'Nail Polish'}
	  
	  ];
});


storeApp.controller('CategoryViewController', function ($scope, $routeParams) {
	$scope.categoryid = $routeParams.categoryid;
});