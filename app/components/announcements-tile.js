import Ember from 'ember';

export default Ember.Component.extend({
  announcements: Ember.inject.service(),

  showAnnouncements: Ember.on('didInsertElement', function() {
     this.store.findAll('announcement').then((announcements) => {
        this.set('announcements', announcements);
     });
  }),
  actions: {
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
