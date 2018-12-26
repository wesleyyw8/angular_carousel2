export default class HomeController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = ':D';
		this.$log.info('Activated Home View.');
    
    this.sortDropDownList = [{
      value: 'Owner'
    }, {
      value: 'Report Title'
    }];
    this.filterSelected = this.sortDropDownList[0].value;

	};
}
