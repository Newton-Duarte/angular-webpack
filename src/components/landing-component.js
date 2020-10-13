function landingController() {
  var model = this;
  model.message = 'Hello from landing component';
}

const LANDING_COMPONENT = {
  controller: landingController,
  template: '{{ $ctrl.message }}'
}

export default LANDING_COMPONENT;