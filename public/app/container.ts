
var app = angular.module('app', ["ngComponentRouter"]);


app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
    '<nav>\n' +
    '  <a ng-link="[\'CrisisCenter\']">Crisis Center</a>\n' +
    '  <a ng-link="[\'Heroes\']">Heroes</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    {path: '/crisis-center/...', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true},
    {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
  ]
});




//////////////////////////////////////////////////////////////////////

class Ctrl {
    public Name = 'Ali';
}

app.component('ctrl',
    {
        controller: Ctrl, template: `<h1>this is from component by {{vm.Name}}</h1>`, controllerAs: 'vm'
    });

