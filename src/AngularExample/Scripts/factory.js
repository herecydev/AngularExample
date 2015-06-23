'use strict';

var moviesServices = angular.module('moviesService', ['ngResource']);

moviesServices.factory('MovieService', ['$resource',
  function ($resource) {
  	return $resource('/api/movies/', {}, {
  		query: { method: 'GET', params: {}, isArray: true }
  	});
  }]);