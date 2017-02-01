import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  avatarUrl: DS.attr(),
  isAdmin: DS.attr('boolean'),

  student: DS.belongsTo('student'),
  instructor: DS.belongsTo('instructor'),
});
