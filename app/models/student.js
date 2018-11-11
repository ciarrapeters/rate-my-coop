import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    contact: DS.attr('string'),
    mycoops: DS.hasMany('mycoop')
    // include a belongsTo for company?
});
