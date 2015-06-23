'use strict';

var moviesControllers = angular.module('moviesControllers', ['moviesService']);

moviesControllers.controller('MoviesListController', ['$scope', 'MovieService',
	function ($scope, MovieService) {
		$scope.movies = MovieService.query();
	}]);