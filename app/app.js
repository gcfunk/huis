'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ngResource'
]).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('/app', '/app/people-list');
  $urlRouterProvider.otherwise("/app/people-list");

  $stateProvider
    .state('header', {
      url: '/app',
      templateUrl: 'header/header.html'
    })
    .state('header.people-list', {
      url: '/people-list',
      template: "<people-list></people-list>"
    })
    .state('header.game', {
      url: '/game',
      template: "<game></game>"
    });
});
