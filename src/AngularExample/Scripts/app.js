'use strict';

var moviesApp = angular.module('moviesApp', ['ngRoute', 'moviesControllers']);

moviesApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/Views/list.html',
		controller: 'MoviesListController'
	})
    .when('/movies/add', {
        templateUrl: '/Views/add.html',
        controller: 'MoviesAddController'
    })
    .when('/movies/edit/:id', {
        templateUrl: '/Views/edit.html',
        controller: 'MoviesEditController'
    })
    .when('/movies/delete/:id', {
        templateUrl: '/Views/delete.html',
        controller: 'MoviesDeleteController'
    });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);