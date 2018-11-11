export default function() {
  this.namespace = '/api';

  this.get('/companies', function() {
    return {
      data: [{
        type: 'companies',
        id: 'company-1',
        attributes: {
          name: 'blueport',
          student: 'ashna'
        },
      }, {
        type: 'companies',
        id: 'company-2',
        attributes: {
          name: 'salsify',
          student: 'ciarra'
        }
      }, {
        type: 'companies',
        id: 'company-3',
        attributes: {
          name: 'palantir',
          student: 'manas'
        }
      }
    ],
    };
  });
}