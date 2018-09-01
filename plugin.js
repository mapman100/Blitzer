{
  "moduleId" : "mapman100/Blitzer",
  "title" : "Blitzer",
  "subtitle" : "Blitzer from blitzer.de",

  "backButton" : false,
  "enableGPS" : false,
  "zoomControl" : false,
  "screenLockRot" : false,
  "reload" : false,

  "shouldOverrideUrlLoading1" : "https://map.atudo.com",
  "shouldOverrideUrlLoading2" : "http://map.atudo.com/",

  "browserLaunchLink" : "https://map.atudo.com",
  "userAgent" : "",

  "loadDataWithBaseUrl1" : "https://map.atudo.com/v3/?geoloc=0",
  "loadDataWithBaseUrl3" : "text/html",
  "loadDataWithBaseUrl4" : "utf-8",
  "loadDataWithBaseUrl5" : null,

  "loadDataWithBaseUrl2" :
  "
  <!DOCTYPE html>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>
  <link rel='stylesheet' href='https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css'>
  <script src='https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js'></script>

  <script type='text/javascript'>
  window.loadPage = function (url) {
  alert('start replacing ...');
  $.get(url, function(page) {

  newPage = page.replace('lat_global = 51.163361;', 'lat_global = #lat#');
  newPage = newPage.replace('lng_global = 10.447683;', 'lng_global = #lng# ');

  var newDoc = document.open();
  newDoc.write(newPage);
  newDoc.close();

  alert(newPage);

});
};
</script>

<script>
loadPage( 'https://map.atudo.com/v3/?geoloc=0');
</script>
",

"onPageFinishedLoadUrl" : "javascript:
setTimeout(function() { map.setZoom(#zoom#); }, 1000);"

}
