import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  actions: {
    saveLesson(lesson, formValues) {
      lesson.setProperties({
        ...formValues,
        date: moment(formValues.date),
      });

      lesson.save()
        .then(() => {
          this.transitionToRoute('dashboard.cohort.detail', lesson.get('cohort'));
        });
    }
  }
});
