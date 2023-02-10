//这个文件需要上传到目标网站上
document.body.addEventListener("mockclick", (t => {
    console.log(t);
    var e = t.detail;
    console.log(e);
    var nextButton = document.querySelector(".next a");
    // var c = new MouseEvent("click", {
    //     view: window,
    //     bubbles: true
    // });
    // nextButton.dispatchEvent(c)
    nextButton.click()
}));
console.log("add mockclick");