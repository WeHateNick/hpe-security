import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './results.routes';

export class ResultsCtrl {
    constructor($state, $rootScope) {
        this.$state = $state;
        this.$rootScope = $rootScope;
    }
    $onInit() {
        this.results = [
          {
              name: 'Governance',
              score: {
                  dbEntity: 'governanceScore',
                  analyticsName: 'Governance Score',
                  value: 0
              },
              average: {
                  dbEntity: 'governanceAvg',
                  analyticsName: 'Governance Average Score',
                  value: 0
              }
          }, {
              name: 'Construction',
              score: {
                  dbEntity: 'constructionScore',
                  analyticsName: 'Construction Score',
                  value: 0
              },
              average: {
                  dbEntity: 'constructionAvg',
                  analyticsName: 'Construction Average Score',
                  value: 0
              }
          }, {
              name: 'Verification',
              score: {
                  dbEntity: 'verificationScore',
                  analyticsName: 'Verification Score',
                  value: 0
              },
              average: {
                  dbEntity: 'verificationAvg',
                  analyticsName: 'Verification Average Score',
                  value: 0
              }
          }, {
              name: 'Deployment',
              score: {
                  dbEntity: 'deploymentScore',
                  analyticsName: 'Deployment Score',
                  value: 0
              },
              average: {
                  dbEntity: 'deploymentAvg',
                  analyticsName: 'Deployment Average Score',
                  value: 0
              }
          }
        ];
        this.readOnly = true;
        this.getAvgOffset = (score) => {
            score = Math.round(score);
            var offset = score * 10;
            var final = 'left: ' + offset + '%;';
            return final;
        };
        if (this.$state.params.reg) {
            this.isRegistered = true;
        }

        this.$rootScope.mainstayConfig.init()
    }
}
ResultsCtrl.$inject = ['$state', '$rootScope'];

export default angular.module('hpeSecurityApp.results', [uiRouter])
  .config(routing)
  .component('results', {
      template: require('./results.html'),
      controller: ResultsCtrl,
      controllerAs: '$ctrl'
  })
  .name;