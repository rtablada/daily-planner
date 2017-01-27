import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(model, formValue) {
      model.setProperties(formValue);
      model.save();
    },
  }
});
