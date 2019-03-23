/**
 * Simple delay implementation, as alarm api doesn't allow multiple calls,
 * and setTimeOut is disabled in chrome extensions.
 */
function delayResponse(){
    for (var i = 0; i<100000; i++){
         for (var j = 0; j<10000; j++){
            Math.sqrt(Math.atan2(i, Math.cosh(i**j)));
        }
     }
}

/**
 * Simple get hostname implementation, with regex (from stackOverflow)
 * @param url
 * @returns {*}
 */
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

/**
 * Main workflow - if new open tab is detected, and it's parent tab in the watchlist,
 * it's host url is checked, and if it's not the same as the parent's - close the tab.
 */
chrome.tabs.onCreated.addListener(function(tab) {
    let openerId = tab.openerTabId;
    var tabUrl = tab.url;
    chrome.tabs.get(openerId, function(parentTab) {
        let parentUrlBase = getHostName(parentTab.url).toString();
        delayResponse();
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            let tabUrlBase = getHostName(tabs[0].url).toString();
            chrome.storage.sync.get("WATCH_LIST", function(result) {
                if(result["WATCH_LIST"].includes(parentUrlBase)){
                    if((tabUrlBase !== parentUrlBase) || (getHostName(tabUrl).toString() !== parentUrlBase) ||
                        tabUrl.toString().endsWith("png")){
                         chrome.tabs.remove(tab.id, function() { });
                    }
                }
            });
        });

    });
});