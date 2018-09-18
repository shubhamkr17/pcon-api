
var app = angular.module('pcon', ['ngRoute']);
app.controller('navController', function($scope,$http) {
	$scope.getNotices = function() {
	$http.get("/api/notices").then(function(response) {
		$scope.notices = response.data;
		console.log($scope.notices);
		});
	}

	$scope.subscribe = function(email) {
		var subObj=JSON.stringify({
			"email":email
		});
		$http.post("/api/subscribers", subObj).then(function(response){
			$scope.status="Done !";
		},function(response){
			$scope.status="Fail !";
		});
	}



});

app.config(['$routeProvider',function config($routeProvider)
	{
	$routeProvider.
	when('/', {
	  templateUrl: 'home/home.html'
	  //controller : 'homeController'
	}).
	when('/team', {
	  templateUrl: 'team/team.html',
	  controller : 'teamController'
	}).
	when('/achievements', {
	  templateUrl: 'achieve/achieve.html'
	  //controller : 'homeController'
	}).
	when('/gallery', {
	  templateUrl: 'gallery/gallery.html',
	  controller : 'galleryController'
	}).
	otherwise({
	  redirectTo: '/'
	});
	}
]);


app.
controller('galleryController', function($scope, $http) {

	$scope.images="";
	$http.get("/api/images").then(function(response) {
		$scope.images = response.data;
		console.log(response.data);
	});

}).directive('lightgallery', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.$last) {
        element.parent().lightGallery();
      }
    }
  };
})

app.controller('teamController',function($scope,$http){

	$http.get("/api/members")
    .then(function(response) {
        $scope.persons=response.data;
				console.log( $scope.persons );
    });

})
