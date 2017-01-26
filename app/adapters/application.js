import DS from 'ember-data';
import config from 'daily-planner/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  ...config.DS,
  authorizer: 'authorizer:token',
});
