'use strict';

var moviesApp = angular.module('moviesApp', ['ngRoute', 'moviesService']);

moviesApp.config(['$routeProvider', function ($routeProvider) {
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
}]);