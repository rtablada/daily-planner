import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveInvite(cohort, formValues, reset) {
      const invite = this.store.createRecord('invite', {
        ...formValues,
        cohort
      });

      invite.save()
        .then(() => {
          reset();
        });
    },

    uninvite(invite) {
      invite.destroyRecord();
    },
  },
});
