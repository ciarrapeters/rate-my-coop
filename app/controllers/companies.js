import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCompany(param) {
            if(param !== '') {
                return this.store.query('company', {name: param});
            }
            else {
                // TODO: fix this 
                return this.store.query('company', {name: 'dfjdfjd'});
            }
        }
    }
});
