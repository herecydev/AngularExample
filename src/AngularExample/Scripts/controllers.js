'use strict';

var moviesControllers = angular.module('moviesControllers', ['moviesService']);

moviesControllers.controller('MoviesListController', ['$scope', 'MovieService',
	function ($scope, MovieService) {
		$scope.movies = MovieService.query();
	}]);

moviesControllers.controller('MoviesAddController', ['$scope', '$location', 'MovieService',
	function ($scope, $location, MovieService) {
		$scope.movie = new MovieService();
		$scope.add = function () {
			$scope.movie.$save(function () {
				$location.path('/');
			});
		};
	}]);