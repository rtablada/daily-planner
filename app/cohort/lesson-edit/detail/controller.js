import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(lesson, formValues) {
      lesson.setProperties(formValues);

      lesson.save()
        .then(() => {
          this.transitionToRoute('cohort.detail', lesson.get('cohort'));
        });
    }
  }
});
