import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    destroy(flash) {
      if (flash) {
        flash.destroyMessage();
      }
    },
  },
});
