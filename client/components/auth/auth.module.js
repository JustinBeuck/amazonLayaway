'use strict';

angular.module('amazonLayawayApp.auth', ['amazonLayawayApp.constants', 'amazonLayawayApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
