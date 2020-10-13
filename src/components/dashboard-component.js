function dashboardController() {
  var model = this;
  model.message = 'Hello from dashboard component';
}

const DASHBOARD_COMPONENT = {
  controller: dashboardController,
  template: '{{ $ctrl.message }}'
}

export const DASHBOARD_MODULE = angular.module('dashboard.module', [])
  .component('dashboardComponent', DASHBOARD_COMPONENT);