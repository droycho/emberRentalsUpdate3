import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    save1() {
      var params = {
        announcement: this.get('announcement'),
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : ""
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('announcementSave', params);
    }
  }
});
