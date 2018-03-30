var port = chrome.runtime.connect(chrome.runtime.id);
port.onMessage.addListener(function (message) {
    message.namespace = 'fm.icelink.webrtc';
    window.postMessage(message, '*');

    message.namespace = 'fm.icelink.chrome';
    window.postMessage(message, '*');
});

window.addEventListener('message', function(event) {
    if (event.source == window) {
        var message = event.data;
        if (message.namespace && message.namespace == 'fm.icelink.webrtc' || message.namespace == 'fm.icelink.chrome') {
            port.postMessage(message);
        }
    }
});

window.postMessage({
    namespace: 'fm.icelink.webrtc',
    type: 'active'
}, '*');

window.postMessage({
    namespace: 'fm.icelink.chrome',
    type: 'active'
}, '*');