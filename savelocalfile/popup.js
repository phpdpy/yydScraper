//console.log("This is a popup!")

var buttonStart = document.querySelector("#button_start");

var downloadFile = function(content) {
    var file = new File([content], "标题.txt", { type: "text/plain;charset=utf-8" })
    saveAs(file)
  }

if (buttonStart) {
    buttonStart.addEventListener("click", async () => {
        console.log("start hello world");
        downloadFile("文件内容")
    });
}