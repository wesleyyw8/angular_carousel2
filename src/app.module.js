// for loading styles we need to load main scss file
import styles from './styles/styles.scss';

// loading shared module
import './services/core.module';
// loading all module components
import './app.components';

const appModule = angular
	.module('wes-data-hug', [
		// shared module
		'app.core',
		// 3rd party modules
		'ui.router',
		// application specific modules
		'app.header',
		'app.home'
	]);

// appModule.config(($stateProvider, $urlRouterProvider) => {
//   // var helloState = {
//   //   name: 'hello',
//   //   url: '/hello',
//   //   template: '<h3>hello world!</h3>'
//   // }
//   // $stateProvider.state(aboutState);
//   $urlRouterProvider.otherwise('/');
// });

export default appModule;
