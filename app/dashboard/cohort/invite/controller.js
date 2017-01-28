import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveInvite(cohort, instructor, formValues, reset) {
      const invite = this.store.createRecord('invite', {
        ...formValues,
        instructor,
        cohort,
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
