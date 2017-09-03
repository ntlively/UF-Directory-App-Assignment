'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var listingData;
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri, {
  useMongoClient: true
});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('listings.json', 'utf8', function(err, data) {
  if(err){
    throw err;
  }else{
    listingData = JSON.parse(data);
  }

  

  //console.log(listingData.entries[0].name);
  var tempArray = listingData.entries;

  for(var i=0; i<listingData.entries.length;i++){
    var tempCode;
    var tempName;
    var tempLatitude;
    var tempLongitude;
    var tempAddress;

// Code Check
    if(listingData.entries[i].code != undefined){
      tempCode = listingData.entries[i].code;
    }else{
      tempCode = "Unknown";
    }
// Name Check
    if(listingData.entries[i].name != undefined){
      tempName = listingData.entries[i].name;
    }else{
      tempName = "Unknown";
    }
// Address Check
    if(listingData.entries[i].address != undefined){
      tempName = listingData.entries[i].address;
    }else{
      tempName = "Unknown";
    }
// Coordinates Check
    if(listingData.entries[i].coordinates != undefined){
      tempLatitude = listingData.entries[i].coordinates.latitude;
      tempLongitude = listingData.entries[i].coordinates.longitude;
    }else{
      tempLatitude = "Unknown";
      tempLongitude = "Unknown";
    }

    var tempListing = new Listing({
      code: tempCode, 
      name: tempName, 
      coordinates: {
          latitude: tempLatitude, 
          longitude: tempLongitude
      }, 
      address: tempAddress
    });

    tempListing.save(function(err) {
      if (err) throw err;

      console.log('Data saved to database successfully!');
    });

    tempListing = undefined;
    //console.log(tempListing);
  }

  mongoose.disconnect();
});




/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */