import DS from 'ember-data';

export default DS.Model.extend({
    announcement: DS.attr(),
    author: DS.attr(),
    date: DS.attr()
});
