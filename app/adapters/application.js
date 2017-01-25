import DS from 'ember-data';
import config from 'daily-planner/config/environment';

export default DS.JSONAPIAdapter.extend({
  ...config.DS,
});
