
app = angular.module('app');


class FirstComponent {

    public $router: ng.Router;

    constructor(private $http: ng.IHttpService) {

    }

    public async $onInit() {
        console.log("started...");
    }

    public async check(): Promise<void> {
        let records: any = await this.$http.get("/getRecords");
        alert(records.data[0]);
        this.goToSecondComponent();
    }

    public goToSecondComponent() {
        this.$router.navigate(['Second']);
    }

    public async $onDestroy() {
        console.log("finished...");
    }
}

FirstComponent.$inject = ['$http'];

app.component('first',
    {
        templateUrl: "app/view/firstView.html",
        controller: FirstComponent,
        controllerAs: 'vm',
        bindings: { $router: '<' }
    });