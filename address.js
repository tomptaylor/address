/**
* @param context {WebtaskContext}
*/
var fetchit = require('node-fetch');
module.exports = function(context, cb) {
  console.log(context.query);
  var theurl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  theurl += context.query.latlng;
  theurl += '&API=' + context.secrets.MAP_API;
  console.log(theurl);
  fetchit(theurl)
  .then(  res => res.json()).then(data => {
    cb(null, data);
  });
};