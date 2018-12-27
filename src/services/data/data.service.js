import data from './data.json';

export default class DataService {
  constructor(
    $http,
    $q
  ) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;
  }
  getReportList = () => {
    return this.$q.resolve(data);
  };
}