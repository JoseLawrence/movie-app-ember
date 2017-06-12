import DS from 'ember-data';

export default DS.Model.extend({
 	title: DS.attr('string'),
 	icon: DS.attr('string'),
 	genre: DS.attr('string'),
 	description: DS.attr('string')
});
