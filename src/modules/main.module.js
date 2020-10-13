import LANDING_COMPONENT from '../components/landing-component';

export const MAIN_MODULE = angular.module('main.module', [])
  .component('landingComponent', LANDING_COMPONENT);

MAIN_MODULE.config(function($stateProvider) {
  var landingState = {
    name: 'landing',
    url: '/',
    component: 'landingComponent'
  }

  var dashboardState = {
    name: 'dashboard',
    url: '/dashboard',
    component: 'dashboardComponent',
    lazyLoad: async ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
      const mod = await import(/* webpackChunkName: 'dashboard' */ '../components/dashboard-component');
      $ocLazyLoad.load(mod.DASHBOARD_MODULE);
    }
  }

  $stateProvider.state(landingState);
  $stateProvider.state(dashboardState);
});