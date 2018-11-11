import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCompany(param) {
            if(param !== '') {
                console.log("param not empty string");
                return this.store.query('company', {name: param});
            }
            else {
                // TODO: fix this 
                console.log("unnecessary else case in companies.js")
                return this.store.query('company', {name: 'dfjdfjd'});
            }
        }
    }
});
