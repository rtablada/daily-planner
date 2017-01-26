import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  startDate: DS.attr('moment-utc'),
  campus: DS.attr('string'),

  lessons: DS.hasMany('lesson'),
  invites: DS.hasMany('invite'),
  students: DS.hasMany('student'),
  instructors: DS.hasMany('instructor'),
});
