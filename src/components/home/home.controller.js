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
          this.reportList.sort((a, b) => {
            return a.owner < b.owner ? -1 : 1;
          });
        }
      }, {
        value: 'Report Title',
        sort: () => {
          this.reportList.sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          });
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
