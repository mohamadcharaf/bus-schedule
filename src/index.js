var http = require('http'), 
AlexaSkill = require ('./AlexaSkill'), 
APP_ID = 'amzn1.ask.skill.7299e2d0-7c31-46dc-a51b-bf0ad4822fd5',
MTA_KEY = 'b9007f42-47a5-4d4d-b2b7-380519e55b6e';

var url = function(stopId){
    return 'http://bustime.mta.info/api/siri/stop-monitoring.json?key=' + MTA_KEY + '&OperatorRef=MTA&MaximumStopVisits=1&MonitoringRef=' + stopId;
    
}