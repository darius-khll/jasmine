
var app = angular.module('app', ["ngComponentRouter"]);


app.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
  `<nav>
      <a ng-link="['CrisisCenter']">Crisis Center</a>
      <a ng-link="['Heroes']">Heroes</a>
      
    </nav>
    <ng-outlet></ng-outlet>`,
  $routeConfig: [
    { path: '/crisis-center', name: 'CrisisCenter', component: 'crisisCenter', useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: 'heroes' }
  ]
});

app.component('crisisCenter', { template: "<h2>Crisis component</h2>" });
app.component('heroes', { template: "<h2>Heroes component</h2>" });

//////////////////////////////////////////////////////////////////////

class Ctrl {
  public Name = 'Ali';
}

app.component('ctrl',
  {
    controller: Ctrl, template: `<h1>this is from component by {{vm.Name}}</h1>`, controllerAs: 'vm'
  });

