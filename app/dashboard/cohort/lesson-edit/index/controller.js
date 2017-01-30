import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(model, formValue) {
      model.setProperties(formValue);
      model.save();
    },

    copyFrom(model, from, to) {
      const value = model.get(from);

      model.set(to, value);
    }
  }
});
