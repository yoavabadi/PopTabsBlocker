let addSite = document.getElementById("addSite");
let removeSite = document.getElementById("removeSite");
let siteAdded = document.getElementById("siteAdded");
let siteRemoved = document.getElementById("siteRemoved");

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
 * Adds the current URL's hostname to the watchlist
 * @param element
 */
addSite.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let _host = getHostName(tabs[0].url).toString();
        chrome.storage.sync.get("WATCH_LIST", function (res) {
            let hostsStorage = [];
            if(res["WATCH_LIST"]){
                hostsStorage = res["WATCH_LIST"];
            }
            hostsStorage.push(_host);
            let obj = {"WATCH_LIST": hostsStorage};
            //     Save it using the Chrome extension storage API.
            chrome.storage.sync.set(obj, function() {
                // Notify that we saved.
                siteAdded.style.display = "inline";
            });
        });
    });
};


/**
 * Removes the current URL's hostname from the watchlist
 * @param element
 */
removeSite.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let _host = getHostName(tabs[0].url).toString();
        chrome.storage.sync.get("WATCH_LIST", function (res) {
            let hostsStorage = [];
            if(res["WATCH_LIST"]){
                hostsStorage = res["WATCH_LIST"];
            }
            let idx = hostsStorage.indexOf(_host);
            if(idx !== -1){
                hostsStorage.splice(idx, 1);
            }
            let obj = {"WATCH_LIST": hostsStorage};
            // Save it using the Chrome extension storage API.
            chrome.storage.sync.set(obj, function() {
                // Notify that we saved.
                siteRemoved.style.display = "inline";
            });
        });
    });
};