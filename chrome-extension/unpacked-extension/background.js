chrome.extension.onConnect.addListener(function(port) {
    console.assert(port.name == "screenshot");
    port.onMessage.addListener(function(msg) {
        if (msg.request == "screenshot"){
            chrome.tabs.captureVisibleTab(null,{format:"png"},function(img) {
                //post message only after call back return with Data URL
                port.postMessage(img);
            });
        }
    });
});