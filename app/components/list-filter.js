import Component from '@ember/component';

export default Component.extend({
    classNames: ['list-filter'],
    value: '',

    init() {
        this._super(...arguments);
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.value;
            this.filter(filterInputValue).then((filterResults) => this.set("results", filterResults));
        }
    }
});
