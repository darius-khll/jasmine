
app = angular.module('app');


class FirstComponent {
    
    public $router: ng.Router;

    public check(): void {
        this.goToSecondComponent();
    }

    public goToSecondComponent() {
        this.$router.navigate(['Second']);
    }
}

app.component('first',
    {
        templateUrl: "app/view/firstView.html",
        controller: FirstComponent,
        controllerAs: 'vm',
        bindings: { $router: '<' }
    });