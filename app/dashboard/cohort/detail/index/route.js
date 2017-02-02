import Ember from 'ember';
import { sortBy, reverse, head } from 'lodash';

export default Ember.Route.extend({
  afterModel(cohort) {
    cohort.get('lessons')
      .then((lessons) => {
        const lesson = head(reverse(sortBy(lessons.toArray(), l => l.get('dateForSorting'))));

        this.transitionTo('dashboard.cohort.detail.lesson', lesson);
      });
  },
});
