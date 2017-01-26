import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import config from 'daily-planner/config/environment';

function parseJson(r) {
  if (r.ok) {
    return r.json();
  }

  return r.json().then(data => Promise.reject(data));
}

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),

  authenticate() {
    return this._super(...arguments).then(data => fetch(`/${config.DS.namespace}/token-auth`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'auth-code': data.authorizationCode })
    }).then(parseJson)
      .then(res => ({
        access_token: res.token,
        provider: data.provider
      })));
  }
});
