import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToRoot() {
      this.transitionToRoute("home");
    }
  }
});