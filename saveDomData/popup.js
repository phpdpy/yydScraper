//console.log("This is a popup!")

var buttonStart = document.querySelector("#button_start");

var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?sse\.com\.cn/;
// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

if (buttonStart) {
    buttonStart.addEventListener("click", async () => {

        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            if (urlRegex.test(tabs[0].url)) {
                console.log(tabs[0]);
                // ...if it matches, send a message specifying a callback too
                chrome.tabs.sendMessage(tabs[0].id, { text: 'report_back' }, doStuffWithDom);
            }
        });

        console.log("start hello world");
    });
}
