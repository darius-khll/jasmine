
var app = angular.module('app', ["ngComponentRouter"]);


app.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
  `<nav>
      <a ng-link="['First']">First</a>
      <a ng-link="['Heroes']">Heroes</a>
      
    </nav>
    <ng-outlet></ng-outlet>`,
  $routeConfig: [
    { path: '/first', name: 'First', component: 'first', useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: 'heroes' }
  ]
});


