import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log("hit companies route");
//    return this.store.findAll('company');
  }
});
