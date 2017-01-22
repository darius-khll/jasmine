
var app = angular.module('app', ["ngComponentRouter"]);

app.component("appHome", {
    template: `
        <hr>
        <div>
            <div>Panel heading = HomePage</div>
            <div>
                HomePage
            </div>
        </div>`
});

//////////////////////////////////////////////////////////////////////

class Ctrl {
    public Name = 'Ali';
}

app.component('ctrl',
    {
        controller: Ctrl, template: `<h1>this is from component by {{vm.Name}}</h1>`, controllerAs: 'vm'
    });

