import { sortReportListByOwner, sortReportListByReportTitle } from  './home.controller.helper';

export default class HomeController {
	constructor(dataService) {
		'ngInject';
    this.dataService = dataService;
  }

  $onInit = () => {
    const loadDropDownList = () => {
      this.sortDropDownList = [{
        value: 'Owner',
        sort: () => {
          this.reportList = sortReportListByOwner(this.reportList);
        }
      }, {
        value: 'Report Title',
        sort: () => {
          this.reportList = sortReportListByReportTitle(this.reportList);
        }
      }];
      this.filterSelected = this.sortDropDownList[0].value;
      this.sortDropDownList[0].sort();
    }

    const loadListReport = () => {
      this.dataService.getReportList().then(data => {
        this.reportList = data;
        loadDropDownList();
      });
    }
    this.sortList = value => {
      this.filterSelected = value;
    };
    loadListReport();
  };
}
