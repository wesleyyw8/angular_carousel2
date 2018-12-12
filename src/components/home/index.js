import homeComponent from './home.component';
import reportItemComponent from '../report-item/report-item.component';

const homeModule = angular.module('app.home', ['ui.router']);

// loading components, services, directives, specific to this module.
homeModule.component('home', homeComponent);
homeModule.component('reportItem', reportItemComponent);

// export this module
export default homeModule;
