import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'daily-planner/config/environment';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  user: null,
  request: null,

  load() {
    const token = this.get('session.data.authenticated.access_token');
    if (this.get('user')) {
      return Promise.resolve(this.get('user'));
    }

    const request = this.get('request') || fetch(`${config.DS.host}/${config.DS.namespace}/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((raw) => {
      if (raw.ok) {
        return raw.json();
      }

      return Promise.reject(this.get('session').invalidate());
    }).then((response) => {
      this.get('store').pushPayload(response);


      return this.get('store').findRecord('user', response.data.id);
    }).then((user) => {
      this.set('user', user);
      this.set('request', null);
    });

    return request;
  }
});
