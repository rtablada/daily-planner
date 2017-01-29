import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    },

    login() {
      const flash = this.get('flashMessages');

      this.get('session')
        .authenticate('authenticator:torii', 'github')
        .then(() => {
          flash.success('Login Successful!');
          this.transitionToRoute('dashboard');
        })
        .catch((e) => {
          if (Array.isArray(e.errors)) {
            return e.errors.map((error) => {
              flash.danger(error.title);
            });
          }
          alert('There was an error authenticated to Github.');
        });
    },
  }
});
