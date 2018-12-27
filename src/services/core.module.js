import routerHelperService from './router-helper/router-helper.service';
import dataService from './data/data.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('dataService', dataService);

export default coreModule;
