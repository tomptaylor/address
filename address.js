/**
* @param context {WebtaskContext}
* ?latlng=39.559539,-104.777031
* ?location=-104.777031,39.559539

*/
var fetchit = require('node-fetch');
//var axios = require('axios');

module.exports = function(context, cb) {
  console.log(context.data.location);  
  var theurl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
theurl = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&'
  theurl += context.body_raw.location;
//  theurl += '&API=' + context.secrets.MAP_API;
  console.log(theurl);
 fetchit(theurl)
  .then(  res => res.json())
  .then(data => { cb(null, data);})
  .catch((error) => console.error(error));
//
// axios.get(theurl)
//   .then(function (response) {
//     console.dir(response.data.results[0]);
//     cb(null, response.data.results[0])
//   })
//   .catch(function (error) {
//     console.log('error' + error);
//     cb(error, null)

//   });
};