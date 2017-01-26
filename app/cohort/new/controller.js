import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    saveCohort(formValues) {
      const data = { ...formValues, startDate: moment(formValues.startDate) };

      const cohort = this.store.createRecord('cohort', data);

      cohort.save()
        .then(() => {
          this.transitionToRoute('cohort.index');
        });
    }
  }
});
