import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(cohort, formValues) {
      const lesson = this.store.createRecord('lesson', {
        ...formValues,
        cohort
      });

      lesson.save()
        .then(() => {
          this.transitionToRoute('dashboard.cohort.detail', cohort);
        });
    }
  }
});
