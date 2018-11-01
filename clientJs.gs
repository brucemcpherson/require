/**
 * this is stuff I only want to run on the client, but I'll manage it with the apps script IDE
 */
function doTheClientWork () {
  'use strict';
  
  // i'll call getUniqueString, which is shared between both client and server
  document.getElementById("client").innerHTML += generateUniqueString();
  
  
  // and we'll run the same thing server side
  google.script.run
    .withSuccessHandler( function (data) {
      document.getElementById("server").innerHTML += data;
    })
    .withFailureHandler ( function (error) {
      document.getElementById("server").innerHTML += error;
    })
    .generateUniqueString();
  
}

