var addSite = document.getElementById("addSite");

addSite.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'alert(document.referrer);'});
    });
};