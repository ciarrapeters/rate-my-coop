import DS from 'ember-data';

export default DS.Model.extend({
    // should company name link to an actual company?
    companyName: DS.attr('string'), 
    geoLocation: DS.attr('string'),
    review: DS.attr('string'),
    timePeriod: DS.attr('string')
    // need studentId as a unique identifier?
    // Link mycoop to student?

});
