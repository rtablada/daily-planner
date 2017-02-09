import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    saveLesson(cohort, formValues) {
      const lesson = this.store.createRecord('lesson', {
        ...formValues,
        cohort,
        date: moment(formValues.date),
      });

      lesson.save()
        .then(() => {
          this.transitionToRoute('dashboard.cohort.detail', cohort);
        });
    }
  }
});
