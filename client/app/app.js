'use strict';

angular.module('amazonLayawayApp', ['amazonLayawayApp.auth', 'amazonLayawayApp.admin',
    'amazonLayawayApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
