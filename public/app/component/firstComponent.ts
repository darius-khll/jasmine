
app = angular.module('app');


class FirstComponent {

    public $router: ng.Router;

    public async $onInit()
    {
        console.log("started...");
    }

    public check(): void {
        this.goToSecondComponent();
    }

    public goToSecondComponent() {
        this.$router.navigate(['Second']);
    }

    public async $onDestroy()
    {
        console.log("finished...");
    }
}

app.component('first',
    {
        templateUrl: "app/view/firstView.html",
        controller: FirstComponent,
        controllerAs: 'vm',
        bindings: { $router: '<' }
    });