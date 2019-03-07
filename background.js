chrome.runtime.onInstalled.addListener(function() {


});

chrome.windows.onCreated.addListener(function(elem) {

});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {



});
//
// let _url;
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if(request._url){
//         _url = request._url;
//     }
// });