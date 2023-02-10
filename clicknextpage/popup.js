function injectTheScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['ttt.js']
    }).then(() => console.log("script injected on target frames"));
  });
}

var buttonStart = document.querySelector("#button_start");

if (buttonStart) {
  buttonStart.addEventListener("click", async () => {
    console.log("click");
    injectTheScript();
  });
}