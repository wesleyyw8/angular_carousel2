export default class HomeController {
	constructor(dataService) {
		'ngInject';

    this.dataService = dataService;
  }

  $onInit = () => {
    const loadDropDownList = () => {
      this.sortDropDownList = [{
        value: 'Owner'
      }, {
        value: 'Report Title'
      }];
      this.filterSelected = this.sortDropDownList[0].value;
    }

    const loadListReport = () => {
      this.dataService.getReportList().then(data => {
        this.reportList = data;
      });
    }

    loadListReport();
    loadDropDownList();
  };

}
