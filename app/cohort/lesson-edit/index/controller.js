import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveLesson(model, formValue) {
      console.log('saved');
      model.setProperties(formValue);
      model.save();
    }
  }
});
