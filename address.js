/**
* @param context {WebtaskContext}
* ?latlng=39.559539,-104.777031
*/
var fetchit = require('node-fetch');
var axios = require('axios');

module.exports = function(context, cb) {
  console.log(context.query);
  var theurl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  theurl += context.query.latlng;
  theurl += '&API=' + context.secrets.MAP_API;
  console.log(theurl);
  // fetchit(theurl)
  // .then(  res => res.json())
  // .then(data => { cb(null, data);})
  // .catch((error) => console.error(error));
//
axios.get(theurl)
  .then(function (response) {
    console.dir(response.data.results[0]);
    cb(null, data)
  })
  .catch(function (error) {
    console.log(error);
  });
};