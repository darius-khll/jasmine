
app = angular.module('app');

app.directive('firstDirective', function () {
    return {
        scope: {
            foreignClick: '@'
        },
        template: function () {
            return `<h2 style="color:red">it's directive modules can call from foreign element!</h2>`;
        },
        link: function (scope: any, element, attr) {
            $(scope.foreignClick).click(function (e) {
                alert('wow');
            });
        }
    }
});
