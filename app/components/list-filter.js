import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-filter'],
    value: '',

    init() {
        this._super(...arguments);
        //this.filter('').then((results) => this.set('results', results));
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.value;
            let filterAction = this.filter;
            filterAction(filterInputValue).then((filterResults) => this.set("results", filterResults));
            // filterAction(filterInputValue).then(function(filterResults) {
                // if (filterResults === undefined) {
                //     console.log("undefined: ", filterResults);
                //     this.set('results', '');
                // }
                // else {
                //     console.log(filterResults);
                //     this.set("results", filterResults);
                // }
            //}); 
        }
    }
});
