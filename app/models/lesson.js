import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  date: DS.attr('moment-utc'),
  visible: DS.attr('boolean'),

  week: DS.attr('string'),
  day: DS.attr('string'),

  publicNotes: DS.attr('string'),
  instructorNotes: DS.attr('string'),
  cohort: DS.belongsTo('cohort'),

  dateForSorting: Ember.computed('date', function () {
    return this.get('date').unix();
  })
});
