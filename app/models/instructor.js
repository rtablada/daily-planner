import DS from 'ember-data';

export default DS.Model.extend({
  cohort: DS.belongsTo('cohort'),
  user: DS.belongsTo('user')
});
