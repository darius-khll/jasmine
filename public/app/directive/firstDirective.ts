
app = angular.module('app');

app.directive('firstDirective', () => {
    return {
        scope: {
            foreignClick: '@'
        },
        template: () => {
            return `<h2 style="color:red">it's directive modules can call from foreign element!</h2>`;
        },
        link: (scope: any, element, attr) => {
            $(scope.foreignClick).click((e) => {
                alert('wow');
            });
        }
    }
});
