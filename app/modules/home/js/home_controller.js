(function()
{
    /* global angular */
    'use strict'; // jshint ignore:line

    angular
        .module('Controllers')
        .controller('HomeController', HomeController);

    function HomeController()
    {
        var vm = this;

        vm.welcomeMessage = 'Hello World';
    }
})();
