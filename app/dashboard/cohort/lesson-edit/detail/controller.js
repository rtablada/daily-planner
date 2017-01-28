import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(lesson, formValues) {
      lesson.setProperties(formValues);

      lesson.save()
        .then(() => {
          this.transitionToRoute('dashboard.cohort.detail', lesson.get('cohort'));
        });
    }
  }
});
