import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCompany(param) {
          if (param !== '') {
            return this.store.query('company', { orderBy: 'name', startAt: param, endAt: param + '\uf8ff' });
          }
          else {
            return this.store.query('company', { orderBy: 'name', equalTo: '' });
          }
       }
    }
});
