
app = angular.module('app');


class FirstComponent {
    public check(): void
    {
        alert('wow');
    }
}

app.component('first',
    {
        templateUrl: "app/view/firstView.html",
        controller: FirstComponent,
        controllerAs: 'vm'

    });