import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  visible: DS.attr('boolean'),

  week: DS.attr('string'),
  day: DS.attr('string'),

  publicNotes: DS.attr('string'),
  instructorNotes: DS.attr('string'),
  cohort: DS.belongsTo('cohort'),
});
