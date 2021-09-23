trustlyApp.controller('worldClockAPIController', ['timeZoneService', function (timeZoneService) {
    var vm = this;
    vm.timeZones = [];
    vm.worldClockList = [];
    vm.hasShownErrorMessage = false;

    vm.load = function () {
        vm.timeZones = timeZoneService.getTimeZones();
        vm.timeZones.forEach((element) => getTimeZoneInformation(element));
    };

    function getTimeZoneInformation(element) {
        timeZoneService.getTimeZoneInformation(element).then(
            (result) => {

                if (!result.data.serviceResponse) {
                    const abbreviation = result.config.url.split('/')[5];
                    const request = vm.timeZones.find(x => x.Abbreviation == abbreviation);

                    const dateTime = result.data.currentDateTime.substring(0, 16).split('T');
                    const date = dateTime[0].split('-').reverse().join('/');
                    result.data.formattedDate = date + " " + dateTime[1];

                    vm.worldClockList.push({ request: request, result: result.data });
                    vm.worldClockList.sort(orderByUtcOffset);
                }
            },
            (error) => {
                if (!vm.hasShownErrorMessage)
                    alert("Some errors occured while processing your request, please verify them in the console !");

                vm.hasShownErrorMessage = true;                
                console.log(error);
            });
    }

    function orderByUtcOffset(item1, item2) {
        let UTC1 = parseInt(item1.result.utcOffset.split(":")[0]);
        let UTC2 = parseInt(item2.result.utcOffset.split(":")[0]);

        if (UTC1 == UTC2)
            return 0;
        else
            return UTC1 > UTC2 ? 1 : -1;
    }
}]);