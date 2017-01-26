import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  avatarUrl: DS.attr(),
});
