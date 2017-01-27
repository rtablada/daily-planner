import DS from 'ember-data';

export default DS.Model.extend({
  cohort: DS.belongsTo('cohort'),
  login: DS.attr('string'),

  instructor: DS.attr('boolean'),
});
