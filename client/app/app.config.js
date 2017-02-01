(function() {
    'use strict';

    angular.module('app').config(config)

    function config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

        $locationProvider.html5Mode(true)

        var myTheme = {
            '50': '#e9f7f9',
            '100': '#d5eff4',
            '200': '#c0e8ef',
            '300': '#ace0ea',
            '400': '#97d9e5',
            '500': '#83d1e0',
            '600': '#6fc9db',
            '700': '#5ac2d6',
            '800': '#46bad1',
            '900': '#33b2ca',
            'A100': '#fdfeff',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#2da0b6'
        };
        $mdThemingProvider
            .definePalette('myTheme',
                myTheme);

        $mdThemingProvider
            .theme('default')
            .primaryPalette('myTheme')
            .warnPalette('red')
            .backgroundPalette('grey');

        $stateProvider
            .state({
                name: 'app',
                abstract: true,
                component: 'app',
            })
            .state({
                name: 'home',
                parent: 'app',
                url: '/',
                component: 'cardList',
            })
    }

}());
