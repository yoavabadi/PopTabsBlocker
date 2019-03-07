let addSite = document.getElementById("addSite");
let removeSite = document.getElementById("removeSite");

addSite.onclick = function(element) {
    // add site to storage:
    // - ask (via message) from content_script_get_url for window.location
    // - load url of host to storage

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {_urlHostRequest: "_urlHost"}, function(response) {
            alert("host is : " + response._urlHost);
        });
    });

    // ///

};

removeSite.onclick = function(element) {
    // remove site from storage:
    // - ask (via message) from content_script_get_url for window.location
    // - if host url in storage, remove it

};