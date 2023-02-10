var buttonStart = document.querySelector("#button_start");
var buttonSearch = document.querySelector("#button_search");

function inputCode(){
    var input = document.querySelector("#inputCode");
    input.value="600519";
}
function injectTheScriptChangeInput() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: inputCode
      }).then(() => console.log("script injected on target frames"));
    });
  }
if (buttonStart) {
    buttonStart.addEventListener("click", async () => {
        injectTheScriptChangeInput();
        console.log("start hello world");
    });
}

function clickSearch(){
    var searchbtn = document.querySelector(".bi-search");
    searchbtn.click();
}
function injectTheScriptClickSearch() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: clickSearch
      }).then(() => console.log("script injected on target frames"));
    });
  }
  
if (buttonSearch) {
    buttonSearch.addEventListener("click", async () => {
        injectTheScriptClickSearch();
        console.log("start hello world");
    });
}
