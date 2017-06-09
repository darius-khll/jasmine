
module ClientApp {
    export module Component {

        app = angular.module('app');

        export class SecondComponent {
            public $router: ng.Router;

            constructor() {
            }

            public async $onInit() {
                
                let a = this.$router;
                debugger;
            }
        }

        app.component('second', { 
            templateUrl: 'static/app/view/secondView.html',
            controller: SecondComponent,
            bindings: { $router: '<' }
        });

    }
}