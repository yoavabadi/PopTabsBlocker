let addSite = document.getElementById("addSite");
let removeSite = document.getElementById("removeSite");


function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

// chrome.extension.getBackgroundPage().alert(getHostName(host));




addSite.onclick = function(element) {
    // add site to storage:
    // - load url of host to storage
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let _host = getHostName(tabs[0].url).toString();
        chrome.storage.sync.get("NO_POP", function (res) {
            let hostsStorage = [];
            if(res["NO_POP"]){
                hostsStorage = res["NO_POP"];
            }
            hostsStorage.push(_host);
            let obj = {"NO_POP": hostsStorage};
            //     Save it using the Chrome extension storage API.
            chrome.storage.sync.set(obj, function() {
            // Notify that we saved.
                    chrome.extension.getBackgroundPage().alert('host saved: ' + _host);
            });
        });
    });

    // - ask (via message) from content_script_get_url for window.location



    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {_urlHostRequest: "_urlHost"}, function(response) {
    //         alert("host is : " + response._urlHost);
    //     });
    // });

    // ///

};

removeSite.onclick = function(element) {
    // remove site from storage:
    // - ask (via message) from content_script_get_url for window.location
    // - if host url in storage, remove it
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let _host = getHostName(tabs[0].url).toString();
        chrome.storage.sync.get("NO_POP", function (res) {
            let hostsStorage = [];
            if(res["NO_POP"]){
                hostsStorage = res["NO_POP"];
            }
            let idx = hostsStorage.indexOf(_host);
            if(idx !== -1){
                hostsStorage.splice(idx, 1);
            }
            let obj = {"NO_POP": hostsStorage};
            //     Save it using the Chrome extension storage API.
            chrome.storage.sync.set(obj, function() {
            // Notify that we saved.
                    chrome.extension.getBackgroundPage().alert('host removed: ' + _host);
            });
        });
    });

};