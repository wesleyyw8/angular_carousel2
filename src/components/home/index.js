import homeComponent from './home.component';
import reportItemComponent from '../report-item/report-item.component';
import subNavbarComponent from '../sub-navbar/sub-navbar.component';

const homeModule = angular.module('app.home', ['ui.router']);

// loading components, services, directives, specific to this module.
homeModule.component('home', homeComponent);
homeModule.component('reportItem', reportItemComponent);
homeModule.component('subNavbar', subNavbarComponent);

// export this module
export default homeModule;
