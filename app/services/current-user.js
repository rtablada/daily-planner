import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'daily-planner/config/environment';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  user: null,

  load() {
    const token = this.get('session.data.authenticated.access_token');

    return fetch(`${config.DS.host}/${config.DS.namespace}/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((raw) => {
      if (raw.ok) {
        return raw.json();
      }

      return Promise.reject(this.get('session').invalidate());
    }).then((data) => {
      const currentUser = this.get('store').push(data);

      this.set('user', currentUser);
    });
  }
});
