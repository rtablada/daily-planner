import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    const user = this.modelFor('dashboard');

    if (!user.get('isAdmin')) {
      return user.get('student')
        .then(student => student.get('cohort'))
        .then((cohort) => {
          this.transitionTo('dashboard.cohort.detail', cohort.id);
        });
    }
  },
  model() {
    return this.store.findAll('cohort');
  },
});
