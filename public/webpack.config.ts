
module.exports = {
    entry: [
        /*'./bower_components/angular/angular.js',
        './bower_components/jquery/dist/jquery.js',
        './bower_components/angular-component-router/angular_1_router.js',*/

        './app/container.js',
        './app/service/firstService.js',
        './app/component/firstComponent.js',
        './app/component/secondComponent.js',
        './app/directive/firstDirective.js'
    ]
    , output: {
        filename: 'bundle.js'
    }
    , watch: true
}