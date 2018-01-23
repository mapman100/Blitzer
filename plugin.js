{
    "moduleId" : "mapman100/Blitzer",
    "title" : "Blitzer.de",
    "subtitle" : "www.blitzer.de",
    
    "backButton" : false,
    "enableGPS" : false,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://mm.blitzer.de",
    "shouldOverrideUrlLoading2" : "https://mm.blitzer.de",

    "loadUrl" : "http://mm.blitzer.de",
					    			
    "browserLaunchLink" : "http://mm.blitzer.de",
    
    "onPageFinishedLoadUrl" : "javascript:
var myCoords = { latitude:#lat#, longitude:#lng#, altitude:0, accuracy:10, altitudeAccuracy:10, heading:0, speed:0 };
var myPos = { coords:myCoords, timestamp: (new Date()) };
write_cookie('zoomlevel', #zoom#);
write_cookie('fest', 1);
write_cookie('traffic', 1);
handle_position_query(myPos);
foundGPS(1);
    "
}
