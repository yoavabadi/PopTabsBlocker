// alert(window.location.href.toString());

// chrome.runtime.sendMessage(
//     // payload for the extension to handle
//     {site: (window.location.href).toString(),
//     host: (window.location.hostname).toString()},
//     function(response) {
//         // Do something
//   alert(response.farewell);
// });


// window.open = function (open) {
//     return function (url, name, features) {
//         // set name if missing here
//         name = name || "default_window_name";
//         console.log("open window: " +url + "from: "+(window.location.href).toString());
//         return open.call(window, url, name, features);
//     };
// }(window.open);
