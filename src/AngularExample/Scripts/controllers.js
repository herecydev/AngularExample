'use strict';

var moviesControllers = angular.module('moviesApp');

moviesControllers.controller('MoviesListController', ['$scope', 'MovieService',
	function ($scope, MovieService) {
		$scope.movies = MovieService.query();
	}]);