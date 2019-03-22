function delayResponse(){
    for (var i = 0; i<100000; i++){
         for (var j = 0; j<10000; j++){
            Math.sqrt(Math.atan2(i, Math.cosh(i**j)));
        }
     }
}

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

// function isNotAllowed(url, parentUrl){
//     if(url != parentUrl){
//         return false;
//     }
//     else if(url.endsWith("png")){
//         return false;
//     }
//     return true;
// }


chrome.tabs.onCreated.addListener(function(tab) {
    let openerId = tab.openerTabId;
    var tabUrl = tab.url;
    chrome.tabs.get(openerId, function(parentTab) {
        let parentUrlBase = getHostName(parentTab.url).toString();
        delayResponse();
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            let tabUrlBase = getHostName(tabs[0].url).toString();
            chrome.storage.sync.get("NO_POP", function(result) {
                if(result["WATCH_LIST"].includes(parentUrlBase)){
                    if((tabUrlBase !== parentUrlBase) || (getHostName(tabUrl).toString() !== parentUrlBase) ||
                        tabUrl.toString().endsWith("png")){
                         chrome.tabs.remove(tab.id, function() { });
                    }
                }
            });



            // alert("url: " + getHostName(tabUrl.toString()) + ", parentUrl: " + getHostName(parentUrl.toString()));
        });

    });
});



// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       // the response payload
//       //  sender.tab.url
//
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting === "hello") {
//         sendResponse({farewell: "goodbye"});
//     }
//   });