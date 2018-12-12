import template from './report-item.html';
import ReportItemController from './report-item.controller.js';

export default {
  template: template,
  controller: ReportItemController,
  bindings: {
    hero: '='
  }
};
