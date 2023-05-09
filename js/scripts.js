/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.addEventListener("DOMNodeInserted", function(event){
    if(event.target.localName=="iframe"){
      event.target.addEventListener("load", function(event2){
         // HERE YOU GO.
         event.target.contentDocument.querySelector("img[alt*='www.000webhost.com']").style.cssText = "display: none;";
      });
    }
});
