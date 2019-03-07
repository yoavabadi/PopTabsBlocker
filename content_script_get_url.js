chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request._urlHostRequest === "_urlHost"){
            sendResponse({_urlHost: window.location.host});
        }
});
