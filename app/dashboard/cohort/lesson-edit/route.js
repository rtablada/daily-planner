import Ember from 'ember';

export default Ember.Route.extend({
  serialize(lesson) {
    return { lesson_id: lesson.get('id'), cohort_id: lesson.get('cohort.id') };
  }
});
