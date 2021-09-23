trustlyApp.service('timeZoneService', ['$http', function($http) {  
        
    const endpoint = 'http://worldclockapi.com/api/json/'
    
    this.getTimeZoneInformation = function (element) {
        return $http.get(endpoint + element.Abbreviation + "/now");
    };

    this.getTimeZones = function () {
        return [{
            Abbreviation: "AST",
            Description: "Arabia Standard Time, Asia UTC +3"
        },
        {
            Abbreviation: "AZOST",
            Description: "Azores Summer Time, Atlantic UTC +0"
        },
        {
            Abbreviation: "AZST",
            Description: "Azerbaijan Summer Time, Asia UTC +5"
        },
        {
            Abbreviation: "AST",
            Description: "Atlantic Standard Time;North, America UTC -4"
        },
        {
            Abbreviation: "CAST",
            Description: "Casey Time, Antarctica UTC +8"
        },
        {
            Abbreviation: "CET",
            Description: "Central European Time, Europe UTC +1"
        },
        {
            Abbreviation: "CST",
            Description: "Central Standard Time;North, America UTC -6"
        },
        {
            Abbreviation: "ChST",
            Description: "Chamorro Standard Time, Pacific UTC +10"
        },
        {
            Abbreviation: "EEST",
            Description: "Eastern European Summer Time, Europe UTC +3"
        },
        {
            Abbreviation: "EST",
            Description: "Eastern Standard Time;North, America UTC -5"
        },
        {
            Abbreviation: "EGST",
            Description: "Eastern Greenland Summer Time;North, America UTC +0"
        },
        {
            Abbreviation: "GMT",
            Description: "Greenwich Mean Time, Europe UTC +0"
        },
        {
            Abbreviation: "GST",
            Description: "Gulf Standard Time, Asia UTC +4"
        },
        {
            Abbreviation: "CST",
            Description: "China Standard Time, Asia UTC +8"
        },
        {
            Abbreviation: "IRST",
            Description: "Iran Standard Time, Asia UTC +3:30"
        },
        {
            Abbreviation: "KOST",
            Description: "Kosrae Time, Pacific UTC +11"
        },
        {
            Abbreviation: "MAGST",
            Description: "Magadan Summer Time, Asia UTC +12"
        },
        {
            Abbreviation: "MST",
            Description: "Mountain Standard Time;North, America UTC -7"
        },
        {
            Abbreviation: "NST",
            Description: "Newfoundland Standard Time;North, America UTC -3:30"
        },
        {
            Abbreviation: "NZST",
            Description: "New Zealand Standard Time, Pacific UTC +12"
        },
        {
            Abbreviation: "PST",
            Description: "Pacific Standard Time;North, America UTC -8"
        },
        {
            Abbreviation: "SAST",
            Description: "South Africa Standard Time, Africa UTC +2"
        },
        {
            Abbreviation: "GST",
            Description: "South Georgia Time;South, America UTC -2"
        },
        {
            Abbreviation: "TOST",
            Description: "Tonga Summer Time, Pacific UTC +14"
        },
        {
            Abbreviation: "UTC",
            Description: "Coordinated Universal Time, Worldwide UTC"
        },
        {
            Abbreviation: "CST",
            Description: "Cuba Standard Time, Caribbean UTC -5"
        },
        {
            Abbreviation: "WEST",
            Description: "Western European Summer Time, Europe UTC +1"
        },
        {
            Abbreviation: "PST",
            Description: "Pitcairn Standard Time, Pacific UTC -8"
        }];
    }
}]);