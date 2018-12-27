export default class ReportItemController {
  constructor() {
    'ngInject';
  }

  $onInit = () => {
    this.calculateLastUpdatedTime = (lastUpdatedOnDate) => {
      const result = ( new Date() - new Date(lastUpdatedOnDate)) / (1000*60*60*24);
      if (result > 1) {
        return `${Math.floor(result)} days `;
      }
      else {
        return `${parseInt(result*24)} hours `; 
      }
    }
  };
}
