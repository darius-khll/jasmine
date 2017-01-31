
app = angular.module('app');

class FirstService
{
    constructor() {
    }

    public getFirstServiceRecords(): number
    {
        return 12345;
    }
}

app.service('firstService', FirstService);