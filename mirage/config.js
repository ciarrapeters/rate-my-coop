export default function() {
  this.namespace = '/api';
  let companies = [{
      type: 'companies',
      id: 'company-1',
      attributes: {
        name: 'blueport',
        students: [{
          "name": 'ashna',
          "contact": 'shah.ash@husky.neu.edu',
          "mycoops": [{
            "companyName": "blueport",
            "geoLocation": "Boston, MA",
            "review": "Great!",
            "year": "2017"
          }, {
            "companyName": "fluidscreen",
            "geoLocation": "Boston, MA",
            "review": "Meh!",
            "year": "2018"
          }]
        }, {
          "name": 'ciarra',
          "contact": 'peters.ci@husky.neu.edu',
            "mycoops": [{
            "companyName": "blueport",
            "geoLocation": "Boston, MA",
            "review": "Great!",
            "year": "2017"
          }]
        }]
      },
    }, {
      type: 'companies',
      id: 'company-2',
      attributes: {
        name: 'salsify',
        students: [{"name": 'ciarra', "contact": 'peters.ci@husky.neu.edu'}]
      }
    }, {
      type: 'companies',
      id: 'company-3',
      attributes: {
        name: 'palantir',
        students: [{"name": 'manas', "contact": 'purohit.ma@husky.neu.edu'}]
      }
    }
  ];

  this.get('/companies', function(db, request){
    if(request.queryParams.name !== undefined) {
      let filteredCompanies = companies.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      console.log("not empty");
      return {data: filteredCompanies};
    } else {
      console.log("empty data");
      return {data: []};
    }
  });
}
