import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['posts']
},
  {
  actions: {
    update(post,params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if(confirm('Are you sure???')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
