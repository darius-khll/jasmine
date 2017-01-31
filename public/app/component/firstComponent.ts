
app = angular.module('app');


class FirstComponent {

    public $router: ng.Router;

    constructor(private $http: ng.IHttpService, private firstService: FirstService) {
        console.warn(this.firstService.getFirstServiceRecords());
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

FirstComponent.$inject = ['$http', 'firstService'];

app.component('first',
    {
        templateUrl: "app/view/firstView.html",
        controller: FirstComponent,
        controllerAs: 'vm',
        bindings: { $router: '<' }
    });