import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    },

    login() {
      this.get('session')
        .authenticate('authenticator:torii', 'github')
        .then((success) => {
          debugger;
        })
        .catch((e) => {
          console.log(e);
          alert('There was an error authenticated to Github.');
        });
    },
  }
});
